
require('./index.css')

var _user = require('service/user')
var _util = require('util/index.js')

var nav = {
	init:function(){

		this.bindEvent();

		return this;
	},
	bindEvent:function(){
		//1.绑定退出事件
		$('#logout').on('click',function(){
			_user.logout(
				function(result){
					window.loaction.reload();
					// console.log('aa',result)
				},
				function(msg){
					_util.showErrorMsg(msg)
				}
			)
		})
	}
}




module.exports = nav.init(); 