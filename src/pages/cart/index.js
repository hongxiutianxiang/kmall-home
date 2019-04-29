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
var _nav = require('pages/common/nav')
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
			_this.renderCart(cart)			
		},function(){
			_this.$elem.html('<p class="empty-msg">购物车加载失败，请稍后再试</p>')
		})
	},
	renderCart:function(cart){
		_nav.loadCartCount();
		if(cart.cartList.length > 0){
			//缓存最新的购物车总价格,用来提交结算时校验
			this.totalCartPrice = cart.totalCartPrice
			//处理图片
			cart.cartList.forEach(function(item){
				item.product.mainImg = item.product.images.split(',')[0]
				console.log(cart)
			})
			var html = _util.render(tpl,cart);
			this.$elem.html(html);
		}else{
			this.$elem.html('<p class="empty-msg">购物车空空如也。。。</p>')
		}
	},
	bindEvent:function(){
		var _this = this;
		
		//5.修改数量
		this.$elem.on('click','.count-btn',function(){
			var _this = this;

		})

		//6.去结算
		this.$elem.on('click','.btn-submit',function(){
			if(_this.totalCartPrice > 0){
				window.location.href = './order-confirm.html'
			}else{
				_util.showErrorMsg('请选择购物车信息后再提交')
			}
			
		})

	}
	
	
}

$(function(){
	page.init();
})