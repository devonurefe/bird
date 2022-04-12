//  ternary kisa if gosterimi

// let Hollanda = 17, Almanya = 25, Isvec = 11;

// nufus = (Hollanda > Almanya) ? (Almanya + Isvec) : (Hollanda - Isvec);

// console.log(nufus);

//  switch case ornekleri

// let haftaninKacinciGunu = parseInt(prompt("Haftanin kacinci gunundesiniz:", "1-7"));

// switch (haftaninKacinciGunu){
//     case 1: console.log("Pazartesi"); break;
//     case 2: console.log("Sali"); break;
//     case 3: console.log("Carsamba"); break;
//     case 4: console.log("Persembe"); break;
//     case 5: console.log("Cuma"); break;
//     case 6: console.log("Cumartesi"); break;
//     case 7: console.log("Pazar"); break;
//     default: console.log("Yanlis veri girildi. Tekrar deneyiniz");
// }

//for - while - do while donguleri

//for dongusu -- TEKRAR EDEN BIR KODUM VAR VE BUNUN KAC SEFER CALISACAGINIZ BILIYORSAM 'FOR' KULLAN

// for (let i= 0; i < 15; i++){
//     console.log("Ben for dongusuyum");
// }

// //while dongusu -- BIR SARTIMIZ VAR VE KAC TANE OLDUGUNU BILMIYORSAM ' WHILE' KULLAN

// let sayi = 5;
// while (sayi < 20){
//     console.log("Ben while dongusuyum");
//     sayi++
// }

// //do while dongusu -- BIR KOD VAR ILK ONCE BU CALISSIN SONRA SART KONTROL EDILSIN DIYORSAK ' DO-WHILE' KULLAN (MENU GOSTER OLAYINDA OLDUGU GIBI)

// let yas = 15
// do{
//     console.log("Ben do-while dongusuyum");
//     yas++
// }while(yas < 30); //SADECE WHILE DA NOKTALI VIRGUL KULLANILIR.

// //break, continue, return kullanimi

// //break --> break sartinin oldugu yerde donguden cikar
// for(let i = 0; i < 15; i++){
//     if(i == 9){
//         break;
//     }
//     console.log("Ben Break im");
// }

// //continue --> continue oldugu sartinin oldugu ifadeyi atlar donguye devam eder
// for(let i = 0; i < 20; i++){
//     if(i == 11){
//         continue;
//     }
//     console.log("Ben continue yuumm " +i);
// }

// Return kullanimi for icinde fonksiyon olursa olur aksi halde
// illegal return hatasi alinir.

///////// FONKSIYONLAR ////////////////////////

//basit fonksiyon
// function selam(){
//     console.log("Merhabalar");
// }
// selam(); // fonksiyonu bu sekilde ismi ile cagirarak calistirilir

/////////

// parametre alan fonksiyon

// sayilariTopla(10,20);         //buradaki sayi alanina fonksiyonun argumani denir. Fonksiyon bu sekilde ismi ile cagirilir ister once ister sonra farketmez

// function sayilariTopla(sayi1, sayi2){  /// buradaki sayi alanina ise fonksiyonun parametresi denir.
//     console.log("Sayilarin toplami: " + (sayi1 +sayi2));
// }

/////////////

// geri cagiralan fonksiyon

// let sayiToplam = sayilarinToplami(10,40); // Fonksiyon icerisinde kod calistirip bunu disarida bir degiskene atadik boylece surekli donen atanmis bir kodumuz oldu
// console.log("Toplam: " + sayiToplam); // Atadigimiz bu degiskeni artik nerede istersek ve hangi islemi istersek kullanabiliriz

// function sayilarinToplami(sayi1, sayi2) {
//     console.log("Sayilarin Toplami :" + (sayi1 + sayi2));
//     return sayi1 + sayi2;  /// return ile fonksiyondan cikilir ve artik altindaki kodlara bakmaz ** bir nevi break islevi goruyor return.
// }

// /// birden cok degisken icin fonksiyon atamasi yapip calistirabiliriz.

// let topla1 = birAraliktakiSayi(0, 20);
// let topla2 = birAraliktakiSayi(40, 70);

// console.log("1. Toplam:" + topla1 + "ve 2. Toplam:" + topla2);

// function birAraliktakiSayi(baslangicSayisi, bitisSAyisi) {

//     let toplam = 0

//     for(let i = baslangicSayisi; i <= bitisSAyisi; i++){
//         toplam = toplam + i;
//     }
//     console.log(`Toplam: ${toplam}`);
//     return toplam;
// }

// // degiskene atanmali fonksiyon

// const selamVer = function(){
//     console.log("Merhabalalar");
// }
// selamVer();

// /// ecmaScript 2016 => fatArrow kullanimi --- => bu simge ile function yazisini kaldirmis oluyoruz

// const fatArrow = () => {
//     console.log("Merhaba fatArrow");
// }
// fatArrow();

// //eger parametere yani fonksoyon parantez icleri bossa _ ile de kisaltilabilir

// const fatArrow2 = _ => {
//     console.log("Merhabala parametresiz fatArrow");
// }
// fatArrow2();

// //normal fonksiyon yazimi

// function karesiniAl(sayi) {
//     return sayi * sayi;
// }
// console.log(karesiniAl(5));

// //degiskenli fonksiyon yazimi

// const karesiniAlDegisken = function(sayi){
//     return sayi * sayi;
// }
// console.log(karesiniAlDegisken(8));

//fatArrow parametreli degiskene atanmis

// const fatArrowParametreli = (sayi) => {
//     return sayi * sayi * sayi;
// }
// console.log(fatArrowParametreli(5));

// // fat arrow tek satirlik fonksiyon icin kisa yazimi

// const fatArrowKisaYazim = sayi => sayi * sayi;

// console.log(`fat arow kisa yazim; ${fatArrowKisaYazim(10)}`);

// //diger sekli kisa yazimin

// const fatArrowKisaYazim2 = (sayi1, sayi2, sayi3) => sayi1 * sayi3 + sayi2;

// console.log(`fatarrow Kisa yazimi coklu parametleri: ${fatArrowKisaYazim2(4, 6, 2)}`);

//*********************************

//// Array : verileri bir arada tutan yapilardir.

//let arabaMarkalari = "Mercedes";
//let arabaMarkalari2 = "BMW";
//let arabaMarkalari3 = "Audi";

//let arabaMarkasi = ["Mercedes", "BMW", "Audi"];
//console.log(arabaMarkasi);
//console.log(arabaMarkasi[1]);

//arabaMarkasi[2] = "Toyota";
//arabaMarkasi[3] = "Honda";
//arabaMarkasi[4] = "Tesla";

//arabaMarkasi[18] = "Mazda"; // sira ile yazilmazsa araya bosluk atamasi yapar.
//console.log(arabaMarkasi[6]);
//console.log(arabaMarkasi.length);  // array in uzunlugunu lenght ile gorebiliriz
//console.log(arabaMarkasi);

//en buyuk index degeri, array eleman sayisinin 1 eksigi olur.
//yani array eleman sayisi 20 ise en buyuk index 19 olur.
// 0 dan baslanir sayilamaya arrayler.

//console.log(`Araba dizisi: ${arabaMarkasi.toString()}`);

// array leri ekrana yazdirma yollari

//1. yontem
//for(let i = 0; i < arabaMarkasi.length; i++){
//   console.log(arabaMarkasi[i]);
//}

//2. yontem
//for(let oAnkiEleman of arabaMarkasi){
//  console.log(oAnkiEleman);
//}

// Array Fonksiyonlari

//let isimler = ["Ali", "Mehmet", "Ahmet"];

//console.log(isimler);
//console.log(isimler.toString()); // toString() bu ifade ile arrayler yazdirilirsa normal sekilde ekrana basar.
//console.log(isimler.join(" | ")); // join(" ") ile araya hangi simge idfade konursa arraylari bu ifade ile ayrir

// **push push() ile array in sonuna eleman ekler. bunu bir degiskene atayip hangi eleman cikmis gorede biliriz

// let diziElemanSayisi = isimler.push("Omar", "Akif"); //
// console.log(isimler.toString() + " dizisinin eleman sayisi:" + diziElemanSayisi);

// **pop ile array in sonndaki elemani cikarir ve bunu bir degiskene atayip hangi eleman cikmis gorede biliriz

// let dizidenCikanEleman = isimler.pop();
// console.log(isimler + " cikan eleman:" + dizidenCikanEleman);

//  **shift dizinin ilk elemanini cikarir

// isimler.shift();
// console.log(isimler.toString());

// **unshift dizinin en basina eleman ekler.

// isimler.unshift("Kerem", "Tarik");
// console.log(isimler.toString());

//delete diziden belirtilen index deki elemani siler. Kullanimi syntax noktasinda daha degisik dikkat
//silinen ifade tamamen kyboldu tekrar yazdirman istersek undefined olarak gozukecektir

// delete isimler[2];
// console.log(isimler.toString() + " " + isimler[2]);

// ***splice istedidigimiz index den baslayarak eleman silme veya ekleme yapabiliriz

// let numaralar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numaralar.splice(2, 0, 0, -4, -5); // * 2 = 2. index den basla 3. index arasinda, 0 = hicbir eleman silme, sirayla 0 -4 -5 sayilarini bu araya ekle demek oluyor bu ifade...
// console.log(numaralar.toString());

// let silinenler = numaralar.splice(0, 2, 15, 20, 25); // 0 . index de n basladi 2 index i sildi yerine 15 20 25 indexlerini ekledi. silinenleri de ayrica bir degiskene atayip yine bir array olarak yazdirabiliriz.
// console.log(numaralar.toString());
// console.log(silinenler.toString());

// ***concat 2 adet array i birlestirir ve birlstiren dizilerde bozulma olmaz.

// let num1 = [1,2,3,4];
// let num2 = [5,6,7];

// let sayilarim = num1.concat(num2);
// console.log(sayilarim.toString());

// ** slice belirtilen 2 index arasindaki degerleri bolup yeni array ortaya cikarir

// let benimSayim = [6, 7, 5, 1, 0, 4];
// let yeniDizi = benimSayim.slice(1, 5); // 1. indexden basla ve 5. index arasinda olanlari yeniden array olustur demek
// console.log(yeniDizi.toString() + "  " + benimSayim.toString());

// *** primitive tip ;
//asagidaki 2 ornekte oldugu gibi primitive tipte degisken atamalarinde sonradan degistirilen veriler uygulanmiyor. atanan veri ilk ne ise o sekilde kaliyor.

// let yas = 32;
// let yeniYas = yas;

// yas = 40;

// console.log(yas, yeniYas);

// let isim = "onur";
// let yeniIsim = isim;

// isim = "Efe";

// console.log(isim, yeniIsim);

// ***referans tip array ve object ler
// referans tiplerde atanmis degiskenlere de ypailan degisikler uygulanir.
// bunun nedeni bir adres icerisinde bellekte tutulmasi verilerin ve yapilan her degisiklik o adrese yine gonderilir

// orneklerde gorulecegi gibi sonradan eklenen yada degisirilen veriler her iki degiskene de uygulanmistir******

// let renkler = ['kirmizi', 'yesil']; //arraylerdeki durum
// let yeniRenkler = renkler;

// renkler.push('mavi');

// console.log(renkler.toString(), yeniRenkler.toString());

// let ogrenci = { // objerede durum
//     ad:'onur',
//     yas: 32,
// }

// let yeniOgrenci = ogrenci;

// ogrenci.yas = 44;

// console.log(ogrenci, yeniOgrenci);

// tek fark ise eger yeniden bir degiken atanirsa o zaman degisiklikler yeni adrese gececegi icin 2. atanana degiskene uygulanmaz

// let renkler1 = ['kirmizi', 'yesil'];
// let yeniRenkler1 = renkler1;

// renkler1 = ['kirmizi', 'yesil'];
// renkler1.push('mavi');

// console.log(renkler1.toString(), yeniRenkler1.toString());

// ***** Object - Nesne Kavrami ********

// Object ler iclerinde bir cok veri tutabilirler. Array function string vsvs
// suslu parantez icerisinde -key:value- seklinde kullanimi vardir.
//bir degiskene atanabilir object ler.
// daha sonra 'degiskenismi.key' seklinde cagirabilir object icindeki bilgiler.

// let onur = {
//     adi: 'Onur',
//     soyAdi: 'Efe',
//     dogumYili: 1988,
//     evliMi: true,
//     sevdigiRenkler: ['Mavi', 'Yesil'],
//     yasHesapla: function(){
//         this.yas = 2022 - this.dogumYili; // this parametresi object icindeki veri ile eslestirme yapar
//     }
// };

// console.log(onur); // bu sekilde tum object verisi gelir.
// console.log(onur.adi); // burada tek tak object icindeki verileri cagirabiliriz
// console.log(onur['dogumYili']); // array leri object icinde bu sekilde cagirabiliriz

// onur.yasHesapla(); // object icinde bir fonksiyon bu sekilde tetiklenerek cagirilir
// console.log(onur.yas); // bu sekildede function icindeki hesaplama sonuclandirilir

// // diger object olusturma yontemi - pek tercih edilmez
// // kullanimi ve yapisi da farklidir

// let efe = new Object();
// efe.adi = "Onur";
// efe.dogumYili = 1990;
// console.log(efe);

/*******    ARRAY HELPER FONKSIYONLARI TEKRAR ET -- ARRAY ITERASYON :
https://www.w3schools.com/js/js_array_iteration.asp *****

*** FILTER - MAP - SOME - FOREACH - FIND -EVERY VE REDUCE TEKRAR ET *****
*/

// *** High order ve Callback Functions

// Functions bir object tir.

// BU KONU HAKKINDA GENEL BIR ORNEK
// **map,filter,reduce,some every,find
//sayi dizindeki tek elemanleri bul baska diziye aktar (filter),
//bu yeni dizideki elemanlerin her birinin karesini al yeni diziye aktar(map)
//bu yeni dizide 10 dan buyuk olan elelmanlarin toplamini ekrana yazdir

// const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sonucuBul(sayilar) {
//   const tekElemanlariIcerenDizi = sayilar.filter(function (sayi) {
//     return sayi % 2 !== 0;
//   });
//   console.log(`Tek elemanli sayilar: ${tekElemanlariIcerenDizi}`);

//   const sayilarinKareleriniAl = tekElemanlariIcerenDizi.map(function (sayi) {
//     return sayi * sayi;
//   });
//   console.log(`Tek elemanli sayilarin Kareleri: ${sayilarinKareleriniAl}`);

//   const toplam = sayilarinKareleriniAl.reduce(function (geneltoplam, sayi) {
//     if (sayi > 10) {
//       return (geneltoplam = geneltoplam + sayi);
//     } else {
//       return geneltoplam;
//     }
//   }, 0);
//   return toplam;
// }
// console.log(sonucuBul(sayilar));

// /* foreach */

// const numbers = [155, 41, 20, 166, 211, 575];

// const numbers2 = numbers.forEach(myFunctione);

// function myFunctione(value, index, array) {
//   return value * 1;
// }
// console.log(numbers);
// console.log(numbers2);
// myFunctione();

//*********** */

/* Map */
// map yontemi her array indexinde bir islem gerceklestirir.
// orijinal diziyi degistirmez en buyuk ozelligi budur.

// const number1 = [55, 1, 0, 66, 11, 75];
// const number2 = number1.map(myFunctions);

// function myFunctions(value, index, array) {
//   return value * 2;
// }
// console.log(`Bu map metodunun orijinal halidir: ${number1}`);
// console.log(
//   `Bu da map metodunun fonksiyon icinde 2 ile carpilip islenmis halidir: ${number2}`
// );

/****** */
/* Filter */
//filter bir sart veya testi gecen arraylerden yeni bir array olustur.
// bu ornekte 15 den buyuk dizi ogelerinden yeni bir dizi olusturmaktadir
// const numberim = [525, 51, 60, 26, 101, 750];
// const over15 = numberim.filter(myFunction);

// function myFunction(params) {
//   return params > 100;
// }
// console.log(`Bu filter metodunun ilk halidir: ${numberim}`);
// console.log(
//   `Bu da filter metodunun array icinde 100 den buyuk sayilari bulup yeni array olusturmasidir: ${over15}`
// );

//* Reduce******/
//reduce bircok islemi icerisinde yapilabilen bir metoddur

// const sayi = [14, 5, 11, 77, 12];
// const topladim = sayi.reduce(function (arti, value) {
//   return arti + value;
// }, 0);
// console.log(`Bu reduce ilk halidir ${sayi}`);
// console.log(
//   `Bu reduce metodununfonksiyon icinde islenmis halidir: ${topladim}`
// );
// sayı.map();
// //arrow functions
// // ES5
// var x = function (x, y) {
//   return x * y;
// };

// // ES6
// const x = (x, y) => x * y;

// *** Array lerde Sort Metodu Kullanımı ******
//* sort metodu siralama yapinca olusan yeni diziyi de array yapar ve orijinal degeri degistirir.

// const isimler = ["onur", "efe", "ali", "kerem"];

// const sayilar = ["1", "2", "3", "41", "51", "123", "-11"];

// const ogrenciler = [
//   { id: 38, isim: "ahmet", yas: 44 },
//   { id: 29, isim: "akin", yas: 63 },
//   { id: 57, isim: "samet", yas: 76 },
//   { id: 42, isim: "zafet", yas: 51 },
//   { id: 22, isim: "kadir", yas: 1 },
//   { id: 2, isim: "osman", yas: 24 },
//   { id: 124, isim: "murat", yas: 14 },
// ];

// * string array i a-z siralama

// const adanZyeIsimler = isimler.sort();

// console.log(isimler); // orijinal array
// console.log(adanZyeIsimler); // siralanmis hali. ana yapiyi bozar.

// * string array z-a ya siralama

// const zdenAyaIsimler = adanZyeIsimler.reverse();
// console.log(zdenAyaIsimler); // reverse ile tersi alinir islemin ama once sort ile duzgun bir silanma yapilmasi lazimdir.

// * reverse metodunun kisa versiyonu **

// const kisaVersiyonSiralama = isimler.sort().reverse();
// console.log(kisaVersiyonSiralama); // yukaridaki ile ayni islemi yapacaktir.

// * sayilari kucuk buyuk siralama
// * sayilari siralamak sort metodunun icinde bir fonksiyon calistirmakla olur.
// const sirali = sayilar.sort(function (a, b) {
//   return a - b; //kucukten buyuge bir siralama yapar
//   //return b - a;   //buyukten kucuge bir siralama yapar
// });
// console.log(sayilar);

// * object leri siralama
// * object ler siralanirken tek tek icindeki verileri ele almak gerekiyor.
// ** object lerde isim gibi veriler siralanirken degisik bir function kullanilir.

//const siraliObject = ogrenciler.sort(function (a, b) {
// return a.yas - b.yas;  // hangisini istersek o sekilde siralariz
// return b.isim - a.isim; // istersek kucuk buyuk degistirererk de siralariz.
// *string gibi metinlerle calisirken verileri siralarken kullanilacak if yapisi:
//   if (a.isim < b.isim) {
//     return -1;
//   } else if (a.isim > b.isim) {
//     return 1;
//   } else return 0;
// });

//console.log(siraliObject);

//// **** Arrayleri kopyalamak ****
const isimler = ["ismail", "ali", "veli", "hasan", "omer"];

let kopya = [];

// bu 1. yontem for dongusu kopylama islemleri icin:

// for (let isim of isimler) {
//   kopya.push(isim);
// }

// bu 2. yontem kopylama islemleri icin:

//kopya = Array.from(isimler); //Array.from yontemi ile kopyalama yapilabilir.

//3. yontem ise onemli olan SPREAD METODU ******

kopya = [...isimler]; // ... bu ifade ile degiskeni cagirabiliriz

kopya.sort(); // tum islemleri kopyada yapariz

console.log(kopya);
console.log(isimler); // orijinal array boylece bozulmaz.

// ** SPLIT METODU ile ayiristirma.

const isim = "Onur Efe";

let harflerDizisi = isim.split(""); // tirnak arasinda bosluk olursa kelime kelime ayristirma yapar.
// tirnak arasinda bosluk olmasza harf harf olarak ayristirma yapar.
harflerDizisi = [...isim];
console.log(harflerDizisi);

///*** */
// Spread metodu ile dinamik islem yaptirma fonksiyornu yapabilriz/
// yani kac tane veri gelip islem yaptiracagimi bilmiyorsam SPREAD metodunu kullanabiliriz.

function sayilariTopla(...params) {
  let toplam = 0;
  for (let say of params) {
    toplam += say;
    // toplam = toplam +say; // bu da diger kullanimi yukardaki ifade ile ayni islemi yaptirir.
  }
  console.log(toplam);
}
sayilariTopla(2, 4);
sayilariTopla(10, 44, 55);
sayilariTopla(-23, 44, 1, 3, 5, 91);

// * Bu dinamik yapi ile kurulmus fonksiyon ile islemlerimizi yaptirabiliriz
