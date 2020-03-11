//Get ve Set in Çalışma Mantığı
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
var Kisi2 = /** @class */ (function () {
    function Kisi2() {
    }
    Object.defineProperty(Kisi2.prototype, "isim", {
        get: function () {
            return "Sayin " + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: true,
        configurable: true
    });
    Kisi2.prototype.kaydet = function () {
        console.log("Kişi Kaydedildi");
    };
    return Kisi2;
}());
var Musteri2 = /** @class */ (function (_super) {
    __extends(Musteri2, _super);
    function Musteri2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri2.prototype.satısYap = function () {
        console.log("Satış Yapıldı");
    };
    return Musteri2;
}(Kisi2));
var musteri2 = new Musteri2();
// Bu Kısım Set i Çalıştırıyor
musteri2.isim = "Halil";
// BU kısım ise Get i Çalıştırıyor
console.log(musteri2.isim);
