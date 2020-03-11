// Abstruct Class, bir class tır. Ama tek Başına bir ifade etmezler , kullanılmazlar. 
// Ancak İnheritance (Miras) yöntemi ile  kullanılırlar.
// Ortak ve Ortak olmayan operasyonları belirleyebilmek için kullanılır 

abstract class KrediBase {

    // Abstruct classlar new lenebilmesi için constructor oluşturulmalıdır sınıfın içerisine.
    constructor() {
        
    }
    // Kaydet foksiyonu void döndürüyor.
    // Sadece void de geçerli yazmak zorunda da değiliz.
    // Bu kısım Her yerde ortaktır

    kaydet():void {

        console.log("Kaydedildi")
    }

    //Bu kısım ise her yerde ortak değildir
    abstract hesapla():void
}

class TuketiciKredi extends KrediBase{

    constructor() {
        // super methodu constructor içerisinde yazılıyor.
        // Neden çünkü miras aldığı class içindeki constructor ın parametresi yok o yüzden.
        
        super()

        // Eğer parametresi varsa da super() methodunun parantezi içine o parametre ile ilgili değer yazılır.
        // ÖRN: super("Kredi Aldın");
    }

    hesapla(): void {
       console.log("tüketici Kredisine göre hesap Yapıldı")
    } 
}


class KonutKredi extends KrediBase{

    constructor() {

        super()
    }

    hesapla(): void {
       console.log("Konut Kredisine göre hesap Yapıldı")
    } 

    İslem(){

        
    }
}


let tuketiciKredisi = new TuketiciKredi()
tuketiciKredisi.hesapla()
tuketiciKredisi.kaydet()


let konutKredisi = new KonutKredi()

konutKredisi.hesapla()
konutKredisi.kaydet()
konutKredisi.İslem()


//bu şekilde abstruct class içinde olan ortak kısımlar bu şekilde tek bir değişkene atanabiliyor.
let kredi : KrediBase

kredi = new TuketiciKredi()

kredi = new KonutKredi()


