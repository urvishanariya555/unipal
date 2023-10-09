import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AuthContext } from "../context/AuthContext";

export const useAppContext = () => useContext(AppContext);

export const useAuth = () => useContext(AuthContext);