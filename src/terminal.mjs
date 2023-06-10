import UserServiceFactory from "./core/model/service/userService.mjs"
import TodoServiceFactory from "./core/model/service/todoService.mjs";
// import NotificationServiceFactory from "./core/model/service/notificationService.mjs";

import readline from "readline";

console.log(process.argv)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const jsonSignIn = {
    "login": "terev",
    "password": "1234"
}

const jsonRegister = {
    "login": "terev",
    "password": "1234",
    "email": "trv@gmail.ru"
}

const jsonPostTodo = {
    "title": "Terminal",
    "creationDate": new Date(),
    "text": "text",
    "check": true
}

const jsonUpdateTodo = {
    "title": "Terminal Updated",
    "creationDate": new Date(),
    "text": "text",
    "check": true
}
const jsonDelete = {
    "id": 0
}

const masJsonDelete = [jsonDelete]

const userServiceFactory = UserServiceFactory.createInstance()
const todoServiceFactory = TodoServiceFactory.createInstance()
console.log(userServiceFactory.getToken())
// const notificationServiceFactory = NotificationServiceFactory.createInstance()
// notificationServiceFactory.onopenNotifications()
console.log('Action:')
rl.on('line', (cmd) => {



    if (cmd === 'authorize') {
        // let userServiceFactory = UserServiceFactory.createInstance()
        userServiceFactory.signIn(jsonSignIn).then(() => {
            console.log("OK")
        }).catch(() => {console.log("Not Ok")})
    }
    if (cmd === 'register') {
        // let userServiceFactory = UserServiceFactory.createInstance()
        userServiceFactory.signUp(jsonRegister).then(() => {
            console.log("OK")
        }).catch(() => {console.log("Not Ok")})
    }
    if (userServiceFactory.getToken() !== null || userServiceFactory.getToken() !== undefined)
    {
        console.log("You can use Todo " + userServiceFactory.getToken())
        // notificationServiceFactory.receiveMessage((msg)=>{
        //     console.log(msg)
        // })

        if (cmd === "post") {
            todoServiceFactory.postTodo(jsonPostTodo).then((msg)=>{
                console.log(msg)
            }).catch(() => {console.log("Not Ok")})
        }
        if (cmd === "get") {
            todoServiceFactory.getTodos().then((info)=>{
                console.log(info)
            }).catch(() => {console.log("Not Ok")})
        }

        if (cmd === "put") {
            todoServiceFactory.updateTodo(jsonUpdateTodo).then((msg)=>{
                console.log(msg)
            }).catch(() => {console.log("Not Ok")})
        }
        if (cmd === "delete") {
            todoServiceFactory.deleteTodos(masJsonDelete).then((msg)=>{
                console.log(msg)
            }).catch(() => {console.log("Not Ok")})
        }
    }

    if (cmd === 'exit') {
        userServiceFactory.logout();
        rl.close()
    }
})

// console.log('Password:')