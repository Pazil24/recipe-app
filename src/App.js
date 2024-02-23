// import logo from './logo.svg';
// import './App.css';

import { Grid } from "@mui/material";
import Navbar from "./componenets/navbar";
import Recipes from "./pages/recipes";
// import Recipes from "./pages/recipes";

function App() {
  return (
    <>
    <Navbar/>
    <Recipes/>
    <Grid/>
    </>
  );
}

export default App;
