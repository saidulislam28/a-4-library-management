import { createBrowserRouter } from "react-router";
import Book from "../pages/books";
import Borrow from "../pages/borrow";
import CreateBook from "../pages/create-book";
import EditBook from "../pages/edit-book";
import App from "../App";
import BorrowBookForm from "../pages/borrow-book";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Book />,
      },
      {
        path: "/books",
        element: <Book />,
      },
      {
        path: "/borrow-summary",
        element: <Borrow />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/borrow/:bookId",
        element: <BorrowBookForm />,
      },
    ],
  },
]);
