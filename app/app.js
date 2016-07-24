$(document).ready(function() {
})

var app = angular.module("reddit", [])

app.controller("powerController", function($scope) {

    $scope.places = places

    $scope.newPlace = {}
    $scope.addPlace = function() {
      console.log('add place works...new place = ', $scope.newPlace);
      $scope.newPlace.votes = 0
      $scope.newPlace.comments= []
      $scope.places.push($scope.newPlace)
      $scope.newPlace = {}
    }
    $scope.showForm = false
    $scope.showFormButton = function() {
        console.log('showformbutton works');
        $scope.showForm = true
    }
    $scope.hideFormButton = function() {
      $scope.showForm = false
    }
});
