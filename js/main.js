(function common() {
  // ОТКРЫТИЕ-ЗАКРЫТИЕ Catalog  
  
  var catalogItems = document.querySelector(".catalog-menu__items");
  var catalogTitle = document.querySelector(".catalog-menu__title");

  // Прячем каталог в меню

  catalogItems.classList.add("catalog-menu__items--js", "smooth-display__elem--hide" );

  // Для избежания мигания меню Каталог меньше 768px

  if(window.innerWidth < 768) {
    smoothDisplay(catalogItems, "0s", catalogTitle);     
  } else {
    smoothDisplay(catalogItems, "0.1s", catalogTitle);         
  }
  
  if(document.location.href.indexOf('index') != -1) {
    main(); 
  }

})();

function main() {

  // Сдвигаем Slider
  var slider = document.querySelector(".slider");
  slider.classList.add("slider--js");

  // ОТКРЫТИЕ-ЗАКРЫТИЕ Message

	var writeBtn = document.querySelector("#write-btn");
	var messageWrap = document.querySelector(".message__wrapper");
	var messageBtn = document.querySelector(".message__btn-switch");
	var message = document.querySelector(".message");

  smoothDisplay(messageWrap, "0.5s", writeBtn, messageBtn);

  // закрытие по клику вне окна
	messageWrap.addEventListener("click", function(event) {
		event.preventDefault();
		if (!message.contains(event.target)) { 
			messageWrap.classList.add("smooth-display__elem--hide");
		}
	});

  // закрытие по esc
  window.addEventListener("keydown", function(event) {
  	if (event.keyCode === 27 && !messageWrap.classList.contains("smooth-display__elem--hide")) {
  		messageWrap.classList.add("smooth-display__elem--hide");
  	}
  });

  // ОТКРЫТИЕ-ЗАКРЫТИЕ Modal-map

  var map = document.querySelector(".info__map");
	var modalMap = document.querySelector(".modal-map");
	var modalMapSwitch = document.querySelector(".modal-map__btn-switch");
  
  smoothDisplay(modalMap, "0.5s", map, modalMapSwitch);
  
	window.addEventListener("keydown", function(event) {
		if(event.keyCode === 27 && !modalMap.classList.contains("smooth-display__elem--hide")) {
			modalMap.classList.add("smooth-display__elem--hide");
		}
  });

  // ПРОВЕРКА ВАЛИДНОСТИ ПОЛЕЙ Form

  var messageForm = document.querySelector(".form");
  var formBtn = document.querySelector(".form__btn");
  var userName = document.querySelector("#user-name");
  var userEmail = document.querySelector("#user-email");
  var userMsg = document.querySelector("#user-msg");
  var resendIndex = false;

  function showError(elem) {
  	event.preventDefault();
  	elem.parentElement.classList.add("form__item--error");
  	resendIndex = true;
  };

  formBtn.addEventListener("click", function(event) {
  	if(!userName.value) {
  		showError(userName);
  	} else if(!userEmail.value) {
  		showError(userEmail);
  	} else if(!userMsg.value) {
  		showError(userMsg);
  	} else {
  		message.classList.remove("message--open");
  	}
  });

  messageForm.addEventListener("blur", function(event) {
  	var elem = event.target;
  	if(resendIndex  && !!elem.value) { 
  		console.log(!!elem.value);		
	  	elem.parentElement.classList.remove("form__item--error");
  	}
  }, true);

};


