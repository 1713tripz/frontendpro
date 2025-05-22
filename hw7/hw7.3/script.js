let input = null

function foo() {
    for (let i = 0; i < 10; i++) {

        input = prompt('Enter a number greater than 100');
        const number = Number(input);

        if (input === null) {
            console.log('Input is null');
            return;
        }

        if (!isNaN(number) && number > 100) {
            console.log('Last entered number => ', number);
            return;
        }

        alert('Please ,enter a number greater than 100');

    }

    console.log('Last entered number => ', input);
}

foo()