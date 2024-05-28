"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Add = exports.wildFlower = void 0;
const wildFlower = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push('Wildflower');
        }
        else if (i % 5 == 0) {
            result.push('Flower');
        }
        else if (i % 3 == 0) {
            result.push('Wild');
        }
        else {
            result.push(i);
        }
    }
    return result.toString();
};
exports.wildFlower = wildFlower;
// https://tddmanifesto.com/exercises/
const Add = (n) => {
    let result = 0;
    if (!n) {
        return result;
    }
    else if (n.length === 1) {
        result = Number(n);
    }
    else {
        const lines = n.split('\n');
        const sumPerLine = lines.map((line) => {
            const splitValues = line.split(',');
            const splitNumbers = splitValues.map(Number);
            const addValues = splitNumbers.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
            return addValues;
        });
        const totalSum = sumPerLine.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
        result = totalSum;
    }
    return result;
};
exports.Add = Add;
