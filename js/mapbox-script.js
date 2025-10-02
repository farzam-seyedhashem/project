
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyemFtNzciLCJhIjoiY21nN3k2NHJpMDIwNTJqczMzejgzb3l3NyJ9.s-ZcJj6BGA_NiKK0l-Cweg';
const map = new mapboxgl.Map({
	container: 'map', // container ID
	// style: 'mapbox://styles/farzam77/cmg7y90sh00al01qwcgb16hsx',
	center: [36.69169696424148, 51.3370073017539], // starting position [lng, lat]. Note that lat must be set between -90 and 90
	zoom: 14 // starting zoom
});

const propertyTitle = 'PersianLux';

// add markers to map
map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'bottom-right');
map.scrollZoom.disable();