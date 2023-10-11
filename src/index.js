import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import About from './components/About';

import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import UserDetails from './components/UserDetails';

const MainRoot = () =>{

  return(
    <>
    <Header/>
    <div className='container'>
      <Outlet/>
    </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainRoot/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/users/:anything",
        element:<UserDetails/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

