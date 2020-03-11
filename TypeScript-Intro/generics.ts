// Generics, ile hem tekrar tekrar yazma zahmetinden kurtulmak
// hem de tip güvende denilen model ile çalışmamımız sağlar.
// genericler http.client() komutu ile kullanıyoruz.

function deger(x: number): number {
    return x
}

function deger2(x: string): string {
    return x
}

let sayi = deger(100)

console.log(sayi)

let sehir = deger2("Osmaniye")

console.log(sehir)


// Bu şekilde tip güvende yaparak tek bir methodla birden fazla iş yapmamızı sağlıyor.
// T tipi içinde istediğimiz şekilde tip seçtirmesi yapılabilir.
function deger3<T>(x:T):T{

    return x

}

// Burada T tipine number değişkenini atadık ve o number değerine 2 sayisını atadık
// Sonuç: 2
let sayi3= deger3<number>(2)
console.log(sayi3)

// Burada ise T tipine string değişkenini atadık ve o stringe Adana değerini yazdık.
// Sonuç: Adana
let sehir2 = deger3<string>("Adana")
console.log(sehir2)



// Genericler Class İçerisinde de Tanımlayabiliriz.
class GenericClass<T> {
    
    // Sınıf içinde değişkene T yi atadık
    değişken: T

    // Fonksiyonların içindeki parametrelere de T tipini Atadık
    fonksiyon(parametre:T):T{
        return parametre
    }
}

// Burada T tipine number ı atadık ve ona göre sayi bir değer girdik
let sinif =  new GenericClass<number>()
sinif.fonksiyon(2)

// Burada ise T tipine stringi atadık ve ona göre  string bir değer girdik
let sinif2 =  new GenericClass<String>()
sinif2.fonksiyon('Osmaniye')