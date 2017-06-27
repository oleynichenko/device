function smoothDisplay(elem, time, toggleOn, toggleOff) {

	if(toggleOff == undefined) {
		toggleOff = toggleOn;
	}

	elem.style.animationDuration = time;

	toggleOff.addEventListener("click", function(event) {
		event.preventDefault();
		if(!elem.classList.contains("smooth-display__elem--hide")) {		
			elem.classList.add("smooth-display__elem--anim");
		} 
	});
	toggleOn.addEventListener("click", function(event) {
		event.preventDefault();
		if(elem.classList.contains("smooth-display__elem--hide")) {
	    elem.classList.remove("smooth-display__elem--hide"); 
			elem.classList.add("smooth-display__elem--anim-reverse");  
		}
	});
	
	elem.addEventListener("animationend", function(event) {
		if(!elem.classList.contains("smooth-display__elem--anim-reverse")) {	
			elem.classList.add("smooth-display__elem--hide");  
			elem.classList.remove("smooth-display__elem--anim");
		} else {
			elem.classList.remove("smooth-display__elem--anim-reverse");  
		}
	});
};



