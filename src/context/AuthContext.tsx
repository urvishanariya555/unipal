/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Children } from "../interface/ContextInterface";

interface User {
  [key: string]: string;
}

interface AuthInterface {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthInterface>({
  user: null,
  login: () => undefined,
  logout: () => undefined,
});

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const login = async (data: User) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
    // navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
