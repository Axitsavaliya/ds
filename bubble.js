let arr = [5,4,6,2,1];

for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length; j++) {
    if (arr[j]>arr[j+1]) {
        temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
    }
   }
}
console.log(arr);