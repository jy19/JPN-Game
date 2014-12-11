// function login() {
// 	var fields = $('form').serializeArray();
// 	$.ajax({
// 		type: 'POST',
// 		data: fields,
// 		url: '/api/users',
// 		success: function() {
// 			//on success, redirect to login?
// 			window.location.href = "/login";
// 		},
// 		error: function() {
// 			console.log('error, jqXHR, textStatus, errorThrown')
// 		}
// 	})
// }


function cancel() {
	window.location.href = "/";
}

$(document).ready( function() {
	$("#loginbtn").click(login);
	$("#cancelbtn").click(cancel);
});