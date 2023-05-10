import {ACTIONS_CREATORS} from '../actions.js';
import UserServiceFactory from "../../../../core/model/service/userService";

function async_authorize() {
    return (dispatch,getState)=>{
        (async ()=>{
            console.log("src/vm/redux/impl/async.js")
            // const login = getState().login
            // const password = getState().password
            // Можно делать через ДТО объект
            const jsonData = _getAuthInfo(getState().login, getState().password)
            console.log(jsonData, "LOL")
            const userService = UserServiceFactory.createInstance();
            userService.signIn(jsonData)
                .then(() => {
                dispatch(ACTIONS_CREATORS.AUTHORIZE_USER(true));
            })
                .catch(() => {
                    dispatch(ACTIONS_CREATORS.AUTHORIZE_USER(false));
                })
        })();
    };
};


function _getAuthInfo(login, password) {
    let jsonAuthInfo = {
        "login": login,
        "password": password
    };

    return jsonAuthInfo;
}

export {async_authorize}