var Ev = /** @class */ (function () {
    //Constructor = Yapıcı blok, Classlar bir referans tiptir. Arrayler gibi
    function Ev(odaSayisi, pencereSayisi, kat) {
        //Yukarıdaki değere ulaşmak için this keyword u kullanılır
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    //Fonksiyonları yazabiliriz
    //Fonksiyon içerisinde erişim yapabilmemiz için yurdakileri private alan olarak  tanımlamalıyız
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " Katlı evde" + "yemek yenildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 11);
ev.yemekYe();
console.log(ev._kat);
