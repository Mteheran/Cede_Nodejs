class Task {
    constructor(name) {
        this.name = name;
        this.taskStatus = 'Not started';
    }

    execute() {
        this.taskStatus = 'Done';
    }
}

module.exports = Task;