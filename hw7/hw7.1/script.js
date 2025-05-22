const sum =(function (){
    let innerSum = 0;

    return function (num){
        innerSum += num;
        return innerSum;
    }
})();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));