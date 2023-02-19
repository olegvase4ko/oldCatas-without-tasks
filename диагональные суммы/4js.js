let solution = [];

var matrix = [
    [5, 6, 7, 6, 8],
    [7, 5, 1, 5, 3],
    [4, 8, 6, 5, 1],
    [5, 3, 8, 7, 5],
    [5, 3, 8, 9, 7]
]

solution = function (matrix) {

    let s = 0;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < i && j < matrix[i].length; j++) {
            s += matrix[i][j];
        }
    }
    return s;
}
console.log(solution(matrix));