const queries = require('../database/queries');

module.exports = {
    displayItems: function(req, res) {  
        queries.getAllItems(req, res)
    }
};
