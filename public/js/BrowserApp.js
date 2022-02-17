var app = angular.module("BrowserApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {controller: "DecentAgencyController", templateUrl: "DecentAgency/index.html"})

    /* --- Decent Agency---*/

    .when("/DecentAgency", {controller: "DecentAgencyController", templateUrl: "DecentAgency/decent_agency.html"})
    .when("/About", {controller: "DecentAgencyController", templateUrl: "DecentAgency/about.html"})

    /* --- Decent Mentor---*/
    
    .when("/DecentMentor", {controller: "DecentMentorController", templateUrl: "DecentMentor/decent_agency.html"})
    .when("/About", {controller: "DecentMentorController", templateUrl: "DecentMentor/about.html"})

    /* --- Login Routes---*/
    .when("/Login", {controller: "AuthController",templateUrl: "Login.html"})
    .when("/Logout", {resolve: {deadResolve: function ($location, AuthFactory) {AuthFactory.clearData(); $location.path('/Login'); } }})

    /* --- Exclusive Behind The Counter Routes---*/
    .when("/BehindTheCounter", {resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}},controller : "BehindTheCounterController",templateUrl : "BehindTheCounter/fiddlers_ledger.html"})
    .when("/BehindTheCounter/PickersDash", {resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}}, controller: "BehindTheCounterController", templateUrl: "BehindTheCounter/pickers_dash.html"})
    .when("/BehindTheCounter/FiddlersLedger", {resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}}, controller: "BehindTheCounterController",templateUrl: "BehindTheCounter/fiddlers_ledger.html"})

    .otherwise({redirectTo: "/"})
  }
]);