import {async_getUserData, async_sendAuthData, async_sendRegistrationData} from "../../api/request.mjs";

class UserService {

    token;
    async signIn(loginData) {
        let response = await async_sendAuthData(loginData)
        if (response.getStatus() === 200) {
            // console.log(response.getBody())
            this.#save(response.getBody());
            return;
        }
        else {
            return Promise.reject();
        }
    }

    //REGISTRATION
    async signUp(signUpData) {
        let response = await async_sendRegistrationData(signUpData)
        if (response.getStatus() === 200) {
            // console.log(response.getBody())
            this.#save(response.getBody());
            return;
        }
        else {
            return Promise.reject();
        }
    }

    async userInfo(signUpData) {
        let response = await async_getUserData()
        if (response.getStatus() === 200) {
            // console.log(response.getBody())
            return response.getBody();
        }
        else {
            return Promise.reject();
        }
    }


    logout(){
        // localStorage.removeItem('token');
        this.token = null;
    }

    #save(token){
        // localStorage.setItem('token', token);
        this.token = token
    }


    getToken(){
        // return localStorage.getItem('token');
        return this.token;
    }
}

class UserServiceFactory {

    static _usr = null;

    static _createInstance() {
        return new UserService();
    }

    static createInstance() {
        if (UserServiceFactory._usr === null) {
            UserServiceFactory._usr = UserServiceFactory._createInstance();
        }
        return UserServiceFactory._usr;
    }
}

export default UserServiceFactory