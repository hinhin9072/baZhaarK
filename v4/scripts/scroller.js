var scroller; 
var index = {
	overviews: null,
	details: null,
	info: null,
	offers: null,
	reviews: null
};  
var scrollerTabs = {
	overviews: null,
	details: null,
	info: null,
	offers: null,
	reviews: null
};

var getPosition = function(element) {
  var x = 0;
  var y = 0;
  while ( element ) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}

var scrollerAction = function(){
	var offset = 60;
	if (document.body.scrollTop + offset >= getPosition(index.details).y && document.body.scrollTop + offset < getPosition(index.info).y) {
		scroller.style.left = scrollerTabs.details.offsetLeft;
		scroller.style.width = scrollerTabs.details.offsetWidth;
	} else if(document.body.scrollTop + offset >= getPosition(index.info).y && document.body.scrollTop + offset < getPosition(index.offers).y){
		scroller.style.left = scrollerTabs.info.offsetLeft;
		scroller.style.width = scrollerTabs.info.offsetWidth;
	} else if(document.body.scrollTop + offset >= getPosition(index.offers).y && document.body.scrollTop + offset < getPosition(index.reviews).y){
		scroller.style.left = scrollerTabs.offers.offsetLeft;
		scroller.style.width = scrollerTabs.offers.offsetWidth;
	} else if(document.body.scrollTop + offset >= getPosition(index.reviews).y){
		scroller.style.left = scrollerTabs.reviews.offsetLeft;
		scroller.style.width = scrollerTabs.reviews.offsetWidth;
	} else {
		scroller.style.left = scrollerTabs.overviews.offsetLeft;
		scroller.style.width = scrollerTabs.overviews.offsetWidth;
	}
}

	
scroller = document.getElementById('scroller');

index.overviews = document.getElementById('tab-overviews');
index.details = document.getElementById('tab-details');
index.info = document.getElementById('tab-info');
index.offers = document.getElementById('tab-offers');
index.reviews = document.getElementById('tab-reviews');

scrollerTabs.overviews = document.getElementById('menu-overviews');
scrollerTabs.details = document.getElementById('menu-details');
scrollerTabs.info = document.getElementById('menu-info');
scrollerTabs.offers = document.getElementById('menu-offers');
scrollerTabs.reviews = document.getElementById('menu-reviews');

scroller.style.left = scrollerTabs.overviews.offsetLeft;
scroller.style.width = scrollerTabs.overviews.offsetWidth;

window.onscroll = function() {scrollFunction(); scrollerAction()};

