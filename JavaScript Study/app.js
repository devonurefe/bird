//Saniye hesaplama

let second = 1200
let minutes = second / 60
let hour = minutes

console.log(`${hour} dakika 0 saniyedir.`)

//fahreneit hesaplama

let fahr = 100
let celc = (5/9) * (fahr - 32)

console.log (celc)

//artik yil hesaplama

let yil = 2020
let artik = yil % 4
console.log(artik)





//Saniye hesaplama

// let saniyeStr = prompt("Saniye giriniz")
// let saniye = parseInt(saniyeStr)

// let dakika = parseInt((saniye/60), 10)
// let kalanSaniye = saniye % 60

// console.log(`Girdiginiz ${saniye} Sayisi : ${dakika} dakika ve  ${kalanSaniye} saniyedir.` )

//fahreneit hesaplama

// let girilenDerece = parseInt(prompt("Fahrenheit Giriniz", "100"));
// let Celc = (5/9) * (girilenDerece - 32)

// console.log(`Girdiginiz derece ${Celc.toFixed(3)} dir`)









//kare cevre - alan hesaplama

// let kareKenar = parseInt(prompt("Karenin cevre hesaplamasi icin bir kenarini giriniz:"))


// function kareCevre(kareKenar){
//     let cevre = kareKenar * 4
//     alert(`Karenin cevresi: ${cevre} dir.`)
// }
// kareCevre(kareKenar);

//Kare Alan
// let kareKenarAlan = parseInt(prompt(`Karenin alan hesaplamasi icin bir kenarini giriniz :`))

// function kareAlan(kareKenarAlan){
//     let alan = kareKenarAlan * kareKenarAlan
//     alert ( `Karenin alani : ${alan} dir.`)
// }

// kareAlan(kareKenarAlan);

// Vize final hesaplama

// let vize = prompt("Lutfen vize notunuzu giriniz:");
// let final = prompt("Lutfen Final notunuzu giriniz:");

// function notDurumu(vize, final){
//     let sonuc = parseInt((vize * 0.4) + (final * 0.6));
//     if (sonuc >= 50){
//         alert(`Dersi gectiniz, Notunuz ${sonuc}.`)  
//     }else{
//         alert(`Dersi gecemediniz, Notunuz ${sonuc}.`)
//     }
// }
// notDurumu(vize, final);

// let dogum1 = prompt("Ali Yasini girsin;");
// let dogum2 = prompt("Mehmet Yasini girsin");

// if (dogum1 > dogum2) {

//     console.log("Ben Mehmetten buyugum");

// }else if ( dogum2 > dogum1){

//     console.log("Ali benden buyuksun");

// }else{

//     console.log("Yasitiz");
// }





//ternary kisa if gosterimi
// let Hollanda = 17, Almanya = 25, Isvec = 11; 

// nufus = (Hollanda > Almanya) ? (Almanya + Isvec) : (Hollanda - Isvec);

// console.log(nufus);






//switch case ornekleri

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


// Rastgele sayi uretip Tahmin Etme oyunu ************** 🤑🤑🤑🤑🤑

/* let uretilenSayi = (Math.random() * 90) + 10; // exc 87,8999999
console.log("Uretilen ondalikli sayi" + uretilenSayi);
uretilenSayi = Math.floor(uretilenSayi); // floor fonksiyonu 87 yapacak

let kullanicininGirdigiSayi = parseInt(prompt("Iki basamakli bir sayi giriniz :", "15"));

let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi / 10);

console.log(`Uretilen sayinin birler basamagi ${uretilenSayiBirlerBasamagi}, onlar basamagi ise ${uretilenSayiOnlarBasamagi} dir`);

let userSayiBirlerBasamagi = kullanicininGirdigiSayi % 10;
let userSayiOnlarBasamagi = Math.floor(kullanicininGirdigiSayi / 10);

console.log(`Kullanici sayisinin birler basamagi ${userSayiBirlerBasamagi}, onlar basamagi ise ${userSayiOnlarBasamagi} dir`);

console.log(`Sistemin urettigi sayi ${uretilenSayi} dir, kullanicinin girdigi sayi ${kullanicininGirdigiSayi} dir`);

if(uretilenSayi === kullanicininGirdigiSayi){
    console.log(`Tebrikler 1000$ Kazandiniz! Tahmininiz: ${kullanicininGirdigiSayi}, Sistemin Urettigi Sayi ${uretilenSayi} `);
}else if(uretilenSayiBirlerBasamagi === userSayiOnlarBasamagi && uretilenSayiOnlarBasamagi === userSayiBirlerBasamagi){
    console.log(`Tebrikler 500$ Kazandiniz! Tahmininiz: ${kullanicininGirdigiSayi}, Sistemin Urettigi Sayi ${uretilenSayi} `);
}else if(uretilenSayiBirlerBasamagi === userSayiBirlerBasamagi || uretilenSayiOnlarBasamagi === userSayiOnlarBasamagi){
    console.log(`Tebrikler 100$ Kazandiniz! Tahmininiz: ${kullanicininGirdigiSayi}, Sistemin Urettigi Sayi ${uretilenSayi} `);
} else{
    console.log(`Malesef Kazanamadiniz! Tahmininiz: ${kullanicininGirdigiSayi}, Sistemin Urettigi Sayi ${uretilenSayi} `);
}
*/





//UYGULAMALAR

// 1) 3 SAYININ ORTALAMASI BULMA

// let sayi1 = prompt("Lutfen 1. sayiyi giriniz: ");
// let sayi2 = prompt("Lutfen 2. sayiyi giriniz: ");
// let sayi3 = prompt("Lutfen 3. sayiyi giriniz: ");

// let sum = (parseInt(sayi1)  + parseInt(sayi2)  + parseInt(sayi3) ) / 3;

// console.log(`Girdiginiz 3 sayinin ortalamasi: ${Math.floor(sum)} dir `);



//2) KENARLARI GIRILEN UCGENIN CESIDINI BULMA

// let ucgen = parseInt(prompt("Kenar sayisini giriniz:"));

// if (ucgen === 3){
//     console.log(`Ben bir ucgenim`);
// }else if(ucgen === 4){
//     console.log(`Ben bir dortgenim`);
// }else if(ucgen === 5){
//     console.log(`Ben bir besgenim`);
// }else if(ucgen === 6){
//     console.log(`Ben bir altigenim`);
// }
// else{
//     console.log(`Ben bir senim :)`);
// }


//3) Vize Final gecme notu yapma

// let vize = prompt("Vize notunuzu giriniz:");
// let final = prompt("Final notunuzu giriniz:");

// let gecmeNotu = parseInt(vize * 0.4) + parseInt(final * 0.6)

// if(gecmeNotu >= 50){
//     console.log(gecmeNotu);
//     console.log(`Gecme notunuz: ${gecmeNotu}. Dersi gectiniz Tebrikler`);
// }else if(gecmeNotu <= 50) {
//     console.log(`Gecme notunuz: ${gecmeNotu}. Dersi gecemediniz. Bute kaldiniz`)
//  }


//4) Adimizi ekrana 5 kez yazdiran donguelri kullanma

//for ile

// let adim = ("Onur Efe");

// for(i = 0; i < 5; i++){
//          console.log((i + 1) + " " + adim + " - for");
// }


// //while ile

// let kimim = 0;

// while(kimim < 5){
//     console.log((kimim +1) + " Onur Efe - while");
//     kimim++
// }

// //do while ile

// let benim = 0

// do{
//     console.log((benim + 1) + " Onur Efe - do while");
//     benim++
// }while(benim < 5); // noktali virgul onemli do while icin






//5) 1 den 100 e kadar sayilarin toplamini yazdir

// let topla = 0

// for(i = 0; i < 100; i++){
//     topla = topla + i;
//     //topla += i; ==> bu da 2. gosterim.
// }
// console.log(`1 den 100 e kadar olan sayilarin toplami sonucu : ${topla}`);


//6) 1 den 10 kadar olan sayilari aralarinda virgukl olacak sekilde yazdir

// let yazdir = "";

// for (let i = 1; i <= 10; i++){
//     if(i != 10){
//         yazdir = yazdir + i + ", ";
//     }else{
//         yazdir = yazdir + i
//     }
    
// }
// console.log(yazdir);


//7) klavyeden girilen bir sayinin faktoryeli alan uygulama

// let sayi = parseInt(prompt(`faktoryel almak icin bir sayi giriniz; `));

// let faktoryel = 1;

// for (let i = 1; i <= sayi; i++){
//     faktoryel = faktoryel * i
// }

// console.log(`Giridiginiz ${sayi} sayisinin faktoriyeli: ${faktoryel} sayisidir.`);


//8) kullanicidan alinan x ve y degerlerini f(x,y) fonksiyonu seklinde hesapla
//x>0, y<0 ise f(x,y) = 4x+2y+4
//x>0 y=0 ise f(x,y) = 2x-y+3
//x<0 y >0 ise f(x,y) = 3x+4y+3
//x>0 y>0 ise f(x,y) = 6x + 6y +6

// let x = parseInt(prompt(`Bir X degeri giriniz:`));
// let y = parseInt(prompt(`Bir Y degeri giriniz:`));

// let sonuc = 0;

// if(x > 0 && y < 0 ){

//    sonuc = 4 * x + 2 * y + 4;

// }else if(x > 0 && y == 0){

//    sonuc = 2 * x - y + 3;

// }else if(x < 0 && y > 0){

//     sonuc = 3 * x + 4 * y +3;

// }else if(x > 0 && y > 0){
//     sonuc = 6 * x + 6 * y + 6
// }else{
//     console.log(`hata var`);
// }
// console.log(`x: ${x} y:${y} ve sonuc ${sonuc}`);



//9) 100 luk sistemde verilen notlari harfli sistemde gosteren uygulama yap
FF=0-50
DD=51-60
DC=61-70
BC=71-80
BB=81-90
BA=91-95
AA=96-100

let not = parseInt(prompt(`0-100 arasinda notunuzu giriniz: `));

let harfDegeri = 0;
let kaldin = "Kaldiniz😕";
let gectin = "Gectin Tebrikler😀"

if(not < 50 && not >= 0){

    harfDegeri = "FF";
    
}else if(not < 60 && not > 50){

    harfDegeri = "DD";

}else if(not < 70 && not > 60){

    harfDegeri = "DC";

}else if(not < 80 && not > 70){

    harfDegeri = "BC";

}else if(not < 90 && not > 80){

    harfDegeri = "BB";

}else if(not < 95 && not > 90){

    harfDegeri = "BA";
    
}else if(not <= 100 && not > 95){

    harfDegeri = "AA";

}

if(harfDegeri == "FF"){
    console.log(`Girdiginiz ${not} degerinde notunuzun harf karsiligi ${harfDegeri} olarak hesaplanmistir. Malesef ${kaldin}`);    
}else if(harfDegeri !== "FF") {
    console.log(`Girdiginiz ${not} degerinde notunuzun harf karsiligi ${harfDegeri} olarak hesaplanmistir. ${gectin}`);
}else if(not < 0 || not > 100){
    console.log("Yanlis Deger Girdiniz");
}