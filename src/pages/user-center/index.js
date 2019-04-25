
require('pages/common/nav/')
require('pages/common/logo')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')

require('./index.css')

var _util = require('util')
var _user = require('service/user')
var _side = require('common/side')


var page = {
	init:function(){
		this.onload();
	},
	onload:function(){
	
	},
	
}


$(function(){
	page.init();
})