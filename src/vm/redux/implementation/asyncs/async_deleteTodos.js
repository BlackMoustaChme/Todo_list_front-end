import {ACTIONS_CREATORS} from '../actions.js';
import TodoServiceFactory from "../../../../core/model/service/todoService";
import {values} from "mobx";

function async_deleteTodos() {
    return (dispatch, getState)=>{
        (async ()=>{
            const data = _getIdsInfo(getState().selectedIds)
            console.log(data)
            const todoService = TodoServiceFactory.createInstance();
            todoService.deleteTodos(data)
                .then((array) => {
                    if(array !== null) {
                        console.log("src/vm/redux/implementation/asyncs/async_deleteTodo.js")
                        console.log(array)
                        dispatch(ACTIONS_CREATORS.DELETING_TODO(false))
                        // dispatch(ACTIONS_CREATORS.POST_NEW_TODO(array));
                    }
                    else {
                        dispatch(ACTIONS_CREATORS.AUTHORIZE_USER(false));
                    }
                })
                .catch(() => {
                    console.log("CATCH")
                    dispatch(ACTIONS_CREATORS.DELETE_TODOS());
                })
        })();
    };

}

function _getIdsInfo(selectedIds) {

    const massiveJsonIdsInfo = []

    selectedIds.map((value) => massiveJsonIdsInfo.push({"id": value}))

    return massiveJsonIdsInfo;
}

export default async_deleteTodos