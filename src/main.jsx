import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import App from './App.jsx'
import './index.css'
import Root from './routes/root';
import ErrorPage from "./error-page";
import Sub, {loader as subLoader} from './routes/sub';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "subs/:subName",
    element: <Sub />,
    loader: subLoader
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
