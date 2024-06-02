const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
 function rearrangeArray(arr){
    const removeElements=arr.splice(0,3);

    arr.push(...removeElements);
    return arr;
 }
 console.log(rearrangeArray(numbers))