'use strict';

angular
  .module('yoMyCarApp', [
    'ngResource',
    'ngRoute',

    'cordova'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(
    [
      'CordovaService',
      function (CordovaService) {
        CordovaService.ready().then(function() {
          FastClick.attach(document.body);
          //for this add in corodova -> cordova plugin add org.apache.cordova.dialogs
          //navigator.notification.alert('PhoneGap is working on Android?' + deviceIsAndroid, function(){}, '', '');
        });
      }
    ]
  );

angular.module('cordova', [])
  .factory('CordovaService', [
    '$q',
    function($q) {
      
      function _ready() {
        var d = $q.defer();
        document.addEventListener('deviceready', function() {
          d.resolve(window.cordova);
        });
        return d.promise;
      }
      
      return {
        ready : _ready
      };
    }
  ]);
