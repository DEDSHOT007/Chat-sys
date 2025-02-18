$(document).ready(function() {
    $('#publishButton').click(function() {
        const message = $('#messageInput').val();
        if (message) {
            PubSub.publish('newMessage', message);
            $('#messageInput').val('');
        }
    });

    $('#commentButton').click(function() {
        const comment = $('#commentInput').val();
        if (comment) {
            $('#commentsList').append(`<div class='comment'>${comment}</div>`);
            $('#commentInput').val('');
        }
    });

    PubSub.subscribe('newMessage', function(message) {
        $('#messages').append(`<div class='alert alert-info'>${message}</div>`);
    });
});
$(document).ready(function() {
    // Existing event listeners...

    // Handle login form submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        if (authenticate(username, password)) {
            // Redirect based on role
            if (username === 'admin') {
                window.location.href = 'index.html'; // Admin dashboard
            } else {
                window.location.href = 'index.html'; // Subscriber dashboard
            }
        } else {
            $('#errorMessage').text('Invalid username or password.');
        }
    });
});