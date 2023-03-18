##Q.1
```
  let a=["apple","bnana","orange"]
  let g=a.includes()
  if(a.includes("orange")){
  console.log("yes");
  }else{
  console.log("no");    
  }
```


##Q.2
```
  let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var sum = numStr.reduce(test);
  function test(total, num) {
      return total + (num % 2 === 0);
  }
  console.log(sum)
```

##Q.3
```
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 3, 8];
  let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
  let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

  const unique = unique1.concat(unique2);

  console.log(unique);
```

##Q.4
```
  let f=["my","name","is","rafik"]
  let a=f.reduce(khan)
  function khan(value,arr){
  return value+arr
  }
  console.log(a);
```

##Q.5
```
  let arr = [1, 141, 23, 10, 9, 92];
  let num = 0;
  function largest(check) {
      for (let i = 0; i < check.length; i++) {
          if (check[i] >= num) {
              num = check[i];
          }
      }
      return num;
  }
  console.log(largest(arr));
```

##Q.6
```
  let h=[2,3,4,5,6,7,8,9]
  let even=h.filter(check)
  function check(num){
  return num%2===0
  }
  console.log(even);
```

##Q.10
```
  let h=[2,3,4,5,6,7,8]
  let j=h.reduce(test)
  function test(num,avrage){
  return num+(avrage%2===0)
  }
  console.log(j);
```

##Q.11
```
  let s=[2,4,5,6,7,8,9]
  let newarr=s.filter(check)
  function check(num){
  return num>5
  }
  console.log(newarr);
```

##Q.12
```
  let h=[2,4,5,6,7,8,9]
  let w=h.map(test)
  function test(value,index){
  return value+index
  }
  console.log(w);
```