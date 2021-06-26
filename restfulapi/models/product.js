var mongoose = require("mongoose");
const Joi = require('@hapi/joi');
var productSchema = mongoose.Schema({
    name: String,
    price: Number,
    imageURL: String,
  
});

var Product = mongoose.model("Product",productSchema);

function validateProduct(data){
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        price: Joi.number().min(0).required(),
        imageURL: Joi.string().required(),

    });  
    return schema.validate(data,{abortEarly: false});

}
module.exports.Product = Product;
module.exports.validate = validateProduct;