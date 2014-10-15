/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function() {
    
    // module settings
    angular.module('vt.start', [])
            .config(['$stateProvider', function($stateProvider) {
                    $stateProvider.state('start', {
                        url:'/start',
                        templateUrl: 'modules/start/start.html',
                        controller: 'StartController',
                        controllerAs: 'start',
                        
                    });
            }])
            .controller('StartController', StartController);
    
    // module controller implementation
    function StartController() {
        
    }
    
})();