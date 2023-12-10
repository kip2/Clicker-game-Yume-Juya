import { createContext, useState } from "react";

type GameContextType = {
    gameClear: boolean
    setGameClear: (clear: boolean) => void
}

export const GameContext = createContext<GameContextType>({
    gameClear: false,
    setGameClear: () => {},
})

export const GameProvider = ({ children }: { children: React.ReactNode}) => {
    const [gameClear, setGameClear] = useState<boolean>(false)

    return (
        <GameContext.Provider value={{gameClear, setGameClear}}>
            {children}
        </GameContext.Provider>
    )
}