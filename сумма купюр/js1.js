let solution = [];

let pocketStr = "130коп";

solution = function (pocketStr) {
    let byn = 0;
    let kop = 0;
    let mas = pocketStr.split(' ');
    for (let i = 0; i < mas.length; i++) {
        if (mas[i].includes('бун')) {
            byn += parseInt(mas[i]);
        } else if (mas[i].includes('коп')) {
            kop += parseInt(mas[i]);
            if ((kop - kop % 100) / 100 != 0) {
                byn += (kop - kop % 100) / 100;
                kop = kop % 100;
            }
        }
    }
    return byn + 'бун' + ' ' + kop + 'коп';
}
console.log(solution(pocketStr));