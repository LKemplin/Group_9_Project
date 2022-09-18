const User = require('../models/user.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createNewUser = async (req, res) => {
    const {body} = req;

    // make sure user doesn't already exist
    try {
        const queriedUser = await User.findOne({email: body.email});
        if (queriedUser) {
            console.log(queriedUser);
            res.status(400).json({errMsg: "This user already exists."});
            return;
        }
    } catch (error) {
        res.status(400).json(error);
    }

    // create new user

    let newUser = new User(body);

    try {
        const newUserObj = await newUser.save();
        res.json(newUserObj);
    } catch (error) {
        res.status(400).json(error)
    }
}

const login = async (req, res) => {
    const {body} = req;
    if (!body.email) {
        res.status(400).json({error: "Please enter email."});
        return;
    }

    let userQuery;

    try {
        userQuery = await User.findOne({email: body.email});
        if (userQuery === null) {
            res.status(400).json({error: "email not found"})
        }
    } catch (error) {
        res.status(400).json(error);
    }

    const passwordCheck = bcrypt.compareSync(body.password, userQuery.password);

    if (!passwordCheck) {
        res.status(400).json({error: "Email and password do not match"});
        return;
    }

    //If we've gotten to this point, then email and password are valid.  Time to send JSON web token.
    const userToken = jwt.sign({_id: userQuery._id}, "purpleyarn");
    console.log(userToken);

    res
        .cookie("usertoken", userToken, "purpleyarn", {
            httpOnly: true,
            expires: new Date(Date.now() + 9000000000),
        })
        .json({message: "successful login"});
}

module.exports = { createNewUser, login }