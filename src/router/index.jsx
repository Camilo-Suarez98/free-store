import { createBrowserRouter } from "react-router-dom"
import Characters from "../pages/Characters"
import Home from "../pages/Home"
import Root from "../Layout/Root"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'characters',
        element: <Characters />
      },
    ]
  }
])

export default router