const userController = require('../controllers');

module.exports= function (app) {
    app.route('/signUp').post(userController.signUp);
    app.route('/signIn').post(userController.signIn);
};

