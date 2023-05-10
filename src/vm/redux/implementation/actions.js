const action = () => {
    return {type:'',payload:{}};
};

let idMas = []
// const idMasFiltered = []

export const ACTIONS_TYPES = {
    UPDATE_LOGIN:'update_login',
    UPDATE_PASSWORD: 'update_password',
    UPDATE_EMAIL: 'update_email',
    AUTHORIZE_USER: 'authorize_user',
    REGISTER_USER: 'register_user',
    LOGOUT_USER: 'logout_user',
    GET_TODO:'get_todo',
    REDACTING_TODO: 'redacting_todo',
    CREATING_TODO: 'creating_todo',
    DELETING_TODO: 'deleting_todo',
    UPDATE_NEW_TODO_TITLE: 'update_new_todo_title',
    UPDATE_NEW_TODO_TEXT:'update_new_todo_text',
    // UPDATE_TODO_TITLE: 'update_todo_title'
    POST_NEW_TODO: 'post_new_todo',
    SELECT_TODOS: 'select_todos',
    DELETE_TODOS: 'delete_todos',
    UPDATE_TODO: 'update_todo'
};

export const  ACTIONS_CREATORS = {
    UPDATE_LOGIN: (login) => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE_LOGIN;
        a.payload.login = login;
        return a;
    },
    UPDATE_PASSWORD: (password) => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE_PASSWORD;
        a.payload.password = password;
        return a;
    },
    UPDATE_EMAIL: (email) => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE_EMAIL;
        a.payload.email = email;
        return a;
    },
    AUTHORIZE_USER: (boolean) => {
        let a = action();
        a.type = ACTIONS_TYPES.AUTHORIZE_USER;
        a.payload.isAuth = boolean;
        a.payload.isLoginStatus = boolean;
        return a;
    },
    REGISTER_USER: (boolean) => {
        let a = action();
        a.type = ACTIONS_TYPES.REGISTER_USER;
        a.payload.isAuth = boolean;
        a.payload.isLoginStatus = boolean;
        return a;
    },
    LOGOUT_USER: (boolean) => {
        let a = action();
        a.type = ACTIONS_TYPES.LOGOUT_USER;
        a.payload.isAuth = boolean;
        a.payload.isLoginStatus = boolean;
        return a;
    },
    GET_TODO: (array) => {
        let a = action();
        a.type = ACTIONS_TYPES.GET_TODO;
        a.payload.todos = array;
        return a;
    },
    REDACTING_TODO: (id, title, text) => {
        let a = action();
        console.log(id)
        a.type = ACTIONS_TYPES.REDACTING_TODO;
        a.payload.isBeingRedacted = id;
        a.payload.newTodoTitle = title;
        a.payload.newTodoText = text;
        a.payload.isBeingCreated = false
        return a;
    },
    CREATING_TODO: (boolean) => {
        let a = action();
        a.type = ACTIONS_TYPES.CREATING_TODO;
        a.payload.isBeingCreated = boolean;
        a.payload.isBeingRedacted = null
        return a;
    },
    DELETING_TODO: (boolean) => {
        let a = action();
        a.type = ACTIONS_TYPES.DELETING_TODO;
        a.payload.isBeingDeleted = boolean;
        idMas = []
        a.payload.selectedIds = idMas
        // a.payload.isBeingCreated = boolean;
        // a.payload.isBeingRedacted = null
        return a;
    },
    UPDATE_NEW_TODO_TITLE: (title) => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE_NEW_TODO_TITLE;
        a.payload.newTodoTitle = title;
        return a;
    },
    UPDATE_NEW_TODO_TEXT: (text) => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE_NEW_TODO_TEXT;
        a.payload.newTodoText = text;
        return a;
    },
    POST_NEW_TODO: (array) => {
        let a = action();
        a.type = ACTIONS_TYPES.POST_NEW_TODO;
        // a.payload.todos = array;
        return a;
    },
    SELECT_TODOS: (id, value) => {
        let a = action()
        if (value === true) {
            idMas.push(id)
            a.payload.selectedIds = idMas
        }
        else {
            idMas = idMas.filter(_id => _id !== id)
            a.payload.selectedIds = idMas
        }
        a.type = ACTIONS_TYPES.SELECT_TODOS;
        return a;
    },
    DELETE_TODOS: () => {
        let a = action()
        a.type = ACTIONS_TYPES.DELETE_TODOS;
        idMas = []
        a.payload.selectedIds = []
        return a
    },
    UPDATE_TODO: () => {
        let a = action();
        a.type = ACTIONS_TYPES.UPDATE_TODO;
        // a.payload.todos.
        return a;
    }
};


