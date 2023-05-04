


function handleClick(): void {
    console.log("click clicked")
}

const Button2 = () => {
    return (
        <button type="button" className="btn btn-success" onClick={handleClick}>Click Me</button>
    )
}

export default Button2