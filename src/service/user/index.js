
var _util = require('util/index.js')

var _user = {
	logout:function(success,error){
		_util.request({
			url:'/user/logout',
			success:success,
			error:error
		})
	},
	login:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/login',
			data:data,
			success:success,
			error:error
		})
	},
	getUsername:function(success,error){
		_util.request({
			url:'/user/username',
			success:success,
			error:error
		})
	}

}


module.exports = _user;