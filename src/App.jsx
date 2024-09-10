import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLoaut from './layout/MainLoaut'
import Home from './pages/Home'
import Praduct from './pages/Praduct'
import Input from './pages/Input'
function App() {
  let router =createBrowserRouter([
    {
      path:"/",
      element:<MainLoaut/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/product",
          element:<Praduct/>
        },
        {
          path:"/card",
          element:<Input/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App