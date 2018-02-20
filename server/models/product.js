// require mongoose
var mongoose = require('mongoose');
// create the schema
var ProductSchema = new mongoose.Schema({
  title: {type: String, minlength: [4, "Title must be at least 4 characters."], unique: [true, "Email already exists."]},
  price: {type: Number, required: [true, "Must enter a price."], min: [0.01, "Price must be at least 0.01."]},
  img: String,
},
  {timestamps: true});
// register the schema as a model
var Product = mongoose.model('Product', ProductSchema);