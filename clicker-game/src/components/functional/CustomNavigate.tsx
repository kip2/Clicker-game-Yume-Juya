import { useNavigate } from "react-router-dom";


export function  useCustomNavigate() {
    const navigate = useNavigate()

    const navigateToTop = () => {
        navigate("/")
    }

    const navigateToPage = (path: string) => {
        navigate(path)
    }

    return { navigateToPage, navigateToTop }
}

