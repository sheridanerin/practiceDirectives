angular.module('lessonHider')
	.service('mainSrvc', [function() {

		var days = [{
				weekday: 'monday',
				lesson: 'routing'
			},
			{
				weekday: 'tuesday',
				lesson: 'directives'
			},
			{
				weekday: 'wednesday',
				lesson: 'review',
			},
			{
				weekday: 'thursday',
				lesson: 'firebase'
			},
			{
				weekday: 'friday',
				lesson: 'more firebase?'
			}];

		var lessons = ['services', 'routing', 'directives', 'review', 'firebase', 'more firebase?', 'node', 'express', 'mongo'];

		this.getCurrentSchedule = function() {
			return days;
		}

		this.getLessonList = function() {
			return lessons;
		}

}]);