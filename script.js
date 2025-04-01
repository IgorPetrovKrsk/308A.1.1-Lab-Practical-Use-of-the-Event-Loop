//Part 1: Stack Overflow
let stackCounter = 0;

function stackOverflow() {
    stackCounter++;
    stackOverflow();
}

try {
    stackOverflow();
} catch (error) {
    console.error(`Stack counter before the overflow is ${stackCounter}`);
    console.error(Error);
}

//Part 2: Trampolines

const testArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11],
        [12, 13, [14, 15]],
    ],
    [16, [17, 18, [19, 20]]],
    [21, 22, 23],
    [24, 25, 26],
    [27, 28, 29],
    [
        [30, 31],
        [32, 33, [34, 35]],
    ],
    [36, [37, 38, [39, 40]]],
    [41, 42, 43],
    [44, 45, 46],
    [47, 48, 49],
    [
        [50, 51],
        [52, 53, [54, 55]],
    ],
    [56, [57, 58, [59, 60]]],
    [61, 62, 63],
    [64, 65, 66],
    [67, 68, 69],
    [
        [70, 71],
        [72, 73, [74, 75]],
    ],
    [76, [77, 78, [79, 80]]],
    [81, 82, 83],
    [84, 85, 86],
    [87, 88, 89],
    [
        [90, 91],
        [92, 93, [94, 95]],
    ],
    [96, [97, 98, [99, 100]]]
];

// simple recyrsion
function flatArray(array) {
    let tempArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == typeof 1) {
            tempArray.push(array[i]);
        } else {
            tempArray.push(...flatArray(array[i]));
        }
    }
    return tempArray;
}

let flattenArray = flatArray(testArray);
console.log(flattenArray);


function flatArrayTrampoline(array, tempArray = []) {
    return function () {
        if (array.length == 0) {
            return tempArray;
        }
        const [head, ...tail] = array; //head is the first ellement of the array and tail is the other part of array
        if (typeof head == typeof 1) {
            tempArray.push(head);
            return flatArrayTrampoline(tail, tempArray);
        } else {
            return flatArrayTrampoline([...head, ...tail], tempArray);
        }
    }
}

// Trampoline function
let i=0;
function trampoline(func, array) {
    let result = func(array);
    while (typeof result === 'function') {
        result = result();
        i++;
        console.log (`trampoline ${i}`);
    }
    return result;
}

let flattenArray2 = trampoline(flatArrayTrampoline, testArray);
console.log(flattenArray2);





