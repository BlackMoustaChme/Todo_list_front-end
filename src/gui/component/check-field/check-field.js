import React from "react";

function CheckField({...props}) {

    return (
            <input {...props} type="checkbox"></input>
    )
}

export default CheckField