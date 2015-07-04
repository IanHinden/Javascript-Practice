var msg = 'This is the updated text.';
function updateMessage() {
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMessage();