const array = [{}, 1, 2, 3, 4, 7, 6, "string", null];

function foo(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i]);
        }
    }

    return result;

}
function getAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

const result = foo(array);
const average = getAverage(result);


console.log(result);
console.log(average);
