const express = require("express")
const FrontController = require("../controllers/FrontController")
const route = express.Router()

//routes
route.get('/', FrontController.login)
route.get('/register', FrontController.register)
route.get('/about', FrontController.about)
route.get('/home', FrontController.home)
route.get('/contact', FrontController.contact)

//datainsert
route.post('/insertreg', FrontController.insertReg)


module.exports = route