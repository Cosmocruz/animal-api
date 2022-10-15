const mongodbC = require('./mongooseConnect');
const allRoutes = require('./app.routes');

module.exports.init = (app) => {
    mongodbC();
    allRoutes(app);
};
