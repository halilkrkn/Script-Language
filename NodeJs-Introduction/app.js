var fs = require('fs')
var express = require('express')
var path= require('path')
var app = express()
var bodyParser = require('body-parser')
var ejsLayout = require('express-ejs-layouts')
var db = require('./app_server/models/db')


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./app_server/views'))


var Kullanici = require('./app_server/models/kullanici')

var yeniKullanici =  new Kullanici({

    ad: 'ahmet',
    soyad: 'Karkin',
    kullaniciAdi:'ahmetkrkn',
    sifre:'12345'

})

yeniKullanici.save(function(err){

    if(err){

        console.log(err)
    }
    else{
        console.log('Kullanici Kaydedildi')
    }



})


//BU İKİ VERİ İLE BODY-PARSER I AKTİF ETTİK;

//Form elemanlarını Pars etmesi için veri çağğırdık
app.use(bodyParser.urlencoded({ extended: false}))
//Json Objeleri içinde Pars edebilmek için veri çağırdık.
app.use(bodyParser.json())


//var routeElektronik = require('./app_server/routes/ElektronikRoute')

app.use(ejsLayout)

//kullanıcılar sadece public dosyasına ulaşmak için verilen yol.
app.use('/public', express.static(path.join(__dirname,'public')))

//App.js in içerisini daha da sadeleştirdik. Çünkü ayrı bir route dosyası oluşturup içine buradaki route ları tanımladık ve onun içindekileri ise app.js te tanıttık.

// Yani Yönlendirileri Ekledik 
require('./app_server/routes/RouteManager.js')(app)

/*app.use(function(req,res,next){

    console.log("url....:"+ req.url)
    console.log("time...:" + Date.now())

   next()

})

app.use('/elektronik',routeElektronik)
*/



//var routeNeBilimAdami = require('./app_server//routes/NebilimAdamiRoute.js')

// app.use('/nebilimadami',routeNeBilimAdami)

app.listen(8001)