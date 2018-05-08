$(document).ready(function(){
	Highcharts.chart('mems-container', {
		  chart: {
		    type: 'bar'
		  },
		  title: {
		    text: 'Popularity of Groups'
		  },
		  xAxis: [{
		    categories: ["outdoors-adventure"
		    	,"career-business"
		    	,"socializing"
		    	,"socializing"
		    	,"socializing"
		    	,"socializing"
		    	,"career-business"
		    	,"outdoors-adventure"
		    	,"socializing"
		    	,"socializing"
		    	,"socializing"
		    	,"career-business"
		    	,"socializing"
		    	,"tech"
		    	,"arts-culture"
		    	,"arts-culture"
		    	,"socializing"
		    	,"socializing"
		    	,"tech"
		    	,"socializing"],
		    title: {
		      text: null
		    }
		  }, {
			  linkedTo: 0,
			  categories: ["Hudson Valley Hikers"
				  ,"CoInvent NY (a.k.a NYEBN)"
				  ,"Free NYC! Free Things To Do In NYC + beyond! (or very cheap)"
				  ,"Alternative to the Bar Fun Things To Do In NYC!"
				  ,"20 and 30 Somethings Chicago"
				  ,"Really Fun Things To Do In New York City"
				  ,"New York Entrepreneurs & Startup Network (NYESN)"
				  ,"Chicago Hiking, Outdoors, & Social Group"
				  ,"I wanted to do that...Just not alone!!"
				  ,"Awesome Things to Do"
				  ,"20 and 30 somethings in San Francisco - AWESOME Stuff"
				  ,"The NYC Business Networking Group (NYCBNG): Award Winner!"
				  ,"I wanted to do that...just not   alone!"
				  ,"SQL NYC, The NoSQL & NewSQL Database Meetup"
				  ,"New York Creative Socials"
				  ,"Chicago Meetup"
				  ,"Evenings and Weekends in New York City"
				  ,"FREE or inexpensive things to do in New York City"
				  ,"Google NYC Tech Talks"
				  ,"Free Comedy and New Friends NYC!"]
		  }],
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
		    valueSuffix: ' members'
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
		    verticalAlign: 'bottom',
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
		    name: 'members',
		    data: [31215,26341,23968,23579,23380,20597,20497,19779,19732,19591,19543,19387,19019,18841,18753,18512,18458,18015,17487,17438]
		  }]
		});
});