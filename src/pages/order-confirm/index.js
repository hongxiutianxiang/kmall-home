require('pages/common/nav/')
require('pages/common/logo')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')

require('./index.css')


var _util = require('util')
var _order = require('service/order')
var shippingTpl = require('./shipping.tpl')
var productTpl = require('./product.tpl')

var page = {
	
	init:function(){
		this.$shippingBox = $('.shipping-box');
		this.$productBox = $('.product-box');
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		this.loadShipping();
		this.loadProductList();
	},
	bindEvent:function(){
		var _this = this;
			
	},
	loadShipping:function(){

	},
	loadProductList:function(){
		var _this = this
		_order.getOrderProductList(function(result){
			if(result.cartList.length > 0){
				//缓存最新的购物车总价格,用来提交结算时校验
				this.totalCartPrice = result.totalCartPrice
				//处理图片
				result.cartList.forEach(function(item){
					item.product.mainImg = item.product.images.split(',')[0]
					console.log(result)
				})
				var html = _util.render(productTpl,result);
				_this.$productBox.html(html);
			}else{
				this.$elem.html('<p class="empty-msg">购物车空空如也。。。</p>')
			}	
		},function(){
			this.$productBox.html('<p>加载购物车信息失败</p>')
		})
	}
	
}

$(function(){
	page.init();
})