const palindromes = function (str) {

    let re = /[\W_]/g;
    str= str.toLowerCase().replace(re,'');

    let j= str.length -1;
    for(let i=0; i< j/2 ; i++){
        let x=str[i];
        let y=str[j-i];
        if(x!=y){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
