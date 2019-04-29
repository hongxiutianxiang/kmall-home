
var _util = require('util/index.js')

var _cart = {
	addCart:function(data,success,error){
		_util.request({
			url:'/cart',
			method:'post',
			data:data,
			success:success,
			error:error
		})
	},
	getCartCount:function(success,error){
		_util.request({
			url:'/cart/count',
			success:success,
			error:error
		})
	},
	getCart:function(success,error){
		_util.request({
			url:'/cart',
			success:success,
			error:error
		})
	},




	updateCart:function(success,error){
		_util.request({
			url:'/cart',
			success:success,
			error:error
		})
	},

	
}


module.exports = _cart;