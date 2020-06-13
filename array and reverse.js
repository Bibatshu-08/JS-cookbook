Arrays have a method reverse , which changes the array by inverting the order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array as an argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace , does what the reverse method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.


var map= []; //creating an object

function range(num1, num2, index){
  var start=num1;
  var initializer=0;
  
  if(index==undefined){
    index=1;
  }
  if(index>0){
    while(start<=num2){
      map[initializer]= start;
      start=start+index;
      initializer++;
    }
  }
  else{
    while(start>=num2){
      map[initializer]= start;
      start=start+index;
      initializer++;
    }
  }
  
  return map;
}

function reverseArrayInPlace(array){
  var total=array.length; //find the no of array elements
  var reversedArray=[];
  var initializer=0;
  while(total>=0){ //count it back to 0
    reversedArray[total]=array[initializer]; //make a new container which will hold the arrays in backward direction
    total=total-1;
    initializer++;
  }
  return reversedArray;
}

function reverseArray(array){
  var total=array.length;
  var reversedArray=[];
  var initializer=0;
  while(total>=0){
    reversedArray[total]=array[initializer];
    total=total-1;
    initializer++;
  }
  return reversedArray;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(range(1,10,1)));
