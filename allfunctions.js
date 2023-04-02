// //1
// function oddeven(num){
// if(num%2===0){
// return "odd"
// }else{
//  return "odd"   
// }
// }
// let ans=oddeven(10)
// console.log(ans);

// //2
// const oddevene=function(num){
// if(num%2===0){
// return "even"
// }else{
//  return "odd"   
// }
// }
// let ans1=oddeven(11)
// console.log(ans1);

// //3
// const oddevenes=(num)=>{
// if(num%2===0){
// return "odd"
// }  else{
//  return "even"   
// } 
// }
// let ans2=oddeven(16)
// console.log(ans2);

// //4
// const add=function(a,b){
//  return a*b   
// }

// const sum=(a,b)=>{
// return a*b
// }

// const plus=(a,b)=>a*b
// console.log(add(5,5));
// console.log(sum(5,5));
// console.log(plus(5,5));

//5
// let arr=[1,2,3,4,5,6]
// let h=arr.map(num=>num*2)
// console.log(h);

// //6
// let arry=[2,3,4,5,6,7]
// console.log(arry.filter((num)=>num%2===1).map((num)=>num+1));

// //7
// let l=[1,2,3,4,5,6]
// console.log(l.filter((num)=>num%2===1).map((num)=>num+1).reduce((total,currant)=>total+currant));

// //8
// let s=[1,3,7,9,5]
// let len=0
// let ans=s.every((num)=>num%2===1);
// if(ans){
// len=s.filter((num)=>num>5).length
// }
// console.log(len);

// //9
// let oddeven=(a=2)=>{
//  if(a%2===1){
// console.log("even");
//  } else{
//     console.log("odd");
//  }  
// }
// one()

// //10
// function one(a=10,b=20,c=30){
// if(a>b && a>c){
// console.log("a big number");
// }else if(b>a&&b>c){
// console.log("b");
// }else if(c>a&&c>b){
// console.log("c");
// } 
// }

// //11
// function printarr(){
// for(let value of arguments){
// console.log(value);
// }    
// }
// printarr(0,7);
// printarr(1,2);
// printarr(4)

//1
// function test() {
//     return function (a) {
//         if (a % 2 === 0) {
//             console.log("odd");
//         } else {
//             console.log("even");
//         }
//     }
// }
// let ans = test()
// console.log(ans(11))
// test()(12)

// //2
// function oddeven(num){
// if(num%2===0){
// return function(){
//     console.log("even");
// }
// }else{
//     return function(){
//         console.log("odd");
//     }
// }  
// }
// let ans=oddeven(12)()
// console.log(ans);ansans
// console.log(oddeven(12)());

