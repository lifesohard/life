//@1获取样式  function getStyle(obj,styles){	return obj.currentStyle ? obj.currentStyle[styles]							: getComputendStyle(obj,false)[styles]}

//@2css函数 获取行间样式-------------------------function setStyle(obj,type,value){	return arguments.length == 2 ? obj.style[type]								 : obj.style[type] = value;}

//@3数组的排序-----------------------------------
function arraySort(preNumber,nextNumber){	if(preNumber > nextNumber)		return 1;	else if(preNumber < nextNumber)		return -1;	return 0;}

//@4检测浏览器插件----------------------------------
 function box(name){
  	var name=name.toLowerCase();		var plugins = window.navigator.plugins;	
  	for (var i = 0; i < plugins.length; i++)		return plugins[i].name.toLowerCase().indexOf(name)>-1 ? true : false;		
 }

   function iE(name){
  	try{
  		new ActiveXObject(name);
  		return true;
  	}catch(e){
  		return false;
  	}
  }  //检测ie浏览器是否有插件
	function hasF(){
		var ss=box('Flash');
		if(ss==undefined){
			return iE('ShockwaveFlash.ShockwaveFlash');
		}else{
			return ss;
		}
	}	//跨浏览器兼容
	alert(hasF());
	alert(hasF());
	
	
	
//@5  获取getByClassName元素--------------------
function getClass(oParent,sClass){   //oParent 传进来的父级， sClass相同的class名
  var aSout=[];     //空数组 用来保留 与sClass相同的节点
  var aTag=oParent.getElementsByTagName('*');  //获取 父元素里面的所有子节点
  for (var i=0; i<aTag.length; i++){      //循环
    if(aTag[i].className==sClass){		//判断子节点所有的class名与传入的class相同的节点
	  aSout.push(aTag[i]);				//将所有相同的节点添加入 数组中
	}
  }
  return aSout;						//返回改数组
}

//@6  通过浏览器检测您的具体位置------------
//http://www.iefans.net/liulanqi-zhidao-weizhi/
if(navigator.geolocation){
	navigator.geolocation.getCurrentPosition(successFunction);
}else{
  alert('浏览器不支持')
 }

function successFunction(position){
var lat = position.coords.latitude;
var long = position.coords.longitude;
alert('纬度 :'+lat+' 经度 '+long); 
}

//@7  移除父级元素下面的空白节点
var oU=document.getElementById('ul');
function box(node){
  for (var i=0; i<node.childNodes.length; i++){
    if(node.childNodes[i].nodeType==3&&/^\s+$/.test(node.childNodes[i].nodeValue)){
	  node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
	}
  }
  return node;
}
alert(box(oU).firstChild.nodeName);

//mothed two:
var oU=document.getElementById('ul');
	function box(node){
	  var ret=[];
	  for (var i=0; i<node.length; i++){		
		if(node[i].nodeType==3&&/^\s+$/.test(node[i].nodeValue)){
		  continue;
		}else{
		  ret.push(node[i]);
		}
	  }
	  return ret;
	}
var ss=box(oU.childNodes);


/*
js ie与firefox 不同整理
1.数组   var ss=[1,2,]  
2.var all=document.getElementsByTagName('*');
3.css(); name.currentStyle.property;   getComputedStyle(name,false);
4.getElementById('').getAttribute('class/className')
5.IE没有插件是空间    other Browser  navigator.plugins.name/
6.ie不支持不符合 w3c的name命名 getElementsByName();
7.firstChild  lastChild  firstElementChild
8.在给网页添加元素的时候，有些元素如 input frame 等ie6 7不兼容
9.alert(Node)不兼容， 需要创建一个全局Node对象，然后把所有的变量名放入 模拟
	if(typeof Node != 'undefined'){
		alert(Node.TEXT_NODE);
	}else{
	   window.Node={
	   ELEMENT_NODE:1,
	   TEXT_NODE:3
	   }
	   alert(Node.TEXT_NODE);
	 }
10.document.childNodes[0].nodeType IE为8  是注释 而其他浏览器则是<!doctype html>标签
11. IE在获取URL的时候是文字，而其他的是乱码  alert(document.URL);	 
12. Firefox 以及Chrome支持传入的event事件，而ie只支持window.event
	example
		document.onclick=function(ev){
			var oEvent=ev||event;
			alert(oEvent.clientX||oEvent.clientY);
		}
13.	attachEvent于addEventListener的区别
		1.接受参数不同，一个2个，一个3个
		2.事件名不同，一个需要On，一个直接写名称  example  onclick     click
		3.IE9一下解析顺序相反
14. 
*/































	
