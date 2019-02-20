const ObservableTask = require('./ObservableTask');
const { logger, notifier, updater } = require('./Listeners');

const task = new ObservableTask('My Task');
task.addObservable(logger);
task.addObservable(notifier);
task.addObservable(updater);

//task.execute();
setTimeout(() => {
    task.execute();
}, 1000)

setTimeout(() => {
    task.removeObserver(updater);
}, 500)

task.execute();