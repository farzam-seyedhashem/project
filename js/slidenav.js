	var menuBurger = document.querySelector('#menuBurger');
	var menuClose = document.querySelector('#menuClose');
	var sideNavWrapper = document.querySelector('.sidenav-wrapper');
	var sideNavListWrapper = document.querySelector('.sidenav-list-wrapper');
	var navMenu = document.querySelector('#sideNavMenu');
	var navPDPMenu = document.querySelector('#sideNavPDPMenu');
	var navResidentialMenu = document.querySelector('#sideNavResidentialMenu');
	var navCommercialMenu = document.querySelector('#sideNavCommercialMenu');
	var navMixedMenu = document.querySelector('#sideNavMixedMenu');
	var navMenuItems = document.querySelectorAll('#sideNavMenu .sidenav-list-item');
	var navPDPMenuItems = document.querySelectorAll('#sideNavPDPMenu .sidenav-list-item');
	var navResidentialItems = document.querySelectorAll('#sideNavResidentialMenu .sidenav-list-item');
	var navCommercialItems = document.querySelectorAll('#sideNavCommercialMenu .sidenav-list-item');
	var navMixedItems = document.querySelectorAll('#sideNavMixedMenu .sidenav-list-item');
	var navMasterpieces = document.querySelector('#sideNavMasterpieces');
	var navResidential = document.querySelector('#sideNavResidential');
	var navCommercial = document.querySelector('#sideNavCommercial');
	var navMixed = document.querySelector('#sideNavMixed');
	var subNavBackCtas = document.querySelectorAll('.subnav_cta_back');
	var pdpNavBack = document.querySelector('#pdpNavBack');
	var menuTimeout = (navMenuItems.length + 1) * 100;
	var subMenuTimeout = (navResidentialItems.length - 1) * 100;
	var closeTimeout = menuTimeout;

	sideNavWrapper.classList.add('hide');

	var toggleMenuItems = function (show, menuItems) {
	if (show) {
	menuItems.forEach(function (navItem, i) {
	window.setTimeout(function () {
	navItem.classList.add('show');
}, i * 150);
});
} else {
	menuItems.forEach(function (navItem, i) {
	window.setTimeout(function () {
	navItem.classList.remove('show');
}, i * 100);
});
}
};

	var toggleSubMenuItems = function (show, menuItems) {
	if (show) {
	menuItems.forEach(function (navItem, i) {
	window.setTimeout(function () {
	navItem.classList.add('show');
}, i * 150);
});
} else {
	menuItems.forEach(function (navItem, i) {
	window.setTimeout(function () {
	navItem.classList.remove('show');
}, i * 100);
});
}
};

	// OPEN MAIN NAV
	menuBurger.addEventListener('click', function (e) {
	var pathArray = document.location.pathname.split('/');
	var path = pathArray[1];
	sideNavWrapper.classList.remove('hide');
	sideNavWrapper.classList.add('show');
	window.setTimeout(function () {
	sideNavListWrapper.classList.add('show');

	if (path === 'residential' && pathArray.length > 2) {
	handleOpenSubNav(navResidentialMenu, navResidentialItems, true);
	showNavImage(1);
} else if (path === 'commercial' && pathArray.length > 2) {
	handleOpenSubNav(navCommercialMenu, navCommercialItems, true);
	showNavImage(3);
} else if (path === 'mixed-use' && pathArray.length > 2) {
	handleOpenSubNav(navMixedMenu, navMixedItems, true);
	showNavImage(3);
} else {
	toggleMenuItems(true, navMenuItems);
}
}, 400);
});

	// CLOSE MAIN NAV
	menuClose.addEventListener('click', function (e) {
	toggleMenuItems(false, navMenuItems);
	toggleMenuItems(false, navPDPMenuItems);
	toggleSubMenuItems(false, navResidentialItems);
	toggleSubMenuItems(false, navCommercialItems);
	toggleSubMenuItems(false, navMixedItems);

	window.setTimeout(function () {
	navResidentialMenu.classList.remove('show');
	navCommercialMenu.classList.remove('show');
	navMixedMenu.classList.remove('show');
	navPDPMenu.classList.remove('show');
	sideNavListWrapper.classList.remove('show');

	window.setTimeout(function () {
	sideNavWrapper.classList.remove('show');
}, 500);

	window.setTimeout(function () {
	sideNavWrapper.classList.add('hide');
}, 1500);
}, closeTimeout);
});

	// OPEN PDP NAV
	navMasterpieces.addEventListener('click', function (e) {
	e.preventDefault();
	toggleMenuItems(false, navMenuItems);
	navPDPMenu.classList.add('show');
	window.setTimeout(function () {
	toggleMenuItems(true, navPDPMenuItems);
}, menuTimeout);
});

	// CLOSE PDP NAV
	pdpNavBack.addEventListener('click', function (e) {
	e.preventDefault();
	toggleMenuItems(false, navPDPMenuItems);
	closeTimeout = menuTimeout;
	window.setTimeout(function () {
	toggleMenuItems(true, navMenuItems);
}, menuTimeout);

	window.setTimeout(function () {
	navPDPMenu.classList.remove('show');
}, navPDPMenuItems.length * 200);

});


	// OPEN SUB NAV
	var handleOpenSubNav = function (navMenu, navMenuItems, openDirect) {
	//console.log(navMenu,navMenuItems);
	var subMenuTimeout = openDirect ? 300 : navPDPMenuItems.length * 100;
	toggleMenuItems(false, navPDPMenuItems);
	navMenu.classList.add('show');
	window.setTimeout(function () {
	toggleSubMenuItems(true, navMenuItems);
}, subMenuTimeout);

	closeTimeout = (navMenuItems.length + 1) * 100;
}

	navResidential.addEventListener('click', function (e) {
	e.preventDefault();
	handleOpenSubNav(navResidentialMenu, navResidentialItems);
});

	navCommercial.addEventListener('click', function (e) {
	e.preventDefault();
	handleOpenSubNav(navCommercialMenu, navCommercialItems);
});

	navMixed.addEventListener('click', function (e) {
	e.preventDefault();
	handleOpenSubNav(navMixedMenu, navMixedItems);
});


	// CLOSE SUB NAV
	var handleCloseSubNav = function (navMenu, navMenuItems) {
	toggleSubMenuItems(false, navMenuItems);
	navPDPMenu.classList.add('show');
	closeTimeout = menuTimeout;
	window.setTimeout(function () {
	toggleMenuItems(true, navPDPMenuItems);
}, (navMenuItems.length) * 100);

	window.setTimeout(function () {
	navMenu.classList.remove('show');
}, (navMenuItems.length + 1) * 150);
};

	subNavBackCtas.forEach(function (cta, i) {
	cta.addEventListener('click', function (e) {
		e.preventDefault();
		if (cta.dataset.nav === "residential") {
			handleCloseSubNav(navResidentialMenu, navResidentialItems);
		}
		if (cta.dataset.nav === "commercial") {
			handleCloseSubNav(navCommercialMenu, navCommercialItems);
		}
		if (cta.dataset.nav === "mixed") {
			handleCloseSubNav(navMixedMenu, navMixedItems);
		}
	});
});

	// Nav background images
	var sideNavImagesDesktop = document.querySelectorAll('.sidenav-image.hide-mobile');
	var sideNavImagesMobile = document.querySelectorAll('.sidenav-image.hide-desktop');

	document.querySelectorAll('a.text-sidenav:not(.text-sidenav_small)').forEach(function (navItem, i) {
	navItem.addEventListener('mouseover', function () {
		showNavImage(this.dataset.sideNav);
	});
});

	var showNavImage = function (navIndex) {
	var thisImage = window.innerWidth > 767 ? sideNavImagesDesktop[navIndex] : sideNavImagesMobile[navIndex];
	resetSideNavImages();
	window.setTimeout(function () {
	thisImage.classList.add('show');
}, 50);
};

	var resetSideNavImages = function () {
	if (window.innerWidth > 767) {
	sideNavImagesDesktop.forEach(function (navImage, i) {
	navImage.classList.remove('show');
});
} else {
	sideNavImagesMobile.forEach(function (navImage, i) {
	navImage.classList.remove('show');
});
}
};
