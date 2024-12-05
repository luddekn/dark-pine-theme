const fruits = {"Apple": 20, "Banana": 15, "Orange": 25};

const priceList = (obj) => {
   for(let [key, value] of Object.entries(obj)){
      console.log(`Fruit: ${key} Price: ${value}`);
   }
}

priceList(fruits);
