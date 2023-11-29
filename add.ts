
type FruitType = {
  name: string;
  color: string;
  weight: number;
  vitamins: string;
  calories: number;
};

let fruits: Array<FruitType> = [
  { name: "Apple", color: "Red", weight: 150, vitamins: "Vitamin C", calories: 95 },
  { name: "Banana", color: "Yellow", weight: 120, vitamins: "Vitamin B6", calories: 105 },
  { name: "Orange", color: "Orange", weight: 180, vitamins: "Vitamin C", calories: 62 },
  { name: "Grapes", color: "Purple", weight: 200, vitamins: "Vitamin K", calories: 114 },
  { name: "Kiwi", color: "Brown", weight: 100, vitamins: "Vitamin K", calories: 61 },
  { name: "Strawberry", color: "Red", weight: 12, vitamins: "Vitamin C", calories: 4 },
  { name: "Pineapple", color: "Yellow", weight: 500, vitamins: "Vitamin C", calories: 452 },
  { name: "Mango", color: "Orange", weight: 300, vitamins: "Vitamin A", calories: 202 },
  { name: "Watermelon", color: "Green", weight: 800, vitamins: "Vitamin A", calories: 320 },
  { name: "Peach", color: "Orange", weight: 130, vitamins: "Vitamin C", calories: 59 },
];
  // 1
  fruits.push({
    name: "New Fruit",
    color: "Green",
    weight: 200,
    vitamins: "Vitamin D",
    calories: 150,
  });
console.log(fruits[10]);

  // 2
  const newArr = fruits.filter(function (frut) {
    return frut.weight % 2 === 0;
  });
  console.log(newArr);
  // 3
  const newArr1 = fruits.map(function (frut) {
    return frut.calories * 10;
  });
  console.log("calories " + newArr1.reduce(function (summ, num) {
    return summ + num;
  }));
  


type object0 = {
  key1:string; 
  key2:number;
  key3:boolean;
  key4: any[];
  key5:{
    nestedKey1: string;
    nestedKey2: string;
  }
 }

type MainObjectType = {
  [key: string]: object0;
};

  let mainObject: MainObjectType = {
    object1:  {
      key1: "значение1",
      key2: 42,
      key3: true,
      key4: ["элемент1", "элемент2", "элемент3"],
      key5: {
        nestedKey1: "вложенное значение1",
        nestedKey2: "вложенное значение2"
      }
    },
    object2: {
      key1: "значение1",
      key2: 123,
      key3: false,
      key4: ["item1", "item2", "item3"],
      key5: {
        nestedKey1: "вложенное значение1",
        nestedKey2: "вложенное значение2"
      }
    },
    object3: {
      key1: "value1",
      key2: 7,
      key3: true,
      key4: ["item1", "item2", "item3"],
      key5: {
        nestedKey1: "вложенное значение1",
        nestedKey2: "вложенное значение2"
      }
    },
    object4: {
      key1: "значение1",
      key2: 42,
      key3: false,
      key4: ["элемент1", "элемент2", "элемент3"],
      key5: {
        nestedKey1: "вложенное значение1",
        nestedKey2: "вложенное значение2"
      }
    },
    object5: {
      key1: "value1",
      key2: 7,
      key3: true,
      key4: ["item1", "item2", "item3"],
      key5: {
        nestedKey1: "вложенное значение1",
        nestedKey2: "вложенное значение2"
      }
    }
  };
  



  let keys = Object.keys(mainObject.object1);
  console.log(keys);
  

  let values = Object.values(mainObject.object2);
console.log(values);


let entries = Object.entries(mainObject.object3);
console.log(entries);