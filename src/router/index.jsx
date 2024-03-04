import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/Characters";
import Home from "../pages/Home";
import Root from "../Layout/Root";
import CharacterDetails from "../pages/CharacterDetails";

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
        path: '/characters',
        element: <Characters />
      },
      {
        path: '/character/:id',
        element: <CharacterDetails />
      },
    ]
  }
]);

export default router;
