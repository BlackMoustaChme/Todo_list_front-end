import React from "react";
import Label from "../../component/label/label.js";
import TextField from "../../component/text-field/text-field.js";

function LabelTextField ({name, type, onChange,...props}){

    return (
        <>
            <Label {...props} name={name}></Label>
            <br/>
            <TextField {...props} type={type} onChange={onChange}></TextField>
        </>
    )
}

export default LabelTextField;