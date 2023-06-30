import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import About from './pages/About';
import Projects from './pages/Projects';
import PagenotFound from './pages/PagenotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Portfolio",
    element: <App/>,
  },

  {
    path: '/about',
    element: <About />
  },
  {
    path: '/project',
    element: <Projects />
  },
  {
    path: "*",
    element: <PagenotFound />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
