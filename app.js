window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Dtya8ZfYah_6PrhSv3YtfmnQQtaqaYbwGM3Ldt4Pa7U/pubhtml';

function init() {
	Tabletop.init( { key:public_spreadsheet_url,
					 callback: showInfo,
					 simpleSheet: true } )
}

function showInfo(data, tabletop) {
	alert("Successfully processed!")
	console.log(data);
}