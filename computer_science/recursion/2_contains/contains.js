

const contains = function (theObject, goFind) {
  for (let obj in theObject) {
    if (typeof theObject[obj] === "object") {
      if(contains(theObject[obj], goFind)){
        return true;
      }else{
        contains(theObject[obj], goFind);
      }
    }
    if ( theObject[obj]=== goFind || (Number.isNaN(theObject[obj])&& Number.isNaN(goFind))) {
      return true;
    }
  }
  return false;
};



module.exports = contains;
