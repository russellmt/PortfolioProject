(function() {
    angular.module('app.homePage')

    .service('dataService', ['$http', function($http) {
        var promise = $http.get('https://dl.dropboxusercontent.com/u/61355633/angular/employees_flat.json');

        this.getPromise = function() {
            return promise;
        };
    }]);
})();