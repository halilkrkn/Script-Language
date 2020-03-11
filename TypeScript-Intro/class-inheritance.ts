// İNHERİTANCE = MİRAS
// İnheritance da miras alma işlevi extends ile yapılır 
class Kisi{

        //Private Sadece ve Sadece tanımılandığı class için de Geçerlidir
        private isim:string

        // Protected da tanımladığı class çinde geçerlidir
        // PRotected İnheritance verdiği class içinde de geçerlidir
        protected isim2:string
        
    kaydet(){
        console.log("Kişi Kaydedildi")
    }

}

// Burada Musteri Sınıfı Kisiden Miras Alıyor
// Extends komutu ile 
class Musteri extends Kisi{

    satısYap(){
        // PRotected İnheritance verdiği class içinde de geçerlidir
        // Musteri Classınını içindeki fonksiyonda isim2 çağırabiliyoruz
        this.isim2
        console.log("Satış Yapıldı")
    }

}

class Personel extends Kisi{


    maasOde(){
        console.log("Maaş Ödendi")
    }
    
}


let musteri = new Musteri()

musteri.kaydet()
musteri.satısYap()

let personel = new Personel()

personel.maasOde()
personel.kaydet()

