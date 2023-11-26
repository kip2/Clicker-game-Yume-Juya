import "./Button.css"

type ButtonProps = {
    text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return(
        <>
            <button className="button-layout">
                { text }
            </button>
        </>
    )
}

export default Button