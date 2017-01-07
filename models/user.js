const USER_NAME = Symbol("USER_NAME");
const SOCKET = Symbol("SOCKET");

module.exports = class User {
    constructor(name, socket){
        this[USER_NAME] = name;
        this[SOCKET] = socket;
    }

    get userName() {
        return this[USER_NAME];
    }

    get socket(){
        return this[SOCKET]
    }
}