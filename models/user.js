const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false,
        default: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpublicdomainvectors.org%2Fphotos%2Fabstract-user-flat-3.png&f=1&nofb=1',
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Notification',
        }
    ],
    publications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Publication',
        }
    ],
    createdAt: {
         type: Date, 
         default: Date.now
    }
})

module.exports = model("User", User)