/**
 * Created by vgw44765 on 03/10/2014.
 */
var rp = null;
var continueProcessing = false;
window.addEventListener('load', function (event) {
    console.log("resizing canvas");
    var canvas = (document.getElementById("canvas"));
    if (canvas !== null) {
        var canvasParent = canvas.parentElement;
        if (canvasParent !== null) {
            canvas.width = canvasParent.clientWidth;
            canvas.height = canvasParent.clientHeight;
        }
        document.getElementById("startButton").addEventListener("click", function (mouseEvent) {
            console.log("start button clicked");
        });
        document.getElementById("stopButton").addEventListener("click", function (mouseEvent) {
            console.log("stop button clicked");
        });
        document.getElementById("resetButton").addEventListener("click", function (mouseEvent) {
            console.log("reset button clicked");
        });
        document.getElementById("exportButton").addEventListener("click", function (mouseEvent) {
            console.log("export button clicked");
        });
        rp = new RandomPaintCanvas(canvas.width, canvas.height, continueProcessing, canvas.getContext("2d"));
    }
});
var RandomPaintCanvas = (function () {
    function RandomPaintCanvas(width, height, continueProcessing, ctx) {
        this.width = width;
        this.height = height;
        this.setContinueProcessing(continueProcessing);
        this.ctx = ctx;
    }
    RandomPaintCanvas.prototype.loopingFunc = function () {
        var startTime = performance.now();
        var iterationCount = 0;
        var currentTime = 0;
        var shouldLoop = true;
        while (shouldLoop === true && this.continueProcessing === true) {
            currentTime = performance.now();
            if (currentTime - startTime >= 1000) {
                shouldLoop = false;
            }
            iterationCount = iterationCount + 1;
        }
        window.setTimeout(this.loopingFunc, 0);
    };
    RandomPaintCanvas.prototype.setContinueProcessing = function (continueProcessing) {
        this.continueProcessing = continueProcessing;
    };
    return RandomPaintCanvas;
})();
var RandomPainter = (function () {
    function RandomPainter(x, y, maxX, maxY) {
        this.x = x;
        this.y = y;
        this.maxX = maxX;
        this.maxY = maxY;
    }
    RandomPainter.prototype.getCurrentPosition = function () {
        return { x: this.x, y: this.y };
    };
    RandomPainter.prototype.goToNextPosition = function () {
        this.x = this.generateValidPosition(this.x, this.maxX);
        this.y = this.generateValidPosition(this.y, this.maxY);
    };
    RandomPainter.prototype.generateValidPosition = function (currentPosition, positionMax) {
        var validNextPosition = false;
        while (validNextPosition === false) {
            var positionOffset = Math.floor(Math.random() * (4 - (-3))) + (-3);
            var tempPosition = currentPosition + positionOffset;
            if (tempPosition < 0 || tempPosition > positionMax) {
                validNextPosition = false;
            }
            else {
                validNextPosition = true;
                return tempPosition;
            }
        }
    };
    return RandomPainter;
})();
//# sourceMappingURL=RandomPainter.js.map