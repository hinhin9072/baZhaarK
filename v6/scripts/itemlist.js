var productTemplate = '<div class="pi-container">' + 									
									'<div class="pi-row pi-image-container">' + 
										'<div class="pi-float pi-indicator-container">' + 
											'<div class="pi-status-container">' + 
												'<div class="ind_style pi-item pi-status">' + 
												'</div>' + 
												'<div class="ind_style pi-item pi-status pi-quickReview">' + 
												'</div>' + 
											'</div>' + 
											'<div class="pi-item pi-region"><img src="images/product/jap.png"></div>' + 
											'<span class="pi-regionText">產地:日本</span>' +
										'</div>' + 
										'<div class="pi-image">' + 
											'<img src="%product%"></img>' + 
											'</div>' + 
									'</div>' + 
									'<div class="pi-row pi-more-container" onclick="listDisplayMore(this)">' + 
										'<div>' + 
											'<svg  onclick="listDisplayMore" class="more hide" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>	<g>		<g>			<circle cx="256" cy="256" r="64"/>			<circle cx="256" cy="448" r="64"/>			<circle cx="256" cy="64" r="64"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'+
										'</div>'+
									'</div>' + 
									'<div class="pi-row pi-content-container">' + 
										'<div class="pi-float pi-promo-container">' + 
											'<ul class="pi-list">' + 
												'<li class="pi-promo-item colorScheme_2">推廣優惠 1</li>' + 
											'</ul>' + 
										'</div>' + 
										'<div class="pi-desc">' + 
											'<div class="pi-name">%name%</div>' + 
											'<div class="pi-remark">100g</div>' + 
											'<div class="pi-detail"><h4>商品簡介</h4>I am some details of the product</div>' + 
										'</div>' + 
										'<div class="pi-price"><del class="pi-original">$800</del><div class="pi-discount">$500</div></div>' + 
										'<ul class="pi-tag-list">' + 
											'<li class="pi-tag-item">#標籤 1</li>' + 
											'<li class="pi-tag-item">#標籤 2</li>' + 
										'</ul>' + 
									'</div>' + 
									'<div class="pi-row pi-action-container">' + 
										'%feat%' + 
										'<div class="pi-cart button_style"><span class="visual-container"><a class="btn">加入購物車</a><span></div>' + 
										'<div class="pi-fav"><svg class="cart" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="512pt" viewBox="0 -31 512.00033 512" width="512pt"><path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"></path><path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0"></path><path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"></path></svg></div>' +
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
		} else if(i%4 == 2){
			tempStr = tempStr.replace('%product%', 'images/product/item_2.jpg');
		} else {
			tempStr = tempStr.replace('%product%', 'images/product/item.png');
		}
		
		if(i%3 == 0){			
			tempStr = tempStr.replace('%name%', '西班牙(Iberico)原個黑毛豬架 (約800-1000克)(約4-5支骨)');
		} else if(i%3 == 1){
			tempStr = tempStr.replace('%name%', '西班牙豬肉');
		} else {
			tempStr = tempStr.replace('%name%', '動物森友會是任天堂情報開發本部開發並由任天堂發行的社交模擬系列，遊戲中玩家生活在一個由擬人動物居住的村莊，展開各種活動。系列以其開放性著稱，並大量使用遊戲機內置時鐘和日曆模擬真實時間。 該系列首作的簡體中文版曾在中國大陸發行，譯作「動物森林」，而自《瑪利歐賽車8 豪華版》中文推出後改為「動物森友會」。');
		}
		
		if(i%5 == 0){			
			tempStr = tempStr.replace('%feat%', '<button class="pi-discount">大手折扣</button>');
		} else if(i%5 == 1){
			tempStr = tempStr.replace('%feat%', '<button class="pi-discount">熱銷貨品</button>');
		} else {
			tempStr = tempStr.replace('%feat%', '');
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