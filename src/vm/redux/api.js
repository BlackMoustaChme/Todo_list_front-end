import { Provider as ReduxProvider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import store from './implementation/store.js';
import {async_authorize} from './implementation/asyncs/async_authorize.js';
import {ACTIONS_CREATORS} from "./implementation/actions";
import {async_register} from "./implementation/asyncs/async_register";
import async_getTodo from "./implementation/asyncs/async_getTodo";
import async_postTodo from "./implementation/asyncs/async_postTodo";
import async_deleteTodos from "./implementation/asyncs/async_deleteTodos";
import async_updateTodo from "./implementation/asyncs/async_updateTodo";
import async_notifyServer from "./implementation/asyncs/async_notifyServer";
import async_receiveMessage from "./implementation/asyncs/async_receiveMessage";

//***************************************************************

function buildProvider() {
    return (props)=> {
        return (
            <ReduxProvider store = {store}>
                {props.children}
            </ReduxProvider>
        );
    };
};

//***************************************************************

function useLoginListener() {
    return useSelector((state) => state.login);
};

function useLoginDispatcher() {
    const dispatch = useDispatch();
    return (value) => dispatch(ACTIONS_CREATORS.UPDATE_LOGIN(value));
};

function usePasswordListener() {
    return useSelector((state) => state.password);
};


function usePasswordDispatcher() {
    const dispatch = useDispatch();
    return (value) => dispatch(ACTIONS_CREATORS.UPDATE_PASSWORD(value));
};

function useEmailListener() {
    return useSelector((state) => state.email);
};


function useEmailDispatcher() {
    const dispatch = useDispatch();
    return (value) => dispatch(ACTIONS_CREATORS.UPDATE_EMAIL(value));
};
function useIsAuthListener(){
    return useSelector((state) => state.isAuth);
}

function useIsLoginStatusListener(){
    return useSelector((state) => state.isLoginStatus);
}

function useLoginStatusDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(async_authorize());
}

function useSignUpStatusDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(async_register());
}

function useLogoutStatusDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(ACTIONS_CREATORS.LOGOUT_USER(false));
}

//////////////////////////////////////////////

function useTodoListener(){
    return useSelector((state) => state.todos);
}

function useIsBeingCreatedListener(){
    return useSelector((state) => state.isBeingCreated);
}

function useIsBeingRedactedListener(){
    return useSelector((state) => state.isBeingRedacted);
}

function useIsBeingDeletedListener(){
    return useSelector((state) => state.isBeingDeleted);
}

function useSelectedTodosListener(){
    return useSelector((state) => state.selectedIds);
}


function useTodosDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(async_getTodo());
}

function useNewTodoTitleListener() {
    return useSelector((state) => state.newTodoTitle);
}


function useNewTodoTitleDispatcher() {
    const dispatch = useDispatch();
    return (value) => dispatch(ACTIONS_CREATORS.UPDATE_NEW_TODO_TITLE(value));
}

function useNewTodoTextListener() {
    return useSelector((state) => state.newTodoText);
}


function useNewTodoTextDispatcher() {
    const dispatch = useDispatch();
    return (value) => dispatch(ACTIONS_CREATORS.UPDATE_NEW_TODO_TEXT(value));
}

function useNewTodoDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(async_postTodo());
}

function useDeleteTodosDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(async_deleteTodos());
}

function useTodoUpdateDispatcher() {
    const dispatch = useDispatch();
    return (id, title, text, check) => dispatch(async_updateTodo(id, title, text, check));
}

function useRedactingTodoStatusDispatcher(){
    const dispatch = useDispatch();
    return (id, title, text) => dispatch(ACTIONS_CREATORS.REDACTING_TODO(id, title, text));
}

function useCreatingTodoStatusDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(ACTIONS_CREATORS.CREATING_TODO(true));
}

function useDeletingTodoStatusDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(ACTIONS_CREATORS.DELETING_TODO(true));
}

function useDeletingTodoCancelStatusDispatcher(){
    const dispatch = useDispatch();
    return () => dispatch(ACTIONS_CREATORS.DELETING_TODO(false));
}

function useSelectedTodosDispatcher(){
    const dispatch = useDispatch();
    return (id, value) => dispatch(ACTIONS_CREATORS.SELECT_TODOS(id, value));
}

/////////////////////////////////////////////////////////

function useMessageReceivedStatusDispatcher() {
    const dispatch = useDispatch();
    return (boolean) => dispatch(ACTIONS_CREATORS.UPDATE_RECEIVE_STATUS(boolean))
}

function useMessageReceivedStatusListener() {
    return useSelector((state) => state.messageReceived);
}

function useInfoUpdatedStatusDispatcher() {
    const dispatch = useDispatch();
    return (boolean) => dispatch(ACTIONS_CREATORS.UPDATE_INFO_STATUS(boolean))
}

function useInfoUpdatedStatusListener() {
    return useSelector((state) => state.infoUpdated);
}

function useSendNotificationDispatcher() {
    const dispatch = useDispatch();
    return () => dispatch(async_notifyServer());
}

function useMessageListener() {
    return useSelector((state) => state.message);
}

function useReceiveMessageInitializer() {
    const dispatch = useDispatch();
    return () => dispatch(async_receiveMessage());
}

//***************************************************************

export {buildProvider, useLoginListener, useLoginDispatcher, usePasswordListener, usePasswordDispatcher, useEmailListener,
    useEmailDispatcher, useIsLoginStatusListener, useIsAuthListener, useLoginStatusDispatcher, useSignUpStatusDispatcher,
    useLogoutStatusDispatcher, useTodosDispatcher, useTodoListener, useIsBeingCreatedListener, useIsBeingRedactedListener,
    useCreatingTodoStatusDispatcher, useRedactingTodoStatusDispatcher, useNewTodoTitleListener, useNewTodoTitleDispatcher,
    useNewTodoTextListener, useNewTodoTextDispatcher, useNewTodoDispatcher, useDeletingTodoStatusDispatcher,
    useDeletingTodoCancelStatusDispatcher, useIsBeingDeletedListener, useSelectedTodosDispatcher, useSelectedTodosListener,
    useDeleteTodosDispatcher, useTodoUpdateDispatcher, useMessageReceivedStatusDispatcher, useMessageReceivedStatusListener,
    useInfoUpdatedStatusListener, useInfoUpdatedStatusDispatcher, useSendNotificationDispatcher, useMessageListener,
    useReceiveMessageInitializer}