var express = require('express')

//var app = express()

var router = express.Router()
//Kontroller ı çektik
var ctrlLogin = require('../controller/LoginController')

//Yönlendirmesini Yaptık
router.get('/', ctrlLogin.login)
router.post('/',ctrlLogin.loginPost)
router.get('/signup',  ctrlLogin.signupGet)
router.post('/signup',  ctrlLogin.signupPost)
router.get('/kullanicilarListesi',  ctrlLogin.kullanicilarListesi)
router.get('/kullaniciSil/:kullaniciAdi',  ctrlLogin.kullaniciSil)

//router ı export ettik app.js ile yakalamak için
module.exports = router

