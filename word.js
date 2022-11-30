function countWords(str) {
    const arr = str.split(' ');
    

    return arr.filter(word => word !== '').length;
}

console.log(countWords('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.'));
console.log(countWords(' Berapa u(mur minimal[ untuk !mengurus ktp?'));
console.log(countWords('Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.'));