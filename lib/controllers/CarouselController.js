angularApp.controller("CarouselCtrl", ["$scope","$element", function($scope, $element) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    
    
    var slides = $scope.slides = [];
    slides.push({
        image: '/storage/app/media/abstract-background-4.jpg',
        text: 'professional web development services',
        title: ''
    }, {
        image: '/storage/app/media/abstract-background-6-2.jpg',
        text: 'E-commerce'
    })
    // $scope.addSlide = function() {
    
    //     var newWidth = 600 + slides.length + 1;
    //     slides.push({
    //         image: '//placekitten.com/' + newWidth + '/300',
    //         text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //     });
    // };
    // for (var i = 0; i < 4; i++) {
    //     $scope.addSlide();
    // }
}]);

angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/carousel/carousel.html",
    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
    "</div>\n" +
    "");
}]);
