import {ACTIONS_CREATORS} from '../actions.js';
import UserServiceFactory from "../../../../core/model/service/userService.mjs";

function async_register() {
    return (dispatch,getState)=>{
        (async ()=>{
            console.log("src/vm/redux/impl/async.js")
            // const login = getState().login
            // const password = getState().password
            const jsonData = _getRegistrationInfo(getState().login, getState().email, getState().password)
            console.log(jsonData, "LOL")
            const userService = UserServiceFactory.createInstance();
            userService.signUp(jsonData)
                .then(() => {
                    dispatch(ACTIONS_CREATORS.REGISTER_USER(true));
                })
                .catch(() => {
                    dispatch(ACTIONS_CREATORS.REGISTER_USER(false));
                })
        })();
    };
};


function _getRegistrationInfo(login, email, password) {
    let jsonRegistrationInfo = {
        "login": login,
        "password": password,
        "email": email,
    };

    return jsonRegistrationInfo;
}

export {async_register}