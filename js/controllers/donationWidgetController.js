houseOfGod.controller('DonateController',function($scope,$stateParams,$state){

    $scope.max= 200;
    $scope.value = 10;
    $scope.percentage = ($scope.value/$scope.max)*100;
    $scope.remainingValue = $scope.max - $scope.value;
    $scope.$watch('value',function(oldValue,newValue){
        if($scope.max - $scope.value < 0){
            $scope.remainingValue = 0;
            $scope.percentage = 100;
        }
        else{
            $scope.remainingValue = $scope.max - $scope.value;
            $scope.percentage = ($scope.value/$scope.max)*100;
        }
    })

})