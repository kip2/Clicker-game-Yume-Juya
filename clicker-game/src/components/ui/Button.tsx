import "./Button.css"

type ButtonProps = {
    text: string
    onButtonClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text , onButtonClick }) => {
    return(
        <>
            <button 
                className="button-layout"
                onClick={onButtonClick}
            >
                { text }
            </button>
        </>
    )
}

export default Button