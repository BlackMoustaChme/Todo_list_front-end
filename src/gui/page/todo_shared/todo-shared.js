import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
    useIsAuthListener,
    useLogoutStatusDispatcher,
    useTodosDispatcher,
    useTodoListener,
    useCreatingTodoStatusDispatcher,
    useIsBeingCreatedListener,
    useNewTodoTitleListener,
    useNewTodoTitleDispatcher,
    useNewTodoTextListener,
    useNewTodoTextDispatcher,
    useIsBeingRedactedListener,
    useRedactingTodoStatusDispatcher,
    useNewTodoDispatcher,
    useIsBeingDeletedListener,
    useDeletingTodoStatusDispatcher,
    useDeletingTodoCancelStatusDispatcher,
    useSelectedTodosListener,
    useSelectedTodosDispatcher,
    useDeleteTodosDispatcher,
    useTodoUpdateDispatcher,
    useMessageReceivedStatusListener,
    useMessageReceivedStatusDispatcher,
    useInfoUpdatedStatusListener,
    useInfoUpdatedStatusDispatcher,
    useSendNotificationDispatcher
} from "../../../vm/redux/api.js";
import Button from "../../component/button/button.js"
import ErrorSpan from "../../component/error-span/error-span";
import Tile from "../../composition/tile/tile.js";
import Column from "../../component/column/column";
import RedactingField from "../../composition/redacting-field/redacting-field";
import Notification from "../../composition/notification/notification";
import counter from "../../../core/api/webSocket.mjs";

function TodoMain() {


    const navigate = useNavigate();

    const isAuth = useIsAuthListener();

    const todoDispatcher = useTodosDispatcher()

    const isBeingCreatedDispatcher = useCreatingTodoStatusDispatcher();

    const isBeingRedactedDispatcher = useRedactingTodoStatusDispatcher()

    const isBeingDeletedDispatcher = useDeletingTodoStatusDispatcher()

    const cancelDeletingDispatcher = useDeletingTodoCancelStatusDispatcher()

    const selectedTodosDispatcher = useSelectedTodosDispatcher()

    const selectedTodos = useSelectedTodosListener()

    const infoUpdatedStatus = useInfoUpdatedStatusListener();

    const infoUpdatedDispatcher = useInfoUpdatedStatusDispatcher();

    const notifyServer = useSendNotificationDispatcher()


    // Если в callback написать return то этот хук будет вызываться при unmount'е
    // С deps'ами он становится хуком обновления компонента
    // В голом виде это хук при mount'е
    useEffect(() => {
        todoDispatcher()
        if(!isAuth){
            navigate('/');
        }
        if(infoUpdatedStatus === true){
            infoUpdatedDispatcher(false)
        }
    }, [isAuth, navigate, infoUpdatedStatus]);

    const todos = useTodoListener();

    const newTodoTitle = useNewTodoTitleListener()

    const newTodoTitleDispatcher = useNewTodoTitleDispatcher()

    const newTodoText = useNewTodoTextListener()

    const newTodoTextDispatcher = useNewTodoTextDispatcher()

    const newTodoDispatcher = useNewTodoDispatcher()

    const deleteTodosDispatcher = useDeleteTodosDispatcher()

    const updateTodoDispatcher = useTodoUpdateDispatcher()

    const isCreating = useIsBeingCreatedListener();

    const isRedacting = useIsBeingRedactedListener();

    const isDeleting = useIsBeingDeletedListener();

    const messageReceived = useMessageReceivedStatusListener();

    const receivedStatusDispatcher = useMessageReceivedStatusDispatcher();


    const TileMas = []


    todos.map((value) =>
        TileMas.push(<Tile selectable={isDeleting} onSelectChange={(event) =>
            selectedTodosDispatcher(value.id, event.target.checked)}
                           name={value.title} text={value.text} onDoubleClick={() =>
            isBeingRedactedDispatcher(value.id, value.title, value.text)} defaultChecked={value.check} date={value.creationDate}
                           onCheck={(event) =>
                               updateTodoDispatcher(value.id, value.title, value.text, event.target.checked)} ></Tile>)
    )

    const logoutDispatcher = useLogoutStatusDispatcher()


    return (
        <div>
            {messageReceived === true && <Notification buttonName={"Ok"} onButtonClick={() =>
                receivedStatusDispatcher(false)}></Notification>}
            <Button name={"Create Todo"} onClick={() => isBeingCreatedDispatcher()}></Button>
            <Button name={"Delete Todo/s"} onClick={() => isBeingDeletedDispatcher()}></Button>
            {isDeleting === true && <>
                <Button name={"Submit deletion"} onClick={() => deleteTodosDispatcher()}></Button>
                <Button name={"Cancel"} onClick={() =>
                    cancelDeletingDispatcher()}></Button>
            </>}
            {isCreating === true && <div><RedactingField maxTitleLenght={100}
                                                         titleText={newTodoTitle}
                                                         descriptionText={newTodoText}
                                                         onTitleChange={(event) =>
                                                             newTodoTitleDispatcher(event.target.value)}
                                                         onTextChange={(event) =>
                                                             newTodoTextDispatcher(event.target.value)}/>
                <Button name={"Submit"} onClick={() => newTodoDispatcher()}/></div>}
            {isRedacting !== null && todos.map((value) => value.id === isRedacting && <div>
                <RedactingField maxTitleLenght={100} titleText={newTodoTitle} descriptionText={newTodoText}
                                onTitleChange={(event) =>
                                    newTodoTitleDispatcher(event.target.value)}
                                onTextChange={(event) =>
                                    newTodoTextDispatcher(event.target.value)}/>
                <Button name={"Submit"} onClick={() =>
                    updateTodoDispatcher(value.id, newTodoTitle, newTodoText, value.check)}/>
            </div>)}
            <Column value={TileMas}></Column>
            <Button name="Log Out" onClick={() => logoutDispatcher()} />
            <Button name={"WebSocket"} onClick={counter}></Button>
        </div>
    )
}

export default TodoMain