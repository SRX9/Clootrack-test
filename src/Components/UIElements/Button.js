const Button = (props) => {
    return <button onClick={props.onClick}
        className=
        {`w-10 ml-1 mr-1 h-10 ${props.colour} ${props.isRounded && "rounded-full"} hover:${props.hoverColour}
        active:shadow-lg mouse shadow transition ease-in pb-1 duration-200 text-center text-xl focus:outline-none`}>
        {props.children}
    </button>
}

export default Button;