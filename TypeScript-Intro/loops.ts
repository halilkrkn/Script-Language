
let sehirler = ["Osmaniye", "Adana", "Mersin"]


// in komutu ile sayısal sıralama yapıyoruz.
// Yani sehirler dizisinde kaç tane şehir tanımladıysak o şehirleri index numaralarını sıralıyor.
// Sonuç: 0 1 2 şeklinde index numaraları sıralanıyor

for (let i in sehirler){

    console.log(i)

}

// of komutu ile dataya ulaşıyoruz.
// Yani sehirler dizisindeki tanımladığımız sehirleri sıralamamızı sağlıyor.
// Sonuç: Osmaniye Adana Mersin şeklinde tanımladığımız şehirlerin isimleri sıralanıyor

for (let i of sehirler){

    console.log(i)

}