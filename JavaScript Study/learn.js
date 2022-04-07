
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

let sayiToplam = sayilarinToplami(10,40); // Fonksiyon icerisinde kod calistirip bunu disarida bir degiskene atadik boylece surekli donen atanmis bir kodumuz oldu
console.log("Toplam: " + sayiToplam); // Atadigimiz bu degiskeni artik nerede istersek ve hangi islemi istersek kullanabiliriz

function sayilarinToplami(sayi1, sayi2) {
    console.log("Sayilarin Toplami :" + (sayi1 + sayi2));
    return sayi1 + sayi2;  /// return ile fonksiyondan cikilir ve artik altindaki kodlara bakmaz ** bir nevi break islevi goruyor return.
}


/// birden cok degisken icin fonksiyon atamasi yapip calistirabiliriz.

let topla1 = birAraliktakiSayi(0, 20);
let topla2 = birAraliktakiSayi(40, 70);

console.log("1. Toplam:" + topla1 + "ve 2. Toplam:" + topla2);

function birAraliktakiSayi(baslangicSayisi, bitisSAyisi) {
    
    let toplam = 0

    for(let i = baslangicSayisi; i <= bitisSAyisi; i++){
        toplam = toplam + i;
    }
    console.log(`Toplam: ${toplam}`);
    return toplam;
}


// degiskene atanmali fonksiyon

const selamVer = function(){
    console.log("Merhabalalar");
}
selamVer();


/// ecmaScript 2016 => fatArrow kullanimi --- => bu simge ile function yazisini kaldirmis oluyoruz

const fatArrow = () => {
    console.log("Merhaba fatArrow");
}
fatArrow();

//eger parametere yani fonksoyon parantez icleri bossa _ ile de kisaltilabilir

const fatArrow2 = _ => {
    console.log("Merhabala parametresiz fatArrow");
}
fatArrow2();


//normal fonksiyon yazimi

function karesiniAl(sayi) {
    return sayi * sayi;
}
console.log(karesiniAl(5));



//degiskenli fonksiyon yazimi

const karesiniAlDegisken = function(sayi){
    return sayi * sayi;
}
console.log(karesiniAlDegisken(8));



//fatArrow parametreli degiskene atanmis

const fatArrowParametreli = (sayi) => {
    return sayi * sayi * sayi;
}
console.log(fatArrowParametreli(5));


// fat arrow tek satirlik fonksiyon icin kisa yazimi

const fatArrowKisaYazim = sayi => sayi * sayi;

console.log(`fat arow kisa yazim; ${fatArrowKisaYazim(10)}`);

//diger sekli kisa yazimin

const fatArrowKisaYazim2 = (sayi1, sayi2, sayi3) => sayi1 * sayi3 + sayi2;

console.log(`fatarrow Kisa yazimi coklu parametleri: ${fatArrowKisaYazim2(4, 6, 2)}`);


//*********************************


//// Array : verileri bir arada tutan yapilardir.

let arabaMarkalari = "Mercedes";
let arabaMarkalari2 = "BMW";
let arabaMarkalari3 = "Audi";

let arabaMarkasi = ["Mercedes", "BMW", "Audi"];
console.log(arabaMarkasi);
console.log(arabaMarkasi[1]);

arabaMarkasi[2] = "Toyota";
arabaMarkasi[3] = "Honda";
arabaMarkasi[4] = "Tesla";

arabaMarkasi[18] = "Mazda"; // sira ile yazilmazsa araya bosluk atamasi yapar.
console.log(arabaMarkasi[6]);
console.log(arabaMarkasi.length);  // array in uzunlugunu lenght ile gorebiliriz
console.log(arabaMarkasi);

//en buyuk index degeri, array eleman sayisinin 1 eksigi olur.
//yani array eleman sayisi 20 ise en buyuk index 19 olur.
// 0 dan baslanir sayilamaya arrayler.


console.log(`Araba dizisi: ${arabaMarkasi.toString()}`);

// array leri ekrana yazdirma yollari

//1. yontem
for(let i = 0; i < arabaMarkasi.length; i++){
    console.log(arabaMarkasi[i]);
}

//2. yontem
for(let oAnkiEleman of arabaMarkasi){
    console.log(oAnkiEleman);
}

// Array Fonksiyonlari

let isimler = ["Ali", "Mehmet", "Ahmet"];

console.log(isimler);
console.log(isimler.toString()); // toString() bu ifade ile arrayler yazdirilirsa normal sekilde ekrana basar.
console.log(isimler.join(" | ")); // join(" ") ile araya hangi simge idfade konursa arraylari bu ifade ile ayrir


// **push push() ile array in sonuna eleman ekler. bunu bir degiskene atayip hangi eleman cikmis gorede biliriz

let diziElemanSayisi = isimler.push("Omar", "Akif"); // 
console.log(isimler.toString() + " dizisinin eleman sayisi:" + diziElemanSayisi);

// **pop ile array in sonndaki elemani cikarir ve bunu bir degiskene atayip hangi eleman cikmis gorede biliriz

let dizidenCikanEleman = isimler.pop();
console.log(isimler + " cikan eleman:" + dizidenCikanEleman);

//  **shift dizinin ilk elemanini cikarir

isimler.shift();
console.log(isimler.toString());

// **unshift dizinin en basina eleman ekler.

isimler.unshift("Kerem", "Tarik");
console.log(isimler.toString());

//delete diziden belirtilen index deki elemani siler. Kullanimi syntax noktasinda daha degisik dikkat
//silinen ifade tamamen kyboldu tekrar yazdirman istersek undefined olarak gozukecektir

delete isimler[2];
console.log(isimler.toString() + " " + isimler[2]);


// ***splice istedidigimiz index den baslayarak eleman silme veya ekleme yapabiliriz

let numaralar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numaralar.splice(2, 0, 0, -4, -5); // * 2 = 2. index den basla 3. index arasinda, 0 = hicbir eleman silme, sirayla 0 -4 -5 sayilarini bu araya ekle demek oluyor bu ifade...
console.log(numaralar.toString());

let silinenler = numaralar.splice(0, 2, 15, 20, 25); // 0 . index de n basladi 2 index i sildi yerine 15 20 25 indexlerini ekledi. silinenleri de ayrica bir degiskene atayip yine bir array olarak yazdirabiliriz.
console.log(numaralar.toString());
console.log(silinenler.toString());


// ***concat 2 adet array i birlestirir ve birlstiren dizilerde bozulma olmaz.

let num1 = [1,2,3,4];
let num2 = [5,6,7];

let sayilarim = num1.concat(num2);
console.log(sayilarim.toString());


// ** slice belirtilen 2 index arasindaki degerleri bolup yeni array ortaya cikarir

let benimSayim = [6, 7, 5, 1, 0, 4];
let yeniDizi = benimSayim.slice(1, 5); // 1. indexden basla ve 5. index arasinda olanlari yeniden array olustur demek
console.log(yeniDizi.toString() + "  " + benimSayim.toString());