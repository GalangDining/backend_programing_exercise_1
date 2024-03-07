const bilanganPrima = '';

const rumusBilanganPrima = (angka) => {
    if (angka/angka == 0  && angka/1 == angka) {
        return bilanganPrima += angka;
    }
}


for (let i = 0 ; i < 1000 ; i++ ) {
    rumusBilanganPrima(i);
    
}
bilanganPrima.forEach((i) => console.log(i));
