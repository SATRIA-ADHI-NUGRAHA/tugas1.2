// 10 method bawaan JavaScript (Built-in Functions)

// 1. map() => membuat array baru yang diisi dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array pemanggil.
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(map1);

// 2.sort() => mengurutkan item pada array dan mengembalikan array yang diurutkan.
// let urut = ['a','d','c','b']
// urut.sort()
// console.log(urut)

// 3. filter() => membuat array baru dengan semua elemen yang lulus tes yang diimplementasikan oleh fungsi yang disediakan.
// let umur = [10,8,14,16]
// function cekUmur(param) {
//     return param >= 10;
//   } console.log(umur.filter(cekUmur))
  
// 4. push() => menambahkan satu atau lebih elemen ke akhir array dan mengembalikan panjang array yang baru.
// let nama = ['satria', 'adhi']
// nama.push('nugraha')
// console.log(nama)

// 5. find() => mengembalikan nilai elemen pertama dalam larik yang disediakan yang memenuhi fungsi pengujian yang disediakan.
// let umur = [8,8,10,16]
// function cekUmur(param) {
//     return param >= 10;
//   } console.log(umur.find(cekUmur));

// 6. splice() => mengubah konten pada array dengan menghapus atau mengganti elemen yang ada dan / atau menambahkan elemen baru pada tempatnya.
// let laptop = ['asus','acer','toshiba','hp']
// laptop.splice(2,0, 'msi')
// console.log(laptop)

// laptop.splice(1,1, 'samsung')
// console.log(laptop)

// 7. includes() => metode menentukan apakah sebuah array berisi elemen tertentu.
// const laptop = ['asus','acer','toshiba','hp']
// const n = laptop.includes('hp');
// console.log(n)

// 8. length() => mengatur atau mengembalikan jumlah elemen dalam sebuah array.
// const laptop = ['asus','acer','toshiba','hp']
// console.log(laptop.length)

// // 9. toString() => metode mengembalikan string dengan semua nilai array, dipisahkan dengan koma.
// const laptop = ['asus','acer','toshiba','hp']
// var x = laptop.toString()
// console.log(x)

// 10. fill() => mengisi elemen yang ditentukan dalam array dengan nilai statis.
// const laptop = ['asus','acer','toshiba','hp']
// console.log(laptop.fill('msi'))