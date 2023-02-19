let solution = [];

var strArr = ['1 2 22 55 63', '2 5 0', '3 0 0', '99 99 99 999 99999 999 999 99', '0 0 0 0 0'];

solution = function (strArr) {

    let sum = 0;
    for (let i = 0; i <= strArr.length - 1; i++) {
        let mas = strArr[i];
        let numbers = mas.split(' ');
        sum += Math.min(...numbers);
    }
    return sum;
}
console.log(solution(strArr));