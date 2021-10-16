const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    nic : {
        type : String,
        required : true
    },

    telnumber : {
        type : Number,
        required : true
    }
    
}, {timestamps: true})

const BusStand = mongoose.model("BusStand", visitorSchema);
module.exports = BusStand;