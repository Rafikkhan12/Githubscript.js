///////////////////////////////////7 array k funcation
//   sort
// let a = ["rafik", "khan", "rustam", "akhtr"]
//1
// a.sort()             
// console.log(a);       //y element ko krmwise jmati h jese r se phle m aata h to use print krti h phle

//2
// a.reverse()          
// console.log(a);         //y element ko ulta chlati h

//3
// a.pop()             
// console.log(a);       //last wali element ko delet kr deti h

//4
// a.push("ieslam")    
// console.log(a);      ///y last m nyi element ko jod deti h

//5
// a.shift()
// console.log(a);          //y agle wale element ko delet kr deti h

//6
// a.unshift("niyaj")
// console.log(a);           //y waps element m new add kr deta h aage ki trf

//7
//  let b = a.concat("asalm","ashraf")
// console.log(b);                       //new element chipkane k kam m aata h

//8
// let b = a.join("+")
// console.log(b);                //y array ki jitni bhi alg alg staring h unko ek kr deta h

// let b=[3,4,5,6,7,8,9,10,23]
// console.log(b.slice(1,6))
// console.log(b.slice(3));
// console.log(b.slice(1,-3));
// console.log(b.slice(-5,-3));
// console.log(b.slice(-2,-5));
// console.log(b.slice(0,-5));

//1
// let c=[2,4,5,6,7,8,10,22,]
// c.splice(3,3)
// c.splice(1,3,5,8,7,66,2,)
// console.log(c)
// c.splice(66,55,77,88,99,22,44,55,)
// console.log(c);


//1
// let str = "my name is wecodee acadmy"
// let num = (str.split(" "))
// let finalans = num.reduce(test, 0)
// function test(total, value) {
//     if (value.length % 2 === 1) {
//         total = total + 1
//     }
//     return total
// }
// console.log(finalans);


//3
// let h=[1,2,4,5,7,6,9,]
// let g=(h.filter(test))
// function test(val){
//     return val%2===0
// }
// let ans2=g.every(sum)
// function sum(val){
//     return val>10
// }
// console.log(ans2);

//1
// let j = [1, 2, 3, 4, 5, 6]
// for (let l = j.length; l > 1; l--) {
//     console.log(l);
// }

//2
// let h=["RAFIK","KHAN","DESHWALI"]
// h.forEach(khan)
// function khan(value,index){
// console.log(index,value,);
// }

// //3
// let j=[1,3,4,5,6]
// let r=j.map(test)          //y ek nya array bnata hai
// function test(value,index){
// console.log(value,index);
// return value+index
// }
// console.log(r);


//4
// let l=[1,3,4,5,6]
// let g=l.reduce(check)
// function check(h1,h2){
// return h1+h2
// }
// console.log(g); 

// let o=[2,4,5,7]
// let p=o.reverse()
// console.log(p);


///////////////////////////////////////////
//1
// let a=["apple","bnana","orange"]
// let g=a.includes()
// if(a.includes("orange")){
// console.log("yes");
// }else{
// console.log("no");    
// }


// //2
// let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = numStr.reduce(test);
// function test(total, num) {
//     return total + (num % 2 === 0);
// }

// console.log(sum)

//3
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 3, 8];
// let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
// let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

// const unique = unique1.concat(unique2);

// console.log(unique);

//4
// let f=["my","name","is","rafik"]
// let a=f.reduce(khan)
// function khan(value,arr){
// return value+arr
// }
// console.log(a);

//5
// let arr = [1, 141, 23, 10, 9, 92];
// let num = 0;
// function largest(check) {
//     for (let i = 0; i < check.length; i++) {
//         if (check[i] >= num) {
//             num = check[i];
//         }
//     }
//     return num;
// }
// console.log(largest(arr));

//6
// let h=[2,3,4,5,6,7,8,9]
// let even=h.filter(check)
// function check(num){
// return num%2===0
// }
// console.log(even);

//10
// let h=[2,3,4,5,6,7,8]
// let j=h.reduce(test)
// function test(num,avrage){
// return num+(avrage%2===0)
// }
// console.log(j);

//11
// let s=[2,4,5,6,7,8,9]
// let newarr=s.filter(check)
// function check(num){
// return num>5
// }
// console.log(newarr);

//12
// let h=[2,4,5,6,7,8,9]
// let w=h.map(test)
// function test(value,index){
// return value+index
// }
// console.log(w);