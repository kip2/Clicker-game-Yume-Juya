import "./Button.css"

type ButtonProps = {
    text: string
    color?: string | null
    onButtonClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text , color, onButtonClick }) => {
    return(
        <>
            <button 
                className={
                    color
                ?
                    "button-layout-purchase"
                :
                    "button-layout"
                }
                onClick={onButtonClick}
            >
                { text }
            </button>
        </>
    )
}

export default Button