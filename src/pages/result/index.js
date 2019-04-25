require('pages/common/footer')
require('pages/common/logo')
require('./index.css')
var _util = require('util')

$(function(){

	var query = window.location.search.substr(1);
	console.log(query)
	$('.register').show()
})


