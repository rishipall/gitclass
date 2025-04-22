// 1 mejority Elements 

let arr = [2,2,1,1,1,2,1]
let max = 0;
for(let i = 0;i<arr.length;i++){
    let count = 0;
    for(let j = 0;j<arr.length;j++){
       if(arr[i] === arr[j]){
        count++;
       }
    }
    if(count>Math.floor(arr.length/2)){
        max = arr[i]
    }
}
console.log(max);



