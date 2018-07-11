//为页面中的<abbr>创建定义列表
function displayAbbreviations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得所有缩略词
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	//遍历所有缩略词
	for (var i=0;i<abbreviations.length;i++){
		if (abbreviations[i].childNodes.length < 1) continue;
		var definition = abbreviations[i].getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建定义列表<dl>
	var dlist = document.createElement("dl");
	//遍历定义
	for (key in defs){
		//创建定义标题<dt>
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述<dd>
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(defs[key]);
		ddesc.appendChild(ddesc_text);
		//把<dt>和<dd>添加到<dl>
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}

//将页面中的<blockquote>的cite表现出来
function displayCitations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//获得所有blockquote元素节点的引用
	var quotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for (i=0;i<quotes.length;i++){
		//如果没有cite属性就跳到下一循环
		if(!quotes[i].getAttribute("cite")) continue;
		//保存cite属性
		var url = quotes[i].getAttribute("cite");
		//获得当前引用中的所有元素节点
		var quoteChildren = quotes[i].getElementsByTagName("*");
		//如果没有元素节点就跳到下一循环
		if (quoteChildren.length < 1) continue;
		//获得最后一个元素节点
		var elem = quoteChildren[quoteChildren.length - 1];
		//创建标记
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		//把标记加到最后一个元素几点的位置
		elem.appendChild(superscript);
	}
}

function displayAccessKeys(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//获得文档中的所有链接
	var links = document.getElementsByTagName("a");
	//创建一个数组，保存快捷键
	var akeys = new Array();
	//遍历链接
	for (var i=0;i<links.length;i++){
		if(!links[i].getAttribute("accesskey")) continue;
		var key = links[i].getAttribute("accesskey");
		var text = links[i].lastChild.nodeValue;
		akeys[key] = text;
	}
	var list = document.createElement("ul");
	list.setAttribute("id","keyContact")
	for(key in akeys){
		var item = document.createElement("li");
		var item_text = document.createTextNode(key+":"+akeys[key]);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskey");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccessKeys);
