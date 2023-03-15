import React, {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider, Toolbar } from '@mui/material';

import AppHeader from "./Components/Scaffold/NavParts/AppHeader";
//import NavDrawer from "./Scaffold/NavDrawer.tsx";
import { scaffoldStyles } from "./Components/Scaffold/ScaffoldStyles";

import HomePage from "./Components/Scaffold/HomePage.tsx";
import UserLogin from "./Components/Users/UserLogin.tsx";
import UsersPage from "./Components/Users/UsersPage.tsx";
import UserEdit from "./Components/Users/UserEdit.tsx";
import UserNew from "./Components/Users/UserNew.tsx";
import AgencyPage from "./Components/Agency/AgencyPage.tsx";
import ProductPage from "./Components/Product/ProductPage.tsx";
import InsurerPage from "./Components/Insurer/InsurerPage.tsx";
import InsurerView from "./Components/Insurer/InsurerView.tsx";
import InsurerNew from "./Components/Insurer/InsurerNew.tsx";
import PolicyPage from "./Components/Policy/PolicyPage.tsx";
import PolicyView from "./Components/Policy/PolicyView.tsx";
import PolicyNew from "./Components/Policy/PolicyNew.tsx";

import UserNewFormik from "./Components/Users/UserNew.tsx"

import MailingAddressPage from "./Components/MailingAddress/MailingAddressPage.tsx";
import MailingAddressCardGrid from "./Components/MailingAddress/MailingAddressCardGrid";
import MailingAddressForm from "./Components/MailingAddress/MailingAddressForm.tsx";

import { MGATheme } from "./Theme/MGATheme";
import { AuthenticationContext } from "./Components/Scaffold/context/AuthenticationContext";



function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={MGATheme}>
          <AuthenticationContext.Provider
            value = {{
              isUserAuthenticated : true,
              userName : 'Able',
              userRole : 'Admin',
              userEmail : 'able@baker.com',
              userImage : null,
              userCreator : 'able@baker.com',
              userToken : null
            }}
          >
            <main style={scaffoldStyles.content}>
              
              <AppHeader />
              
              {/* Added empty Toolbar to push down content to avoid display 'behind' appbar */}
              <Toolbar /> 
              
              <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/users"} element={<UsersPage />} />
                <Route path={"/users/signup"} element={<UserNew />} />
                <Route path={"/users/new"} element={<UserNew />} />
                <Route path={"/users/:userId"} element={<UserEdit />} />
                <Route path={"/agencies"} element={<AgencyPage />} />
                <Route path={"/insurers"} element={<InsurerPage />} />
                <Route path={"/insurers/view/:insurerId"} element={<InsurerView />} />
                <Route path={"/insurers/new"} element={<InsurerNew />} />
                <Route path={"/products"} element={<ProductPage />} />
                <Route path={"/policies"} element={<PolicyPage />} />        
                <Route path={"/policies/new"} element={<PolicyNew />} />
                <Route path={"/policies/view/:policyId"} element={<PolicyView />} />
                <Route path={"/login"} element={<UserLogin />} />
                <Route path={"/signup"} element={<UserNew />} />
                <Route path={"/mailing" } element={<MailingAddressPage />} />
                <Route path={"/mailingaddressform/"} element={<MailingAddressForm />} />
                <Route path={"/mailingaddresscardgrid/"} element={<MailingAddressCardGrid />} />
              </Routes>
            </main>
          </AuthenticationContext.Provider>
        </ThemeProvider>
      </BrowserRouter> 
  );
}

export default App;
