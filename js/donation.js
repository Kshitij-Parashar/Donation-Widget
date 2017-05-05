var houseOfGod = angular.module('donationWidget', ['ui.router']);

houseOfGod.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/donate');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('donate', {
            url: '/donate',
            templateUrl: 'html/donate.html'
        })

});
houseOfGod.directive('progressbar', [function() {
    return {
        restrict: 'A',
        scope: {
            'progress': '=progressbar'
        },
        controller: function($scope, $element, $attrs) {
            console.log($element)
            $element.progressbar({
                value: $scope.progress
            })
            $scope.$watch(function() {
                $element.progressbar({value: $scope.progress})
            })
        }
    }
}]);
