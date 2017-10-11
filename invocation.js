"use strict";

//Draw upon the alexa-software development kit
var alexa = require("alexa-sdk");

//Declare the handler response
var handlers = {
    "HelloIntent": function() {
        this.response.speak("How yoooooou doing?");
        this.emit(':responseReady');
    },
    "LaunchRequest": function() {
        this.response.speak("I am fine, how are you?");
        this.emit(':responseReady');
    }
};

exports.handler = (event, context, callback) => {
    var alexa = alexa.handler(event,context);
    alexa.registerHandlers(handlers);
    alexa.execute();
    callback(null, 'Request Processed. Alexa Happy :)');
};
