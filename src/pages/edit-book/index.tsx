import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../services/baseApi";

export default function EditBook() {
  // api https://library-api-lilac.vercel.app/api/books/id
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  const [updateBook, { data: updateData }] = useUpdateBookMutation();
  const bookData = data?.data;
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: "",
    available: false,
  });

  console.log("id", id);
  console.log("dataaaaa>>>>", data?.data);

  if (isLoading) {
    <div>loading ...................</div>;
  }

  useEffect(() => {
    if (bookData) {
      setFormData({
        title: bookData.title || "",
        author: bookData.author || "",
        genre: bookData.genre || "",
        isbn: bookData.isbn || "",
        description: bookData.description || "",
        copies: bookData.copies || "",
        available: bookData.available || false,
      });
    }
  }, [bookData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Convert copies to number if it's not empty
    const submissionData = {
      ...formData,
      copies: formData.copies ? parseInt(formData.copies) : 0,
      id,
    };

    const response = await updateBook(submissionData);
    if (response.data.success) {
      console.log("Form submitted with data:", response);
      alert("Book created successfully! Check console for form data.");
      setFormData({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: "",
        available: false,
      });
      navigate("/books");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Update Book
      </h2>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={bookData?.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author *
          </label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={bookData?.author}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Genre *
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            defaultValue={bookData?.genre}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter genre"
          />
        </div>

        <div>
          <label
            htmlFor="isbn"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            ISBN *
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            defaultValue={bookData?.isbn}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter ISBN"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={bookData?.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Enter book description"
          />
        </div>

        <div>
          <label
            htmlFor="copies"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Copies *
          </label>
          <input
            type="number"
            id="copies"
            name="copies"
            defaultValue={bookData?.copies}
            onChange={handleChange}
            required
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter number of copies"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={formData?.available ?? false}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 cursor-pointer border-gray-300 rounded"
          />
          <label
            htmlFor="available"
            className="ml-2 block text-sm text-gray-700"
          >
            Available
          </label>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Update Book
        </button>
      </div>
    </div>
  );
}
