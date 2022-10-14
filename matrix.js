
let smallMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let bigMatrix = [
    [1, 2, 6, 7, 8],
    [7, 3, 6, 4, 9],
    [3, 4, 0, 7, 0],
    [2, 2, 7, 0, 8],
    [8, 5, 9, 7, 8],
]

// function shows all elements with index
/*
function showAllElements(matrix) {
    for ( let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            console.log(`Element with index ${i}.${k} is ${matrix[i][k]}`);
        }
    }
}

showAllElements(smallMatrix);
showAllElements(bigMatrix);
*/

// function shows matrix as text
/*
function showMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i].join(' ');
        console.log(row);
    }
}

showMatrix(smallMatrix);
showMatrix(bigMatrix);
*/

// function shows array with sum for each row
/*
function sumForEachRow(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        result.push(sum);
    }
    console.log(result);
}
sumForEachRow(smallMatrix);
sumForEachRow(bigMatrix);
*/

// function finds all column with 0 and show their index
/*
function columnWithZero(matrix) {
    let columnsIndex = [];
    for (let j = 0; j < matrix[0].length; j++ ) {
        for ( let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] === 0){
                columnsIndex.push(j);
            }
        }
    } console.log(columnsIndex);
}
columnWithZero(bigMatrix);
*/

// function shows the way for snake (like in SnakeGame on old phones)
/*
function snakeByPass(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let isOddRow = i % 2;
        for (let j = 0; j < matrix[i].length; j++) {
            if (isOddRow === 0) {
                console.log(matrix[i][j])
            } else {
                console.log(matrix[i][matrix[i].length-1-j]);
            }
        }

    }
}
snakeByPass(smallMatrix);
snakeByPass(bigMatrix);
*/

// function logins in console  main diagonal
/*
function loginMainDiagonal(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log( matrix[i][i]);
    }
}
loginMainDiagonal(smallMatrix);
loginMainDiagonal(bigMatrix);
*/

// function logins in console reverse diagonal
/*
function loginRevDiag (matrix) {
    for ( let i = 0; i < matrix.length; i++) {
        let item = matrix[i][matrix[i].length-1-i];
        console.log(item);
    }
}
loginRevDiag(smallMatrix);
loginRevDiag(bigMatrix);
*/

// function shows bottom main triangle
/*
function showbuttomtriangle(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j <= i; j++){
            row.push(matrix[i][j]);
        }
        let string = row.join(' ');
        console.log(string);
    }
}
showbuttomtriangle(smallMatrix);
showbuttomtriangle(bigMatrix);
*/

