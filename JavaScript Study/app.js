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

for (let i= 0; i < 15; i++){
    console.log("Ben for dongusuyum");  
}

//while dongusu -- BIR SARTIMIZ VAR VE KAC TANE OLDUGUNU BILMIYORSAM ' WHILE' KULLAN

let sayi = 5;
while (sayi < 20){
    console.log("Ben while dongusuyum");
    sayi++
}

//do while dongusu -- BIR KOD VAR ILK ONCE BU CALISSIN SONRA SART KONTROL EDILSIN DIYORSAK ' DO-WHILE' KULLAN (MENU GOSTER OLAYINDA OLDUGU GIBI)

let yas = 15
do{
    console.log("Ben do-while dongusuyum");
    yas++
}while(yas < 30); //SADECE WHILE DA NOKTALI VIRGUL KULLANILIR.




//break, continue, return kullanimi

//break --> break sartinin oldugu yerde donguden cikar
for(let i = 0; i < 15; i++){
    if(i == 9){
        break;
    }
    console.log("Ben Break im");
}

//continue --> continue oldugu sartinin oldugu ifadeyi atlar donguye devam eder
for(let i = 0; i < 20; i++){
    if(i == 11){
        continue;
    }
    console.log("Ben continue yuumm " +i);
}

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
