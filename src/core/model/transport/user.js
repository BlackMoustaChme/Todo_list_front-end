export class User {
    login;
    email;
    password;


    constructor(login, email, password) {
        this.login = login;
        this.email = email;
        this.password = password;
        // this.repeat_password = repeat_password;
    }


    setLogin(login) {
        this.login = login;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }

    getLogin() {
        return this.login;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }


}