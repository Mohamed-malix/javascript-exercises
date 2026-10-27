
const contains = function(theObject, goFind) {
    if(typeof theObject ==="object"){
        for(let obj in theObject){
            if(typeof obj === "object"){
               return contains(obj, goFind);
            }
            else if(theObject.obj===goFind) return true;
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
