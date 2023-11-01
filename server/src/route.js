const UserAuthenController = require('./controllers/UserAuthenController')
const UserController = require('./controllers/UserController')
const isAuthenController = require('./authen/isAuthenController')
const MenuController = require('./controllers/MenuController')

module.exports = (app) => {
     // get user by id
     app.get('/users', UserController.index,UserController.index)

     // create user
     app.post('/user', UserController.create)

     // edit user, suspend, active
     app.put('/user/:userId', UserController.put)

     // delete user
     app.delete('/user/:userId', UserController.delete)

     // get all user
     app.get('/user/:userId', UserController.show)

     // login
     app.post('/login', UserAuthenController.login)

     app.post('/menu', MenuController.create)

     app.get('/menus', MenuController.index)

     app.put('/menus/:menusId', MenuController.put)

     app.delete('/menu/:menuId', MenuController.delete)

     app.get('/menus/:menusId', MenuController.show)


}   