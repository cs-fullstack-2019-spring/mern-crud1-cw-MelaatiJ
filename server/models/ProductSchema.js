const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// *************8 Product model ********************* //
var ProductSchema = new Schema(
    {
        productId:Number,
        price:Number,
        quantity:Number,
    }
);


module.exports=mongoose.model("Product", ProductSchema);