import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Children {
    children?: ReactNode;
}

export interface AppContextInterface {
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}