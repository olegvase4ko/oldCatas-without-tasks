let solution = [];

let x = 7;

solution = function (x) {
    let res = 0;
    for (let i = 1; i <= x; i++) {
        res += i;
    }
    return res;
}
console.log(solution(x));