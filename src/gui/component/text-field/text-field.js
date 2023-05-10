import React from "react";

function TextField({type, onChange, ...props}) {
    // function handleInput(){
    //
    // }
    return (
        <>
            <input {...props} type={type} onChange={onChange}></input>
        </>
    )
}

export default TextField;