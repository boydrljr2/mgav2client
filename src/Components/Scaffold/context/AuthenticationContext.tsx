import { createContext } from 'react';

export const AuthenticationContext = createContext({
    id                  : null,
    name                : null,
    email               : null,
    role                : null,
    image               : null,
    creatorName         : null,
    isUserAuthenticated : false,
    userToken           : null,
    login: () => {},
    logout: () => {},
})