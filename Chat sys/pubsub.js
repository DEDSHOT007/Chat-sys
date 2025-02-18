const PubSub = (function() {
    const topics = {};

    return {
        subscribe: function(topic, listener) {
            if (!topics[topic]) {
                topics[topic] = [];
            }
            topics[topic].push(listener);
        },
        publish: function(topic, data) {
            if (!topics[topic]) return;
            topics[topic].forEach(listener => listener(data));
        }
    };
})();
