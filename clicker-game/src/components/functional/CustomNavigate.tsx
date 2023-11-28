import { useNavigate } from "react-router-dom";


export function  useCustomNavigate() {
    const navigate = useNavigate()

    const navigateToPage = (path: string) => {
        navigate(path)
    }

    return { navigateToPage }
}

