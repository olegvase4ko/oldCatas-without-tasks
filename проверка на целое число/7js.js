let solution = [];

let arr = [9, 2, "2", 5];

solution = function (arr) {

    function isNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }

    let sum = 0;
    let length = arr.length;
    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i]) && isNumber(arr[i])) {
            sum += arr[i];
        } else if (isNumber(arr[i])) {
            length -= 1;
        } else {
            console.log("ERROR DATA");
            return false;
        }

    }
    sum = sum / length;
    if (Number.isInteger(sum))
        return true;
    else
        return false;

}
console.log(solution(arr));