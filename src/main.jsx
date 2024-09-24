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


import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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
        element:   <Products></Products>  ,
  
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
     
  </StrictMode>,
)
