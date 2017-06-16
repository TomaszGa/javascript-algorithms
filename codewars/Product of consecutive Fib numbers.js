/*

    https://www.codewars.com/kata/product-of-consecutive-fib-numbers
    Algorithm checks if provided number is product of two fibonacci numbers.

    My algorithm is fast and performant but could be improved:
    -keeping all numbers in array is unnecessary, 
    -algorithm peforms one loop more than necessary before returning false
*/



//adds next Fibonacci number to passed array
function fib(arr){
  arr.push((arr[arr.length-2] + arr[arr.length-1]));
}

function productFib(prod){
  let fibNumbers = [1, 1];
  let result = 0;
  
  //loop while result is smaller than provided number
  do{
    result = fibNumbers[fibNumbers.length-2] * fibNumbers[fibNumbers.length-1];
    
    //return found numbers and true if numbers match
    if (result === prod) {return [fibNumbers[fibNumbers.length-2], fibNumbers[fibNumbers.length-1], true]}
    fib(fibNumbers);
  } while(result < prod);
  
  //if result is higher than provided number, return found numbers and false
  return [fibNumbers[fibNumbers.length-3], fibNumbers[fibNumbers.length-2], false];
}