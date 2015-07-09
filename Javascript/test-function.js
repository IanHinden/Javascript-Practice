var msg = 'This is the updated text.';
function updateMessage() {
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMessage();

var msg2 = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg2 += '<p>height: ' + window.innerHeight + '</p>';
msg2 += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
msg2 += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg2 += '<p>height: ' + window.screen.height + '</p>';

var el2 = document.getElementById('info');
el2.innerHTML = msg2;
alert('Current page: ' + window.location);