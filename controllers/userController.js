const User = require('../models/user');

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

exports.addPublicationToUser = async (userId, newPublication) => {
    await User.findOneAndUpdate({ _id: userId },
        {
            $push: {
                publications: newPublication
            }
        }
    )
}

exports.createUser = async (values) => {
    const { name, surname, password, email, country, gender, age } = values
    const newUser = new User({ name, surname, password, email, country, gender, age })
    await newUser.save()
    return newUser
}

exports.findById = async (id) => {
    return User.findById(id).populate([
        {
            path: 'weapons',
            model: 'Weapon',
            populate: {
                path: 'from',
                model: 'User'
            }
        }
    ])
}

exports.getAllUsers = async () => {
    return User.find({}).lean();
};

exports.getAllUsers = async () => {
    return await User.find().populate({
        path: 'publications',
        model: 'Publication'
    })
}

exports.findByName = async (name) => {
    return User.findOne({ 'name': name })
}

exports.findByEmail = async (email) => {
    return User.findOne({ 'email': email })
}
