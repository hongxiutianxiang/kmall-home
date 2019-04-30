var _util = require('util/index.js')

var _shipping = {
	addShipping:function(data,success,error){
		_util.request({
			url:'/shipping',
			method:'post',
			data:data,
			success:success,
			error:error
		})
	},
	getShippingList:function(success,error){
		_util.request({
			url:'/shipping/list',
			success:success,
			error:error
		})
	},
	deleteShipping:function(data,success,error){
		_util.request({
			url:'/shipping/delete',
			method:'put',
			data:data,
			success:success,
			error:error
		})
	},
	
	
}


module.exports = _shipping;