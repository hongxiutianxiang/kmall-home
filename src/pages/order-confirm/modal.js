
var _util = require('util')
var _cities = require('util/cities')
var _shipping = require('service/shipping')
var modalTpl = require('./modal.tpl')

var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('')
	}
}

var _modal = {
	show:function(){
		this.$modalBox = $('.modal-box')
		this.loadModal();
		this.bindEvent();
	},
	loadModal:function(){
		var html = _util.render(modalTpl);
		this.$modalBox.html(html)
		this.loadProvinces()
	},
	hideModal:function(){
		this.$modalBox.empty();
	},
	loadProvinces:function(){
		var provinces = _cities.getProvinces();
		var provincesOptions = this.getSelectOptions(provinces);
		var $provincesSelect = $('.province-select')
		$provincesSelect.html(provincesOptions)
	},
	loadCities:function(provincesName){
		var cities = _cities.getCities(provincesName)
		var citiesOptions = this.getSelectOptions(cities);
		var $citiesSelect = $('.city-select');
		$citiesSelect.html(citiesOptions)
	},
	getSelectOptions:function(arr){
		var html = '<option value="">请选择</option>'
		for(var i = 0;i<arr.length;i++){
			html += '<option value="'+arr[i]+'">'+arr[i]+'</option>'
		}
		return html
	},
	bindEvent:function(){
		var _this = this;
		//1.关闭地址框
		this.$modalBox.on('click','.close',function(){
			_this.hideModal();
		})
		//阻止冒泡
		this.$modalBox.on('click','.modal-container',function(ev){
			ev.stopPropagation();
		})
		//2.监听省份事件获取城市
		this.$modalBox.on('change','.province-select',function(){
			var $this = $(this)
			_this.loadCities($this.val())
		})


		this.$modalBox.find('#btn-submit').on('click',function(){
			//1.用户注册
			_this.submit();
		})

		this.$modalBox.find('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit();
			}
		})
	},
	submit:function(){
		var _this = this
		//1.获取数据
		var formData = {
			name:$.trim($('[name="name"]').val()),
			province:$.trim($('[name="province"]').val()),
			city:$.trim($('[name="city"]').val()),
			address:$.trim($('[name="address"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			zip:$.trim($('[name="zip"]').val()),
		}
		//2.验证数据
		var validateResult = this.validate(formData);
		//3.发送请求
		if(validateResult.status){//验证通过
			formErr.hide()
			//增加地址
			_shipping.addShipping(formData,function(shippings){
				_util.showSuccessMsg('添加地址成功')
				$('.shipping-box').trigger('get-shippings',[shippings]);
				_this.hideModal();
			},function(msg){
				formErr.show(msg)
			})
		}
		else{//验证失败
			formErr.show(validateResult.msg)
		}
	},
	validate:function(formData){
		var result = {
			status:false,
			msg:''
		}
		//收货人姓名不能为空
		if(!_util.validate(formData.name,'require')){
			result.msg = '收货人姓名不能为空'
			return result;
		}
		//收货人姓名格式不正确
		if(!_util.validate(formData.name,'username')){
			result.msg = '收货人姓名格式不正确'
			return result;
		}
		//城市不能为空
		if(!_util.validate(formData.city,'require')){
			result.msg = '城市不能为空'
			return result;
		}
		//密码格式不正确
		if(!_util.validate(formData.password,'password')){
			result.msg = '密码格式不正确'
			return result;
		}
		//两次密码不一致
		if(formData.password != formData.repassword){
			result.msg = '两次密码不一致'
			return result;
		}
		//手机号不能为空
		if(!_util.validate(formData.phone,'require')){
			result.msg = '手机号不能为空'
			return result;
		}
		//手机号格式不正确
		if(!_util.validate(formData.phone,'phone')){
			result.msg = '手机号格式不正确'
			return result;
		}
		//邮箱不能为空
		if(!_util.validate(formData.email,'require')){
			result.msg = '邮箱不能为空'
			return result;
		}
		//邮箱格式不正确
		if(!_util.validate(formData.email,'email')){
			result.msg = '邮箱格式不正确'
			return result;
		}

		result.status = true;
		return result;
	}
}

module.exports = _modal