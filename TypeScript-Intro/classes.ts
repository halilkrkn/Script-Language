
class Ev {

    // bir class da 

    // Özellikler Yazabiliriz
    // Burdakileri private alan olarak tanımlamamız gerekiyor genel classlarda 
    // Private alan olarak tanımladığımız değerleride Constructor da Set ediyoruz.
    // Yani Değerini veriyoruz
    _odaSayisi:number
    _pencereSayisi:number
    _kat:number

    //Constructor = Yapıcı blok, Classlar bir referans tiptir. Arrayler gibi
    
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){

        //Yukarıdaki değere ulaşmak için this keyword u kullanılır
        this._odaSayisi = odaSayisi
        this._kat = kat
        this._pencereSayisi = pencereSayisi

    }


    //Fonksiyonları yazabiliriz
    //Fonksiyon içerisinde erişim yapabilmemiz için yurdakileri private alan olarak  tanımlamalıyız
    yemekYe(){
        console.log( this._kat + " Katlı evde" + "yemek yenildi")
    }

}

let ev = new Ev(3,4,11)

ev.yemekYe()
console.log(ev._kat)


