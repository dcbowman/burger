var connection = require('./connection.js');

var orm = {
    //this is for orm.selectAll and will select everything from the burger table that is being passed through with the server.js file
    selectAll: function(tableInput) {
        var queryString = 'SELECT * FROM ' + tableInput;
        console.log(queryString);


        
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    //this is for the orm.add and will add the burger to the database 

    add: function(tableInput, infoToAdd){
        var queryString = 'INSERT INTO' + tableInput + (infoToAdd) 'VALUES (?)';
        console.log(queryString);


        connection.query(queryString, function(err, result){
            if (err) throw err;
            console.log(result);
        });

    },
    //this is for orm.selectDevoured, this searches the devoured column and will select all of the info if that columns value is True
    selectDevoured: function(tableInput, colToSearch, valOfCol) {
        var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';

        console.log(queryString);

        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
    },

    //updates the value of the devoured column to 'True';
    devour: function(tableInput, colToUpdate){
        var queryString = 'UPDATE' + tableInput + 'SET' + colToUpdate + '=TRUE',
            
        console.log(queryString);
        
        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
        }
    }
};

module.exports = orm;