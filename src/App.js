import React, {BrowserRouter, Routes, Route} from "react-router-dom";
import { Toolbar } from '@mui/material';

import AppHeader from "./Scaffold/AppHeader";
import NavDrawer from "./Scaffold/NavDrawer.tsx";
import HomePage from "./Components/HomePage.tsx";
import Insurer from "./Components/Insurer.tsx";
import { scaffoldStyles } from "./Scaffold/ScaffoldStyles";

function App() {
  return (
      <BrowserRouter>
        <AppHeader />
        <NavDrawer />  
        <main style={scaffoldStyles.content}>
          <Toolbar />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/insurer"} element={<Insurer />} />
          </Routes>
        </main>
      </BrowserRouter> 
  );
}

export default App;
