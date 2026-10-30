
const permutations = function(arr) {
    let results=[];

    if(arr.length===0) return [[]];
    if(arr.length===1) return [arr];

    for(let i=0; i<arr.length; i++){
        let currentElment= arr[i];
        let remainingElements= arr.slice(0,i).concat(arr.slice(i+1));

        remainingOrder= permutations(remainingElements);
        remainingOrder.forEach((num) => {
            let result =[currentElment].concat(num);
            results.push(result);
        })
    }

    return results;
}
  
// Do not edit below this line
module.exports = permutations;
