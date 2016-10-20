import angular from 'angular';

function greeting() {
    return {
        restrict: 'E',
        scope: {
            title: '='
        },
        template: require('../partials/greeting.html')
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name;