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
	
	init:function(){
		this.$elem = $('.cart-box');
		this.loadCart();
		this.bindEvent();
	},
	
	
	
}

$(function(){
	page.init();
})