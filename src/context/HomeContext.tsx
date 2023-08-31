 import { ChildrenProps } from "@/components/layouts/types";
import { createContext, useContext } from "react";
import { useCallback, useEffect, SetStateAction, useState, Dispatch } from "react";

interface IHomeContext {
    prevScrollPosition: number;
    showBackground: boolean;
    setPrevScrollPosition: Dispatch<SetStateAction<number>>;
}


const HomeContext = createContext<IHomeContext>({
    prevScrollPosition: 0,
    showBackground: false,
    setPrevScrollPosition: () => { }
})

export const HomeProvider = ({ children }: ChildrenProps) => {
    const [prevScrollPosition, setPrevScrollPosition] = useState(0)
    const [showBackground, setShowBackground] = useState(false)


    const handleScrollDown = useCallback(() => {
        const currentScrollPosition = window.scrollY
        if (currentScrollPosition > 0) {
            setShowBackground(true)
        } else {
            setShowBackground(false)
        }
        setPrevScrollPosition(currentScrollPosition)
    }, [])


    useEffect(() => {
        window.addEventListener("scroll", handleScrollDown, { passive: true })

        return () => window.removeEventListener("scroll", handleScrollDown)
    }, [])


    return (
        <HomeContext.Provider
            value={{ showBackground, prevScrollPosition, setPrevScrollPosition }}
        >
            {children}
        </HomeContext.Provider>
    );



}
    export const useHomeContext = () => useContext(HomeContext)