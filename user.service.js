const {User} = require('./database/models/index');


async function getAllUsers() {
    const users = await User.findAll();
    return users;
}

async function getUserById(id) {
    const user = await User.findByPk(id);
    return user;
}

module.exports = {
    getAllUsers,
    getUserById
}