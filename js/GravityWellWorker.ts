/**
 * Created by jgonis on 15/10/2014.
 */
var gw = null;
onmessage = function (event) {
    if(event.data === "start") {
        console.log("starting worker!");
        cw.setContinueProcessing(true);
        console.log("start cw processing!");
        self.setTimeout(cw.loopingFunc, 0);
    } else if(event.data === "stop") {
        console.log("receive stop message")
        cw.setContinueProcessing( false );
        self.close();
    } else {
        console.log("creating CW");
        var ctx = event.data;
        var width = event.data.x;
        var height = event.data.y;
        gw = new GravityWorker(width, height, false, this.postMessage);
    }
};

class GravityWorker {
    width: number;
    height: number;
    continueProcessing: boolean;
    postMessageFunc;
    constructor(width: number, height: number, continueProcessing: boolean, postMessageFunc) {
        this.width = width;
        this.height = height;
        this.setContinueProcessing(continueProcessing);
        this.postMessageFunc = postMessageFunc;
    }

    loopingFunc() {
        var startTime: number = performance.now();
        var iterationCount: number = 0;
        var currentTime: number = 0;
        var shouldLoop: boolean = true;
        while(shouldLoop === true && this.continueProcessing === true) {
            currentTime = performance.now();
            if(currentTime - startTime >= 1000) {
                this.postMessageFunc(iterationCount);
                shouldLoop = false;
            }
            iterationCount = iterationCount + 1;
        }
        self.setTimeout(this.loopingFunc, 0);
    }

    setContinueProcessing(continueProcessing: boolean ) {
        this.continueProcessing = continueProcessing;
    }
}

