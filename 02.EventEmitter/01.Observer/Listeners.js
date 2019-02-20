const notifier = function() {
    console.log('Task is executing');
}

const logger = function() {
    console.log('Task is executing and logging');
}

const updater = function() {
    console.log('Task is updating');
}

module.exports = {
    notifier,
    logger,
    updater
}