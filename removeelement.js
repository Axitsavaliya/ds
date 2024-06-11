let arr=[2,5,7,1,8,9];
let index=2 ;

for (let i=index; i<arr.length; i++) {
    arr[i]=arr[i+1]
}
console.log(arr);
