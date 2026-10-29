
// const totalIntegers = function(theObject) {
//     let intNumber=0;
//     if(typeof theObject==="object"){
//         const values= Object.keys(theObject);
//         values.forEach((value) => {
//             if(Number.isInteger(theObject[value])){
//               return ++intNumber;
//             }else if(typeof theObject[value]!=="string" && theObject[value]!==null){
//               return totalIntegers(theObject[value]);
//             }
//         })
//     }

// if(Array.isArray(theObject)){
//     theObject.forEach((value) => {
//         if(Number.isInteger(value)){
//           return ++intNumber;
//         }else if(typeof value!=="string" && value!==null) {
//            return totalIntegers(value);
//         }
//     })
// }
//     return intNumber;
// };



// const totalIntegers = function (theObject) {
//   let values= theObject;
//   if (typeof theObject === "object") {
//     values = Object.keys(theObject);
//   }

//   const result= values.reduce((accum, value) => {
//     if (Number.isInteger(value)) {
//       return ++accum;
//     } else if (typeof value !== "string" && value != null) {
//       return totalIntegers(value) + accum;
//     }
//   }, 0);

//   return result;
// };


  const totalIntegers = function (theObject) {
    if(Array.isArray(theObject)) {
     return theObject.reduce((sum, value) => {
        return(Number.isInteger(value))?++sum:sum+notGood(value);
      },0);
    }else{
      let sum=0;
      for(value in theObject){
        if(Number.isInteger(theObject[value])){
         return ++sum;
        }else{
         return notGood(theObject[value])+sum;
        }
      }

      return sum;
    }
  }

  function notGood(value) {
    if (typeof value !== "string" && value != null) {
      return totalIntegers(value);
    }else{
      return 0;
    }
  }

// Do not edit below this line
module.exports = totalIntegers;
