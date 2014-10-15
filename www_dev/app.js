/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function() {
    angular.module('vt', [ 'ionic',
                           'pascalprecht.translate',
                           'ngStorage',
                           'vt.start'])
                                
            .config(['$urlRouterProvider', function($urlRouterProvider) {
                    $urlRouterProvider.otherwise("/start");
            }]);
})();
