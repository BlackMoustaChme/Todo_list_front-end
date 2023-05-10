import React from "react";

function DescriptionArea({text, ...props}) {

    return(
        <textarea {...props} defaultValue={text}></textarea>
    )

}

export default DescriptionArea;