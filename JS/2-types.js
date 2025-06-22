let a = 10;
var b = 11;
const c = 12;

let p = a;
var q = b;
const r = c;


console.log("a,b,c");
console.log(a);
console.log(b);
console.log(c);

console.log("p,q,r");

console.log(p);
console.log(q);
console.log(r);

let m = [1,2,3];
var n = [7,8,9];
const o = [11,12,13];

let e = m;
var f = n;
const g = o;

console.log("m,n,o before");
console.log(m);
console.log(n);
console.log(o);
console.log("e,f,g");
console.log(e);
console.log(f);
console.log(g);

e.pop();
f.push(10);
g.shift();


console.log("m,n,o after");
console.log(m);
console.log(n);
console.log(o);
console.log("e,f,g");
console.log(e);
console.log(f);
console.log(g);
