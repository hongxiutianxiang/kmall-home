require('pages/common/nav/')
require('pages/common/logo')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')
require('util/pagination')

require('./index.css')


var _util = require('util')
var _product = require('service/product')
var _cart = require('service/cart')
var tpl = require('./index.tpl')

var page = {
	params:{
		productId:_util.getParamFromUrl('productId') || '',
	},
	init:function(){
		this.$elem = $('.cart-box');
		this.loadCart();
		this.bindEvent();
	},
	loadCart:function(){
		var _this = this;
		_cart.getCart(function(cart){
			if(cart.cartList.length > 0){
				//处理图片
				cart.cartList.forEach(function(item){
					item.product.mainImg = item.product.images.split(',')[0]
					console.log(cart)
				})
				var html = _util.render(tpl,cart);
				_this.$elem.html(html);
			}else{
				_this.$elem.html('<p class="empty-msg">购物车空空如也。。。</p>')
			}
			
		},function(){
			_this.$elem.html('<p class="empty-msg">购物车加载失败，请稍后再试</p>')
		})
	},
	bindEvent:function(){
		var _this = this;
	}
	
	
}

$(function(){
	page.init();
})