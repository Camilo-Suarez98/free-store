import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/Characters";
import Home from "../pages/Home";
import Root from "../Layout/Root";
import CharacterDetails from "../pages/CharacterDetails";
import Locations from "../pages/Locations";
import Episodes from "../pages/Episodes";

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
      {
        path: '/locations',
        element: <Locations />
      },
      {
        path: '/episodes',
        element: <Episodes />
      },
    ]
  }
]);

export default router;
