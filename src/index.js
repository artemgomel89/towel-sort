// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (matrix === undefined || matrix.length === 0) return newArr;
    for (var i = 0; i < matrix.length; i++) {
        if (i !== 0 && i % 2 !== 0) {
            newArr.push(...matrix[i].reverse());
        } else {
            newArr.push(...matrix[i]);
        }
    }
    return newArr;
};
