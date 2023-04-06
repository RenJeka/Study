const queries = require('../database/queries');

function setNumberOfRequests(req) {
    req.session.numberOfRequests = req.session.numberOfRequests + 1;

    const requestCount = () => {
        return isNaN(req.session.numberOfRequests) ? 0 : req.session.numberOfRequests;
    };

    return requestCount();
}
module.exports = {
    displayItems: function(req, res) {
        queries.getAllItems(req, res, setNumberOfRequests(req))
    }
};
