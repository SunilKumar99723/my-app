/*
var arrayList = [1 , 2, 3, 4, 5];
output = [1,2,3,4,5,1,2,3,4,5]

*/
var arrayList = [1 , 2, 3, 4, 5];
const mergeArrayList = myFunction();
numbersCopy = [];
function myFunction(){
for (i = 0; i < numbers.length; i++) {
    numbersCopy[i] = numbers[i];
  }
  const arr3 = arrayList.concat(numbersCopy);
  console.log(arr3);
}