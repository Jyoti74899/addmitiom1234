const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectdb = require("./db/connectdb")
//connect flash and session
const session = require('express-session')
const flash = require('connect-flash')


//messages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 6000 },
    resave: false,
    saveUninitialized: false
}))
//flash messages
app.use(flash())
//connectdb
connectdb()


//data get object
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

//setup ejs
app.set('view engine', 'ejs')



//route load                                      
app.use('/', web)





//server create
app.listen(port, () => console.log("server start localhost:3000"))