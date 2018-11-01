import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Messages = new Mongo.Collection("msgs");

Meteor.methods({
  sendMessage: function (messageText) {
    /* add authentication here */

    Messages.insert({
      messageText: messageText,
      createdAt: new Date(),
      username: "anonymous"
    });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("messages", function (){
    return Messages.find({}, {sort: {createdAt: -1}, limit: 5});
  });
}

/* scrolling mode */

if (Meteor.isClient) {
  // This code only runs ont eh client
  Meteor.subscribe("messages");

  /* helper code */

  /* chat window scrolling */

  /* events */

  /* account config */

}
