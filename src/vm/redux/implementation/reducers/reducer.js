import {ACTIONS_TYPES} from '../actions.js';
import UserServiceFactory from "../../../../core/model/service/userService.mjs";




console.log(localStorage.getItem('token'))

const initialState = {
    // ----------USER-----------
    login: '',
    password: '',
    email: '',
    isAuth: localStorage.getItem('token') != null ? true : false,
    isLoginStatus: null,
    // ----------USER------------
    // ----------MTODO------------
    todos:[],
    isBeingRedacted: null,
    isBeingCreated: null,
    isBeingDeleted: null,
    newTodoTitle:"",
    newTodoText:"",
    selectedIds:[],
    infoUpdated: null,
    // ----------MTODO------------
    messageReceived: false,
    message:""
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS_TYPES.UPDATE_LOGIN:
            console.log("ACTIONS_TYPES.UPDATE_LOGIN")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_PASSWORD:
            console.log("ACTIONS_TYPES.UPDATE_PASSWORD")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_EMAIL:
            console.log("ACTIONS_TYPES.UPDATE_EMAIL")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.AUTHORIZE_USER:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.REGISTER_USER:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.LOGOUT_USER:
            const userService = UserServiceFactory.createInstance();
            userService.logout()
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.GET_TODO:
            console.log("ACTIONS_TYPES.GET_TODO")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.CREATING_TODO:
            console.log("LOLW")
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.REDACTING_TODO:
            console.log("ACTIONS_TYPES.REDACTING_TODO")
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.DELETING_TODO:
            console.log("ACTIONS_TYPES.DELETING_TODO")
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_NEW_TODO_TITLE:
            console.log("ACTIONS_TYPES.UPDATE_NEW_TODO_TITLE")
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_NEW_TODO_TEXT:
            console.log("ACTIONS_TYPES.UPDATE_NEW_TODO_TEXT")
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.POST_NEW_TODO:
            console.log("ACTIONS_TYPES.POST_NEW_TODO")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.DELETE_TODOS:
            console.log("ACTIONS_TYPES.DELETE_TODOS")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.SELECT_TODOS:
            console.log("ACTIONS_TYPES.SELECT_TODOS")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_TODO:
            console.log("ACTIONS_TYPES.UPDATE_TODOS")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_RECEIVE_STATUS:
            console.log("ACTIONS_TYPES.UPDATE_RECEIVE_STATUS")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_INFO_STATUS:
            console.log("ACTIONS_TYPES.UPDATE_INFO_STATUS")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.NOTIFY_SERVER:
            console.log("ACTIONS_TYPES.NOTIFY_SERVER")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS_TYPES.UPDATE_MESSAGE:
            console.log("ACTIONS_TYPES.NOTIFY_SERVER")
            console.log("state = ", state)
            console.log("action.payload = ", action.payload)
            return {
                ...state,
                messageReceived: true,
                ...action.payload

            };
        default:
            return state;

    }
};

export default reducer;