import React, {BrowserRouter, Routes, Route} from "react-router-dom";
import { ThemeProvider, Toolbar } from '@mui/material';

import { MGATheme } from "./Theme/MGATheme";
import { AuthenticationContext } from "./Components/Scaffold/context/AuthenticationContext";
import { USERS }  from "./Components/Scaffold/MGAValues";
import AppHeader from "./Components/Scaffold/NavParts/AppHeader";
import { scaffoldStyles } from "./Components/Scaffold/ScaffoldStyles";

import HomePage from "./Components/Scaffold/HomePage.tsx";

import UserLogin from "./Components/Users/UserLogin.tsx";
import UsersPage from "./Components/Users/UsersPage.tsx";
import UserEdit from "./Components/Users/UserEdit.tsx";
import UserNew from "./Components/Users/UserNew.tsx";

import AgencyPage from "./Components/Agency/AgencyPage.tsx";
import AgencyEdit from "./Components/Agency/AgencyEdit.tsx";

import InsurerPage from "./Components/Insurer/InsurersPage.tsx";
import InsurerEdit from "./Components/Insurer/InsurerEdit.tsx";
import InsurerNew from "./Components/Insurer/InsurerNew.tsx";

import ProductPage from "./Components/Product/ProductPage.tsx";

import PolicyPage from "./Components/Policy/PolicyPage.tsx";
import PolicyNew from "./Components/Policy/PolicyNew.tsx";
import PolicyEdit from "./Components/Policy/PolicyEdit.tsx";

//import MailingAddressItem from "./Components/MailingAddress/MailingAddressItemRHF";
import MailingAddressItem from "./Components/MailingAddress/MailingAddressItem";

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={MGATheme}>
          <AuthenticationContext.Provider
            value = {{
              user : USERS[0],
              isUserAuthenticated : true,
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
                <Route path={"/agencies/:agencyId"} element={<AgencyEdit />} />

                <Route path={"/insurers"} element={<InsurerPage />} />
                <Route path={"/insurers/:insurerId"} element={<InsurerEdit />} />
                <Route path={"/insurers/new"} element={<InsurerNew />} />
                
                <Route path={"/products"} element={<ProductPage />} />
                
                <Route path={"/policies"} element={<PolicyPage />} />        
                <Route path={"/policies/new"} element={<PolicyNew />} />
                <Route path={"/policies/:policyId"} element={<PolicyEdit />} />

                <Route path={"/login"} element={<UserLogin />} />
                <Route path={"/signup"} element={<UserNew />} />

                <Route path={"/mailingaddress"} element={<MailingAddressItem />} />

              </Routes>
            </main>
          </AuthenticationContext.Provider>
        </ThemeProvider>
      </BrowserRouter> 
  );
}

export default App;
