
module.exports.events = {};

module.exports.registerEventListener = function(eventName, callback){
    if(!this.events[eventName])
        this.events[eventName] = new Event(eventName);

    this.events[eventName].registerCallback(callback);
};

module.exports.unregisterEventListener = function(eventName, callback){
    if(this.events[eventName])
        this.events[eventName].unregisterCallback(callback);
};

module.exports.dispatchEvent = function(eventName, eventArgs){
    this.events[eventName].callbacks.forEach(function(callback){
        callback(eventArgs);
    });
};

function Event(name){
    this.name = name;
    this.callbacks = [];
}

Event.prototype.registerCallback = function(callback){
    this.callbacks.push(callback);
};

Event.prototype.unregisterCallback = function(callback){
    var i = this.callbacks.indexOf(callback);
    if(i >= 0 && this.callbacks.length > i)
        delete this.callbacks[i];
};