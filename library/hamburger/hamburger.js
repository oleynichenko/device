(function common() {
	
	var navToggle = document.querySelector(".hamburger");
	var mainNav = document.querySelector(".main-nav");
	mainNav.classList.remove("main-nav--nojs");

	navToggle.addEventListener("click", function(event) {
		if(mainNav.classList.contains("main-nav--closed")) {
			mainNav.classList.remove("main-nav--closed");
			mainNav.classList.add("main-nav--opened");
			} else {
				mainNav.classList.add("main-nav--closed");
				mainNav.classList.remove("main-nav--opened");
			};
	});
})();