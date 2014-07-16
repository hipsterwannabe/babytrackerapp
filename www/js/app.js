// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
   // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
   // for form inputs)
   if(window.cordova && window.cordova.plugins.Keyboard) {
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
   }
   if(window.StatusBar) {
     // org.apache.cordova.statusbar required
     StatusBar.styleDefault();
   }
 });
})

.config(function($stateProvider, $urlRouterProvider) {

 // Ionic uses AngularUI Router which uses the concept of states
 // Learn more here: https://github.com/angular-ui/ui-router
 // Set up the various states which the app can be in.
 // Each state's controller can be found in controllers.js
 $stateProvider

   // setup an abstract state for the tabs directive
   .state('tab', {
     url: "/tab",
     abstract: true,
     templateUrl: "templates/tabs.html"
   })

   // Each tab has its own nav history stack:

   .state('tab.menu', {
     url: '/menu',
     views: {
       'tab-menu': {
         templateUrl: 'templates/tab-menu.html',
         controller: 'MenuCtrl'
       }
     }
   })

   .state('tab.nap', {
     url: '/nap',
     views: {
       'tab-nap': {
         templateUrl: 'templates/tab-nap.html',
         controller: 'NapCtrl'
       }
     }
   })

   .state('tab.diaper', {
     url: '/diaper',
     views: {
       'tab-diaper': {
         templateUrl: 'templates/tab-diaper.html',
         controller: 'DiaperCtrl'
       }
     }
   })

   .state('tab.eating', {
     url: '/eating',
     views: {
       'tab-eating': {
         templateUrl: 'templates/tab-eating.html',
         controller: 'EatingCtrl'
       }
     }
   })

   .state('tab.eating.breast', {
     url: '/eating/breast',
     views: {
       'tab-eating-breast': {
         templateUrl: 'templates/tab-eating-breast.html',
         controller: 'breastFeedCtrl'
       }
     }
   })

   .state('tab.eating.bottle', {
     url: '/eating/bottle',
     views: {
       'tab-eating-bottle': {
         templateUrl: 'templates/tab-eating-bottle.html',
         controller: 'bottleFeedCtrl'
       }
     }
   })

   .state('tab.settings', {
     url: '/settings',
     views: {
       'tab-settings': {
         templateUrl: 'templates/tab-settings.html',
         controller: 'SettingsCtrl'
       }
     }
   })

 // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/tab/menu');

});