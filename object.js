/////////////////////////////////   object
//1
// let obj = {
//     name: "rafik",
//     mobile: 9549034809,
//     isfinite: "true",
//     test: "undefined", 
//     }
//     console.log(obj);

//2
// let obj={
// name:"rafik",
// aderess:"jaipur",
// mobile:"9549034809",
// }
// console.log(obj);


//2
// let p = {
//     name: "rafik",
//     address: "jaipur",
//     mobile: 9549034809,
// }
// let key = "address";
// console.log(p["name"]);
// console.log(p["mobile"]);
// console.log(p[key]);


//2
// let obj = {
//     name: "rafik",
//     address: "jaipur",
//     mobile: 9549034809,

//     mor: {
//         rafik: "khan",
//         gaaw: "peeh",
//     },

//     khan: {
//         name: "ajit",
//         address: "bherunda"
//     },

//     sum: function (a, b) {
//         console.log(a + b);
//     }
// }
// console.log(obj);
// obj.sum(10, 20)
// console.log(obj.mor["rafik"]);
// console.log(obj.khan["name"]);


////////////object exrcise
//1
//An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

//2
//Differences between Dot Notation and Bracket Notation Property Accessor. Dot Notation only allows static keys while Bracket Notation accepts dynamic keys. Static key here means that the key is typed directly, while Dynamic key here means that the key is evaluated from an expression.

//7
// let obj={
//  name:"rafik",
//  address:"jaipur" ,
//  gaw:"peeh",
//  mobile:9549034809  
// }
// let keys=Object.keys(obj)
// keys.sort()
// console.log(keys);

//6
// let obj={
//     name:"rafik",
//     lastname:"khan"
// }
// console.log(obj.name.concat(obj.lastname));

//5
// let obj={
//  name:"rafik",
//  lastname:"khan" ,
//  address:"jaipur"
// }
// console.log(Object.entries(obj));

//10
// let array = [10,2,44,15,61];
// function maxnum(array) {
//     return Math.max.apply(Math, array);
//   }
//   console.log(maxnum(array))

// //1
// let obj = {
//     name:"rafik",
//     address:"jaipur",
//     gaw:"peeh",
//     khan:function(){
// console.log(this.address,this.gaw,this.name);
//     }
// }
// obj.khan()

//2
// let obj={
// name:"rafik",
// address:"jaipur",
// gaw:"peeh",
// mobile:9549034809,
// khan:function(){
//     console.log(this.name,this.address,this.gaw,this.mobile);
// }
// }
// obj.khan()

// //2
// let obj1={
//     name:"rafik",
//     course:"jawascript",
//     fees:3000,
    
// };

// let obj2={
//     name:"rafik",
//     course:"jawascript",
//     fees:3000,
// };
// let printdetails=function(year,month,day){
 
//     console.log(`${this.name} ${year}/${month}/${day} `);
// }
// printdetails.bind(obj1)("2000","04","2")
// // printdetails.call(obj2)

