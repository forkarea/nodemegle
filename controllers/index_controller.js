const userModel = Symbol('userModel');

class IndexController {
    constructor(user) {
        this[userModel] = user
    }

    get userModel() {
        return this[userModel];
    }

    renderIndex(req, res) {
        const UserModel = this.userModel;
        res.render('index', {
            title: 'Express',
            user: new UserModel("buziaczek@buziaczek.pl", "buziaczek123")
        });
    }

    printJson(req,res) {
        res.json({
            action: "test",
            message: "halo odbiór"
        })
    }
}

module.exports = IndexController;
