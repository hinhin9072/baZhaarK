var pageMask;
var dropdownTriggers;
var dropdownMenu;
var checkDropdownFocus = {
	isTriggerFocus: false,
	isDropdownFocus: false,
}

var slideNavTrigger;
var textSearchInputs;
var btmSlideNavTrigger;
var contentMask;

var onInputSearch = function(evt, input){
	if(input.value.trim() != ''){
		input.parentNode.classList.add('text-in');
	} else {
		input.parentNode.className = 'search';
	}
}

var onShowMenu = function(isShow, type){
	
	checkDropdownFocus['is' + type + 'Focus'] = isShow;
	if(isShow){
		dropdownMenu.className = dropdownMenu.className.replace(' dropdownShow', '');
		dropdownMenu.classList.add('dropdownShow');
	} else {
		setTimeout(function(){
			if(
				!checkDropdownFocus.isTriggerFocus &&
				!checkDropdownFocus.isDropdownFocus){				
				dropdownMenu.className = dropdownMenu.className.replace(' dropdownShow', '');
			}
		}, 500);
	}
}

var onShowSlideMenu = function(isShow){
	var body = document.getElementsByTagName("BODY")[0];
	isShow = isShow? isShow : !document.body.classList.contains('showSlide');
	
	if(isShow){
		if (!document.body.classList.contains('showSlide')) {
			body.className = body.className + ' showSlide';
		}
	} else {
		if (document.body.classList.contains('showSlide')) {
			body.className = body.className.replace(' showSlide', '');
		}		
	}
}

var onShowMoreMenu = function(isShow){
	var body = document.getElementsByTagName("BODY")[0];
	isShow = isShow? isShow : !document.body.classList.contains('showBtmSlide');
	
	if(isShow){
		if (!document.body.classList.contains('showBtmSlide')) {
			body.className = body.className + ' showBtmSlide';
		}
	} else {
		if (document.body.classList.contains('showBtmSlide')) {
			body.className = body.className.replace(' showBtmSlide', '');
		}		
	}
}

var onShowFilterMenu = function(){
	var filterBtn = document.getElementById('toolbar-filter'),
	sideMenu = document.getElementById('side-menu-container');
	isShow = !filterBtn.classList.contains('expand');
	
	if(isShow){
		//add expand
		if (!filterBtn.classList.contains('expand')) {
			filterBtn.className = filterBtn.className + ' expand';
			sideMenu.style.height = (document.body.clientHeight * 0.5) + "px";
		}
		//make filter large
	} else {
		if (filterBtn.classList.contains('expand')) {
			filterBtn.className = filterBtn.className.replace(' expand', '');
			sideMenu.style.height = "0";
		}
	}
}

var scrollPos = 0;
var delta = 250;
var scrollFunction = function() {
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;	
	var isMobile = width <= 1024;
	
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-nav").className = 'header-nav header-scroll';
	if (!document.getElementById("dropdown-content").classList.contains('dropdown-scroll')) {
		document.getElementById("dropdown-content").className = document.getElementById("dropdown-content").className + ' dropdown-scroll';
	}
	
	document.getElementById("header-bar").className = 'container str-header header-scroll';
	
	var body = document.getElementsByTagName("BODY")[0];
	
	if ((document.body.getBoundingClientRect()).top > scrollPos){
		body.className = body.className.replace(' scroll-down', '');
		if(body.className.indexOf('scroll-up') <0){
			body.className = body.className + ' scroll-up';
		}
	} else {
		body.className = body.className.replace(' scroll-up', '');
		if(body.className.indexOf('scroll-down') <0){
			body.className = body.className + ' scroll-down';
		}
	}
	
  } else {
    document.getElementById("header-nav").className = 'header-nav';
	document.getElementById("dropdown-content").className = 'dropdown-content';
	//if(isMobile){
		document.getElementById("header-bar").className = 'container str-header';
	//}
	var body = document.getElementsByTagName("BODY")[0];
	body.className = '';
  }
  
  scrollPos = (document.body.getBoundingClientRect()).top;
}


window.addEventListener('load', function () {
	
  pageMask = document.getElementById('page-mask');
  dropdownTriggers = document.getElementsByClassName('dropdown');
  dropdownMenu = document.getElementsByClassName('dropdown-content')[0];
  textSearchInputs = document.getElementsByClassName('text-search');
  slideNavTrigger = document.getElementById('slide-nav-trigger');
  btmSlideNavTrigger = document.getElementById('nav-more');
  contentMask = document.getElementById('content-mask');
  
  for(var i =0; i < dropdownTriggers.length; i++){
	  dropdownTriggers[i].addEventListener("mouseenter", function(){onShowMenu(true, 'Trigger')});
	  dropdownTriggers[i].addEventListener("mouseleave", function(){onShowMenu(false, 'Trigger')}); 
  }
  dropdownMenu.addEventListener("mouseenter", function(){onShowMenu(true, 'Dropdown')});
  dropdownMenu.addEventListener("mouseleave", function(){onShowMenu(false, 'Dropdown')});
  
  slideNavTrigger.addEventListener("click", function(){onShowSlideMenu(true)});
  pageMask.addEventListener("click", function(){onShowSlideMenu(false)});
  
  btmSlideNavTrigger.addEventListener("click", function(){onShowMoreMenu()});
  contentMask.addEventListener("click", function(){onShowMoreMenu(false)});
  document.getElementById('foot-nav-close-btn').addEventListener("click", function(){onShowMoreMenu(false)});
  
  try{
  document.getElementById('toolbar-filter').addEventListener("click", function(){onShowFilterMenu()});
  } catch(e) {}
 
  
  for(var i =0; i < textSearchInputs.length; i++){
	  textSearchInputs[i].addEventListener("keyup", function(e){onInputSearch(e, this)});  
  }
  
});

window.onscroll = function() {scrollFunction()};