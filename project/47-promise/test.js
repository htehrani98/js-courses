const courses = [
  { title: 'js', description: 'complete js tutorial' },
  { title: 'react', description: 'react js tutorial' },
]
function getCourses() {
  setTimeout(function () {
    let output = '';
    courses.forEach(function (course) {
      output += `<li>${course.title}</li>`
    })
    document.body.innerHTML = output

  }, 1000)

}
function createCourse(title, description) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      courses.push({
        title: title,
        description: description
      })
      const err = false;
      if (!err) {
        resolve()
      }
      else {
        reject('Error: something went wrong')
      }
    }, 2000)
  })
}
createCourse('react native', 'complete react native course').then(getCourses).catch(function (err) { console.log(err) })

const promise1 = Promise.resolve('hello world')
const promise2 = 8;
const promise3 = new Promise(function(resolve,reject){
  setTimeout(resolve,2000,'Goodbye')
})
const promise4 = fetch