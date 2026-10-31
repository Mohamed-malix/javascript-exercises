
// const pascal = function(n) {
//     let result =[];

//     if(n===1) return [1];

//     preArr=pascal(n-1);
//     for(let i=0; i<n; i++){
//         if(i==0){
//             result[i]= preArr[i];
//         }else if(i==n-1){
//             result[i]= preArr[i-1];
//         }else{
//             result[i]=preArr[i-1]+preArr[i];
//         }
//     }

//     return result;
// };


const pascal = function(n) {
    let result=[1];
    if(n==1) return result;

    const prevLine= pascal(n-1);
    prevLine.forEach((num, i) => {
        let Neighbar= prevLine[i+1] ??0;
        result.push(Neighbar +num);
    })

    return result;
}
  
// Do not edit below this lin
module.exports = pascal;
