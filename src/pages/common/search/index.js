
require('pages/common/footer')
require('pages/common/logo')
require('./index.css')
var _util = require('util')
var _user = require('service/user')



var page = {
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		$('#btn-search').on('click',function(){
			//1.用户登录
			_this.submitSearch();
		})

		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submitSearch();
			}
		})
	},
	submitSearch:function(){
		var keyword = $('#search-input').val();
		window.location.href = './list.html?keyword='+keyword
	},
	
}


$(function(){
	page.init();
})