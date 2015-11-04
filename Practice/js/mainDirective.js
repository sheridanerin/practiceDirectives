angular.module( 'lessonHider' )
	.directive( 'mainDir', [function() {
		
		return {
			restrict: 'E',
			templateUrl: 'js/mainDirTmpl.html',
			scope: {
				lesson: '=',
				schedule: '='
			},
			link: function( scope, elem, attrs ) {
				scope.schedule.forEach( function( day ) {
					if ( day.lesson === scope.lesson ) {
						elem.css( 'text-decoration', 'line-through' );
					}
				})
			}


		}
		
}]);