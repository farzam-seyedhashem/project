
	var initResidenceHotspots = function () {
	var galleryOpen = false;
	var currentHotspot;
	var residenceImageVeil = $('.residence_image_veil');
	var panelCloseCta = $('.residence_hotspots_panel .cta-close');
	var galleryCloseCta = $('#ctaCloseResidenceGallery');
	var hotspotId;
	var gallery;
	var galleryContainer;

	$('.hotspot_cta').on('click', function (e) {
	e.preventDefault();
	document.body.classList.add("no-scroll");
	// Set up all current elements for hotspot clicked
	currentHotspot = $(this);
	hotspotId = currentHotspot.data('hotspot-id');
	gallery = $(`#residenceGallery${hotspotId}`);
	galleryContainer = gallery.parent();

	$(`.residence_hotspots_panel[data-hotspot-id=${hotspotId}]`).addClass('show');
	panelCloseCta.addClass('show');
	currentHotspot.addClass('show');
	residenceImageVeil.addClass('show');
	residenceImageVeil.css('opacity', 0.35);

});

	panelCloseCta.on('click', function (e) {
	e.preventDefault();
	document.body.classList.remove("no-scroll");
	closeHotspotPanel();
});

	residenceImageVeil.on('click', function (e) {
	closeHotspotPanel();
});

	var closeHotspotPanel = function () {
	$('.residence_hotspots_panel.show').removeClass('show');
	currentHotspot.removeClass('show');
	panelCloseCta.removeClass('show');
	residenceImageVeil.css('opacity', 0);
	window.setTimeout(function () {
	residenceImageVeil.removeClass('show');
}, 1200);
}

	// Open residence gallery
	$('.cta_explore_gallery').on('click', function (e) {
	e.preventDefault();
	console.log("clicked");
	document.body.classList.add("no-scroll");
	// Set up all current elements for hotspot clicked
	currentHotspot = $(this);
	hotspotId = currentHotspot.data('hotspot-id');
	gallery = $(`#residenceGallery${hotspotId}`);
	galleryContainer = gallery.parent();

	galleryCloseCta.addClass('show');
	galleryContainer.addClass('show');
	galleryContainer.css('opacity', 1);
	gallery.css('opacity', 1);
	galleryOpen = true;
});

	galleryCloseCta.on('click', function (e) {
	e.preventDefault();
	document.body.classList.remove("no-scroll");
	closeGallery();
});

	$(document).on('keydown', function (e) {
	if (e.key == "Escape" && galleryOpen) {
	closeGallery();
}
});

	var closeGallery = function () {
	galleryContainer.css('opacity', 0);
	gallery.css('opacity', 0);
	window.setTimeout(function () {
	galleryContainer.removeClass('show');
	galleryCloseCta.removeClass('show');
}, 1200);
	galleryOpen = false;
};
};
