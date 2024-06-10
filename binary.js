let arr=[1,2,3,4,5,6,7];
function binary(arr,first,last,midal) {
    let element=1;
    if (last<first) {
        return false;
    }
    if (arr[midal]==element) {
        return true
    }
    if (arr[midal]>=element) {
       return binary( arr,first,last,midal-1)
    }
   if (arr[midal]<element) {
    return binary( arr,first, last, midal+1);
   }
   return false;
}

let first=0;
let last=arr.length-1
let midal= (first+last)/2;
 let result=binary(arr,first,last,midal);
 console.log(result);