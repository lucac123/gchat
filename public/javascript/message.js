let socket = io();

socket.on('msg', (msg) => {
	$('#messages').append(`<p style="text-align: left">${msg}</p>`);
})

$('#text input').keypress((event) => {
	if (event.key == "Enter") {
		let msg = $('#text input').val();
		socket.emit('msg', msg);
		$('#messages').append(`<p style="text-align: right">${msg}</p>`);
		$('#text input').val('');
	}
})