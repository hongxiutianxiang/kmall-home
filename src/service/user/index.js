
var _util = require('util/index.js')

var _user = {
	logout:function(success,error){
		_util.request({
			url:'/user/logout',
			success:success,
			error:error
		})
	}
}


module.exports = _user;