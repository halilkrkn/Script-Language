// Generics, ile hem tekrar tekrar yazma zahmetinden kurtulmak
// hem de tip güvende denilen model ile çalışmamımız sağlar.
// genericler http.client() komutu ile kullanıyoruz.
function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(100);
console.log(sayi);
var sehir = deger2("Osmaniye");
console.log(sehir);
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
var sehir2 = deger3("Adana");
console.log(sayi3);
console.log(sehir2);
