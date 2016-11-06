const [Email, Password] = [Symbol('EMAIL'), Symbol('PASSWORD')];

class User {
    constructor(email, password) {
        this[Email] = email;
        this[Password] = password
    }

    get email() {
        return this[Email];
    }

    get password() {
        return this[Password];
    }
}

module.exports = User;