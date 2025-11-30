import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
"react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import Root from './layout/Root.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Game from './component/Game.jsx';
import Register from './component/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Details from './component/Details.jsx';
import PrivateRout from './component/PrivateRout.jsx';
import Profile from './component/Profile.jsx';
import ForgetPassword from './component/ForgetPassword.jsx';
import About from './component/About.jsx';
import Eror from './component/Eror.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "game",
        Component: Game
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "details/:id",
        element: (<PrivateRout>
          <Details></Details>
        </PrivateRout>),
        loader: () => fetch("/detailsapk.json"),
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword
      },
      {
        path: "/about",
        Component: About
      },
       {
        path: "/*",
        Component: Eror
      }


    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
