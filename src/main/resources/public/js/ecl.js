var H = Highcharts,
	  map = H.maps['countries/us/us-all'],
	  chart;

	// Add series with state city bubbles
	$.getJSON('data/ecl.json', function (json) {
	  var data = [];
	  $.each(json, function () {
	    this.z = this.count;
	    data.push(this);
	  });

	  chart = Highcharts.mapChart('ecl-container', {
	    title: {
	      text: 'Meetups per City'
	    },

	    tooltip: {
	      pointFormat: '{point.city}, {point.parentState}<br>' +
	        'Lat: {point.lat}<br>' +
	        'Lon: {point.lon}<br>' +
	        'Events: {point.count}'
	    },

	    xAxis: {
	      crosshair: {
	        zIndex: 5,
	        dashStyle: 'dot',
	        snap: false,
	        color: 'gray'
	      }
	    },

	    yAxis: {
	      crosshair: {
	        zIndex: 5,
	        dashStyle: 'dot',
	        snap: false,
	        color: 'gray'
	      }
	    },

	    series: [{
	      name: 'Basemap',
	      mapData: map,
	      borderColor: '#606060',
	      nullColor: 'rgba(200, 200, 200, 0.2)',
	      showInLegend: false
	    }, {
	      name: 'Separators',
	      type: 'mapline',
	      data: H.geojson(map, 'mapline'),
	      color: '#101010',
	      enableMouseTracking: false,
	      showInLegend: false
	    }, {
	      type: 'mapbubble',
	      dataLabels: {
	        enabled: true,
	        format: '{point.city}'
	      },
	      name: 'Cities',
	      data: data,
	      maxSize: '15%',
	      color: H.getOptions().colors[0]
	    }]
	  });
	});