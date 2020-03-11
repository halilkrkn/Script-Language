//Get ve Set in Çalışma Mantığı


class Kisi2{

    private _isim:string 


    get isim():string{
        return "Sayin " + this._isim
    }

    
    set isim(ad:string){
        this._isim = ad
    }


    kaydet(){
        console.log("Kişi Kaydedildi")
    }

}

class Musteri2 extends Kisi2{

    satısYap(){
        console.log("Satış Yapıldı")
    }

}


let musteri2 = new Musteri2()
// Bu Kısım Set i Çalıştırıyor
// Musterinin İsmini set ettik
musteri2.isim = "Halil"

// BU kısım ise Get i Çalıştırıyor
// Musterinin İsmini Okuttuk
console.log(musteri2.isim)