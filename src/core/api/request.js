import {Response} from "./response.js";

const protocol = "http";
const host = "localhost";
const port = "8080";
const name = "todo_list-110345518952587290388.0-SNAPSHOT";
const domain = `${protocol}://${host}:${port}/${name}`;

async function _sendRequest(type, uri, options, data) {//options для передачи header'ов
    let request;
    let headers = {
        "Content-type": "application/json; charset=utf-8",
        "Authorization": localStorage.getItem("token")
    }

    if (options != undefined || options != null) {//проверка options обращать внимание на передаваемое null или не null
        let keys = Object.keys(options);
        for (let i = 0; i < keys.length; i++) {
            headers[keys[i]] = options[keys[i]];
        }
    }

    if (data == null || data == undefined) {
        console.log(headers, "DATA UNDEFINED");
        request = fetch(uri, {method: type, headers: headers});
    } else if (type == "delete" || type == "get") {
        console.log("TYPE DELETE OR GET")
        headers["Data"] = JSON.stringify(data);//для данных в header'ах
        request = fetch(uri, {method: type, headers: headers});
    } else {
        // console.log(headers);
        // console.log(data);
        // console.log(JSON.stringify(data));
        request = fetch(uri, {method: type, headers: headers, body: JSON.stringify(data)});
    }

    //прокидка реквеста и вытаскивание данных
    let response = await request;
    let json;
    try {
        json = await response.json();
    } catch (error) {
        json = null;
    }

    // console.log(response.status);
    // console.log(json);
    return new Response(response.status, json); //Response это ДТО объект

}

export async function async_getUserCars() {
    return await _sendRequest("get", "api/cars/", {"Login": localStorage.getItem("login")});
}

//надо передавать ДТО юзера
export async function async_auth(User) {
    let data;
    try {
        data = User;//ДТО Юзера .get()
        // if (data == null) {
        //     console.log("data is null")
        // }
        // else {
        //     console.log(data);
        // }
    } catch (error) {
        data = null;
    }
    // if (data == null) {
    //     console.log("data is null")
    // }
    // else {
    //     console.log(data);
    // }
    return await _sendRequest("post", "api/user/authorization", null, data);
}

//надо передавать ДТО юзера
export async function async_registration(User) {
    return await _sendRequest("post", "api/user/registration", null, User);
}

//надо передавать ДТО машины
export async function async_addCar(Car) {
    return await _sendRequest("post", "api/cars/", {"Login": localStorage.getItem("login")}, Car);
}

export async function async_deleteAllCars() {
    return await _sendRequest("delete", "api/cars/", {"Login": localStorage.getItem("login")})
}

export async function async_deleteCar(cars_id) {
    return await _sendRequest("delete", "api/cars/car/", null, cars_id)
}

export async function async_sendAuthData(loginData) {

    return await _sendRequest("post", `${domain}/api/user/authorization`, null, loginData);
}

export async function async_sendRegistrationData(signUpData) {

    return await _sendRequest("post", `${domain}/api/user/registration`, null, signUpData);
}

export async function async_getUserData() {

    return await _sendRequest("get", `${domain}/api/user/`, {"Token": localStorage.getItem('token')});
}

export async function async_getTodoData(token) {

    return await _sendRequest("get", `${domain}/api/todo/`, {"Token": token});
}

export async function async_sendNewTodoData(todoData) {

    return await _sendRequest("post", `${domain}/api/todo/`, {"Token": localStorage.getItem('token')}, todoData);
}

export async function async_deleteTodo(todo_id) {

    return await _sendRequest("delete", `${domain}/api/todo/deletion`, {"Token": localStorage.getItem('token'), "Data": JSON.stringify(todo_id)});
}

export async function async_sendUpdateTodoData(id, todoData) {

    return await _sendRequest("put", `${domain}/api/todo/?id=${id}`, {"Token": localStorage.getItem('token')}, todoData);
}