var product = require('../controllers/product.js');
var path = require('path');
module.exports = function(app){
  
  app.post('/create', function(req, res) {
    product.create(req,res); 
  })

  app.get('/all', function(req, res){
    product.all(req,res);
  })

  app.get('/destroy/:id', function(req, res) {
    product.deleteOne(req,res,req.params.id); 
  })

  app.get('/product/:id', function(req, res) {
    product.findOne(req,res,req.params.id); 
  })

  app.put('/edit/:id', function(req, res) {
    product.updateOne(req,res,req.params.id); 
  })

  // ROOT
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angularApp/dist/index.html"))
  });

};
