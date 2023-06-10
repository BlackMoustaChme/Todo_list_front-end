import UserServiceFactory from "../model/service/userService.mjs";
const protocol = "http";
const host = "localhost";
const port = "8080";
const name = "todo_list-116555153447152215466.0-SNAPSHOT";
const domain = `${protocol}://${host}:${port}/${name}`;
const protocol2 = "ws"
const domain2 = `${protocol2}://${host}:${port}/${name}`;


function generateUUID(){
    let dt = new Date().getTime();
    // if(window.performance && typeof window.performance.now === "function"){
    //     dt += performance.now(); //use high-precision timer if available
    // }
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c==='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function createAndConnectToNotificationWebSocket() {
    console.log("create ws")
    let ws = new WebSocket(`${domain2}/notifications`);
    return ws;
}
const wssend = (ws, message) => {
    ws.send(message)
}
const wsclose = (ws) => {
    console.log("close ws")
    ws.close(1000, "Complete")
}
const wsonopen = (ws, wsID, message) => {
        ws.onopen = (event) => {
            console.log("op" + wsID + " ws:"+ ws)
            console.log('WS counter was opened: ' + event);
            ws.send(wsID);
    }
}

const receive = (ws, callback) => {
    ws.onmessage = (event) => {
        console.log('ws counter got message: ' + event.data);
        callback(event.data)
    }
}

export {generateUUID, createAndConnectToNotificationWebSocket, wssend, receive, wsonopen, wsclose}
