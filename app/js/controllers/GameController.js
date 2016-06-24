(function () {
  'use strict';
  angular.module('app')
  .controller('GameController', ['$interval', '$scope', '$timeout', '$q', 'AnimationConstants', function($interval, $scope, $timeout, $q, AnimationConstants) {
    var moveTime = AnimationConstants.MOVE_TIME;
    var fadeTime = AnimationConstants.FADE_TIME;
    var shipCssSelector = '#ship';
    var displayCssSelector = '#animationDisplay';

    var me = this;

    me.allTextLineOnjects = [];
    me.eachCategoryObject = {};

    me.leftPathClass = AnimationConstants.PATH_CLASSES.LEFT_CLASS;
    me.centerPathClass = AnimationConstants.PATH_CLASSES.CENTER_CLASS;
    me.rightPathClass = AnimationConstants.PATH_CLASSES.RIGHT_CLASS;
    // me.lines = LineFactory.createRandomLines(NUMBER_OF_LINES);
    me.center = center;
    me.handleKeyPress = handleKeyPress;
    me.moveLeft = moveLeft;
    me.moveRight = moveRight;
    me.shoot = shoot;

    readFile('../../../resumes/dillonResume.txt');

    $timeout(function() {
      me.paths = getPathConfigurations();
      me.skyDiveIntervalId = $interval(triggerEnemySkydive, AnimationConstants.ENEMY_SKYDIVE_DELAY, AnimationConstants.NUMBER_OF_SKYDIVING_ENEMIES);
    });

    //==== Functions ====//

    function animateBullet(bulletElement) {
      var bulletElement = $('.Bullet');
      var moveAnimationConfiguration = {
        top: getLastLineElementBottom() // Possible change.
      };
      bulletElement.animate(moveAnimationConfiguration, 250, function() {bulletElement.remove()});
    }

    function applyNewPathClass(element, classToAdd) {
      var pathClasses = AnimationConstants.PATH_CLASSES;
      var firstClassToRemove;
      var secondClassToRemove;
      if (classToAdd == pathClasses.LEFT_CLASS) {
        firstClassToRemove = pathClasses.CENTER_CLASS;
        secondClassToRemove = pathClasses.RIGHT_CLASS;
      } else if (classToAdd == pathClasses.CENTER_CLASS) {
        firstClassToRemove = pathClasses.LEFT_CLASS;
        secondClassToRemove = pathClasses.RIGHT_CLASS;
      } else {
        firstClassToRemove = pathClasses.LEFT_CLASS;
        secondClassToRemove = pathClasses.CENTER_CLASS;
      }
      element.addClass(classToAdd);
      element.removeClass(firstClassToRemove);
      element.removeClass(secondClassToRemove);
    }

    function animateElement(element, animationConfiguration, duration, classToAddPostAnimation) {
      element.animate(animationConfiguration, duration, 'swing', function() {
        if (angular.isDefined(classToAddPostAnimation)) {
          applyNewPathClass(element, classToAddPostAnimation);
        }
      });
    }

    function center() {
      var display = $(displayCssSelector);
      var centerOfDisplay = (stripPx(display.css('width')) / 2) - (AnimationConstants.SHIP_WIDTH / 2) + 5;
      var shipElement = $(shipCssSelector);
      shipElement.removeClass(AnimationConstants.PATH_CLASSES.LEFT_CLASS);
      shipElement.removeClass(AnimationConstants.PATH_CLASSES.RIGHT_CLASS);
      animateElement(shipElement, createLeftAnimationConfiguration(centerOfDisplay), moveTime, AnimationConstants.PATH_CLASSES.CENTER_CLASS);
    }

    function createBullet() {
      var bulletElement =  $('<div class="Bullet">&nbsp;</div>');
      var bulletElementCss = {
        position: 'absolute',
        left: getTipOfShipLeftValue() - (AnimationConstants.BULLET_WIDTH / 2) - 2,
        top: getTipOfShipTopValue(),
        zIndex: -1000
      };
      bulletElement.css(bulletElementCss);
      $('body').append(bulletElement);
    }

    function createEnemy(initialLeft, initialTop) {
      var enemyElement = $('<div class="Enemy">&nbsp;</div>');
      var cssConfiguration = {
        left: initialLeft,
        top: initialTop
      }
      enemyElement.css(cssConfiguration);
      var pathClass;
      var pathClasses = AnimationConstants.PATH_CLASSES;
      if (initialLeft == me.paths[0].left) {
        pathClass = pathClasses.LEFT_CLASS;
      } else if (initialLeft == me.paths[1].left) {
        pathClass = pathClasses.CENTER_CLASS;
      } else {
        pathClass = pathClasses.RIGHT_CLASS;
      }
      enemyElement.addClass(pathClass);
      return enemyElement;
    }

    function createLeftAnimationConfiguration(leftValue) {
      return {
        left: leftValue
      };
    }

    function destroyBullet(bulletElement) {
      if (angular.isDefined(bulletElement)) {
        bulletElement.remove();
      } else {
        $('.Bullet').remove();
      }
    }

    function fireBullet() {
      if (!me.shipIsFiring) {
        me.shipIsFiring = true;
        return $q(function(resolve, reject) {
          animateBullet(createBullet());
          me.shipIsFiring = false;
          resolve('BulletAnimationComplete');
        });
      }
    }

    function gameOver() {
      // $interval.cancel(vm.skyDiveIntervalId);
      alert('Game Over!!!');
    }

    function getLastLineElementBottom() { // Possible change.
      var lastLineElement = $('.Line').last();
      return lastLineElement//.offset().top + lastLineElement.height();
    }

    function getPathConfigurations() {
      var displayElement = $(displayCssSelector);
      var displayElementWidth = displayElement.width();
      var displayElementLeft = displayElement.offset().left;
      var displayElementCenter = displayElementLeft + (displayElementWidth/ 2);
      var displayElementRight = displayElementLeft + displayElementWidth;
      var lastLineElementBottom = getLastLineElementBottom();
      var left = {
        left: displayElementLeft,
        top: lastLineElementBottom
      };
      var center = {
        left: displayElementCenter - (AnimationConstants.ENEMY_WIDTH / 2),
        top: lastLineElementBottom
      };
      var right = {
        left: displayElementRight - AnimationConstants.ENEMY_WIDTH,
        top: lastLineElementBottom
      };
      return [left, center, right];
    }

    function getRandomLeftValueForEnemy() {
      var randomIndex = Math.round(Math.random() * (me.paths.length - 1));
      return me.paths[randomIndex].left;
    }

    function getTipOfShipLeftValue() {
      var shipElement = $(shipCssSelector);
      return shipElement.offset().left + (shipElement.width() / 2);
    }

    function getTipOfShipTopValue() {
      var shipElement = $(shipCssSelector);
      return shipElement.offset().top;
    }

    function handleKeyPress($event) {
      switch ($event.keyCode) {
        case 37:
          moveLeft();
          break;
        case 39:
          break;
        default:
          console.log($event.keyCode);
      }
    }

    function moveLeft() {
      var shipElement = $(shipCssSelector);
      shipElement.removeClass(AnimationConstants.PATH_CLASSES.CENTER_CLASS);
      shipElement.removeClass(AnimationConstants.PATH_CLASSES.RIGHT_CLASS);
      animateElement(shipElement, createLeftAnimationConfiguration('0px'), moveTime, AnimationConstants.PATH_CLASSES.LEFT_CLASS);
    }

    function moveRight() {
      var display = $(displayCssSelector);
      var rightSideOfDisplay = stripPx(display.css('width')) - 42;
      var shipElement = $(shipCssSelector);
      shipElement.removeClass(AnimationConstants.PATH_CLASSES.LEFT_CLASS);
      shipElement.removeClass(AnimationConstants.PATH_CLASSES.CENTER_CLASS);
      animateElement(shipElement, createLeftAnimationConfiguration(rightSideOfDisplay + 'px'), moveTime, AnimationConstants.PATH_CLASSES.RIGHT_CLASS);
    }

    function shoot() { // Possible change.
      var lineElements = me.allTextLineOnjects;
      if (angular.isDefined(lineElements) && lineElements.length > 0) {
        fireBullet().then(function() {
          lineElements.splice(lineElements.length - 1, 1);
          $timeout(function() {
            // lineElements.splice(0, 0, LineFactory.createRandomLine());
          }, fadeTime + 100);
        }, function() {});
      }
    }

    function triggerEnemySkydive() {
      var enemyElement = createEnemy(getRandomLeftValueForEnemy(), getLastLineElementBottom());
      $('body').append(enemyElement);
      var skydiveAnimationCss = {
        top: $(shipCssSelector).offset().top
      }
      enemyElement.addClass('Animating');
      enemyElement.animate(skydiveAnimationCss, AnimationConstants.ENEMY_SKY_DIVE_DURATION, 'linear', function() {
        var shipElement = $(shipCssSelector);
        var pathClasses = AnimationConstants.PATH_CLASSES;
        if (enemyElement.hasClass(pathClasses.LEFT_CLASS) && shipElement.hasClass(pathClasses.LEFT_CLASS) ||
            enemyElement.hasClass(pathClasses.CENTER_CLASS) && shipElement.hasClass(pathClasses.CENTER_CLASS) ||
            enemyElement.hasClass(pathClasses.RIGHT_CLASS) && shipElement.hasClass(pathClasses.RIGHT_CLASS)) {
          gameOver();
        }
        enemyElement.remove()
      });
    }

    function stripPx(value) {
      return parseInt(value.replace(/px$/i, ''));
    }

    //== Addon Code ==//

    function readFile(fileName) {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", fileName, false);
      rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
          if(rawFile.status === 200 || rawFile.status == 0) {
            me.allTextLineOnjects = formatRawFile(rawFile);
          }
        }
      };
      rawFile.send(null);
    }

    function formatRawFile(_rawFile) {
      var curCategory = '';
      var categoryChar = '~';
      var firstClass = 'fade';
      var resumeTextArray = _rawFile.responseText.split('\n');

      var categoryLevel = new CategoryLevel();

      for (var element in resumeTextArray) {
        var curLine = resumeTextArray[element];
        var firstChar = curLine[0];

        switch (firstChar) {

          case categoryChar:
            curCategory = curLine;
            curCategory = curCategory.trim().slice(1);
            me.eachCategoryObject[curCategory] = [];
            //categoryLevel.addCategory(curCategory);
            break;
          default:
            if(curCategory) {
              var newDiv = {
                line: curLine,
                className: firstClass
              };
              me.eachCategoryObject[curCategory].push(newDiv);
              //categoryLevel.addDataToLastCategory(curCategory, firstClass, curLine);
            }
        }
      }
    }

    this.openSection = function(key) {
      this.allTextLineOnjects = this.eachCategoryObject[key];
    };
  }]);
})();