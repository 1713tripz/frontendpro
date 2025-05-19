const message = prompt("Enter yor string");
const chars = prompt("Enter some chars for removing");

let result = "";

function foo(str, arr) {
    for (let i = 0; i < str.length; i++) {
        let shouldRemove = true;

        for (let j = 0; j < arr.length; j++) {
            if (str[i] === arr[j]) {
                shouldRemove = false;
                break;
            }
        }
        if (shouldRemove) {
            result += str[i];
        }
    }
    return result;

}

const output = foo(message, chars);

alert(output);











































































