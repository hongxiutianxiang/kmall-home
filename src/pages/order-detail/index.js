
require('pages/common/nav/')
require('pages/common/logo')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')
require('util/pagination')

require('./index.css')

var _util = require('util')
var _order = require('service/order')
var _user = require('service/user')
var _side = require('pages/common/side')
var tpl = require('./index.tpl')

var page = {
	params:{
		orderNo:_util.getParamFromUrl('orderNo') || 1,
	},
	init:function(){
		this.$elem = $('.order-box');
		this.onload();
		this.loadOrderDetail();
		this.bindEvent();
	},
	onload:function(){
		_side.render('order-list');
	},
	loadOrderDetail:function(){
		var _this = this;
		if(this.params.orderNo){
			_order.getOrder(this.params,function(order){
				_this.renderOrderDetail(order)
			},function(msg){
				$('.product-list-box').html('<div class="some">获取订单失败</div>')
			})	
		}else{
			$('.product-list-box').html('<div class="some">订单号不存在</div>')
		}
		
	},
	renderOrderDetail:function(order){
		if(order){
			//适配数据
			order.productList.forEach(function(product){
				product.image = product.images.split(',')[0]
			})
			order.createdTime = new Date(order.createdAt).toLocaleString()
			order.canPay = order.canCancel = order.status == '10'
			var html = _util.render(tpl,order)
			this.$elem.html(html)
		}else{
			this.$elem.html('<div class="some">订单不存在</div>')
		}
	},
	bindEvent:function(){
		var _this = this;
		this.$elem.on('click','.btn-cancel',function(){
			if(_util.confirm('您确定要取消这个订单吗？')){
				_order.cancelOrder(_this.params,function(order){
					_this.renderOrderDetail(order);
				},function(msg){
					_util.showErrorMsg(msg)
				})
			}
		})
	}
}


$(function(){
	page.init();
})