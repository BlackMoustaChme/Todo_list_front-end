import React from "react";

function Label({name, ...props}) {
    return (
        <>
            <div {...props}>
                {name}
            </div>
        </>
    );
}

export default Label;