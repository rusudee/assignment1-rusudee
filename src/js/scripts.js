// Car has class with make, model, year, odometer and engine
class Car {
    make;
    model;
    year;
    engineStatus;
    odometer = 0;

    constructor(value) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engineStatus = new Engine(value);
    }

    get engineStatus() {
        return this.engineStatus;
    }

    set engineStatus(value) {
        let x = value;
        if (x < 0) {
            console.log(`${value} is less than 0, throwing exception.`, "debug");
            throw new Error('Engine cannot have negative speed.');
        }
        else {
            console.log(`Setting engine to ${x}...`, "debug");
            this.engineStatus = x;
        }
    }

    start() {
        try {
            let checkStatus = isRunning;
            if (isRunning == true) {
                throw 'already running.';
            }
            else {
                console.log(`Engine started...`, "debug");
                isRunning = true;
            }
        }
        catch (err) {
            console.log(`Engine start failed. Engine was ` + err)
        }
    }
    stop() {
        try {
            let checkStatus = isRunning;
            if (isRunning == false) {
                throw 'already stopped.';
            }
            else {
                console.log(`Engine started...`, "debug");
                isRunning = false;
            }
        }
        catch (err) {
            console.log(`Engine stop failed. Engine was ` + err)
        }
    }

    drive(distance) {
        let km = distance;
        if (km < 0) {
            console.log(`${km} is less than 0, throwing exception.`);
            throw new err('Car cannot have negative distance.');
        }
        else if (km >= 0) {
            console.log(`Distance is ${km}...`);
            //change odometer to new value
            odometer = x;
        }
        //check that engine can be started
        let checkStatus = isRunning;
        if (isRunning == false) {
            throw 'already stopped.';
        }
        else {
            console.log(`Engine started...`, "debug");
            isRunning = false;
        }
    }
    catch(err) {
        console.log(`Engine stop failed. Engine was ` + err)
    }
}

//separate engine class.

class Engine {
    constructor() {
        this.cylinders = this.cylinders;
    }
    cylinders;
    isRunning = false;
}

//Program code to check that classes works. 

async function main() {

    let myCar = new Car();
    myCar.start(100);
    myCar.stop();

    myCar.start(50);
    myCar.stop();

}