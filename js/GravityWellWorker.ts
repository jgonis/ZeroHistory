/**
 * Created by jgonis on 15/10/2014.
 */
declare var Module;

onmessage = (event) => {
    console.log("calling lerp")
    console.log(Module.lerp(1, 2, 0.5));
    console.log("lerp called");
    this.postMessage("Hi");
};


