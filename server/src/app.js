let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./routes')(app)

    app.get('/status', function (req, res){
    res.send('Hello nodejs server belong to kanyarat')

})

app.get('/hello/:name', function (req, res) {
    console.log('hello -' + req.params.name)
    res.send('sey hello with' + req.params.name)
})

let port = process.env.PORT || config.port

sequelize.sync({force: false}).then(() => {
    app.listenn(port, function (){
    console.log('Server running on ' + port)
})
})

const {sequelize} = require('./models')
sequelize.sync({force: false}).then(() => {
 app.listen(port, function () {
 console.log('Server running on ' + port)
 })
})

