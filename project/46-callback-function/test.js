// a callback is a function that is to be executed after another function has finished executing - hence the name callback
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
function createCourse(title, description, callback) {
  setTimeout(function () {
    courses.push({
      title: title,
      description: description
    })
    callback()
  }, 2000)
}
getCourses()
createCourse('react native', 'react native complete tutorial', getCourses) 