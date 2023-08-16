let express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/status', function (req, res){
    res.send('Hello nodejs server belong to kanyarat')

})

app.get('/hello/:xxx', function (req, res) {
    console.log('hello -' + req.params.xxx)
    res.send('sey hello with' + req.params.xxx)
})

app.get('/user/:userId', function(req,res){
    res.send('ดูข้อมูลผู้ใช้' + req.params.userId)
})

app.get('/user/:userId', function(req,res){
    res.send('ดูข้อมูลผู้ใช้ทั้งหมด' + req.params.userId)
})

app.post('/user', function(req,res){
    res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
})

app.put('/user/:userId', function(req,res){
    res.send('แก้ไขข้อมูลผู้ใช้' + req.params.userId +" " + JSON.stringify(req.body))
})

app.delete('/user/:userId', function(req,res){
    res.send('ลบข้อมูลผู้ใช้' + req.params.userId +" " + JSON.stringify(req.body.name))
})

let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})
