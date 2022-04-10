// primitives are copied by their value:
//   number, string, boolean, symbol, undefined, null
// objects are copied by their reference

// primitives_______________________________
let x = 10
y = x
x = 20
console.log(y)
console.log(x)
let number = 10
function increase(number) {
  number++
  return number
}
increase(number)
console.log(number)
number++
console.log(number)
const z = increase(30)
console.log(z)

// object___________________________________
let a = { value: 10 }
let b = a
b.value = 20
console.log(a)

let obj = {value:10}
function increase(obj){
  obj.value++
}
increase(obj)
console.log(obj)