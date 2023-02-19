let solution = [];

let first = '0';
let second = '456';


solution = function (first, second) {

    let x = first.split('');
    let y = second.split('');
    let bigger;
    let smaller;
    let res = [];
    let k = 0;
    let rev;


    if (x.length > y.length) {
        bigger = x;
        smaller = y;
    } else {
        bigger = y;
        smaller = x;
    }

    smaller = smaller.reverse();

    for (let i = smaller.length; i < bigger.length; i++) {

        smaller[i] = '0';
    }
    smaller = smaller.reverse();


    for (let j = bigger.length; j >= 0; j--) {
        if (parseInt(bigger[j]) + parseInt(smaller[j]) <= 9) {

            res[k] = String(parseInt(bigger[j]) + parseInt(smaller[j]));
            k++;
        } else if (parseInt(bigger[j]) + parseInt(smaller[j]) > 9) {
            if (j != 0) {
                res[k] = String((parseInt(bigger[j]) + parseInt(smaller[j])) % 10);
                bigger[j - 1] = String(parseInt(bigger[j - 1]) + 1);
                k++;
            } else {
                rev = String(parseInt(bigger[j]) + parseInt(smaller[j]));
                rev = rev.split('').join('');
                res[k] = rev;

            }
        }

    }

    return (res.reverse().join(''));

}
console.log(solution(first, second));

/* let res = parseInt(first, 10) + parseInt(second, 10);
    return res.toString(10); */