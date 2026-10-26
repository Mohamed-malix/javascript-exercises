const convertToCelsius = function(num) {
   let fah;

   fah= (num-32)*5/9;

   fah=Math.round(fah*10)/10;


   return fah;
  };


const convertToFahrenheit = function(num) {
    let cel;

    cel =(num* (9/5) )+32;

    cel=Math.round(cel*10)/10;

    
   return cel;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
