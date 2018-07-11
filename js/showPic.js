

function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	
	
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

/*统计body中的子元素个数
function countBodyChildren(){
		var body_element = document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);
		alert(body_element.nodeType);
}
window.onload = countBodyChildren;*/

/*点击链接弹出新的窗口
function popUp(winURL){
	window.open(winURL,"popup","width=320,height=480");
}

function prepareLinks(){
	if(!document.getElementsByTagName){ return false;}
	var links = document.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){
		if(links[i].getAttribute("class") === "popup"){
			links[i].onclick = function(){
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}*/

function prepareGallery() {
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			showPic(this);
			return false;
		}
	}
}

function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById("imagegallery")) return false;
	if(!document.getElementById) return false;
	
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","img/background.jpg");
	placeholder.setAttribute("alt","my image gallery");
	
	var description = document.createElement("p");
	description.setAttribute("id","description")
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	
	var gallery = document.getElementById("imagegallery");
	insertAfter(description,gallery);
	insertAfter(placeholder,gallery);
}

//addLoadEvent(prepareLinks);
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);



