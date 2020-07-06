const countTotalSalary = function (employees) {
    let totalSealary = 0;
    const values = Object.values(employees);

    for (const value of values) {
        totalSealary += value;
    }
    return totalSealary;
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400