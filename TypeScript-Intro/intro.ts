function selamVer(isim:string){

    return "Merhaba " + isim


}

let mesaj = selamVer('halil')

console.log(mesaj)


//Sayısal ifadeleri number deiğişkeni ile tutuyoruz.

let sayi: number

sayi = 10

sayi = 10.4

//Metinsel ifadeleri string değişkeni ile tutuyoruz

let sehir : string = "Osmaniye"

sehir ="Ankara"

sehir = "Adana"

// boolean veri tipini kullanarak true false işlemleri yapılır
let dogruMu : boolean

dogruMu = false

dogruMu = true

//Dizileri de tanımlayabiliyoruz

let sayilar:number[] = [1,2,3]

//veri tabanı işlemlerinde kullanmamızı sağlatır
let sayilar2 : Array<Number> = [1,2,3,4]
 
//Tuple yapabiliyoruz. Yani bir dizi içerisine aynı anda hem sayı hemde string kelimeler yazılabiliyor
let dizi: [number,string,string,number] = [2,"halil","krkn",2323]

//bu şekilde dizinin ilk elemanına ulaşabiliriz
dizi[0]

//Enum Veri tiplerini de kullanabiliriz

enum Renk{

    // başlangıç degeri atadık
    kirmizi = 1,
    siyah,
    mavi
}

let renk : Renk.kirmizi

// Any = gelecek olan datanın veri tipinden emin olmadığımızda kullanırız
// Any = emin değilim anlamındadır
// Any ile bütün veri tiplerini kullanabiliriz
let deger : any = "Ankara"

deger = 2

deger = {}

// void = Değer döndürmeyen , değer atanmayan bir tiptir
// void de return yapılmaz
// void de undefined ile tanımlanmamışı kullanabiliriz
//fonksiyonlarda da kullanılır

let deger2 : void = undefined

function selamVer2():void
{
    console.log("Halilkrkn")
}

//undefined = bir değişkene değer atanmamış demektir 

let yas : number

// mesela şuan undefined değildir çünkü yas a 10 değeri atanmıştır
yas = 10

