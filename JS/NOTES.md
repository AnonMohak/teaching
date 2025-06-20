# Just for taking notes 

***

### ==Hoisting
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

### ==Variable declare
In JS, a variable can be declared in 3 ways. *Var, Let and Const*. Here's how they are different(order V L C), 
    - **Scope**             -> function     block       block
    - **Hoisted**           -> undefined    TDZ*        TDZ*
    - **Redeclarable**      -> ✔            ✖           ✖
    - **Reassignable**      -> ✔            ✔           ✖
    - **Must Initialize**   -> ✖            ✖           ✔

    *TDZ->Tempporal Dead Zone-accessing before declaration causes error.*

***

### ==
