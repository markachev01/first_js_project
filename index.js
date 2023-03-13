// ! Task 1: Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

const IntArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(IntArr.filter(elem => elem % 2 == 0).reduce((acc, elem) => acc + Math.sqrt(elem), 0));

// ! Task 2: Напишите функцию, которая заполняет новый массив предоставленным значением. Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

function newArr(b, c) {
    const addedNewArr = [];
    for (var i = 0; i < b; i++) {
        addedNewArr.push(c);
    }
    console.log(addedNewArr);
}

newArr(3, 'a');

// ! Task 3: Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(). Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

let reverseArr = [1, 2, 3]

function reverseArrFunc(arr) {
    let newRevArr = [];
    for (let k = arr.length - 1; k >= 0; k--) {
        newRevArr.push(arr[k])
    }
    console.log(newRevArr);
}
reverseArrFunc(reverseArr);

// ! Task 4: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const unwantedArr = [0, 1, false, 2, undefined, '', 3, null];

function cleanArr(arr) {

    console.log(arr.filter(
        elem =>
            elem !== false &&
            elem !== undefined &&
            elem !== '' &&
            elem !== null &&
            elem !== 0));
}
cleanArr(unwantedArr);

// ! Task 5: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

var arr = [['a', 1], ['b', 2]]

var arrReturns = array => {
    var object = {};
    for (let k = 0; k < array.length; k++) {
        object[array[k][0]] = array[k][1];
    }
    return object;
};

console.log(arrReturns(arr));

// ! Task 6: Напишите функцию, которая убирает повторяющиеся значения. Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

let oldArr = [1, 2, 3, 1, 2]

function reset(arr) {
    let cleanArr = [];
    for (let d = 1; d < arr.length; d++) {
        if (cleanArr.includes(arr[d]) == false) {
            cleanArr.push(arr[d]);
        }
    }
    console.log(cleanArr.sort((a, b) => a - b));
}

reset(oldArr)

// ! Task 7: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны. Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true

const firstArr = [1, 2, 3]
const secondArr = [1, 2, 3]

function arrayСompare(first, second) {
    var f = 0
    if (first.length == second.length) {
        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                f++;
                break;
            }
        }
        f == 0 ? console.log(true) : console.log(false);
    } else {
        console.log(false);
    }
}
arrayСompare(firstArr, secondArr)

// ! Task 8: Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]. не используйте array.flat()

var deepArr = [1, 2, [3, 4, [5]]];
var convertedArr = (array) => array.reduce((acc, item) => acc.concat(Array.isArray(item) ? convertedArr(item) : item), []);

console.log(deepArr);
console.log(convertedArr(deepArr));

// ! Task 9: Напишите функцию, которая разделяет массив на части заданного размера. Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
var arrOld = [1, 2, 3, 4, 5]
var value = 2
var dividedArr = []

for (let i = 0; i < arrOld.length; i += value) {
    dividedArr.push(arrOld.slice(i, i + value));
}

console.log(dividedArr);

// ! Task 10: Преобразовать первый символ строки в нижний регистр

var str = 'Пример строки';

function capitalizeFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
}
document.writeln(capitalizeFirstLetter(str));

console.log(str);
console.log(capitalizeFirstLetter(str));