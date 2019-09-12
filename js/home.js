//控制轮播图的js代码
var items = document.getElementsByClassName('item');//获取图片li
var goPreBtn = document.getElementById('goPre');//获取左按钮
var goNextBtn = document.getElementById('goNext');//获取右按钮
var points = document.getElementsByClassName('point');//轮播图按钮
var index =0;//index表示第几张图片在展示,第index张图片有active这个类名字(拥有这个类名将会把图层变高)
var timerHandler;

var clearActive = function(){
	for(var i = 0;i < items.length;i++){//把所有的li还原
		items[i].className = 'item';//把第i个li的类名改成item
	}
	for(var i = 0;i < points.length;i++){//把所有的轮播图按钮还原
		points[i].className = 'point';
	}
}

var goIndex = function(){
	clearActive();//调用还原的方法
	points[index].className = 'point active';//把第index个轮播图按钮的类名改成point active
	items[index].className = 'item active';//把第index张li的类名改成item active
}

var goNext = function(){//让图片去到下一张
	if(index < 8){//更改图片数量需修改
		index++;
	}else{
		index = 0;
	}
	
	goIndex();
	clearInterval(timerHandler)
	timerHandler = setInterval(function(){
		goNext();
	},4000);
}

var goPre = function(){//让图片去到上一张
	if(index == 0){
		index = 8;//更改图片数量需修改
	}else{
		index--;
	}
	
	goIndex();
}

goNextBtn.addEventListener('click',function(){
	goNext();
})

goPreBtn.addEventListener('click',function(){
	goPre();
})

for(var i =0; i < 9;i++){//修改按钮数量需更改9
	points[i].addEventListener('click',function(){
		var pointIndex = this.getAttribute('data-index');
		index = pointIndex;
		goIndex();
	})
}

setInterval(function(){
	goNext();
},4000)//轮播图自动播放，目前时间为4秒