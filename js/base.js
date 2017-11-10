
		// 第一步 获取placeholder 获取whichpic的href属性并赋值给placeholder的src属性
function showPic(whichpic) {
	var newsrc = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",newsrc);
}
//通过改变div的类名来实现display的none的有无
var showsecmenu = document.getElementById("main_menutwoid");
console.log(showsecmenu);
;(function showMenutwo(){
	var li = document.getElementsByClassName("testdemo");
	for (var i = 0; i < li.length; i++) {
		li[i].onmouseover = function(){
			showsecmenu.className = "main_menu main_menutwo";
		}
		li[i].onmouseout = function(){
			showsecmenu.className = "main_menutwo main_menu main_menutwo2";
		}
	}
})()
;(function killtopad(){
	var killpointer = document.getElementById("killad");
	var killadpart = document.getElementsByClassName("header_ad");
 	killpointer.onclick = function (){
 		killadpart[0].className = "main_menutwo2";
 	}
})()


