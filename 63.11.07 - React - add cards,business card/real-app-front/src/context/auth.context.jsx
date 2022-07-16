import { useState } from "react";
import { useContext, createContext } from "react";
import usersService from "../services/usersService";

export const authContext = createContext(null);
authContext.displayName = "auth-context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersService.getUser());

  const refreshUser = () => {
    setUser(usersService.getUser());
  };

  const createUser = (user) => {
    return usersService.createUser(user);
  };

  const login = async (credentials) => {
    const response = await usersService.loginUser(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider value={{ createUser, login, logout, user }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
