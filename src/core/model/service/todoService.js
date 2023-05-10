import {
    async_deleteTodo,
    async_getTodoData,
    async_getUserData,
    async_sendAuthData,
    async_sendNewTodoData,
    async_sendRegistrationData, async_sendUpdateTodoData
} from "../../api/request";
import UserServiceFactory from "./userService";

class TodoService {

    async getTodos() {
        const userService = UserServiceFactory.createInstance();
        let response = await async_getTodoData(userService.getToken())
        switch (response.getStatus()) {
            case 200:
                return response.getBody()
            case 401:
                return null;
            default:
                return Promise.reject();
        }
        // if (response.getStatus() === 200) {
        //     // console.log(response.getBody())
        //     return response.getBody();
        // }
        // else {
        //     return Promise.reject();
        // }
    }

    async postTodo(todoData) {
        let response = await async_sendNewTodoData(todoData)
        switch (response.getStatus()) {
            case 200:
                return "OK";
            case 401:
                return null;
            default:
                return Promise.reject();
        }
    }

    async deleteTodos(todo_ids) {
        let response = await async_deleteTodo(todo_ids)
        switch (response.getStatus()) {
            case 200:
                return "OK";
            case 401:
                return null;
            default:
                return Promise.reject();
        }
    }

    async updateTodo(id, todoData) {
        let response = await async_sendUpdateTodoData(id, todoData)
        switch (response.getStatus()) {
            case 200:
                return "OK";
            case 401:
                return null;
            default:
                return Promise.reject();
        }
    }

}


class TodoServiceFactory {

    static _todo = null;

    static _createInstance() {
        return new TodoService();
    }

    static createInstance() {
        if (TodoServiceFactory._todo === null) {
            TodoServiceFactory._todo = TodoServiceFactory._createInstance();
        }
        return TodoServiceFactory._todo;
    }
}

export default TodoServiceFactory