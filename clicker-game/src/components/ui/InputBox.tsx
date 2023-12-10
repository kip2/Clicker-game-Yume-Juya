import "./InputBox.css"

type InputBoxProps = {
    maxLength: number
    inputValue: string
    setInputValue:React.Dispatch<React.SetStateAction<string>>
}

function InputBox({ maxLength, inputValue, setInputValue }: InputBoxProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return(
        <>
            <input 
                className="input-box"
                type="text"
                maxLength={maxLength}
                value={inputValue}
                onChange={handleInputChange}
            >
            </input>
        </>
    )
}

export default InputBox