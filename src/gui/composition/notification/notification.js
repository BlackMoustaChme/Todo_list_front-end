import React from "react";
import Button from "../../component/button/button";
import Message from "../../component/message/message";

function Notification ({buttonName, onButtonClick, message, senderName}){

    return (
        <fieldset>
            <Message name={senderName} message={message}></Message>
            <Button name={buttonName} onClick={onButtonClick}></Button>
        </fieldset>
    )

}

export default Notification