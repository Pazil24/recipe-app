
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./componenets/navbar";
import { Recipe } from "./pages/recipe";
import Recipes from "./pages/recipes";


const theRouter = createBrowserRouter([
  {
    path: "/",
    element: <Recipes />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/recipes/:id",
    element: <Recipe />,
  },

]);
function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={theRouter} />
    </>
  );
}

export default App;
