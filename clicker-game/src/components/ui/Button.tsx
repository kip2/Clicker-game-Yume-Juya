type ButtonProps = {
    text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    return(
        <>
            <button>{ text }</button>
        </>
    )
}

export default Button