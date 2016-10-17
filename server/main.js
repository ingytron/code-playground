this.Documents = new Mongo.Collection("documents");

import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  // code to run on server at startup
  if (!Documents.findOne()){ // No documents yet
  	Documents.insert({title: "My new document"});
  }
});