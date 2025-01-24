import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticleList from './pages/ArticleList';
const routes = [
  {  
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/list',
    element: <ArticleList/>
  }
]

const router = createBrowserRouter(routes)

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;