javascript:

var DELAY = 0.1;
var autoClickerStyleElement = document.createElement("style");
autoClickerStyleElement.innerHTML="*{cursor: crosshair !important;}";
document.body.appendChild(autoClickerStyleElement);
function addClicker(e) {
  	if(!e.isTrusted) {
      		return;
      	}
  	if(e.target.classList.contains("auto-clicker-target-cursor")) {
      		e.target.classList.remove("auto-clicker-target-cursor");
      	} else {
          		e.target.classList.add("auto-clicker-target-cursor");
          	}
  	document.body.removeChild(autoClickerStyleElement);
  	document.body.removeEventListener("click", addClicker);
  	e.preventDefault();
  	
  	autoClick(e.target);
  }
function autoClick(element) {
  	if(element.classList.contains("auto-clicker-target-cursor")) {
      		element.click();
      		setTimeout(function(){ autoClick(element); }, DELAY);
      	}
  }
document.body.addEventListener("click", addClicker, 0);
