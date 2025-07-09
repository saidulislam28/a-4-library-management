import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import {
  useBorrowBookMutation,
  useGetSingleBookQuery,
} from "../../services/baseApi";
import { toast } from "react-toastify";

const BorrowBookForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetSingleBookQuery(bookId);
  const [borrowBookFn, { data: borrowData, error }] = useBorrowBookMutation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  // console.log(bookId);

  const onSubmit = async (data) => {
    const payload = {
      book: bookId,
      quantity: data?.quantity,
      dueDate: data?.dueDate,
    };

    const response = await borrowBookFn(payload);
    if (response?.data?.success) {
      reset();
      navigate("/borrow-summary");
      return toast.success(response?.data?.message);
    }

    toast.error(response?.error?.data?.message);
  };

  return (
    <div className="min-h-[670px]">
      <h2 className="text-center font-semibold text-4xl">
        Book Name: {data?.data?.title}
      </h2>
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg  shadow-sm border border-gray-200 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Quantity
            </label>
            <input
              type="number"
              defaultValue=""
              {...register("quantity")}
              className="w-full px-3 py-2 mb-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due Date
            </label>
            <input
              type="date"
              defaultValue=""
              {...register("dueDate")}
              className="w-full px-3 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <input
            className="mt-5 border w-full py-2 font-bold bg-amber-500 text-white rounded-2xl hover:bg-amber-400 cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default BorrowBookForm;
