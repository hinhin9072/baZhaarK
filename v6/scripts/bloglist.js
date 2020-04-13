var productTemplate = '<div class="pi-container container_style">' + 									
									'<div class="pi-row pi-image-container">' + 
										'<div class="pi-float pi-indicator-container">' + 
											'<div class="pi-date-container">' + 
												'<div class="pi-item pi-date">3 Mar 2020' + 
												'</div>' + 
											'</div>' + 
										'</div>' + 
										'<div class="pi-image">' + 
											'<img src="%product%"></img>' + 
											'</div>' + 
									'</div>' + 
									'<div class="pi-row pi-content-container">' + 
										'<div class="pi-desc">' + 
											'<p class="pi-name"><a>%name%</a></p>' + 
										'</div>' + 
										'<ul class="pi-tag-list">' + 
											'<li class="pi-tag-item">#標籤 1</li>' + 
											'<li class="pi-tag-item">#標籤 2</li>' + 
										'</ul>' + 
									'</div>' + 
								'</div>';
								
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function listDisplayMore(el){
	var container = el.parentNode;
	if (container.classList.contains('expand')) {		
		container.className = container.className.replace(' expand', '');
	} else {
		container.className += " expand"
	}
	
	
}

var loadItems = function(el, max, padCount, desktopCount){
	var innerHTMLStr = '';
	var tempStr = '';
	for(var i =0; i < max; i ++){
		innerHTMLStr += '<li class="pi-item-container ';
		if(i < desktopCount){
			innerHTMLStr += 'desktopOnly';
		} else if(i < desktopCount + padCount){
			innerHTMLStr += 'excludeMobile';
		}
		
		tempStr = productTemplate;
		if(i%4 == 0){			
			tempStr = tempStr.replace('%product%', 'images/product/item_0.jpg');
		} else if(i%4 == 1){
			tempStr = tempStr.replace('%product%', 'images/product/item_1.jpg');
		} else {
			tempStr = tempStr.replace('%product%', 'images/product/item_2.jpg');
		}
		
		if(i%3 == 0){			
			tempStr = tempStr.replace('%name%', '西班牙(Iberico)原個黑毛豬架 (約800-1000克)(約4-5支骨)');
		} else if(i%3 == 1){
			tempStr = tempStr.replace('%name%', '西班牙豬肉');
		} else {
			tempStr = tempStr.replace('%name%', '動物森友會是任天堂情報開發本部開發並由任天堂發行的社交模擬系列，遊戲中玩家生活在一個由擬人動物居住的村莊，展開各種活動。系列以其開放性著稱，並大量使用遊戲機內置時鐘和日曆模擬真實時間。 該系列首作的簡體中文版曾在中國大陸發行，譯作「動物森林」，而自《瑪利歐賽車8 豪華版》中文推出後改為「動物森友會」。');
		}
		
		innerHTMLStr += '">' + tempStr + '</li>';
	}
	
	el.innerHTML = innerHTMLStr;
	
}

onChangeListView = function(isList){
	var itemList = document.getElementById('item-main-list'),
	blcView = document.getElementById('blcView'),
	listView = document.getElementById('listView');
	if(isList){
		itemList.className += " listView";
		listView.className += " hide";
		blcView.className = blcView.className.replace(' hide', '');
		
	} else 
	{
		itemList.className = itemList.className.replace(' listView', '');
		blcView.className += " hide";
		listView.className = listView.className.replace(' hide', '');
	}
}

window.addEventListener('load', function () {
	
	document.getElementById('listView').addEventListener("click", function(){onChangeListView(true)});
	document.getElementById('blcView').addEventListener("click", function(){onChangeListView(false)});
	
});