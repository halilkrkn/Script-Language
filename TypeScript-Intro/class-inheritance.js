var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// İNHERİTANCE = MİRAS
// İnheritance da miras alma işlevi extends ile yapılır 
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Kisi.prototype.kaydet = function () {
        console.log("Kişi Kaydedildi");
    };
    return Kisi;
}());
// Burada Musteri Sınıfı Kisiden Miras Alıyor
// Extends komutu ile 
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satısYap = function () {
        console.log("Satış Yapıldı");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş Ödendi");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
musteri.kaydet();
musteri.satısYap();
var personel = new Personel();
personel.maasOde();
personel.kaydet();
