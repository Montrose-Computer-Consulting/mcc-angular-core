angularApp = angular.module('sjae-core',['ui.bootstrap', 'ui.router']);

angularApp.config(['$stateProvider','$locationProvider', '$httpProvider',
  function($stateProvider, $locationProvider, $httpProvider) {
	$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
	$locationProvider.html5Mode(true);
    
    $stateProvider.state('home', {
    	url: '/',
    	templateUrl: '/'
    }).state('services', {
    	url: '/services',
    	templateUrl: '/services'
    }).state('packages', {
    	url: '/packages',
    	templateUrl: '/packages'
    }).state('profile', {
    	url: '/profile',
    	templateUrl: '/profile'
    }).state('blog', {
    	url: '/blog',
    	templateUrl: '/blog',
    });

  }]).run(['$templateCache', '$http', '$state' ,function($templateCache, $http, $state) {
  		
  		// angular.forEach($state.get(), function(state, key) {
  		// 	console.log(state);
  		// 	if(typeof state.abstract === 'undefined' ) {
  		// 		$http({
  		// 			url: state.url
  		// 		}).success(function(res) {
        
  		// 			$templateCache.put(state.templateUrl, res)	
  		// 		})
  				
  		// 	}
  		// })

  }]).controller('carousel', function() {
    
  })