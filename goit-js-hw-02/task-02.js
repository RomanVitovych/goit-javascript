
const calculateEngravingPrice = function (message, pricePerWord) {
    let str = message.split(' ');
    let len = str.length;
    let totalPrice = len*pricePerWord;
    
    return(totalPrice);
  };



  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); // 80
  
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); // 160
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); // 240
  
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  ); // 120