
const totalIntegers = function (theObject) {
  let keys= theObject;

  if(typeof theObject !== "object" && !Array.isArray(theObject)){
    return undefined;
  }

  if (typeof theObject === "object" && theObject !==null) {
    keys = Object.values(theObject);
  }

  const result= keys.reduce((accum, value) => {
    return(Number.isInteger(value))? accum+1: accum+notGood(value);
  }, 0);

  return result;
};

function notGood(value) {
    if ((typeof value == "object" || Array.isArray(value)) && value !=null) {
      return totalIntegers(value);
    }else{
      return 0;
    }
}



  //  const totalIntegers =function (theObject) {
  //   if(Array.isArray(theObject)) {
  //    return theObject.reduce((sum, value) => {
  //       return(Number.isInteger(value))?sum+1:sum+notGood(value);
  //     },0);
  //   }else if(typeof theObject ==="object"){
  //     let sum=0;
  //     for(value in theObject){
  //       if(Number.isInteger(theObject[value])){
  //         sum+=1;
  //       }else{
  //         sum+=notGood(theObject[value]);
  //       }
  //     }
  //     return sum;
  //   }else{
  //     return undefined;
  //   }
  // }


// Do not edit below this line
module.exports = totalIntegers;
