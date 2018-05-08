$(document).ready(function(){
	Highcharts.chart('xkcd', {
		  chart: {
		    type: 'bar'
		  },
		  title: {
		    text: 'Meetups by City and Category'
		  },
		  subtitle: {
		    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Kaggle</a>'
		  },
		  xAxis: {
		    categories: ['Chicago', 'New York', 'San Francisco'],
		    title: {
		      text: null
		    }
		  },
		  yAxis: {
		    min: 0,
		    title: {
		      text: 'events',
		      align: 'high'
		    },
		    labels: {
		      overflow: 'justify'
		    }
		  },
		  tooltip: {
		    valueSuffix: ' events'
		  },
		  plotOptions: {
		    bar: {
		      dataLabels: {
		        enabled: true
		      }
		    }
		  },
		  legend: {
		    layout: 'vertical',
		    align: 'right',
		    verticalAlign: 'top',
		    x: -40,
		    y: 80,
		    floating: true,
		    borderWidth: 1,
		    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
		    shadow: true
		  },
		  credits: {
		    enabled: false
		  },
		  series: [{
		    name: 'arts-culture',
		    data: [685, 357, 916]
		  }, {
		    name: 'book-clubs',
		    data: [187, 102, 91]
		  }, {
		    name: 'career-business',
		    data: [1433, 1314, 710]
		  }]
		});
});