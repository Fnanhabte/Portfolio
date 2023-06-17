import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import About from './pages/About';
import Projects from './pages/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: '/about',
    element: <About />
  },
  {
    path: '/project',
    element: <Projects />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
