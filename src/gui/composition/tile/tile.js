import React from "react";
import Label from "../../component/label/label.js";
import CheckField from "../../component/check-field/check-field.js";
import DateText from "../../component/date-text/date-text.js";
import ShortDescription from "../../component/short-description/short-description";

function Tile({selectable, onSelectChange, date, defaultChecked, name, text, onCheck, ...props}) {


    return (
        <>
            {selectable === true && <CheckField onChange={onSelectChange}/>}
            <fieldset {...props}>
                <Label name={name}></Label>
                <DateText text={date}></DateText>
                <ShortDescription text={text}></ShortDescription>
                <CheckField defaultChecked={defaultChecked} onChange={onCheck}></CheckField>
            </fieldset>
        </>
    )
}

export default Tile