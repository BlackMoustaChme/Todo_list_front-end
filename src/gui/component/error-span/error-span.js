import React from "react";

function ErrorSpan ({color, text, ...props}) {

    return (
        <span color={color} {...props}>{text}</span>
    )
}

export default ErrorSpan