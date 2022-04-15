// js use lexical scope means inner variable is not accessible from outside immediately available inside function 
// where yo using a variable outside function is closure

function makeAdder(x){
  function add(y){
    return x+y
  }
  return add
}
let plusOne = makeAdder(1)
plusOne(3)
console.dir(plusOne)