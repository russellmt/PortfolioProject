(function () {
    'use strict';

    angular.module('app.dillonPage')

    .controller('resumeController', [function () {
        var allTextInCurFile = '';
        this.allTextLines = [];
        var me = this;
        
        this.readFile = function (fileName) {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", fileName, false);
            rawFile.onreadystatechange = function () {
                if(rawFile.readyState === 4) {
                    if(rawFile.status === 200 || rawFile.status == 0) {
                        allTextInCurFile = rawFile.responseText;
                        me.allTextLines = allTextInCurFile.split('\n');
                    }
                }
            };
            rawFile.send(null);
        };
        
        this.decodeLine = function(_curLine) {
            var className = '';
            var category = 'category';
            var bold = 'bold';
            debugger;
            for(var charElement in _curLine) {
                var char = _curLine[charElement];
                switch (char) {
                    case '~':
                        className += category;
                        break;

                    case ':':
                        className += className ? (' ' + bold): bold;
                        return;
                }
            }
            return className;
        };

    }]);
})();