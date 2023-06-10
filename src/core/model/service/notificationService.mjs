import {
    async_getNumberOfCheckedTodos
} from "../../api/request.mjs";
import UserServiceFactory from "./userService.mjs";
import {createAndConnectToNotificationWebSocket, generateUUID, receive, wsonopen, wssend, wsclose} from "../../api/webSocket.mjs";
// import message from "../../../gui/component/message/message";

class NotificationService {

    async getNumberOfCheckedTodos() {
        const userService = UserServiceFactory.createInstance();
        let response = await async_getNumberOfCheckedTodos(userService.getToken(), this.UUID)
        switch (response.getStatus()) {
            case 200:
                console.log("200")
                console.log(response.getBody())
                return "OK"
            case 401:
                console.log("401")
                return null;
            default:
                return Promise.reject();
        }
    }

    UUID = generateUUID()

    ws = createAndConnectToNotificationWebSocket()

    //
    // openNotifications(){
    onopenNotifications = () => {
        console.log("model open", this.ws)
        wsonopen(this.ws, this.UUID);
    }
    // }
    closeNotifications = () => wsclose(this.ws);

    // closeNotifications(){
    //     wsclose(this.ws)
    // }

    sendMessage = (msg) => {
            wssend(this.ws, msg)
    }

    receiveMessage = (callback) =>{
        console.log("model receive")
        receive(this.ws, callback)
    }
    //
    getWs(){
        return this.ws
    }

}


class NotificationServiceFactory {

    static _notification = null;

    static _createInstance() {
        return new NotificationService();
    }

    static createInstance() {
        if (NotificationServiceFactory._notification === null) {
            NotificationServiceFactory._notification = NotificationServiceFactory._createInstance();
        }
        return NotificationServiceFactory._notification;
    }
}

export default NotificationServiceFactory