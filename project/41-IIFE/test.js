//Immediately Invoked Function Expression
(function () {
  console.log('test1:');
  console.log('My favColor is Blue');
})();

// (function() {
//   let fname = "qolam";
// })();
// console.log('test2:');
// console.log(fname)

const result = (function(){
  let name ="qolamAli"
  return name
})();
console.log('test3:');
console.log(result);

(favColor = function(color ='green'){
  console.log('test4:')
  console.log('My Favorites is '+color)
})();
favColor('pink');