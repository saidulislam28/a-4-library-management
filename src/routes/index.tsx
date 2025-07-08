import { createBrowserRouter } from "react-router";
import Book from "../pages/books";
import Borrow from "../pages/borrow";
import CreateBook from "../pages/create-book";
import EditBook from "../pages/edit-book";
import App from "../App";
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
        path: "/borrow",
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
    ],
  },
]);
