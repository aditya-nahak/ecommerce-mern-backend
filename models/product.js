var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        maxlength: 32,
        trim: true,
        required: true
    },
    description: {
        type: String,
        maxlength: 2000,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        maxlength: 32,
        required: true,
        trim: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    stock:{
        type: Number
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true});

module.exports = mongoose.model("Product" , productSchema);