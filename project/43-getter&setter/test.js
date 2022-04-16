// function Course(title) {
//   this.title = title;
//   let students = [];
//   this.print = function () {
//     console.log(this.title, students);
//   };
//   Object.defineProperty(this, "students", {
//     get: function () {
//       return students;
//     },
//     set: function (value) {
//       if (value.length < 1) {
//         throw new Error("invalid data");
//       }
//       students = value;
//     },
//   });
// }
// const jsCourse = new Course("js");
// // console.log(jsCourse.title)
// jsCourse.print();
// jsCourse.students = ['rez','mary','ali'];
// console.log(jsCourse.students);

/**
 *
 *
 * js: v es5
 */
class Course {
  constructor(_title) {
    this.title = _title;
    this.students = [];

    this.print = function () {
      console.log(this.title, this.students);
    };
  }

  get getStudents() {
    return this.students;
  }

  set setStudents(s) {
    this.students = s;
  }
}
const jsCourse = new Course("js");
// console.log(jsCourse.title)
jsCourse.print();
jsCourse.students = ['rez', 'mary', 'ali'];
console.log(jsCourse.students);