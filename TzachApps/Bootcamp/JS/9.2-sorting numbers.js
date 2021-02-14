let numbers = [1, 2, 3, 4];

numbers.sort((a, b) => a - b);
console.log('ascending ' +  numbers);

numbers.sort((a, b) => a - b).reverse();
console.log('descending ' + numbers);