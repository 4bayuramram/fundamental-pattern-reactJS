// primitive
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// reference
let obj1 = { name: "bay" };
let obj2 = obj1;

obj2.name = "developer";

console.log(obj1.name); // developer
