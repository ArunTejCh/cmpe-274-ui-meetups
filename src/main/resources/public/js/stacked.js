$(document).ready(function(){

	Highcharts.chart('stacked-container', {
	  chart: {
	    type: 'area'
	  },
	  title: {
	    text: 'Trends within Topics'
	  },
	  subtitle: {
	    text: 'Source: Kaggle.com'
	  },
	  xAxis: {
	    categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2015', '2016', '2017'],
	    tickmarkPlacement: 'on',
	    title: {
	      enabled: false
	    }
	  },
	  yAxis: {
	    title: {
	      text: 'Group Count'
	    }
	  },
	  tooltip: {
	    split: true,
	    valueSuffix: ' groups'
	  },
	  plotOptions: {
	    area: {
	      stacking: 'normal',
	      lineColor: '#666666',
	      lineWidth: 1,
	      marker: {
	        lineWidth: 1,
	        lineColor: '#666666'
	      }
	    }
	  },
	  series: [{
	    name: 'New Technology',
	    data: [502, 635, 809, 947, 1402, 3634, 5268, 5634, 6345, 7123]
	  }, {
	    name: 'Professional Networking',
	    data: [106, 107, 111, 133, 221, 767, 1766, 2345, 3456, 5634]
	  }, {
	    name: 'Social',
	    data: [163, 203, 276, 408, 547, 1229, 1428, 1745, 1934, 2312]
	  }, {
	    name: 'Social Networking',
	    data: [18, 31, 54, 156, 339, 818, 1201, 1345, 1546, 1675]
	  }, {
	    name: 'Spirituality',
	    data: [22, 23, 34, 68, 131, 309, 461, 546, 678, 987 ]
	  }]
	});
});