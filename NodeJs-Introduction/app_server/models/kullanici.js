var mongoose = require('mongoose')

var Schema = mongoose.Schema

var kullaniciSchema = new Schema({

    ad: String,
    soyad:String,
    email:String,
    kullaniciAdi:{type:String, require:true, unique:true},
    sifre:{type:String, require:true}
    
},{collection:'kullanicilar'})


var Kullanici = mongoose.model('Kullanici',kullaniciSchema)

module.exports = Kullanici;

