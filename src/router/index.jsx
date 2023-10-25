import { createBrowserRouter } from "react-router-dom"
import Characters from "../pages/Characters"
import Home from "../pages/Home"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'characters',
        element: <Characters />
      },
    ]
  }
])

export default router