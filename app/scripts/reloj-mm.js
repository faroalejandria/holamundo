(function(angular) {
  'use strict';
angular.module('docsTimeDirective', [])
  .controller('Controller', ['$scope', function($scope) {
  }])
  .directive('jvReloj', ['$interval', 'dateFilter', function($interval, dateFilter) {

    function link(scope, element, attrs) {
      var timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), 'hh:mm:ss'));
      }

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }

    return {
      link: link
    };
  }]);
})(window.angular);