const User = require('../models/user');

//to post the records to database
exports.postAddUsers = async (req, res, next) => {
    try {
        if (!req.body.phoneNumber) {
            throw new Error('Please add a phone number')
        }
        const name = req.body.name;
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        console.log('name = ' + name);
        console.log('email = ' + email);
        console.log('phone Number = ' + phoneNumber);

        const data = await User.create({
            name: name,
            email: email,
            phoneNumber: phoneNumber
        })
        //will send json response back to the client
        res.status(201).json({ newUserDetails: data });
    }
    catch (err) {
        res.status(500).json({
            error: err,
        })
    }
}

exports.getAllUsers = async (req, res, next) => {
    try {
        const userData = await User.findAll();
        console.log('userData = ' + JSON.stringify(userData));
        res.status(200).json({ UserData: userData });
    }
    catch (err) {
        console.log('Get user is failing' + JSON.stringify(err));
        res.status(500).json({ error: err });
    }
}


exports.deleteUser = async (req, res, next) => {
    try {
        if (req.params.id === undefined || req.params.id === "") {
            res.status(400).json({ err: 'ID is missing' });
        }
        const userId = req.params.id;
        console.log('userId = ' + userId);
        await User.destroy({ where: { id: userId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log('Delete user is failing' + JSON.stringify(err));
        res.status(500).json({ error: err });
    }
}


