const Task = require('./Task');

class ObservableTask extends Task {
    constructor(name){
        super(name);
        this.observables = [];
    }

    addObservable(observer) {
        if(typeof observer === 'function') {
            this.observables.push(observer);
        }

        return;
    }

    removeObserver(observer) {
        this.observables = this.observables.filter(item => item !== observer);
    }

    notify() {
        for(let i = 0; i < this.observables.length; i++) {
            this.observables[i]();
        }
    }

    execute() {
        this.notify();
        super.execute();
    }
}

module.exports = ObservableTask;