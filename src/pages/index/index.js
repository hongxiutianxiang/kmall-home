
require('./index.css')

require('pages/common/nav/')
require('pages/common/logo')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')


import Swiper from'swiper'
import 'swiper/dist/css/swiper.min.css' 

var _util = require('util')
var _user = require('service/user')
var _side = require('pages/common/side')
var keywordsTpl = require('./keywords.tpl')
var swiperTpl = require('./swiper.tpl')




var page = {

	keywords:[
		{item:[{name:'手机'},{name:'电视'}]},
		{item:[{name:'电脑'},{name:'空调'}]},
		{item:[{name:'洗衣机'},{name:'Ipad'}]},
		{item:[{name:'手机'},{name:'电视'}]},
		{item:[{name:'电脑'},{name:'空调'}]},
		{item:[{name:'洗衣机'},{name:'Ipad'}]},
		{item:[{name:'手机'},{name:'电视'}]},
		{item:[{name:'电脑'},{name:'空调'}]},
		{item:[{name:'洗衣机'},{name:'Ipad'}]},
		{item:[{name:'手机'},{name:'电视'}]},
		{item:[{name:'电脑'},{name:'空调'}]},
		{item:[{name:'洗衣机'},{name:'Ipad'}]},
	], 
	swiper:[
		{images:require('images/carousel/bizhia.jpg'),categoryId:'11'},
		{images:require('images/carousel/bizhib.jpg'),categoryId:'22'},
		{images:require('images/carousel/bizhic.jpg'),categoryId:'33'},
		{images:require('images/carousel/bizhid.jpg'),categoryId:'44'},
		{images:require('images/carousel/bizhie.jpg'),categoryId:'55'},

	],

	init:function(){
		this.loadKeywords();
		this.loadSwiper();
	},
	loadKeywords:function(){
		var html = _util.render(keywordsTpl,{
			keywords:this.keywords
		})
		$('.keywords').html(html)
	},
	loadSwiper:function(){
		var html = _util.render(swiperTpl,{
			swiper:this.swiper
		})
		$('.swiper-container').html(html)
		var mySwiper = new Swiper ('.swiper-container', {
		    loop: true, // 循环模式选项
		    
		    // 如果需要分页器
		    pagination: {
		      el: '.swiper-pagination',
		      clickable:true,
		    },
		    
		    // 如果需要前进后退按钮
		    navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
		  })        		
	}
	
}


$(function(){
	page.init();
})