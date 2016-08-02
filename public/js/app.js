var socket = io();

socket.on('connect', function () {
    console.log('Connecting socket io on the server');
});

socket.on('message', function (message) {
    console.log('New message: ');
    console.log(message.text);

    $('.message-spot').append('<p>' + message.text + '</p>');
});

var $form = jQuery('#msg-form');

$form.on('submit', function(event) {
    event.preventDefault();

    var $message = $form.find('input[name=input-msg]');
    socket.emit('message', {
        text: $message.val()
    });

    $message.find('input[name=input-msg]').val('');
});
