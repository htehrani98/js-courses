/* Try, catch, finally

try and catch only handle runtime error

*/

try {
  console.log('start of try runs')
  course;
  console.log('end of try runs')
} catch (err) {
  console.log('Error has occurred ' + err)
}

let obj = '{"age" : 20}'
try{
  let user = JSON.parse(obj)
  if(!user.name){
    throw new SyntaxError("i complete data: no name ")
  }
}catch(err){
  console.log('Error has occurred '+err)
}
