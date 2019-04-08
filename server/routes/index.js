var express = require('express');
var router = express.Router();

//********************* Product Schema ************//
var ProductCollection = require("../models/ProductSchema");
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ************** router to list all the products *********************//
router.get('/list', (request, response) => {
  ProductCollection.find({}, (errors, results) => {
    if(errors)
    {
      response.send(errors)
    }
    else
    {
      response.send(results)
    }
  })
});

// ************ making dummy data hehe >.< //
router.get("/createDD/:productId/:price/:quantity", (request, response) => {
  ProductCollection.create(
      {
        productId:request.params.productId,
        price:request.params.price,
        quantity:request.params.quantity,


      }, (errors, results) => {
        if(errors)
        {
          response.send(errors)
        }
        else
        {
          response.send(results)
        }
      })
});

// **************************** router to create new product ****************** //
router.post('/add', (request, response) => {
  ProductCollection.create(request.body, (errors, results) => {
    if(errors)
    {
      response.send(errors)
    }
    else
    {
      response.send(results)
    }
  })
});


// ************************* router to delete product ****************** //
router.delete('/delete', (request, response) => {
  ProductCollection.deleteOne({productId:request.body.productId}, (errors, results) => {
    if(errors)
    {
      response.send(errors)
    }
    else
    {
      response.send(results)
    }
  })
});

module.exports = router;
