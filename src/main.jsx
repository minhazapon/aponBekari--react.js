import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import Create from './crud files/Create.jsx';
import Update from './crud files/Update.jsx';
import Products from './products file/Products.jsx';
import PrivateRoute from './firebase sign/PrivateRoute.jsx'


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Login from './firebase sign/Login.jsx';
import SignUp from './firebase sign/SignUp.jsx';
import AuthContext from './firebase sign/AuthContext.jsx';
import UserList from './crud files/UserList.jsx';

// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/addForm",
        element:  <Create></Create>  ,
      },
      {
        path: "/update/:id",
        element:  <Update></Update>  ,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path: "products",
        element: <PrivateRoute><Products></Products></PrivateRoute>  ,
  
      },
      {
        path: "login",
        element:  <Login></Login> ,
  
      },
      {
        path: "up",
        element:  <SignUp></SignUp> ,
  
      },
      {
        path: "list",
        element:  <UserList></UserList> ,
  
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthContext>
      <RouterProvider router={router} />
      </AuthContext>
    </QueryClientProvider>
     
  </StrictMode>,
)
