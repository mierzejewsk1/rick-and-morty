import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./layouts/MainNavigation/MainNavigation";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Episodes from "./pages/Episodes/Episodes";
import Locations from "./pages/Locations/Locations";
import MyWatchList from "./pages/MyWatchList/MyWatchList";
import Error from "./pages/Error/Error";
import { useAppSelector } from "./store";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme.tsx";

function App() {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/characters", element: <Characters /> },
        { path: "/episodes", element: <Episodes /> },
        { path: "/locations", element: <Locations /> },
        { path: "/my-watch-list", element: <MyWatchList /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
