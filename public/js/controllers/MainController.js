app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Rate a pet\'s cuteness';
  $scope.pets = [
  	{
    	name: 'Winkie',
    	cover: 'img/winkie.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Bobby',
    	cover: 'img/bobby.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Bruno',
    	cover: 'bruno.jpg',
    	likes: 0,
    	dislikes: 0
  	},
  	{
    	name: 'Snowy',
    	cover: 'snowy.jpg',
    	likes: 0,
    	dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);
