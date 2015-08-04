angularApp.directive('blogPostsTemplate', function() {
	return {
		restrict: 'E',
		templateUrl: 'blogPostsTemplate.htm',
		controller: function($scope, $http, $sce) {
		console.log("bpt controller");
			$http({
				url: '/blog',
				headers: {'mcc-json-request': 'true'}
			}).success(function(res) {
				$scope.blogPosts = res;

				angular.forEach($scope.blogPosts.data, function(value, key) {
					value.content_html = $sce.trustAsHtml(value.content_html);
				})
			});
		}
	}
});