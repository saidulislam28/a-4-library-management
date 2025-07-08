import { useState } from "react";
import { useCreateBooksMutation } from "../../services/baseApi";

export default function CreateBookForm() {
  //https://library-api-lilac.vercel.app/api/books

  const [createData, { data, isLoading, isError }] = useCreateBooksMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.title ||
      !formData.author ||
      !formData.genre ||
      !formData.isbn ||
      !formData.copies
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Convert copies to number if it's not empty
    const submissionData = {
      ...formData,
      copies: formData.copies ? Number(formData.copies) : 0,
    };

    const response = await createData(submissionData);
    if (response?.data?.success) {
      alert("Book Created Successfully");
      setFormData({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        description: "",
        copies: "",
        available: true,
      });
    }
    // alert("Book created successfully! Check console for form data.");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Create New Book
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
            value={formData.title}
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
            value={formData.author}
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
            value={formData.genre}
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
            value={formData.isbn}
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
            value={formData.description}
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
            value={formData.copies}
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
            checked={formData.available}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
          className="w-full bg-blue-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Create Book
        </button>
      </div>
    </div>
  );
}
