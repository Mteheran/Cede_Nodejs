const { random, floor } = Math;

class MyClass {
    constructor() {
        this.id = floor(random() * 100500);
    }
}

module.exports = new MyClass();