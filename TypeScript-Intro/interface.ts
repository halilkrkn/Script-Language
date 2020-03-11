// İnterface = Arayüz
// İstenilen projede bütün değerler isteniyorsa interface kullanmak daha mantıklıdır.
// Ama tek tek kullanım yapmak istiyorsak da class ile yapmak dah mantıklıdır.

interface Urun {

    //Değişken tanımlayabiliriz.
    id: number
    isim: string
    fiyat: number

    

}

function kaydet(urun: Urun) {

    console.log(urun.isim + " Kaydedildi")
}

kaydet({
    id: 1,
    isim: "Laptop",
    fiyat: 1000

})

//interfacelerde tanımlanmamış operasyonlarda barındırabiliriz.
interface IPersonelServisi{

    // foknsiyon tanımlayabiliriz yani.
    save()

}

// interface ler implements komutu ile class lara bağlanır.
class CustomerServisi implements IPersonelServisi{

    save() {
        
    }

    
}
