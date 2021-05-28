const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Publication = new Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
         type: Date, 
         default: Date.now
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
})

module.exports = model("Publication", Publication)