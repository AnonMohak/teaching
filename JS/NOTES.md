# Just for taking notes 

***
***

### ==Hoisting==
In JS when we define a function or make a function anywhere in our code, JS just moves then to the top of the codeblock after the code is run. 
eg: 
```js
//
//
//
let a =20;
//
//
//
```
will change to,
```js
let a;
//
//
//
a=20;
```

***

### ==Variable declare==
In JS, a variable can be declared in 3 ways. *Var, Let and Const*. Here's how they are different(order V L C), 
    - **Scope**             -> function     block       block
    - **Hoisted**           -> undefined    TDZ*        TDZ*
    - **Redeclarable**      -> ✔            ✖           ✖
    - **Reassignable**      -> ✔            ✔           ✖
    - **Must Initialize**   -> ✖            ✖           ✔

    *TDZ->Tempporal Dead Zone-accessing before declaration causes error.*

***

### ==Not defined vs Undefined==
Something that exists but value is not given is called undefined and not defined is something that does not exist at all. 
```js
let a;
console.log(a); //undefined

console.log(b); //not defined
```

***

### ==Types in JS==
- Primitives -> number, string, null, undefined, boolean
     - when you make a copy of it, a duplicate will be made inside a different memory address.
     - changing one value does not affect other.
     ```js
     var a =12;
     var b =a;
     b=b+2;
     console.log(a);     //12
     console.log(b);     //14
     ```

- Reference  -> [], (), {}
     - make you make a copy, rather than making a duplicate it just points to the same orignal memory address.
     - chaning one do affect other, because all will point to same memory address.
     - reference can be made soo they behave more like primitives, different memory address using [LATER](url).
     ```js
     var a = [1,2,3];
     var b =a;
     b.pop();            //remove last element of the array.
     console.log(a);     //[1,2]
     console.log(b);     //[1,2]
     ```

***

### ==Conditionals==
- if else
```js
let a=12;
if (a<10){
    console.log("a small pp");
}
else{
    console.log("big pp");
}
```

- else-if
```js
let b=10;
if (b<10){
    console.log("smol pp");
}
else if(b>10){
    console.log("big pp");
}
else{
    console.log("no pp");
}
```

- switch case (LATER)

***

### ==Loops==
- For
```js
for(var i, i<10, i++){
    console.log(i);     //0,1,2,3,4,5,6,7,8,9
}
```

- While
```js
var a=1;
while(a<10){
    console.log(a);     //1,2,3,4,5,6,7,8,9
}
```

***

### ==Functions==
Are used if,
    - you wanna run your code in future.
    - you wanna reuse your code.
    - you wanna use your code with different data.
```js
    function obiWan(){
        console.log("Hello There!");
    }

    obiWan();
```

***

### ==Array==
List in python, can store more than 1 values in a single variable. 
`var a=[1,2,3]`

- Push      -> add element to the last of an array.
- Pop       -> remove last element from array.
- Shift     -> remove fist element of an array.
- Unshift   -> add element in the start of an array.
- Splice    -> remove values from start index and how many values after that.
```js
var arr = [1,2,3];
arr.push(4);            //1,2,3,4
arr.pop();             //1,2,3
arr.unshift(0);       //0,1,2,3
arr.shift();         //1,2,3
arr.splice(1,1);    //1,3
```

***

### ==Objects(DOM)==
Dict in python, holds info about 1 thing in their respective key-value pairs. 
```js
const car = {type:"Fiat", model:"500", color:"white"};
```

***
