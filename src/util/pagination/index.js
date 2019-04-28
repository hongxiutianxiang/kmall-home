require('./index.css')
var tpl = require('./index.tpl')
var _util = require('util')

;(function($){

	function Pagination(){
	this.bindEvent();
	}
	Pagination.prototype = {
		constructor:Pagination,
		bindEvent:function(){

		},
		render:function(options){
			console.log('aa',options)
		}
	}


	//注册插件
	$.fn.extend({
		Pagination:function(fn,options){
			return this.each(function(){
				var $this = $(this);
				var pagination = $this.data('pagination');
				if(!pagination){
					pagination = new Pagination($this);
					$this.data('pagination',pagination)
				}
				if(typeof pagination[fn] == 'fnuction'){
					options = $.extend({},Pagination.DEFALUT,options)
					pagination[fn](options)
				}

			})
		}
	})



})($);