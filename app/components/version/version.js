'use strict';

angular.module('myApp.version', [
  'app.version.interpolate-filter',
  'app.version.version-directive'
])

.value('version', '0.1');
