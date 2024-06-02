const numbers = [1, 2, 3, 4, 5];

function calculateSum(numbers){
let sum=0;
numbers.forEach(
    function(number)
    {
        sum+=number;
    });
    return sum;
}
console.log(calculateSum(numbers));