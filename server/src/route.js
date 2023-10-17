const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    //get all user
    app.get('/users', UserController.index,UserController.index)

    //create user
    app.post('/user', UserController.create),

    //edit user
    app.put('/user/:userId', UserController.put),

    //delete user
    app.delete('/user/:userId', UserController.delete),

    //show by id
    app.get('/user/:userId', UserController.show),

    //login
    app.post('/login', UserAuthenController.login)
}

