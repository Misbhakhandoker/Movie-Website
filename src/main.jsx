import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Movie from "./components/partials/Movie.jsx";
import Moviedetails from "./components/partials/Moviedetails.jsx";
import Notfound from "./components/partials/Notfound.jsx";
import People from "./components/partials/Person.jsx";
import PersonDetails from "./components/partials/PersonDetails.jsx";
import Popular from "./components/partials/Popular.jsx";
import Trailer from "./components/partials/Trailer.jsx";
import Trending from "./components/partials/Trending.jsx";
import TvDetails from "./components/partials/TvDetails.jsx";
import Tvshows from "./components/partials/Tvshows.jsx";
import store from "./components/store/store.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/movie/details/:id",
    element: <Moviedetails />,
    children: [
      {
        path: "/movie/details/:id/trailer",
        element: <Trailer />,
      },
    ],
  },

  {
    path: "/tv",
    element: <Tvshows />,
  },
  {
    path: "/tv/details/:id",
    element: <TvDetails />,
    children: [
      {
        path: "/tv/details/:id/trailer",
        element: <Trailer />,
      },
    ],
  },
  {
    path: "/person",
    element: <People />,
  },
  {
    path: "/person/details/:id",
    element: <PersonDetails />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
