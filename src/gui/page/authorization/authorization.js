import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useLoginListener, useLoginDispatcher, usePasswordListener, usePasswordDispatcher, useIsAuthListener,
    useIsLoginStatusListener, useLoginStatusDispatcher} from "../../../vm/redux/api.js";
import LabelTextField from "../../composition/label_text-field/label-text-field.js"
import Button from "../../component/button/button.js"
import ErrorSpan from "../../component/error-span/error-span";
// import * as events from "events";

function Authorization(props) {

    const navigate = useNavigate();

    // const login = useSelector((state) => state.login);
    const login = useLoginListener();
    // const password = useSelector((state) => state.password);
    const password = usePasswordListener();
    console.log(login, password)

    const isLoginStatus = useIsLoginStatusListener();

    // const dispatch = useDispatch();

    const loginDispatcher = useLoginDispatcher();
    const passwordDispatcher = usePasswordDispatcher();
    const loginStatusDispatcher = useLoginStatusDispatcher();
    const isAuth = useIsAuthListener();

    useEffect(() => {
        if(isAuth){
            navigate('/main');
        }
    }, [isAuth, navigate]);

    return (
        // <Provider store={Store}>
        <div>
            {isLoginStatus === false && <><ErrorSpan color="red" text="Error! Incorrect data :("/><br/></>}
            <LabelTextField name="Login" type='text' value={login} onChange={(event) => loginDispatcher(event.target.value)} />
            <br/>
            <br/>
            <LabelTextField name="Password" type='password' value={password} onChange={(event) => passwordDispatcher(event.target.value)} />
            <br/>
            <div>
                <Button name="Log in" onClick={() => loginStatusDispatcher()} />
                <Button name="Registration" onClick={() => {navigate("/registration")}}></Button>
            </div>
        </div>
        // </Provider>
    )
}

export default Authorization;