import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './components/author/Register.jsx';
import LogIn from './components/author/LogIn.jsx';
import AuthProvider from './components/poviders/AuthProvider.jsx';
import Home from './components/home/Home.jsx';
import Blog from './components/blog/Blog.jsx';
import AllToy from './components/allToy/AllToy.jsx';
import MyToy from './components/myToy/MyToy.jsx';
import AddToy from './components/addToy/AddToy.jsx';
import PrivetRoute from './components/router/PrivetRoute.jsx';
import ToyDetail from './components/catagoryTab/ToyDetail.jsx';
import EditToy from './components/editPage/EditToy.jsx';
import ToyDetails from './components/catagoryTab/ToyDetails.jsx';
import Error from './components/error/Error.jsx';
// import ToyDetails from './components/catagoryTab/ToyDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      //   loader:()=> fetch(`https://bd-chef-data-nahid-nh14.vercel.app/data`)
      },

      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element: <LogIn></LogIn>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/toyDetails/:id',
        element:<PrivetRoute><ToyDetail></ToyDetail></PrivetRoute>,
        loader:({params})=> fetch(`https://children-toy-server.vercel.app/toyDetails/${params.id}`)
      },
      {
        path:'/alltoy/toyDetail/:id',
        element:<ToyDetails></ToyDetails>,
        loader:({params})=> fetch(`https://children-toy-server.vercel.app/alltoy/toyDetail/${params.id}`)
      },
      {
        path:'/alltoy',
        element:<AllToy></AllToy>,
        loader:()=> fetch(`https://children-toy-server.vercel.app/alltoys`)
      },
      {
        path:'/mytoy',
        element:<MyToy></MyToy>
      },
      {
        path:'/addtoy',
        element:<PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path:'/mytoy/edittoy/:id',
        element:<EditToy></EditToy>,
        loader:({params})=> fetch(`https://children-toy-server.vercel.app/mytoy/edittoy/${params.id}`)
      }

    ]
  },

  {
    path:'*',
    element:<Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
);

