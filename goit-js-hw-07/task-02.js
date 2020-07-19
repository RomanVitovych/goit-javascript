const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const ingredientsList = document.querySelector('#ingredients');
  console.log(ingredientsList);
  // const generateItems = function (array) {
  //     for(let element of array) {
  //       const ingredientsItem = document.createElement('li');
  //       // console.log(ingredientsItem);
  //         ingredientsItem.textContent = element;
  //       //   console.log(ingredientsItem.textContent);
  //       ingredientsList.appendChild(ingredientsItem);
  //     } 
  // }
  const generateItems = (array) => {
    array.map(element => {
      const ingredientsItem = document.createElement('li');
      ingredientsItem.textContent = element;
      ingredientsList.appendChild(ingredientsItem);
    });
  }

  generateItems(ingredients);