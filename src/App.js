import React, {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider, Toolbar } from '@mui/material';

import AppHeader from "./Scaffold/NavParts/AppHeader";
//import NavDrawer from "./Scaffold/NavDrawer.tsx";
import { scaffoldStyles } from "./Scaffold/ScaffoldStyles";

import HomePage from "./Components/HomePage.tsx";
import Login from "./Components/Authentication/Login.tsx";
import Register from "./Components/Authentication/Register.tsx";
import UsersPage from "./Components/Users/UsersPage.tsx";
import AgencyPage from "./Components/Agency/AgencyPage.tsx";
import ProductPage from "./Components/Product/ProductPage.tsx";
import InsurerPage from "./Components/Insurer/InsurerPage.tsx";
import PolicyPage from "./Components/Policy/PolicyPage.tsx";

import MailingAddressTable from "./Components/MailingAddress/MailingAddressTable.tsx";
import MailingAddressCardGrid from "./Components/MailingAddress/MailingAddressCardGrid";
import MailingAddressForm from "./Components/MailingAddress/MailingAddressForm.tsx";
import { MGATheme } from "./Theme/MGATheme";


function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={MGATheme}>
          <AppHeader />
          
          {/* 
          Removed NavDrawer for now since navigation is handled by the two menus in the AppBar 
          <NavDrawer />  
          */}

          <main style={scaffoldStyles.content}>
            {/*
              Added empty Toolbar to push down content to avoid display 'behind' appbar
            */}
            <Toolbar /> 
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/users"} element={<UsersPage />} />
              <Route path={"/users/new"} element={<Register />} />
              <Route path={"/agencies"} element={<AgencyPage />} />
              <Route path={"/insurers"} element={<InsurerPage />} />
              <Route path={"/products"} element={<ProductPage />} />
              <Route path={"/policies"} element={<PolicyPage />} />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<Register />} />
              <Route path={"/mailing" } element={<MailingAddressTable />} />
              <Route path={"/mailingaddressform/"} element={<MailingAddressForm />} />
              <Route path={"/mailingaddresscardgrid/"} element={<MailingAddressCardGrid />} />
            </Routes>
          </main>
        </ThemeProvider>
      </BrowserRouter> 
  );
}

export default App;
