function extractSubArray(arr){
    let animal=arr.slice(3,7);
    return animal;
}
const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];
console.log(extractSubArray(animals));
