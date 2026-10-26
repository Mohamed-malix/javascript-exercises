const repeatString = function(str,num) {

    let totalStr="";

    if(num<0){
        return "ERROR"
    }
    else{
       for(i=0;i<num;i++){
         totalStr+=str;
       }
    }

    return totalStr;

};




// Do not edit below this line
module.exports = repeatString;
