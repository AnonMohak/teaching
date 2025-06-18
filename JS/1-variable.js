//var, let , const
//Hoisting: variables and functions declarations are conceptuslly moved to 
//the top of their scope. Because of this functions can be called and 
//variables can be used before they are declared.

////VAR 
//Accessible within the function where it's defined.
//Moves to the top of the function or global scope, but is initialized as undefined.
//Can be redeclared and reassigned.

function testvar(){
	console.log(a);	 		//undefined
	var a=20;
	console.log(a)			//20
}
testvar();


//LET
//Accessible only within '{}' block where it's declared.
//Hoisted, but cannot be initalized, so accessing before declaration causes an error.
//Can be reassigned, but not redeclared in the same scope.

function testlet(){
	//console.log(b);		//ReferenceError
	let b=20;
	b=30;
	console.log(b);			//30
}
testlet();


//CONST
//Block-scoped like let.
//Must be initialized at declaration.
//Cannot be reassigned.
//Can mutate object or array contents, but cannot reassign the reference.

function testconst(){
	const c=40;
	//c=50;				//TypeError
	console.log(c)
	const arr = [1,2];
	arr.push(3);			//Allowed because mutating the array.
	console.log(arr);		// [1,2,3]
}
testconst();	
