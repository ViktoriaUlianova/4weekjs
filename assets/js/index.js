function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введите число", []);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);


    }

    numbers.sort();


    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return [numbers, sum];


}

alert(sumInput());