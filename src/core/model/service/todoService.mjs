import {
    async_deleteTodo,
    async_getTodoData,
    async_sendNewTodoData,
    async_sendUpdateTodoData
} from "../../api/request.mjs";
import UserServiceFactory from "./userService.mjs";

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
    }

    async postTodo(todoData) {
        const userService = UserServiceFactory.createInstance();
        let response = await async_sendNewTodoData(userService.getToken(), todoData)
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
        const userService = UserServiceFactory.createInstance();
        let response = await async_deleteTodo(userService.getToken(), todo_ids)
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
        const userService = UserServiceFactory.createInstance();
        let response = await async_sendUpdateTodoData(userService.getToken(), id, todoData)
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