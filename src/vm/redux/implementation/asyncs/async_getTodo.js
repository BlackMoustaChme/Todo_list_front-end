import {ACTIONS_CREATORS} from '../actions.js';
import TodoServiceFactory from "../../../../core/model/service/todoService";

function async_getTodo() {
    return (dispatch,getState)=>{
        (async ()=>{
            // Можно делать через ДТО объект
            const todoService = TodoServiceFactory.createInstance();
            todoService.getTodos()
                .then((array) => {
                    if(array !== null) {
                        console.log("src/vm/redux/implementation/asyncs/async_getTodo.js")
                        console.log(array)
                        dispatch(ACTIONS_CREATORS.GET_TODO(array));
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

export default async_getTodo