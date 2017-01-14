const uuid = require('uuid');
const USER_NAME = Symbol("USER_NAME");
const SOCKET = Symbol("SOCKET");
const ID = Symbol("ID");
const IS_SEARCHING = Symbol("IS_SEARCHING");
const FOUND_CALLBACK = Symbol("FOUND_CALLBACK");

module.exports = class User {
    partner = null;

    constructor(name, socket) {
        this[USER_NAME] = name;
        this[SOCKET] = socket;
        this[ID] = uuid.v4();
        this[IS_SEARCHING] = false;
        this[FOUND_CALLBACK] = null;
    }

    get userId() {
        return this[ID];
    }

    get userName() {
        return this[USER_NAME];
    }

    get socket() {
        return this[SOCKET]
    }

    get isSearching() {
        return this[IS_SEARCHING];
    }

    markAsSearching(cb) {
        this[FOUND_CALLBACK] = cb;
        this[IS_SEARCHING] = true;
    }

    endSearching(user) {
        if(this[IS_SEARCHING] && this[FOUND_CALLBACK]) {
            this[IS_SEARCHING] = false;
            this[FOUND_CALLBACK](user);
            this[FOUND_CALLBACK] = null;
        }
    }

    clearPartner() {
        this.partner = null;
    }
};