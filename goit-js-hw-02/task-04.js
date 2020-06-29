
const formatString = function (string) {
    let str = string.length;
    
    for (let i = 0; i < str; i += 1) {
        if  ( str > 40) {
            string = string.slice(0, 40) + '...';   
        }

        return string
    }

    // АЛЬТЕРНАТИВА
    // if (str < 40) {
    //     return string;
    
    // } else  
    //     return string.slice(0, 40) + '...';
    
  };
  


  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // повернеться оригінальний рядок
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // повернеться форматований рядок
  
  console.log(formatString('Curabitur ligula sapien.'));
  // повернеться оригінальний рядок
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // повернеться форматований рядок