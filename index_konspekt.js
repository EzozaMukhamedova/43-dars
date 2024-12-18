// ***************************************************
// Object Prototype:

// JavaScriptda har bir obyektning prototipi bor, u orqali metodlar va xususiyatlar meros qilinadi.
// Prototype:

// Har bir funksiyaning prototipi yangi obyektlar yaratilganda ularning asosiy qolipi hisoblanadi.
// proto:

// Bu xususiyat orqali obyektning prototipiga murojaat qilinadi.
// Property Description:

// Obyekt xususiyatlarining qiymati, yozilish imkoniyati va boshqalarini tavsiflaydi.
// Meros Qilib Olish:

// Obyektlar prototiplaridan xususiyat va metodlarni meros qilib oladi.
// Object.create, .getPrototypeOf, .setPrototypeOf:

// Yangi obyekt yaratish, obyektning prototipini olish va yangi prototip o'rnatish uchun metodlar.
// Object.assign:

// Obyektlarning xususiyatlarini birlashtirish.
// hasOwnProperty, isPrototypeOf:

// Obyektning o'z xususiyatiga egaligini va boshqa obyektning prototip zanjirida bo'lishini aniqlash.
// Object.freeze, .seal:

// Obyektning xususiyatlarini o'zgartirilmas va yangi xususiyat qo'shilmaydigan qilib muzlatish yoki muhrlash.
// Property Descriptor:

// Xususiyat tavsiflarini boshqarish, masalan o'qilishi yoki yozilishini sozlash.

// **********************************************

// Property Description Turlari:
//    - Har bir obekt xususiyatining tavsifi, masalan, qiymati (value), yozilishi mumkinligi (writable), sanab otilishi (enumerable), va ozgartirilishi (configurable).

// Prototype Orqali Meros Qilib Olish:
//    - Obektlar oz prototiplaridan metod va xususiyatlarni meros qilib oladi, bu ularni yangi obekt yaratishda qayta ishlatilishini taminlaydi.

// Object.create:
//    - Bu metod yordamida yangi obekt yaratiladi, uning prototipi sifatida berilgan obekt olinadi.

// Object.getPrototypeOf:
//    - Berilgan obektning prototipini qaytaradi.

// Object.setPrototypeOf:
//    - Obekt uchun yangi prototip ornatish imkonini beradi.

// Object.assign:
//    - Bir nechta manba obektlarining xususiyatlarini nishon obektga nusxalaydi.

// hasOwnProperty:
//     - Obekt ozida berilgan xususiyatni ozining prototip zanjiridan tashqari holda ega bolish-yoki bolmasligini tekshiradi.

// isPrototypeOf:
//     - Aniq bir obekt boshqa bir obektning prototip zanjirida joylashganligini aniqlash uchun ishlatiladi.

// Object.freeze:
//     - Obektning xususiyatlarini ozgartirib bolmasligini taminlaydi, yani ularni muzlatadi.

// Object.seal:
//     - Obektning xususiyatlarini yangi xususiyatlar qoshilmaydigan va mavjud xususiyatlar ochirilmaydigan, lekin ozgartirilishi mumkin bolgan tarzda muhrlaydi.

// Property Descriptor Bilan Ishlash:
//     - Obekt xususiyatlarini boshqarishda, xususiyat tavsiflarini ozgartirish orqali amalga oshiriladi, masalan, xususiyatning oqilishi yoki yozilishi mumkinligini sozlash.

// Necha Xil Xususiyatning Bir Vaqtning Ozida Ozgarishi:
//     - Object.assign yoki boshqa metodlar yordamida bir vaqtning ozida bir nechta xususiyatlar ozgartirilishi mumkin, bu esa obektning bir nechta xususiyatlarini bir vaqtning ozida yangilash imkonini beradi.

// THIS KEYWORDS HAQIDA
// 1. Global Kontekst:
//    - "this" global obektni korsatadi: brauzerda bu "window", Node.jsda esa "global".

// 2. Obekt Metodlari Ichida:
//    - Obekt metodlarida "this" shu obektni ozi boladi.

// 3. Constructor Funksiyalar Ichida:
//    - Constructor funksiyalarida "this" yangi yaratilayotgan obektni bildiradi.

// 4. Arrow Funksiyalarida:
//    - Arrow funksiyalarda "this" tashqi muhitning "this" qiymatini oladi.

// 5. DOM Obektlarida:
//    - DOM hodisalari yuz berganda, "this" hodisa yuz bergan elementni bildiradi.

// 6. Bind, Call, Apply Metodlarida:
//    - Ushbu metodlar "this"ni boshqarish uchun ishlatiladi: "bind()" yangi funksiyani qaytaradi, "call()" va "apply()" esa funksiyani ishga tushiradi va "this"ni ozgartiradi.
