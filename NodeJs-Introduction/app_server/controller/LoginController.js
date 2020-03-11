var Kullanici = require('../models/kullanici')


module.exports.login = function(req,res){

    res.render('login')
}
module.exports.loginPost = function(req,res){ 

    
    console.log(req.body)
    res.render('login',{
    
        email: req.body.email,
        password: req.body.password

    })

}

module.exports.signupGet = function(req, res){

    res.render('signup')
    
}


module.exports.signupPost = function(req, res){

   

    var yeniKullanici = new Kullanici({

        ad:req.body.ad,
        soyad:req.body.soyad,
        email:req.body.email,
        kullaniciAdi:req.body.kullaniciadi,
        sifre:req.body.sifre



    })

    yeniKullanici.save(function(err){
        if(err){

        }
        else{
            res.redirect('')
        }
    })
}


module.exports.kullanicilarListesi = function(req,res){

    Kullanici.find(function(err,results){

        
        res.render('kullanicilarListesi', {kullanicilar: results})

    })
    
}

module.exports.kullaniciSil = function(req,res){

    Kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){

        if (err) {
            console.log('Silme Hatası Var')
        }
    })

    console.log(req.params.kullaniciAdi)
    res.redirect('/login/kullanicilarListesi')

}


// Kullanıcı istekleri request(req) objesi içerisine yerleştiriliyor