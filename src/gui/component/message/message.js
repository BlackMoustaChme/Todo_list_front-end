import React from "react";

function Message({name, message, ...props}) {

    return(
        <div {...props}>
            <h3>{name}</h3>
            <p>{message}</p>
        </div>
    )

}

export default Message