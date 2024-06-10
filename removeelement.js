let arr=[8,9,2,4,5,6];
let index=3;

for (let i=index; i<arr.length; i++) {
    arr[i]=arr[i+1]
}
arr.length=arr.length-1
console.log(arr);
