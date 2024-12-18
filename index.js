// masala1
// const talabalar = { Anvar: 18, Jamila: 20, Mirza: 19 };
// console.log(Object.keys(talabalar).length);

// masala2
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };
// let qiymat = Object.values(mahsulotlar).reduce((a, b) => a + b, 0);
// console.log(qiymat);
// masala3
// let jadval = {
//   dushanba: "Matematika",
//   seshanba: "Fizika",
//   chorshanba: "Informatika",
// };

// console.log(Object.keys(jadval));

// masala4
// let shaxs = { ism: "sanjar", yosh: 25 };
// Object.freeze(shaxs);
// shaxs.ism = "Said";
// shaxs.yangi = "Test";

// console.log(shaxs);

// masala5
// let vazifalar = { uy_ishi: true, dastur_yaratish: false, sport: true };
// let tugatilgan = Object.values(vazifalar).filter((val) => val == true).length;
// let tugatilmagan = Object.values(vazifalar).filter(
//   (val) => val == false
// ).length;

// console.log("Tugatilgan: " + tugatilgan, "Tugatilmagan: " + tugatilmagan);

// masala6
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };
// let qimmatMahsulotlar = Object.entries(mahsulotlar).filter(
//   ([kal, qiy]) => qiy > 3000
// );
// console.log(qimmatMahsulotlar.join(", "));

// masala7
// let sinf = { Ahmad: 15, Murod: -3, Javohir: 17 };
// let musbatYoshlar = Object.entries(sinf).reduce((acc, [ism, yosh]) => {
//   if (yosh >= 0) {
//     acc[ism] = yosh;
//   }
//   return acc;
// }, {});
// console.log(musbatYoshlar);

// masala8
// let bankHisob = { balans: 50000 };

// Object.defineProperty(bankHisob, "pinCode", {
//   value: 1234,
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });
// console.log(bankHisob.pinCode);
// bankHisob.pinCode = 5656;
// console.log(bankHisob.pinCode);

// masala9
// let shaxs = {
//   ism: "Laylo",
//   familiya: "Ismoilova",
//   toliqism: function () {
//     return this.ism + " " + this.familiya;
//   },
// };
// console.log(shaxs.toliqism());

// masala10
// function yegindi() {
//   return this.reduce((a, b) => a + b, 0);
// }
// let qiymatlar = [10, 20, 30];
// let natija = yegindi.call(qiymatlar);
// console.log(natija);

// masala11
// let mahsulotlar = { olma: 3000, nok: 4000 };
// let mahsulotNarxi = function () {
//   return this.olma;
// };
// let natija = mahsulotNarxi.bind(mahsulotlar);
// console.log(natija());

// masala12
// let narxlar = [500, 1000, 1500];
// let yegindi = function () {
//   return this.reduce((a, b) => a + b, 0);
// };
// console.log(yegindi.apply(narxlar));

// masala13
// let savdo = { olma: 100, nok: 150, banan: 80 };
// savdo.foyda = function () {
//   return this.olma + this.nok + this.banan;
// };
// console.log(savdo.foyda());

// masala14
// let sinf = { oquvchilar: 25, oqituvchi: 1 };
// Object.seal(sinf);
// sinf.oqituvchi = 2;
// sinf.yangiMaydon = "urinib korish";
// console.log(sinf);

// masala15
// let shaxs = {
//   ism: "Olima",
//   yosh: 25,
//   salomlash: function () {
//     return `Salom, men ${this.ism}man!`;
//   },
// };
// console.log(shaxs.salomlash());

// masala16
// function Odam(ism) {
//   this.ism = ism;
// }
// Odam.prototype.gapir = function () {
//   return this.ism + " mavjud";
// };
// let odam1 = new Odam("Aziz");
// console.log(odam1.gapir());

// masala17
// let katalog = {
//   texnika: { kompyuter: 5000, printer: 3000 },
//   oziq_ovqat: { non: 1000, choy: 2000 },
// };
// let texnikaYigindi = Object.values(katalog.texnika).reduce((a, b) => a + b, 0);
// let oziqYegindi = Object.values(katalog.oziq_ovqat).reduce((a, b) => a + b, 0);

// console.log(`Texnika: ${texnikaYigindi}, Oziq-ovqat: ${oziqYegindi}`);

// masala19
// let talabalar = { Ahmad: 1, Laylo: 2 };

// Object.defineProperty(talabalar, "yangiTalaba", {
//   value: "Saidaxror",
//   writable: false,
//   enumerable: true,
//   configurable: false,
// });

// console.log(talabalar.yangiTalaba);

// masala20
// let ballar = [90, 80, 70];

// Array.prototype.ortacha = function () {
//   let yegindi = this.reduce((a, b) => a + b, 0);
//   return yegindi / this.length;
// };

// console.log(ballar.ortacha());
