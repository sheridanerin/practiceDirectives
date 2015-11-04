angular.module( 'lessonHider' )
	.controller( 'mainCtrl', ['$scope', 'mainSrvc', function( $scope, mainSrvc ) {

		$scope.currentSchedule = mainSrvc.getCurrentSchedule();

		$scope.lessonList = mainSrvc.getLessonList();

}]);