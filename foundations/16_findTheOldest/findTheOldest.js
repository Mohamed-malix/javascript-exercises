
const findTheOldest = function(array) {


 const old =array.reduce((oldest,current) =>{

    const getAge =function(birth,death){
        if(!death ){
        death = new Date().getFullYear() ;
        }
     return death - birth;
     }

     let oldAge = getAge(oldest.yearOfBirth , oldest.yearOfDeath);

     let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    return oldAge < currentAge ? current : oldest;
  });


  return old;
};


// Do not edit below this lin
module.exports = findTheOldest;
