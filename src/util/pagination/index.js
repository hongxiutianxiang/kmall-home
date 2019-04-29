require('./index.css')
var tpl = require('./index.tpl')
var _util = require('util')

;(function($){

	function Pagination($elem){
		this.$elem = $elem
		this.bindEvent();
	}
	Pagination.prototype = {
		constructor:Pagination,
		bindEvent:function(){
			var _this = this 
			this.$elem.on('click','.page-item',function(){
				var $this = $(this)
				if($this.hasClass('active') || $this.hasClass('disable')){
					return
				}
				_this.$elem.trigger('page-change',$this.data('value'))
			})
		},
		render:function(options){
			// console.log('aa',options)
			//1.计算总页数
			var pages = Math.ceil(options.total/options.pageSize)
			// console.log(pages)
			if(pages <= 1){
				return
			}
			var start = options.current - options.range > 1 ? (options.current - options.range) : 1
			var end = options.current + options.range > pages ? pages : (options.current + options.range)
			var prev = options.current - 1;
			var next = options.current + 1;
			var pageArray = [];

			pageArray.push({
				name:'上一页',
				value:prev,
				disable:prev == 0 ? true : false
			})

			for(var i = start;i<=end;i++){
				pageArray.push({
					name:i,
					value:i,
					active:options.current == i
				})
			}
			pageArray.push({
				name:'下一页',
				value:next,
				disable:next > pages ? true :false
			})

			var html = _util.render(tpl,{
				pageArray:pageArray,
				current:options.current,
				pages:pages
			})
			this.$elem.html(html)

		}
	}
	Pagination.DEFALUT = {
		range:3
	}


	//注册插件
	$.fn.extend({
		pagination:function(fn,options){

			return this.each(function(){
				var $this = $(this);
				var pagination = $this.data('pagination');

				if(!pagination){
					pagination = new Pagination($this);
					$this.data('pagination',pagination)
				}
				if(typeof pagination[fn] == 'function'){
					options = $.extend({},Pagination.DEFALUT,options)
					pagination[fn](options)
				}

			})
		}
	})



})($);