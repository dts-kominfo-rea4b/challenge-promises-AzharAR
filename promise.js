const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = function(parameter){  
  return Promise.all ([
    promiseTheaterIXX(), 
    promiseTheaterVGC()
    
  ]).then(function(data){
    //console.log(data[0])
    jumlahTotal = 0
    data[0].forEach(element => {
      if (element.hasil == parameter) jumlahTotal++
    });
    
    data[1].forEach(element => {
      if (element.hasil == parameter) jumlahTotal++
    });
    //console.log(jumlahTotal)
    return jumlahTotal
    
  })

  
};

module.exports = {
  promiseOutput,
};

