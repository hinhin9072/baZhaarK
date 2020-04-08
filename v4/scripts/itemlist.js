var productTemplate = '<div class="pi-container">' + 
									'<div class="pi-row pi-image-container">' + 
										'<div class="pi-float pi-indicator-container">' + 
											'<div class="pi-status-container">' + 
												'<div class="pi-item pi-status">' + 
												'</div>' + 
												'<div class="pi-item pi-status pi-quickReview">' + 
												'</div>' + 
											'</div>' + 
											'<div class="pi-item pi-region"><img src="images/product/jap.png"></div>' + 
											'<span class="pi-regionText">產地:日本</span>' +
										'</div>' + 
										'<div class="pi-image">' + 
											'<img src="%product%"></img>' + 
											'</div>' + 
									'</div>' + 
									'<div class="pi-row pi-content-container">' + 
										'<div class="pi-float pi-promo-container">' + 
											'<ul class="pi-list">' + 
												'<li class="pi-promo-item">推廣優惠 1</li>' + 
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
										'<div class="pi-cart"><span>加入購物車<span></div>' + 										
									'</div>' + 
								'</div>';
								
function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
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