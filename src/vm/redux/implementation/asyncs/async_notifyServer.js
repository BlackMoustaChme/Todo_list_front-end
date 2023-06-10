import {ACTIONS_CREATORS} from '../actions.js';
import NotificationServiceFactory from "../../../../core/model/service/notificationService.mjs";

function async_notifyServer() {
    return (dispatch,getState)=>{
        (async ()=> {
            // Можно делать через ДТО объект
            const notificationService = NotificationServiceFactory.createInstance();
            notificationService.getNumberOfCheckedTodos()
                .then((array) => {
                    if(array !== null) {
                        console.log("src/vm/redux/implementation/asyncs/async_notifyServer.js")
                        console.log(array)
                        dispatch(ACTIONS_CREATORS.NOTIFY_SERVER());
                    }
                    else {
                        dispatch(ACTIONS_CREATORS.AUTHORIZE_USER(false));
                    }
                })
                .catch(() => {
                    console.log("CATCH")
                    dispatch(ACTIONS_CREATORS.GET_TODO([]));
                })
        })();
    };

}

export default async_notifyServer