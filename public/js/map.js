

var blocks = [
	{
		title: 'Turing Block',
		position: {
			lat: 30.5164302,
			lng: 76.6606282},
		   icon: 'parking',
		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">Turing Block</h4><div id="bodyContent"><p><b>Turing Block</b> - All the Class Number Starting With tg i.e tg-103 etc resides here. The whole block is allocated to Computer Science and enginnering</p></div></div>'
	},
	{
		title: 'galileo',
		position: {
			lat: 30.5164776,
			lng: 76.6595621 },
		icon: 'parking',
		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">Galileo Block</h1><div id="bodyContent"><p><b>Galileo Block</b>- All the Class Number Starting With gb i.e gb-103 etc resides here. </p> </div></div>'
	},
	{
		title: 'Tesla Block',
		position: {
			lat: 30.5160061,
			lng: 76.656381 },
		icon: 'parking',
		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">Tesla Block</h4><div id="bodyContent"><p><b>Tesla Block</b><p> </p></div></div>'
	},
	{
		title: 'Boys hostel',
		position: {
			lat: 30.5138162,
			lng: 76.6613954 },
		icon: 'parking',
		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading"> boys hostel</h4><div id="bodyContent"><p><b> boys hostel</b> </p></div></div>'
	},
	{
		title: 'Pie-B',
		position: {
			lat: 30.5146359,
			lng: 76.6622959 },
		icon: 'parking',
		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">Pie-B</h4><div id="bodyContent"><p><b>Pie-B</b> </p> </div></div>'
	},
	{
		title: 'Library',
		position: {
			lat: 30.5156844,
			lng: 76.660698 },
		icon: 'parking',
		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">Library</h1><div id="bodyContent"><p><b>Library</b> </p> </div></div>'},
    {
  		title: 'ExplOretorium',
  		position: {
  			lat: 30.5158618,
  			lng: 76.6573875 },
  		icon: 'parking',
  		content: '<div id="content"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading">ExplOretorium</h1><div id="bodyContent"><p><b>ExplOretorium</b> </p> </div></div>'}
];

function initMap() {

	var values = {
		lat: 30.5164348,
		lng: 76.6584395
	};

	var map =  new google.maps.Map(document.getElementById('map'), {
        center: values,
        zoom: 17,
        mapTypeId: 'terrain'
    });

	var InfoWindows = new google.maps.InfoWindow({});

	blocks.forEach(function(block) {
		var marker = new google.maps.Marker({
		  position: { lat: block.position.lat, lng: block.position.lng },
		  map: map,
		  title: block.title
		});
		marker.addListener('mouseover', function() {
		  InfoWindows.open(map, this);
		  InfoWindows.setContent(block.content);
		});
	});
}
