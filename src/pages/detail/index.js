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
		this.$elem = $('.detail-box')
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		if(this.params.productId){
			this.loadProductDetail()
		}
	},
	loadProductDetail:function(){
		var _this = this;
		_product.getProductDetail(this.params,function(product){
			if(product){
				//处理图片
				product.images = product.images.split(',')
				product.mainImg = product.images[0]

				var html = _util.render(tpl,product)
				_this.$elem.html(html)
			}else{
				_this.$elem.html('<div class="some">您找的商品走丢了</div>')
			}
		},function(msg){
			_this.$elem.html('<div class="some">您找的商品走丢了</div>')
		})
	},
	bindEvent:function(){
		var _this = this;



		//2.处理商品数量
		this.$elem.on('click','.count-input',function(){
			var $this = $(this);
			var $input = $('.count-input');
			var current = parseInt($input.val());
			if($this.hasClass('plus')){
				$input.val(current + 1 >= _this.stock ? _this.stock : current + 1)
			}
			else if($this.hasClass('minus')){
				$input.val(current - 1 <= 1 ? 1 : current - 1)
			}

		})

		//3.添加购物车
		this.$elem.on('click','.add-cart-btn',function(){
			_cart.addCart({
				productId:_this.params.productId,
				count:$('.count-input').val(),
			},function(){
				window.location.href = './result.html?type=addCart'
			},function(msg){
				_util.showErrorMsg(msg)
			})

		})



	}
	
	
}

$(function(){
	page.init();
})