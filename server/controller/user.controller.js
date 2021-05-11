const User = require("../models/user.model");


const getUsers = async (req, res) => {
    let result;
    try {
        result = await User.find({});
    } catch (e) {
        throw new Error(e)
    }
    return result
}

const addUser = async (req, res) => {
    let user = new User(req.body)
    try {
        await user.save();
        const token = await user.generateToken()
        return { user, token }
    } catch (e) {
        throw new Error(e)
    }
}

const updateUser = async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedKeys = ['first', 'last', 'email', 'password', 'phone']
    const isValidKeys = updates.every(update => allowedKeys.includes(update))

    if (!isValidKeys) {
        throw new Error("error: Invalid updates")
    }
    try {
        const user = await User.findById({ _id: req.params.id })
        updates.forEach(update => {
            user[update] = req.body[update]
        })
        await user.save()
        return user;
    } catch (e) {
        throw new Error(e)
    }
}

const userLogin = async (req, res) => {
    try {
        //findByCredentials - madeup function that has been created at the user model
        const user = await User.findByCredentials(req.body.email, req.body.password)

        const token = await user.generateToken()
        return { user, token }
    } catch (e) {
        throw new Error(e)
    }
}
module.exports = {
    addUser,
    getUsers,
    updateUser,
    userLogin
};