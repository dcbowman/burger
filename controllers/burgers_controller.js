var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var orm = require('./config/orm.js');

app.get('/', function(req,res) {

//this will pull all of the info for those burgers that have been devoured

	// selectDevoured: function(tableInput, colToSearch, valOfCol)
orm.selectDevoured('burgers', 'devoured', 'True'), function(err, data) {if (err) throw err;

      res.render('index', {burgers: data});
      //takes the information and passes it to the index.hanndlebars view
    };
});

//adds the 
// add: function(tableInput, infoToAdd)
app.post('/', function(req,res){
  orm.add('burgers', 'burger_name', 'devoured'), function(err, result) {
      if (err) throw err;
      res.render('index', {burgers: data});//might need to change 2nd part still
      //may need to add res.redirect if page changes
    };
});


app.put('/', function(req,res){

    orm.devour('burgers', 'devoured'),
     function(err, result) {
      if (err) throw err;
      res.redirect('/');
    };
});
