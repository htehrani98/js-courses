let jsCourse = {
  title: 'js',
  description: 'js course',
  print() {
    console.log(this.title, this.description)
  }
}
let reactCourse = {
  title: 'js',
  description: 'js course'
}
jsCourse.print.call(reactCourse)

const course = {
  title:'es6',
  description:'complete es6 course'
}
function print(episode){
  console.log(this.title,this.description,episode)
}
print.call(course,26)
print.apply(course,[28])
const printCourse = print.bind(course,32)
console.log(printCourse)
printCourse()