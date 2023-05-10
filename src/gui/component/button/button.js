import React from "react";

function Button({name, onClick,...props}) {
    return(
        <button {...props} onClick={onClick}>{name}</button>
    )
}

export default Button;