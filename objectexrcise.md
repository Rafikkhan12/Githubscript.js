##Q.1
An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

##Q.2
Differences between Dot Notation and Bracket Notation Property Accessor. Dot Notation only allows static keys while Bracket Notation accepts dynamic keys. Static key here means that the key is typed directly, while Dynamic key here means that the key is evaluated from an expression.

##Q.7
 let obj={
  name:"rafik",
  address:"jaipur" ,
  gaw:"peeh",
  mobile:9549034809  
 }
 let keys=Object.keys(obj)
 keys.sort()
 console.log(keys);

##Q.6
 let obj={
     name:"rafik",
     lastname:"khan"
 }
 console.log(obj.name.concat(obj.lastname));

##Q.5
 let obj={
  name:"rafik",
  lastname:"khan" ,
  address:"jaipur"
 }
 console.log(Object.entries(obj));

##Q.10
let array = [1,2,3,4,5,6];
function maxnum(array) {
    return Math.max.apply(Math, array);
  }
  console.log(maxnum(array));