
/**
write a method isDual to be used with all Array objects. An array is said to be dual if it has an even
number of elements and each pair of consecutive elements sum to the same value. return 1 if the array is dual, otherwise return 0
**/
Array.prototype.isDual=function(){

  const arr=this;

  if(arr.length%2==1)
    return 0;

   if(arr.length==0)
      return 1;

    const sum=arr[0]+arr[1];

    for (var i = 2; i < arr.length-1; i+=2) {
      if(arr[i]+arr[i+1]!=sum)
        return 0;
    }
    return 1;

}

console.log([1,2,3,0].isDual());
console.log([1,2,2,1,3,0].isDual());
console.log([1,1,2,2].isDual());
console.log([1,2,3].isDual());
console.log([].isDual());
