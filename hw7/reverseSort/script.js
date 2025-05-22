const array = [1, 7, 8, 3];

array.sort(function (a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    return a - b;
});

console.log(array);

// lesson 7 ~1:26:30