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
        
        this.decodeFile = function() {
            debugger;
            for(var lineElement in this.allTextLines) {
                var curLine = this.allTextLines[lineElement];
                
                for(var charElement in curLine) {
                    var char = curLine[charElement];
                    switch (char) {
                        case 'asd':
                            break;

                        case 'aaa':
                            break;
                    }
                }
                
            }

        };

        // this.readFile('../../../resumes/dillonResume.txt');
        // this.decodeFile();
        // debugger;
    }]);
})();