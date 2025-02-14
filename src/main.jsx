import './index.css';
import Home from './Pages/Home';
import { StrictMode } from 'react';
import ErrorPage from './Pages/Error';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from './components/Details';
import ListedBook from './Pages/ListedBook';


const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch('../public/Data/BookData.json'),
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/details/:bookId",
    loader: () => fetch('../public/Data/BookData.json').then(res => res.json()),
    element: <Details></Details>,
  },
  {
    path: "/ListedBooks",
    loader: () => fetch('../public/Data/BookData.json').then(res => res.json()),
    element: <ListedBook></ListedBook>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
