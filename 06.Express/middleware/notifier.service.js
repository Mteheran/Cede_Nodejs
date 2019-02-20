module.exports = (req, res, next) => {
    console.log(`Notify ${req.url} appear`);
    next();
};
