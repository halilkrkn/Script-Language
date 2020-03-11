var routeLogin = require('./LoginRoutes')

var routeHome = require('./HomeRoutes')

module.exports = function (app) {

    app.use('/login',routeLogin)
    app.use('/',routeHome)

  }

//Module.exports edildiği zaman bir kurucu fonksiyon çağrılıyor ve bu fonksiyon sayesinde app.js te bu dosyayı tanımlatarak app.js in içini daha da sadeleştirdik.