import {ACTIONS_CREATORS} from '../actions.js';
import NotificationServiceFactory from "../../../../core/model/service/notificationService.mjs";

function async_receiveMessage() {
    return (dispatch,getState)=>{
        (async ()=> {
            // Можно делать через ДТО объект

            console.log("src/vm/redux/implementation/asyncs/async_receiveMessage.js")
            const notificationService = NotificationServiceFactory.createInstance();
            notificationService.onopenNotifications();
            notificationService.receiveMessage((msg)=>{
                dispatch(ACTIONS_CREATORS.UPDATE_MESSAGE(msg))
            })
        })();
    };

}

export default async_receiveMessage