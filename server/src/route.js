const UserController = require('./controllers/UserController')

module.exports = (app) => {
    //get all user
    app.post('/user', UserController.index),

    //create user
    app.post('/user', UserController.create),

    //edit user
    app.put('/user/:userId', UserController.put)

    //delete user
    app.delete('/user/:userId', UserController.delete)

    //show by id
    app.get('/user/:userId', UserController.show)
}

