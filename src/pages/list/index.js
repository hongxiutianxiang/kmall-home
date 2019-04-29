require('pages/common/nav/')
require('pages/common/logo')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')
require('util/pagination')

require('./index.css')


var _util = require('util')
var _product = require('service/product')
var tpl = require('./index.tpl')

var page = {
	listParam:{
		keyword:_util.getParamFromUrl('keyword') || '',
		categoryId:_util.getParamFromUrl('categoryId') || '',
		orderBy:_util.getParamFromUrl('orderBy') || 'default',
		page:_util.getParamFromUrl('page') || 1,
	},
	init:function(){
		this.initPagination();
		this.loadProductList();
		this.bindEvent();
	},
	initPagination:function(){
		var _this = this
		this.$pagination = $('.pagination-box');
		this.$pagination.on('page-change',function(ev,value){
			_this.listParam.page = value;
			_this.loadProductList();
		})
		this.$pagination.pagination();
	},
	bindEvent:function(){
		//绑定排序事件
		var _this = this
		$('.sort-item').on('click',function(){
			var $this = $(this);
			if($this.hasClass('default')){
				if($this.hasClass('active')){
					return;
				}
				$this.addClass('active')
				.siblings('.sort-item').removeClass('active');

				_this.listParam.orderBy = 'default'
			}
			else if($this.hasClass('price')){
				$this.addClass('active')
				.siblings('.sort-item').removeClass('active');

				if($this.hasClass('asc')){
					$this.addClass('desc')
					.removeClass('asc')
					_this.listParam.orderBy = 'price_desc'
				}
				else if($this.hasClass('desc')){
					$this.addClass('asc')
					.removeClass('desc')
					_this.listParam.orderBy = 'price_asc'
				}
			}
			_this.listParam.page = 1;
			_this.loadProductList();
		})
	},
	loadProductList:function(){
		var _this = this
		this.listParam.keyword ? (delete this.listParam.categoryId) : (delete this.listParam.keyword)
		_product.getProductList(this.listParam,function(result){
			
			if(result.list.length > 0){
				result.list.forEach(function(product){
					product.image = product.images.split(',')[0]
				})

				var html = _util.render(tpl,{
					list:result.list
				})
				$('.product-list-box').html(html)	
			
				//调用分页组件
				_this.$pagination.pagination('render',{
					current:result.current,
					total:result.total,
					pageSize:result.pageSize,
				})

			}else{
				$('.product-list-box').html('<div class="some">您找的商品走丢了...</div>')
			}
			
		},function(msg){
			_util.showErrorMsg(msg)
		})
	},
}

$(function(){
	page.init();
})