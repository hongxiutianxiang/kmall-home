
var _util = require('util/index.js')

var _product = {
	getProductList:function(data,success,error){
		_util.request({
			url:'/product/home/list',
			data:data,
			success:success,
			error:error
		})
	},
	
}


module.exports = _product;