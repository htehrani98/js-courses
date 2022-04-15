function Course(title) {
  this.title = title;
  let students = []
  this.print = function () {
    console.log(this.title, students)
  }
  Object.defineProperty(this, 'students', {
    get: function () {
      return students
    },set:function(value){
      if(value.length<1){
        throw new Error('invalid data')
      }
      students = value
    }
  })
}
const jsCourse = new Course('js')
// console.log(jsCourse.title)
jsCourse.print()
jsCourse.students = ['reza']
console.log(jsCourse.students) 