console.log("test");

// app.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch the streaming endpoint from your server
    fetchStreamingEndpoint()
        .then((streamingEndpoint) => {
            // Initiate the WebSocket connection
            initiateWebSocketConnection(streamingEndpoint);
        })
        .catch((error) => {
            console.error('Error fetching streaming endpoint:', error);
        });
});

function fetchStreamingEndpoint() {
    // Replace 'your-https-endpoint' with the actual URL of your HTTPS endpoint
    return fetch('https://exotelstream-quick2.azurewebsites.net/')
        .then(response => response.json())
        .then(data => data.url);
}

function initiateWebSocketConnection(streamingEndpoint) {
    // Establish a WebSocket connection
    const socket = new WebSocket(streamingEndpoint);

    // WebSocket event handlers
    socket.addEventListener('open', function (event) {
        console.log('WebSocket connection opened:', event);
    });

    socket.addEventListener('message', function (event) {
        console.log('Received message from WebSocket:', event.data);
        // Handle the received data as needed for your application
    });

    socket.addEventListener('close', function (event) {
        console.log('WebSocket connection closed:', event);
    });

    socket.addEventListener('error', function (event) {
        console.error('WebSocket error:', event);
    });
}
