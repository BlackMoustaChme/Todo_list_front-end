import {ACTIONS_CREATORS} from '../actions.js';
import TodoServiceFactory from "../../../../core/model/service/todoService";

function async_postTodo() {
    return (dispatch, getState)=>{
        (async ()=>{
            // Можно делать через ДТО объект
            const date = new Date().toLocaleDateString()
            const jsonData = _getTodoInfo(getState().newTodoTitle, date,
                getState().newTodoText, false)
            const todoService = TodoServiceFactory.createInstance();
            todoService.postTodo(jsonData)
                .then((array) => {
                    if(array !== null) {
                        console.log("src/vm/redux/implementation/asyncs/async_postTodo.js")
                        console.log(array)
                        // dispatch(ACTIONS_CREATORS.POST_NEW_TODO(array));
                    }
                    else {
                        dispatch(ACTIONS_CREATORS.AUTHORIZE_USER(false));
                    }
                })
                .catch(() => {
                    console.log("CATCH")
                    dispatch(ACTIONS_CREATORS.POST_NEW_TODO([]));
                })
        })();
    };

}

function _getTodoInfo(title, creationDate, text, check) {
    let jsonTodoInfo = {
        "title": title,
        "creationDate": creationDate,
        "text": text,
        "check": check
    };

    return jsonTodoInfo;
}

export default async_postTodo