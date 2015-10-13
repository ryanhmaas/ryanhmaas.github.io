//twitterApp is dependent on the myApp.services module

//A module is a collection of services, directives, controllers, filters, and configuration information. angular.module is used to configure the $injector.
var app = angular.module('twitterApp', ['ngSanitize','twitterApp.services']);
