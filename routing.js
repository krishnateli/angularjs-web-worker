// routing.js
var webworker = angular.module('webworker', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) { $urlRouterProvider.otherwise("/index.html"); $stateProvider .state('testworker', { url: "/testworker", templateUrl: "webworker.html", controller: "webWorkerCtrl" });
});