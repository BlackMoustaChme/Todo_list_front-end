import React from "react";

function TitleArea({maxLenght, text, ...props}) {

    return (
        <textarea maxLength={maxLenght} {...props} defaultValue={text}></textarea>
    )

}

export default TitleArea;