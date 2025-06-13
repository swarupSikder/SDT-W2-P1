var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    if (index !== numbers.length - 1) {
        const element = numbers[index];
        const nextElement = numbers[index + 1];

        if (element !== nextElement) {
            newNumbers.push(element);
        }
    }
}

console.log(...newNumbers);