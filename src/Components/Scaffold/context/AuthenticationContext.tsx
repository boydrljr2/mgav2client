import { createContext } from 'react';

export const AuthenticationContext = createContext({
    isUserAuthenticated: false,
    userName: null,
    userRole: null,
    userEmail: null,
    userImage: null,
    userCreator: null,
    userToken: null,
    login: () => {},
    logout: () => {},
})