import { createContext, useState } from "react";
import { AppContextInterface, Children } from "../interface/ContextInterface";

export const AppContext = createContext<AppContextInterface>({
    isLogin: false,
    setIsLogin: () => undefined,
})

const AppContextProvider = ({ children }: Children) => {

    const [isLogin, setIsLogin] = useState<boolean>(false)

    const value = {
        isLogin,
        setIsLogin
    }

    return (
        <>
            <AppContext.Provider value={value}>{children}</AppContext.Provider>
        </>
    )
}

export { AppContextProvider }
