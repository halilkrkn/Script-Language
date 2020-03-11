// İnterface = Arayüz
function kaydet(urun) {
    console.log(urun.isim + " Kaydedildi");
}
kaydet({
    id: 1,
    isim: "Laptop",
    fiyat: 1000
});
