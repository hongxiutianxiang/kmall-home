var _util = {
	request:function(options){
		$.ajax({
			method:options.method || 'get',
			url:options.url || '',
			dataType:options.dataType || 'json',
			data:options.data || '',
			success:function(result){
				//成功
				if(result.code == 0){
					options.success && options.success(result.data)
				}
				//失败
				else if(result.code == 1){
					options.error && options.error(result.message)
				}
				//没有权限
				else if(result.code == 10){
					//跳转到登陆页面
					window.location.herf = ('./user-login')
				}
			},
			error:function(err){
				options.error && options.error(err.statusText)
			}
		})
	},
	showErrorMsg:function(msg){
		alert(msg)
	},
	showSuccessMsg:function(msg){
		alert(msg)
	},
	goLogin:function(){
		window.location.href = './user-login.html'
	},
	goHome:function(){
		window.location.href = '/'
	},
	validate:function(value,type){
		var value = $.trim(value);
		//非空验证
		if(type == 'require'){
			return !!value
		}
		//用户名格式验证
		if(type == 'username'){
			return /^[0-9a-zA-Z_]{3,9}$/.test(value)
		}
		//密码格式验证
		if(type == 'password'){
			return /^[0-9a-zA-Z_]{3,9}$/.test(value)
		}
	}

}

module.exports = _util;