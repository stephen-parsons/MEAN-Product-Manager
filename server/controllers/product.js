var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
  all: function(req, res) {
    Product.find({}, function(err, products) {
      if(err){
        console.log(err);
        }
      else {
        console.log(products); 
        return res.json(products);
      }
    }) 
  },
  findOne: function(req,res,id) {
    Product.find({_id: id}, function(err, product){
      if(err){
          console.log(err);
        }
        else{
          console.log(product); 
          return res.json(product);
        }
    })
  },
  create: function(req, res) {
    var product = new Product(req.body);
    product.save(function(err) {
      if(err) {
        console.log('something went wrong');  
      }
      else{ 
        console.log('successfully added a product!');
        return res.json(product);
      } 
    });
  },
  deleteOne: function(req,res,id) {
    Product.deleteOne({_id: id}, function(err, product){
      if(err){
        console.log(err);
        }
      else{  
        console.log("Deleted product"); 
        return res.json(product);
      }
    })
  },
  updateOne: function(req,res, id) {
    Product.findByIdAndUpdate(id, req.body, {new: true}, function(err, product){
      if(err){
        console.log(err);
        return res.josn(err);
        }
      else{  
        console.log("NEW PRODUCT", product); 
        return res.json(product);
      }
    })
  },
}