import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/Characters";
import Home from "../pages/Home";
import Root from "../Layout/Root";
import CharacterDetails from "../pages/CharacterDetails";
import Locations from "../pages/Locations";
import Episodes from "../pages/Episodes";
import EpisodeDetails from "../pages/EpisodeDetails";
import LocationDetails from "../pages/LocationDetails";

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
        path: '/episodes',
        element: <Episodes />
      },
      {
        path: '/episode/:id',
        element: <EpisodeDetails />
      },
      {
        path: '/locations',
        element: <Locations />
      },
      {
        path: '/location/:id',
        element: <LocationDetails />
      },
    ]
  }
]);

export default router;
