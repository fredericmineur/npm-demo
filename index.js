var _ = require('underscore'); //'_' means underscore library

//It checks for underscore through different levels
//Core module
//file of folder
//node_modules folder

var result = _.contains([1,2,3], 2);
console.log(result);