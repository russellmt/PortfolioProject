(function() {
  'use strict';
  angular.module('app').constant('AnimationConstants', {
    BULLET_WIDTH: 5,
    ENEMY_SKYDIVE_DELAY: 1500,
    ENEMY_SKY_DIVE_DURATION: 1000,
    ENEMY_WIDTH: 40,
    FADE_TIME: 750,
    MOVE_TIME: 500,
    NUMBER_OF_SKYDIVING_ENEMIES: 1,
    SHIP_WIDTH: 40,
    PATH_CLASSES: {
      LEFT_CLASS: 'LeftPath',
      CENTER_CLASS: 'CenterPath',
      RIGHT_CLASS: 'RightPath'
    }
  });
})();