// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  var winHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    (rect.top <= 0
      && rect.bottom >= 100)
    ||
    (rect.bottom >= winHeight /2  &&
      rect.top <= winHeight / 2)
    ||
    (rect.top >= 0 &&
      rect.bottom <= winHeight)
  );
}