import { createContext, useState } from "react";
import { loadingLocalData } from "../functional/UserLocalData";

type UserDataContextType = {
    userData: UserData
    setUserData: (newUserData: UserData) => void
}

export const UserDataContext = createContext<UserDataContextType>({
    userData: loadingLocalData(),
    setUserData: () => {},
})

export const UserDataProvider = ({ children }: { children: React.ReactNode}) => {
    const [userData, setUserData] = useState<UserData>(loadingLocalData())

    return (
        <UserDataContext.Provider value={{userData, setUserData}}>
            {children}
        </UserDataContext.Provider>
    )
}