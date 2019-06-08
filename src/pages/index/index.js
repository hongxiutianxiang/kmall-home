
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
var floorTpl = require('./floor.tpl')



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
	], 
	swiper:[
		{images:require('images/carousel/bizhia.jpg'),categoryId:'5cbb135d75406c3f406e7480'},
		{images:require('images/carousel/bizhib.jpg'),categoryId:'5cbb135d75406c3f406e7480'},
		{images:require('images/carousel/bizhic.jpg'),categoryId:'5cbb135d75406c3f406e7480'},
		{images:require('images/carousel/bizhid.jpg'),categoryId:'5cbb135d75406c3f406e7480'},
		{images:require('images/carousel/bizhie.jpg'),categoryId:'5cbb135d75406c3f406e7480'},
	],
	floor:[
		{
			title:'F1 手机',
			item:[
				{text:'手机',image:require('images/floor/f1-1.jpg'),categoryId:'5cbad58475406c3f406e747c'},
				{text:'手机',image:require('images/floor/f1-2.jpg'),categoryId:'5cbad58475406c3f406e747c'},
				{text:'手机',image:require('images/floor/f1-3.jpg'),categoryId:'5cbad58475406c3f406e747c'},
				{text:'手机',image:require('images/floor/f1-4.jpg'),categoryId:'5cbad58475406c3f406e747c'},
				{text:'手机',image:require('images/floor/f1-5.jpg'),categoryId:'5cbad58475406c3f406e747c'},
			]
		},
		{
			title:'F2 电脑',
			item:[
				{text:'手机',image:require('images/floor/f2-1.jpg'),categoryId:'5cbad68f75406c3f406e747d'},
				{text:'手机',image:require('images/floor/f2-2.jpg'),categoryId:'5cbad68f75406c3f406e747d'},
				{text:'手机',image:require('images/floor/f2-3.jpg'),categoryId:'5cbad68f75406c3f406e747d'},
				{text:'手机',image:require('images/floor/f2-4.jpg'),categoryId:'5cbad68f75406c3f406e747d'},
				{text:'手机',image:require('images/floor/f2-5.jpg'),categoryId:'5cbad68f75406c3f406e747d'},
			]
		},
		{
			title:'F3 手机',
			item:[
				{text:'手机',image:require('images/floor/f1-1.jpg'),categoryId:'5cbad75a75406c3f406e747e'},
				{text:'手机',image:require('images/floor/f1-2.jpg'),categoryId:'5cbad75a75406c3f406e747e'},
				{text:'手机',image:require('images/floor/f1-3.jpg'),categoryId:'5cbad75a75406c3f406e747e'},
				{text:'手机',image:require('images/floor/f1-4.jpg'),categoryId:'5cbad75a75406c3f406e747e'},
				{text:'手机',image:require('images/floor/f1-5.jpg'),categoryId:'5cbad75a75406c3f406e747e'},
			]
		},
		{
			title:'F4 电脑',
			item:[
				{text:'手机',image:require('images/floor/f2-1.jpg'),categoryId:'5cbb06e075406c3f406e747f'},
				{text:'手机',image:require('images/floor/f2-2.jpg'),categoryId:'5cbb06e075406c3f406e747f'},
				{text:'手机',image:require('images/floor/f2-3.jpg'),categoryId:'5cbb06e075406c3f406e747f'},
				{text:'手机',image:require('images/floor/f2-4.jpg'),categoryId:'5cbb06e075406c3f406e747f'},
				{text:'手机',image:require('images/floor/f2-5.jpg'),categoryId:'5cbb06e075406c3f406e747f'},
			]
		},
	],

	init:function(){
		this.loadKeywords();
		this.loadSwiper();
		this.loadFloor();
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
		    autoplay:{
		    	delay:3000
		    },
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
	},
	loadFloor:function(){
		var html = _util.render(floorTpl,{
			floor:this.floor
		})
		$('.floor-wrap').html(html)
	}
	
}


$(function(){
	page.init();
})