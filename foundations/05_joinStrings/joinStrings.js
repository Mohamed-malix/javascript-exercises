
// Add your code right below, good luck!

let firstName="Carlos"
,lastName="Stevenson"
,birthYear=1947
,thisYear=1965;

let fullName= firstName+" "+lastName
,age=thisYear-birthYear;

let greeting="Hello my name is"+fullName+"and I am "+age+"this year , my birthYear is "+birthYear+"";



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
