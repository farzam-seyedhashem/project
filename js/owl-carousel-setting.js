	/*
	Owl Carousel Settings
	*/
	var navTextSettings = [
	'<span aria-label="Previous" role="button"><svg width="27" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.667 4.74 2.53 4.76 6.592.891 5.658 0 .001 5.392l5.533 5.274.934-.89-3.94-3.755 24.14-.022-.001-1.26Z" fill="currentColor"/></svg></span>',
	'<span aria-label="Next" role="button"><svg width="28" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m.67 4.74 24.135.021-4.061-3.87.933-.891 5.658 5.392-5.533 5.274-.934-.89 3.94-3.755-24.14-.022.001-1.26Z" fill="currentColor"/></svg></span>'
	];
	var slideTransition = 'cubic-bezier(0.65, 0, 0.35, 1)';
	var fullCarouselSettings = {
	loop: true,
	margin: 0,
	nav: true,
	items: 1,
	slideTransition: slideTransition,
	smartSpeed: 800,
	navText: navTextSettings
};
	var residenceGalleryCarouselSettings = {
	loop: false,
	margin: 0,
	nav: true,
	items: 1,
	slideTransition: slideTransition,
	smartSpeed: 800,
	navText: navTextSettings
};
	var partnerCarouselSettings = {
	loop: true,
	margin: 64,
	nav: true,
	items: 1,
	stagePadding: 128,
	slideTransition: slideTransition,
	smartSpeed: 800,
	navText: navTextSettings,
	responsive: {
	0: {
	margin: 16,
	stagePadding: 32,
},
	768: {
	margin: 32,
	stagePadding: 128,
},
	992: {
	margin: 64,
	stagePadding: 128,
},
	1440: {
	margin: 64,
	stagePadding: 300,
},
	1920: {
	margin: 64,
	stagePadding: 420,
}
}
};
	var galleryCarouselSettings = {
	loop: true,
	margin: 32,
	autoWidth: true,
	nav: true,
	items: 1,
	stagePadding: 32,
	slideTransition: slideTransition,
	smartSpeed: 800,
	navText: navTextSettings,
	responsive: {
	0: {
	margin: 16,
	stagePadding: 16,
},
	768: {
	margin: 32,
	stagePadding: 32,
},
	992: {
	margin: 32,
	stagePadding: 32,
},
	1440: {
	margin: 32,
	stagePadding: 32,
},
	1920: {
	margin: 32,
	stagePadding: 32,
}
}
};
	var cardCarouselSettings = {
	loop: true,
	margin: 24,
	nav: true,
	navText: navTextSettings,
	autoWidth: true,
	slideTransition: slideTransition,
	smartSpeed: 800,
	responsive: {
	0: {
	items: 1,
	stagePadding: 0,
	margin: 24
},
	992: {
	items: 1,
	stagePadding: 32,
	margin: 24
},
	1024: {
	items: 3
},
	1280: {
	items: 4
}
}
};
	var CARD_CAROUSEL_BREAKPOINT = 992;
	var MOBILE_BREAKPOINT = 767;

	var positionHoverspot = function (hoverspotPos, slide, index) {
	var hoverSpot = (index === 2) ? slide.querySelector('.carousel-hover-spot-2') : slide.querySelector('.carousel-hover-spot');

	if (hoverspotPos.x === undefined || hoverspotPos.x === -1) {
	if (window.innerWidth <= MOBILE_BREAKPOINT) {
	hoverSpot.classList.add('hide-mobile');
} else {
	hoverSpot.classList.add('hide-desktop');
}
} else {
	if (hoverspotPos.x > 60 && window.innerWidth <= MOBILE_BREAKPOINT) {
	hoverSpot.classList.add('text-align-right');
	hoverSpot.classList.add('carousel-hover-spot-reverse');
	hoverSpot.style.right = (100 - hoverspotPos.x) + '%';
	hoverSpot.style.top = hoverspotPos.y + '%';
} else if (hoverspotPos.x > 80 && window.innerWidth > MOBILE_BREAKPOINT) {
	hoverSpot.classList.add('text-align-right');
	hoverSpot.classList.add('carousel-hover-spot-reverse');
	hoverSpot.style.right = (100 - hoverspotPos.x) + '%';
	hoverSpot.style.top = hoverspotPos.y + '%';
} else {
	hoverSpot.style.left = hoverspotPos.x + '%';
	hoverSpot.style.top = hoverspotPos.y + '%';
}
}
}

	var initGalleryCarouselCards = function () {
	var galleryCard = $('.gallery_carousel .gallery-card');
	console.log(galleryCard);
	if (galleryCard.length > 0) {
	galleryCard.each(function (i, card) {
	if (card.dataset.display == "wide") {
	card.classList.add('gallery-card-wide');
}
	if (card.dataset.display == "square") {
	card.classList.add('gallery-card-square');
}
	if (card.dataset.display == "portrait") {
	card.classList.add('gallery-card-portrait');
}
	if (card.dataset.display == "" || !card.dataset.display) {
	card.classList.add('gallery-card-wide');
}
});
}
};

	var initAmenitiesCarouselCards = initGalleryCarouselCards;

