


// class User {
//     constructor(name){
//       this.name = name;
//     }
//     sayHi(){
//       console.log(`Hello :  ${this.name}`);
//     }
//   }

//   let user = new User('John')

//   user.sayHi()

////////////////////////

// class User {
//     constructor(name){
//         this.name = name
//     }
//     sayHi(){
//         console.log(`Hello ${this.name}`)
//     }
// }


// let user1= new User('Best1')
// let user2= new User('Best2')
// let user3= new User('Best3')


// user1.sayHi()
// user2.sayHi()
// user3.sayHi()


// console.log(user1)

//////////////////////////

// class User {
//     login(){
//         console.log('user login');
//     }
// }


// let user1 = new User()

// user1.login()
// // console.log(user1);


//  class Admin extends User {
//     updatePrice(){
//         console.log('admin update price');

//     }
//  }

// const admin = new Admin()
// admin.login()
// admin.updatePrice()

/////////////////////////

// class User {
//     login(){
//         console.log('user login');
//     }
// }


// let user1 = new User()

// user1.login()


//  class Admin extends User {
//     constructor(){
//         super();
//     }
//     updatePrice(){
//                 console.log('admin update price');

//             }
//     login(){
//         console.log('admin login....');

//     }
//  }

// const admin = new Admin()
// admin.login()
// admin.updatePrice()


///////////////////////////////////

//// Lab 1


// class Calculator {
//     constructor(init = 0){
//         this.value = init
//     }
//     add(num){
//         this.value += num
//         return this.value
//     }
//     subtract(num){
//         this.value -= num
//         return this.value
//     }
//     multiply(num){
//         this.value *=num
//         return this.value
//     }
//     divide(num){
//         this.value %=num
//         return this.value
//     }

// show(){
//     console.log(`Value = ${this.value}`);
// }
// }



// let result = new Calculator(7)
// result.show()
// console.log(result.multiply(20));
// console.log(result.divide(20));
// console.log(result.subtract(20));

//// Lab 2

// class Sale {
//     constructor(name,amount,price){
//         this.name = name
//         this.amount = amount
//         this.price = price
//     }
//     calcPrice(){
//         return this.amount*this.price
//     }
// }

// class Beverage extends Sale  {
//     constructor(names,amount,price){
//         super();
//         // this.name = name
//         this.amount = amount
//         this.price = price
//     }
// }

// let beverage = new Beverage('Pepsi',3,19);

// console.log(beverage.calcPrice());


//////////////////////////////////////

// let arr = [1,2,3,4]
// let obj = {
//     name: 'John'
// }

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));


/////////  array check

////// Lab 1

// let arr = [1,2,3,4]
// let obj = {
//     name: 'John'
// }

// let checkArr = (arr) => Array.isArray(arr)

// console.log(checkArr(arr))



//////////// Object.keys

// let user = {
//     name: 'John',
//     age: 27
//   };
//   console.log(Object.keys(user)); 
//   console.log(Object.values(user)); 
//   console.log(Object.entries(user));


// let user = { name: 'John', age: 27 };
// for (let key of Object.keys(user)) {
//     console.log(key); // name then age
// }
// for (let value of Object.values(user)) {
//     console.log(value); // John then 27
// }
// for (let pair of Object.entries(user)) {
//     console.log(pair); // ['name', 'John'] then ['age', 27]
// }


//// Lab 1

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

//   for (let key of Object.keys(salaries)){
//     console.log(key)
//   }

//   for (let key of Object.values(salaries)){
//     console.log(key)
//   }

//   let values = Object.values(salaries)

//   let result = values.reduce((prev,curr) =>{
//     return prev += curr
//   })

//   console.log(result);


//// Lab 2


// let checkEmptyObj=(obj)=> {if(Object.values(obj)==0 ){
//     return true
// }else{
//     return false
// }
// } 


/////// Rest parameters


// let func = (...rest)=>{
//     console.log(rest[0])
//     console.log(rest[1])
//     console.log(rest[2])
//     console.log(rest[3])
//     }



// func(1,'Hello','Codecamp',4,5,6,7,8,9)


// function sum(...args) { 
//     let result = 0;
//     for (let arg of args) result += arg;
//     return result;
//   }
//   console.log(sum(1)); 
//   console.log(sum(1, 2)); 
//   console.log(sum(1, 2, 3)); 



// function showName(firstName, lastName, ...titles) {
//     console.log(firstName + ' ' + lastName); // Julius Caesar
//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     console.log(titles[0]); // Consul
//     console.log(titles[1]); // Imperator
//     console.log(titles.length); // 2
//   }
//   showName('Julius', 'Caesar', 'Consul', 'Imperator');



/////////// Spread Syntax

// let arr = [3,5,1]

// console.log(Math.max(arr)); //// NaN

// console.log(Math.max(...arr));


// let str = 'Hello'

// console.log([...str])
// console.log(...str)



// let arr = [1,2,3]

// let arrCopy = [...arr]

// console.log(arr === arrCopy) //// False 



// let obj = {a:1,b:2,c:3}

// let objCopy = {...obj}

// console.log(obj === objCopy); //// False

//// Lab 1


// function sumAll(...arr){
//     let result = 1;
//     for (let arr1 of arr) result *= arr1;
//     return result 
// }

// console.log(sumAll(1,2,3,4,5,6))  //// 720


//// Lab 2

// function filterOutOdds(...nums){
//     let odd = nums.filter((item) =>{
//         return item %2 == 0
//     })
//     return odd
// }

// let result = filterOutOdds(1,2,3,4,5,6,7,8,9,10)
// console.log(result)


//// Lab 3



// function mergeObjects(...obj){
//     let empty = {}
//     for (let i = 0; i < obj.length; i++ ){
//         Object.assign(empty, obj[i])
//     }
//     return empty
// }

// let obj1 = {
//     fname: 'Pisek',
//     lname: 'Kidsavanon'
// }

// let obj2 = {
//     nickname: 'Best'
// }

// let fullName = mergeObjects(obj1,obj2)
// console.log(fullName)


//// Lab 4 Rest and Spread

// const num1 = [1, -2, 3, 4]
// const num2 = [8, 3, -8, 1]

// let num3 = [5, ...num1, -6, -1, ...num2]


// let result = num3.reduce((prev, curr) => {
//     return prev += curr
// }, 0)


// console.log(result)


//// Lab 5

// const num1 = [1,2,3,4,5,6,7]

// let num = (([...arr1]) =>{
//     let arr = arr1
//     arr[3] = arr[3]*arr[3]
//     return arr
// })

// console.log(num(num1))



//// Lab 6

/// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, 
// นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter


// function identify(fname,lname,...hobby){
//     // console.log(`Firstname: ${fname}, Lastname: ${lname}, Hobby: ${hobby}`)
//     return [fname,lname,...hobby,hobby.length]
// }

// let result = identify('Pisek','Kidsavanon','Play Game','Sleeping')
// console.log(result);


//// Lab 7

// let a = [1,2,3]


// function doubleAndReturnArgs(a,...num){
//     console.log(a)
//     console.log(num)
//     let doubleAndReturnArgs = num.map((item) => item*2)
//     return a.concat([...doubleAndReturnArgs])

// }

// let result = doubleAndReturnArgs([1,2,3],4,4)
// console.log(result);


//// Lab 9


// let arr = [1,2,3,4]

// function cloneArray(...arr){
//     let arrCopy = [...arr]
//     return arrCopy
// }

// let result = cloneArray(arr)
// console.log(result)



//// Lab 10

// let obj = {a:1,b:2,c:3}
// function cloneObject(...obj){
//     let objCopy = {...obj}
//     return objCopy
// }

// let result = cloneObject(obj)
// console.log(result); 



//// Lab 11

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * Maya
// console.log(second); // ** Marisa
// console.log(third); // *** Chi


//// Lab 12

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//     'Raindrops on roses',
//     'whiskers on kittens',
//     'Bright copper kettles',
//     'warm woolen mittens',
//   ];
//   console.log(raindrops); // * Raindrops on roses
//   console.log(whiskers); // ** whiskers on kittens
//   console.log(aFewOfMyFavoriteThings); // *** Bright copper kettles , warm woolen mittens

  


//// Lab 13

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * 30,20


//// Lab 14

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8 
// console.log(yearNeptuneDiscovered); // ** 1846


//// Lab 15

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
//   let { numPlanets, ...discoveryYears } = planetFacts;
//   console.log(discoveryYears); // * 1846,1659


//// Lab 16

// function getUserData({ firstName, favoriteColor = 'green' }) {
//     return `Your name is ${firstName} and you like ${favoriteColor}`;
//   }
//   getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // * Your name is Alejandro and you like purple
//   getUserData({ firstName: 'Melissa' }); // ** Your name is Melissa and you like green
//   getUserData({}); // *** Your name is undefined and you like green


//// Lab 17

// let guest = 'Jane';
// let admin = 'Pete';

// let [name1,name2]=[guest,admin]
// guest = name2
// admin = name1

// console.log(guest); 
// console.log(admin); 


//// Lab 18

// let user = {firstName:'Pisek',lastName:'Kidsavanon',age:28}

// let {firstName,lastName,age}= user
// function checkAge(firstName,lastName,age){
//     if (age >18){
//         return console.log(`Hello: ${firstName} ${lastName}`)
//     } else {
//         return console.log(`You are not allowed`)
//     }
// }


// let result = checkAge(firstName,lastName,age)


//// Lab 19

// let user = {
//     name: 'John',
//     years: 27
//   };


// let {name , years: age , isAdmin = false } = user  


// console.log(` Name: ${name} Age: ${age} isAdmin ${isAdmin}`)



//// Lab 21

// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a, [b, [[[c, d], e], f]]] = arr


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


//// Lab 22

// const obj = { prop: 5, prop2: 10 };

// let {prop: a, prop2: b}=obj

// console.log(a)
// console.log(b)


//// Lab 23

// let a, b;
// let { a, b } = {a: 1, b: 2};

// console.log(a);
// console.log(b);


//// Lab 24

// const [, , , a, b] = [1, 2, 3];

// ////// undefined



//// Lab 25

// const q = { prop: 5, prop2: [10, 100] };

// let {prop: x , prop2: [, y] } = q 

// console.log(x)
// console.log(y)


//// Lab 26

// const q = {
//     prop: 'Hello',
//     prop2: {
//       prop2: {
//         nested: ['a', 'b', 'c']
//       }
//     }
//   };


//   let {prop: x,
//     prop2: {
//       prop2: {
//         nested: [, y, ]
//       }
//     }} = q


// console.log(x);
// console.log(y);


//// Lab 27


//ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)
//ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา


// const names = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jack', lastName: 'Dann' },
//     { firstName: 'Joe', lastName: 'Dunne' }
//   ];

// for (let i of names){
//     const {firstName,lastName}=i
//     console.log(firstName,lastName);
    
// }





//// Lab 28


//ให้ใช้ for … of กับ users (ให้ destructuring object ในแต่ละ iteration)
//ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//     { user: "Name1" },
//     { user: "Name2", age: 2 },
//     { user: "Name2" },
//     { user: "Name3", age: 4 }
//   ];

// for (let i of users){
//     const {user,age='unknown'}=i
//     console.log(user+' '+age);
    
// }













////////// Array destructuring

// let arr = ['John','Doe']

// let[firstName, surname] = arr;

// console.log(firstName);
// console.log(surname);

// arr =['John', 'Doe', 27, 'Male', 'Thailand'];

// let [firstName, , age, , country] = arr 
// console.log(firstName); 
// console.log(age); 
// console.log(country); 


// let arr = ['John','Erik','Michael','Joshua']

// let [name1,name2,...rest] = arr

// console.log(rest[0]);  /// Michael
// console.log(rest[1]);  /// Joshua
// console.log(rest.length);  /// 2


// let [name = ' Guest' , surname = ' Anonymous'] = ['John']

// console.log(name);
// console.log(surname);



// let user = {
//     username: 'john',
//     email: 'john@gmail.com',
//     password: '123456'
//   };
//   let { username, email, password } = user;
//   console.log(username); /// john
//   console.log(email);    /// john@gmail.com
//   console.log(password); /// 123456




// let user = {
//     username: 'john',
//     email: 'john@gmail.com',
//     password: '123456'
//   };
//   let { username: u, email: e, password: p } = user;
//   console.log(u); /// john
//   console.log(e); /// john@gmail.com
//   console.log(p); /// 123456


// let user = {
//     username: 'john',
//     password: '123456'
//   };
//   let { username, email = 'guest@gmail.com', password } = user;
//   console.log(username); // john
//   console.log(email); // guest@gmail.com
//   console.log(password); // 123456


// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ['Cake', 'Donut'],
//     extra: true
//   };

//   let {
//     size: {
//       width, // 100
//       height // 200
//     },
//     items: [item1, item2], // Cake then Donut
//     extra // true
//   } = options;


// function showName(user) {
//     console.log(`${user.firstName} ${user.lastName}`);
//   }
//   showName({ firstName: 'John', lastName: 'Doe' }); // John Doe


// function showName({ firstName, lastName }) {
//     console.log(`${firstName} ${lastName}`);
//   }
//   showName({ firstName: 'John', lastName: 'Doe' }); // John Doe


// let showName = ({firstName: f , lastName: l }) => {
//     console.log(f);
//     console.log(l);
    
// }

// let obj = {
//     firstName: 'Pisek',
//     lastName: 'Kidsavanon'
// }

// showName(obj)



// import  helloJS  from "./module2.js"
// import { sayGoodbye as g,hi } from "./module1.js";
// hi()
// g()


// helloJS()