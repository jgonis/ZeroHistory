/**
 * Created by vgw44765 on 03/10/2014.
 */
var rp: RandomPaintCanvas = null;
var continueProcessing: boolean = false;
window.addEventListener('load', (event: UIEvent ) => {
    console.log("resizing canvas");
    var canvas = <HTMLCanvasElement>(document.getElementById("canvas"));
    if (canvas !== null) {
        var canvasParent = canvas.parentElement;
        if (canvasParent !== null) {
            canvas.width = canvasParent.clientWidth;
            canvas.height = canvasParent.clientHeight;
        }
        document.getElementById("startButton").addEventListener("click", (mouseEvent: MouseEvent) => {
            console.log("start button clicked");
        });

        document.getElementById("stopButton").addEventListener("click", (mouseEvent: MouseEvent) => {
            console.log("stop button clicked");
        });

        document.getElementById("resetButton").addEventListener("click", (mouseEvent: MouseEvent) => {
            console.log("reset button clicked");
        });

        document.getElementById("exportButton").addEventListener("click", (mouseEvent: MouseEvent) => {
            console.log("export button clicked");
        });

        rp = new RandomPaintCanvas(canvas.width, canvas.height, continueProcessing, canvas.getContext("2d"));
    }
});

class RandomPaintCanvas {
    width: number;
    height: number;
    continueProcessing: boolean;
    ctx: CanvasRenderingContext2D;
    constructor(width: number, height: number, continueProcessing: boolean, ctx: CanvasRenderingContext2D) {
        this.width = width;
        this.height = height;
        this.setContinueProcessing(continueProcessing);
        this.ctx = ctx;
    }

    loopingFunc() {
        var startTime: number = performance.now();
        var iterationCount: number = 0;
        var currentTime: number = 0;
        var shouldLoop: boolean = true;
        while(shouldLoop === true && this.continueProcessing === true) {
            currentTime = performance.now();
            if(currentTime - startTime >= 1000) {
                shouldLoop = false;
            }
            iterationCount = iterationCount + 1;
        }
        window.setTimeout(this.loopingFunc, 0);
    }

    setContinueProcessing(continueProcessing: boolean ) {
        this.continueProcessing = continueProcessing;
    }
}

interface Point {
    x: number;
    y: number;
}

class RandomPainter {
    x: number;
    y: number;
    maxX: number;
    maxY: number
    constructor(x: number, y: number, maxX: number, maxY: number) {
        this.x = x;
        this.y = y;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    getCurrentPosition() : Point {
        return { x: this.x, y: this.y };
    }

    goToNextPosition() {
        this.x = this.generateValidPosition(this.x, this.maxX);
        this.y = this.generateValidPosition(this.y, this.maxY);
    }

    private generateValidPosition(currentPosition: number, positionMax: number) : number {
        var validNextPosition = false;
        while (validNextPosition === false) {
            var positionOffset:number = Math.floor(Math.random() * (4 - (-3))) + (-3);
            var tempPosition: number = currentPosition + positionOffset;
            if (tempPosition < 0 || tempPosition > positionMax) {
                validNextPosition = false;
            } else {
                validNextPosition = true;
                return tempPosition;
            }
        }
    }
}