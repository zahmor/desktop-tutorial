//Tzach Mordechai.  

const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4
    },
  ],
  cashRegister: 200
}

//return the candy element with the specified id
function getCandy(candyStore, id) {
  // for(let i=0; i < candyStore.candies.length; i++){
  //   if(candyStore.candies[i].id === id){      
  //     return candyStore.candies[i];
  //   }
  // }
  return candyStore.candies.find((element) => element.id == id);  
}

// console.log(getCandy(candyStore, '5hd7y'));



//return the price (number) of the candy with the specified id.
function getPrice(candyStore, id) {
  return getCandy(candyStore, id).price;
}

//  console.log(getPrice(candyStore, '5hd7y'));




//add a new candy to the candy list in candyStore with a default amount of 1. The function will not return anything.
function addCandy(candyStore, id, name, price) {
  const candy = getCandy(candyStore, id);
  if (candy) {
    candy.amount+=1;
  }
  else {
    const candyObj = {
      name,
      id,
      price,
      amount: 10,
    };
    candyStore.candies.push(candyObj);
  }
  return candyStore.candies;
}
  console.log(addCandy(candyStore, '5343', 'Bamba', 4.3));
// console.log(addCandy(candyStore, '5hd7y', 'replica', 4.3, 411));



//add the candy price to the cashRegister, and decrease the amount property of the relevant candy.   
function buy(candyStore, id) {
  //your code
  const candy = getCandy(candyStore, id);
  if (candy.amount > 0) {
    candy.amount--;
    candyStore.cashRegister += candy.price;
  }
  else {
    return 'no candies'
  }
}

buy(candyStore, '5343');


// for (i = 1; i < 51; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }
