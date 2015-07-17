var msg = 'This is the updated text.';
function updateMessage() {
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMessage();

var expiryMsg;
var today;
var elEnds;

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNamesl
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	
	expiryMsg = 'Offer expires next ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

var elTest = document.querySelector('li.hot');
elTest.className = 'cool';

var hotItems = document.querySelectorAll('li.hot');

if (hotItems.length > 0) {
	for (var i = 0; i<hotItems.length; i++) {
		hotItems[i].className = 'cool';
	}
}