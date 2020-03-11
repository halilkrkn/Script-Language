// JavaScript te böyle yapıyorduk ve x ve y nin hata dönen sonucun sayı mı string mi olduğunu anlamıyordu javascript.
function topla(x, y) {
  return x + y;
}

// fonksiyonlarda x ve y ye number ı atadık ve sonucun çıkan değerinin de number olmasını istedik
function topla2(x: number, y: number): number {
  return x + y;
}

// bu da farklı bir gösterimi olarak karşımızda.

// bu iki gösterim de return komutunu kullanmamız gerektir ki zaten kullanmadıysanız VS code kızıyor. hata veriyor.
let topla3 = function(x: number, y: number): number {
  return x + y;
};

console.log(topla(2, 3));
console.log(topla("Adana", 3));
console.log(topla2(2, 5));
console.log(topla3(4, 8));

function topla4(x: number, y: number = 7): number {
  return x + y;
}

console.log(topla4(5));

// y nin önündeki ? işareti ile y undefined oluyor yani number olsa da olur olmasada olur
// yani y burda default bir parametredir. ve parametrelerde en sonra bulunur.
function topla5(x: number, y?: number): number {
  // ama bu durumu if ile kontrole ederek yaptık. böyle kontrollerle yapılır
  if (y) {
    return x + y;
  }

  return x;
}

console.log(topla5(9));
console.log(topla5(9, 40));

// Rest parametresi = Paramslara benzer c# dan.
// Örneğin; Ayni tipte alacağımız parametre sayısı, eleman sayısı belli değilse Rest Parametrelerden yararlanılır.

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
  return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Halil", "Musa" , "Hasan"))

//İlk değeri vermesekde olur 
function davetEt2(...digerleri: string[]): string {
  return  digerleri.join(" ");
}

console.log(davetEt2("Şule", "Emel" , "Güllü"))