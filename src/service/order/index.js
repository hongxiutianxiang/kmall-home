
var _util = require('util/index.js')

var _order = {
	getOrderProductList:function(success,error){
		_util.request({
			url:'/order/orderProductList',
			success:success,
			error:error
		})
	},
	
	
}


module.exports = _order;