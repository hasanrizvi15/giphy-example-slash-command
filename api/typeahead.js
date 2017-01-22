var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');


// The Type Ahead API.
module.exports = function(req, res) {
  // var term = req.query.text.trim();
  // if (!term) {
    res.json([{
      title: '<i>(enter a search term)</i>',
      text: ''
    }]);
    return;
  // }


};