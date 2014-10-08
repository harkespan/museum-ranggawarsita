angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('GaleriCtrl', function($scope, Galeri) {
	$scope.galeri = Galeri.all();
})

.controller('LocationCtrl',function($scope){
})

.controller('AgendaCtrl',function($scope, Agenda){
	$scope.agendas = Agenda.all();
})

.controller('AgendaDetailCtrl',function($scope,$stateParams, Agenda){
	$scope.agenda = Agenda.get($stateParams.agendaId);
});
