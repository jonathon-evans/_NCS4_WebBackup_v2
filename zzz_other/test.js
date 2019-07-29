app = angular.module('NCS4Carousel', []);
//needed features: add functionality to automatically go to next slide every x seconds if mouse isn't hovering
            //fix slides to go sideways
//neat future features:  Slides wrap around, multiple per page, ...
app.controller('CarouselCtrl', ['$scope', '$window', function($scope, $window) {
  /*
    Future work:  Make this pull from an external piece of code with an object inside it
        >Object named slides
        >Put into a new javascript item in the homepage
        >Make new app that takes in info and outputs code in the form of the object (e.g.
                                                                                            output: const carousel_slides = [
                                                                                              {
                                                                                                key: thing,
                                                                                              },
                                                                                              {
                                                                                                key: other_thing,
                                                                                              }
                                                                                            }
                                                                                            ]
                                                                                            )
        >The above output will be copy pasted into the new javascript item on the homepage by the one entering it
        >Functionalities:
            -Will display info in list form
            -Add entry (with appropriate forms)
            -Remove entry (from list)
            -Move entry in relation to list
            -Print list in code form
  */
  //size: 2000x290 large
  //      980x290 small
  $scope.needLarge = true;
  $scope.slides = CAROUSEL_SLIDES;
  $scope.transit = 'translateX(0px)';
  $scope.current = 0;

  // $scope.widths = {};
  $scope.width =

  $scope.next = (offset) => {
    $scope.current = parseInt($scope.current, 10)
    offset = parseInt(offset, 10);
    ++$scope.current;
    let reverse = $scope.current === $scope.slides.length;
    if(reverse) $scope.current = 0;

    $scope.transit = `translateX( -${( $scope.current * offset )}vw)`;
    console.log($scope.current, $scope.transit)
  };

  $scope.prev = (offset) => {
    $scope.current = parseInt($scope.current, 10)
    offset = parseInt(offset, 10);

    --$scope.current;

    let reverse = $scope.current < 0;
    if(reverse) $scope.current = $scope.slides.length-1;
    $scope.transit = `translateX( -${( $scope.current * offset )}vw)`;
  }

  $scope.hoverIn = function(){
    $scope.hovered = true;
    console.log($scope.hovered)
  };

  $scope.hoverOut = function(){
    $scope.hovered = false;
    console.log($scope.hovered)
  };
  ($scope.continuousScroll = (seconds) => {
    setTimeout(function () {
      if(!$scope.hovered)$scope.next(90)
      $scope.continuousScroll(seconds);
      $scope.$apply()
    }, seconds * 1000);
  })(4);
  // $scope.continuousScroll(4);

  // $(window).resize(function() {
  //   width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //   if (width < 768) $scope.needLarge = false;
  //   else $scope.needLarge = false;
  // });

}]);

app.directive('imageHolder', ['$window', function ($window) {

   return {
      link: link,
      restrict: 'E',
      template: (elm, attrs) => '<img src="{{scope.showBig}}" alt="{{scope.title}}" />',
      scope: {
        title: "@title",
        large: "@large",
        small: "@small",
      }
   };
   scope.showBig = 'temp';
   function link(scope, element, attrs){
     scope.width = $window.innerWidth;
     scope.showBig = (scope.width >= 900) ? scope.showBig = scope.large : scope.showBig = scope.small;
     console.log(1, scope.showBig)
     scope.$digest();
     angular.element($window).bind('resize', function(){
        console.log(2, scope.showBig)
        scope.width = $window.innerWidth;
        scope.showBig = (scope.width >= 900) ? scope.showBig = scope.large : scope.showBig = scope.small;
        console.log(3, scope.showBig)
        // manuall $digest required as resize event
        // is outside of angular
        scope.$digest();
     });

   }

}]);
