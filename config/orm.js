var connection = require('./connection.js');

var orm = {
    selectAll: function( * , burgers) {
        var queryString = 'SELECT * FROM ' + burgers;
        console.log(queryString);
        
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectDevoured: function(burgers, devoured, True) {
        var queryString = 'SELECT * FROM ' + burgers + ' WHERE ' + devoured + ' = ?';

        console.log(queryString);

        connection.query(queryString, [valOfCol], function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;