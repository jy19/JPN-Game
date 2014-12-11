function register() {
	var fields = $('form').serializeArray();
	$.ajax({
		type: 'POST',
		data: fields,
		url: '/api/users',
		success: function() {
			//on success, redirect to login?
			window.location.href = "/login";
		},
		error: function() {
			console.log('error, jqXHR, textStatus, errorThrown')
		}
	})
}

function cancel() {
	window.location.href = "/";
}

$(document).ready( function() {
	$("#registerbtn").click(register);
	$("#cancelbtn").click(cancel);
});