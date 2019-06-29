var socket = {
    wsRetries: 5,
    wsRetryTimeout: 4000,
    queuedData: [],
    listeners: {},
    openSocket: function () {
        var protocol = document.location.protocol === "https:" ? "wss://" : "ws://";
        var url = protocol + document.location.host + document.location.pathname + "/socket";

        socket.ws = new WebSocket(url);

        socket.ws.onopen = function() {
            socket.wsRetries = 5; // reset retries on connection loss
        };

        socket.ws.onmessage = function(event) {
            var msg = JSON.parse(event.data);
            if(msg.type && socket.listeners[msg.type]) {
                socket.listeners[msg.type](msg);
            }
        };

        // Close codes: https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Close_codes
        socket.ws.onclose = function(event) {
            if (event.code === 4000)    // log out
                return;
            else if (event.code === 1011)
                socket.openSocket();
            else if (event.code >= 1001 && event.code < 3999) {
                if (socket.wsRetries > 0) {
                    // Gracefully reconnect on abnormal closure of the socket, 1 retry every 4 seconds, 20 seconds total.
                    // TODO: Indicate connection drop in the UI, especially for close code 1006
                    setTimeout(function() {
                        socket.openSocket();
                        socket.wsRetries--;
                    }, socket.wsRetryTimeout);
                }
            }
        };


        // Close the socket gracefully before navigating away
        $(window).off('beforeunload').on('beforeunload', function() {
            if (socket.ws && socket.ws.readyState < 2) {
                // 1001 aka CLOSE_GOING_AWAY is a valid status code, though Firefox still throws an INVALID_ACCESS_ERR
                // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Close_codes
                try {
                    socket.ws.close(1001);
                } catch (error) {
                    try {
                        socket.ws.close();
                    } catch (closeError) {}
                }
            }
        });

        // if (socket.readyState === 2) { // closing
        //     // Socket is closing, queue a re-opening
        //     this.reopen = true;
        // } else if (this.props.route.socket.readyState === 3) { // closed
        //     // Socket is closed, we can re-open it right now
        //     openSocket();
        // }

        setInterval(function() {
            if(socket.queuedData.length && socket.ws.readyState === 1)
                while(socket.queuedData.length) {
                    let message = socket.queuedData.pop();
                    socket.sendMessage(message.type, message.data);
                }
        }, 1000);

        return socket;
    },
    sendMessage: function(type, data) {
        if (socket.ws.readyState === 1) {
            var sendObject = data ? data : {};
            sendObject.type = type;
            if (typeof sendObject.data === "string") {
                sendObject.data = normalize(sendObject.data);
            }
            else if (typeof sendObject.data === "object") {
                Object.keys(sendObject.data).forEach(function(key) {
                    if (typeof sendObject.data[key] === "string") {
                        sendObject.data[key] = normalize(sendObject.data[key]);
                    }
                });
            }
            // open
            socket.ws.send(JSON.stringify(sendObject));
        }
        else {
            // We can't send right now, so queue up the last added message to be sent later
            socket.queuedData.push({type: type, data: data});
        }

        function normalize(str) {
            return String.prototype.normalize ? str.normalize() : str;
        }
    },
    onMessage: function (key, callback) {
        if(callback && typeof callback == 'function')
            socket.listeners[key] = callback;
    }
};

module.exports = socket.openSocket();