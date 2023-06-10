import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {useLoginDispatcher, usePasswordDispatcher, useIsAuthListener,
    useEmailDispatcher, useSignUpStatusDispatcher} from "../../../vm/redux/api.js";
import LabelTextField from "../../composition/label_text-field/label-text-field.js"
import Button from "../../component/button/button.js"
import ErrorSpan from "../../component/error-span/error-span";
// import * as events from "events";

function Registration(props) {

    const navigate = useNavigate();

    const isAuth = useIsAuthListener();
    console.log(isAuth)
    // const isLoginStatus = useIsLoginStatusListener();

    // const dispatch = useDispatch();

    const loginDispatcher = useLoginDispatcher();
    const passwordDispatcher = usePasswordDispatcher();
    const emailDispatcher = useEmailDispatcher();
    const signUpStatusDispatcher = useSignUpStatusDispatcher();

    useEffect(() => {
        if(isAuth){
            navigate('/');
        }
    }, [isAuth, navigate]);



    return (
        // <Provider store={Store}>
        <div>
            <LabelTextField name="Login" type='text' onChange={(event) => loginDispatcher(event.target.value)} />
            <br/>
            <br/>
            <LabelTextField name="Email" type='email' onChange={(event) => emailDispatcher(event.target.value)} />
            <br/>
            <br/>
            <LabelTextField name="Password" type='password' onChange={(event) => passwordDispatcher(event.target.value)} />
            <div>
                <Button name="Register" onClick={() => signUpStatusDispatcher()} />
            </div>
        </div>
        // </Provider>
    )
}

export default Registration;