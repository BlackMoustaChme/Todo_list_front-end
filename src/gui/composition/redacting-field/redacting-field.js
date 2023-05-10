import React from "react";
import TitleArea from "../../component/title-area/title-area";
import DescriptionArea from "../../component/description-area/description-area";

function RedactingField({onTextChange, onTitleChange, maxTitleLenght, titleText, descriptionText}) {

    return(
        <>
            <TitleArea maxLenght={maxTitleLenght} text={titleText} onChange={onTitleChange}></TitleArea>
            <br/>
            <DescriptionArea text={descriptionText} onChange={onTextChange}></DescriptionArea>
        </>

    )

}

export default RedactingField;