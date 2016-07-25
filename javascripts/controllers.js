app.controller("mainController", function($scope) {

    $scope.places = places
    $scope.$watch('$scope.places.comments.length',
      function(newValue, oldValue) {
        console.log('scope watch');
      }
    )

    $scope.commentCount = function(place) {
      return place.comments.length
    }
// for addNewPlace form
    $scope.showForm = false
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
      place.votes += 1
    }
    $scope.downVote = function(place) {
      console.log('vote function works');
      place.votes -= 1
    }

    //  Comments
    $scope.showCommentsButton = function(place) {
      place.showComments = true
      console.log(place.showComments);
    }
    $scope.hideCommentsButton = function(place) {
      place.showComments = false
      console.log(place.showComments);
    }

    $scope.showCommentsFormButton = function(place) {
      place.showCommentsForm = true
    }
    $scope.hideCommentsFormButton = function(place) {
      place.showCommentsForm = false
    }
    $scope.newComment = {}
    $scope.addComment = function(place) {
      place.comments.push($scope.newComment)
      $scope.newComment = {}
    }
});
