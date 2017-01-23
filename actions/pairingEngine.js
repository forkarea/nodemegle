const usersStore = require('../models/users-store');
const randomJs = require('random-js')();
// const activePairsStore = require('../models/pairs-store');

function findPartner(user) {
    return new Promise(function (resolve) {
       return setTimeout(function () {
            let availableUsers = user && usersStore.getSearchingUsers(user.userId);
            if (!availableUsers || !availableUsers.length) {
                user && user.markAsSearching(resolve);
                return;
            }
            let random = randomJs.integer(0, availableUsers.length - 1);
            console.log(availableUsers, random)
            let partner = availableUsers[random];
            partner.endSearching(user);
            return resolve(partner);
        });
    })
}

module.exports = {
    findPartner
};