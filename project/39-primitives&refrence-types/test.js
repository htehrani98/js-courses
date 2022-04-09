//primitives are copied by their value
//objects are copied by their reference
let x =10 
y=x
x=20
console.log(y)
console.log(x)
let number = 10
function increase(number){
  number++
}
increase(number)
console.log(number)
number++
console.log(number)
const z = increase(30)
console.log(z)