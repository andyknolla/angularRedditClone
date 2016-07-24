$(document).ready(function() {
})

var app = angular.module("reddit", [])

app.controller("powerController", function($scope) {

    $scope.places = places

    $scope.commentCount = function(place) {
      return place.comments.length
    }

    $scope.showForm = false
    $scope.showCommentsForm = false
    $scope.showFormButton = function() {
        console.log('showformbutton works');
        $scope.showForm = true
    }
    $scope.hideFormButton = function() {
      $scope.showForm = false
    }

    $scope.newPlace = {}
    $scope.addPlace = function() {
      console.log('add place works...new place = ', $scope.newPlace);
      $scope.newPlace.votes = 0
      $scope.newPlace.comments= []
      $scope.places.push($scope.newPlace)
      $scope.newPlace = {}
    }

    $scope.upVote = function(place) {
      console.log('vote function works');
      place.votes += 1
    }
    $scope.downVote = function(place) {
      console.log('vote function works');
      place.votes -= 1
    }
    $scope.showCommentsButton = function() {
      $scope.showComments = true
    }
    $scope.hideCommentsButton = function() {
      $scope.showComments = false
    }

    $scope.showCommentsFormButton = function() {
      $scope.showCommentsForm = true
    }
    $scope.hideCommentsFormButton = function() {
      $scope.showCommentsForm = false
    }
    $scope.newComment = {}
    $scope.addComment = function(place) {
      place.comments.push($scope.newComment)
      $scope.newComment = {}
    }
});
