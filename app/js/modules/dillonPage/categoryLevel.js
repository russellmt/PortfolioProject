var CategoryLevel = function(){
    'use strict';

    var categorys = {};

    this.addCategory = function(_name) {
        categorys[_name] = [];
    };

    this.addDataToLastCategory = function(_categoryName, _lineData, _className) {
        var category = categorys[_categoryName];
    };

};
