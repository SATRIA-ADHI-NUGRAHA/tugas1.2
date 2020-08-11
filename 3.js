function cariData (nilaiAwal, NilaiAkhir, dataArray){
    if (typeof nilaiAwal == 'number' && typeof NilaiAkhir == 'number'){
        if (dataArray.length > 5){
            if ( nilaiAwal < NilaiAkhir ){
                let cari = dataArray.filter(x => x > nilaiAwal && x < NilaiAkhir)
                cari.sort((nilaiAwal,NilaiAkhir) => nilaiAwal-NilaiAkhir)
                console.log(cari)
            }else {
                console.log('Nilai akhir harus lebih besar dari nilai awal')
            }
        } else {
            console.log('Jumlah angka dalam dataArray tidak ada')
        }
    } else {
        console.log('Data harus number')
    }
}

cariData (2,8,[3,4,5,6,8,9])