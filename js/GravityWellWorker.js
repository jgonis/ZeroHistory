var _this = this;
onmessage = function (event) {
    console.log("calling lerp");
    console.log(Module.lerp(1, 2, 0.5));
    console.log("lerp called");
    _this.postMessage("Hi");
};
//# sourceMappingURL=GravityWellWorker.js.map