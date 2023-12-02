const input = [2,7,11,4,-2];
const outcome = [20,15,11,18,24];
const output = [];

for (let i = 0 ; i < 5; i++) {
    let preSum = 0;
    let postSum = 0;
    let sum = 0;
    for(let j = 0 ; j<i ; j++){
        preSum = preSum + input[j];
    }
    for(let k = i+1 ; k<5;k++){
        postSum = postSum +input[k];
    }
    sum = preSum+postSum
    output.push(sum)
}
for (let index = 0; index < output.length; index++) {
    console.log(output[index] + " ")   
}