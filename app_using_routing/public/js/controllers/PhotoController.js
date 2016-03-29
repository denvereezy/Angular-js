app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
    $scope.plusOne = function(index) {
  $scope.detail.likes += 1;
};
$scope.minusOne = function(index) {
  $scope.detail.dislikes += 1;
};
  });
}]);
