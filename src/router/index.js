import Layout from "@/pages/Layout"
import New from "@/pages/New"
import Year from "@/pages/Year"
import Mouth from "@/pages/Mouth"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'year',
        element:<Year/>
      },
      {
        path:'mouth',
        element:<Mouth/>
      }
    ]
  },
  {
    path:'/new',
    element:<New/>
  }
])

export default router