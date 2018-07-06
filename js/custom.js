$(function(){
	if(location.origin == 'https://qwazik.github.io'){
	    $('body').append($('<script type="text/javascript" src="https://cdn.rawgit.com/Qwazik/scripts/master/navGit.js"></script>'));
	    $(window).on('load', function(){
	        navGit({
	            'Главная':'index.html',
	            'О нас':'about.html',
	            'Галлерея':'gallary.html',
	            'Контакты':'contacts.html',
	            'Услуги':'services.html',
	            'Карточка':'card.html'
	        });
	    });
	}
	$('.photo-carousel__list.owl-carousel').owlCarousel({
		dots: true,
		margin: 31,
		nav: true,
		items: 1
	});
	$('.fancybox').fancybox();

	if($('#homeMap').length){
	ymaps.ready(function () {
		var marks = [
			[55.26, 37.64],
			[52.72, 37.64],
			[50.76, 37.64],
			[41.76, 37.64],
			[35.76, 37.64],
			[53.76, 37.64],
			[59.26, 37.64]
		]


		var map = new ymaps.Map("homeMap", {
	        center: [55.76, 37.64], 
	        zoom: 15
	    });

	    for(i in marks){
	    	myPlacemark = new ymaps.Placemark(marks[i], {}, {
	            iconLayout: 'default#image',
	            iconImageHref: 'img/logo.svg',
	            iconImageSize: [91, 54],
	            iconImageOffset: [-45, -27]
	        });

	        map.geoObjects.add(myPlacemark)
	    }

	   
	});
	}


});