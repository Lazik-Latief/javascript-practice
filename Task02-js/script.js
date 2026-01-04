let oj1 = {
  name: "Lazik",
  age: 22,
  address: {
    city: "srinagar",
    village: "watlab",
  },
  Number: 9797685148,
  working: true,
};

console.log(oj1);
oj1.address.village = "nowpore"
console.log(oj1);

oj2 ={
  name: "lone",
  age : 24,
  job: false,

}
console.log(oj2);

oj3 = {oj1, oj2}

console.log(oj3);
oj4 ={...oj1, ...oj2}
console.log(oj4);


console.log(oj1["age"]);
const mySym = Symbol("key1")

let jsUser = {
  mySym : "myKey1"

}
console.log(jsUser);
console.log(typeof mySym);

let  oj7 = Object.assign(oj1, oj2, jsUser)
console.log(oj7);

function hey(){
  console.log("hello ");
  
} 
hey()
console.log(oj1, hey());
let kkk = "azhar lone"
console.log(`hello js user , ${hey}`);
console.log(`hiii , ${kkk}`);

function g(){
  "hii jnnii "
}

console.log(`g(),${kkk}`);

let newObj = {
  name: "azhar lone",
  age: 23,
  study: true,
  job: false,
  address:{
    villege:  "Watlab",
    City: "Srinagar"
  },
  number: 7889943194,
  learningReact: true,

}
console.log(newObj);

newObj.number =9797685148;
console.log(newObj);

Object.freeze(newObj);
newObj.number = 7889943194;

console.log(newObj);










