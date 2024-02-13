function solve(inputArray, nRotations) {
    'use strict';

    for(let index = 0;index < nRotations; index++) {
        
        const firstElement = inputArray.shift();
        inputArray.push(firstElement) //Взимаме първия елемент и го слагаме отзад
    }

    console.log(inputArray.join(' '));
}

solve([51, 47, 32, 61, 21], 2)