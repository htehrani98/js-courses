// S2E24 : expend & shrink image with timing event_______________
let IntervalID;
let width = 500;
let unit = 2;
function increase() {
  IntervalID = setInterval(expand, 20)
}
function expand() {
  if (width < 600) {
    width = width + Uint16Array;
    document.getElementById('img1').width = width
  } else {
    clearInterval(IntervalID)
  }
}
function decrease() {
  IntervalID = setInterval(shrink, 20)
}
function shrink() {
  if (width > 500) {
    width = width - unit;
    document.getElementById('img1').width = width
  } else {
    clearInterval(IntervalID)
  }
}







// S2E23 : fadeIn & fadeOut with timing event____________________
// let ID;
// function fadeOut() {
// //   clearInterval(IntervalID)
//   ID = setInterval(hide, 20)
// }
// function hide() {
//   let img = document.getElementById('img1')
//   opacity = Number(
//     window.getComputedStyle(img).getPropertyPriority('opacity')
//   )
//   if (opacity > 0) {
//     opacity = opacity - 0.01;
//     img.style.opacity = opacity
//   }
//   else {
//     clearInterval(ID)
//   }
// }
// function fadeIn() {
// // clearInterval(ID)
//   IntervalID = setInterval(show, 20)
// }
// function show() {
//   let img = document.getElementById('img1')
//   opacity = Number(
//     window.getComputedStyle(img).getPropertyPriority('opacity')
//   )
//   if (opacity < 1) {
//     opacity = opacity + 0.01;
//     img.style.opacity = opacity
//   }
//   else {
//     clearInterval(ID)
//   }
// }
// //index.html/whole body
{/* <body>
  <button onclick="fadeOut()" id="fadeBtn">FadeOut</button>
  <hr />
  <img 
    src="https://www.teahub.io/photos/full/306-3060090_white-snow-mountains-top-winter-scenery-hd-wallpaper2012..jpg"
    alt="image"
    id="img1"
    style="height: 500px;"
  />
  <hr />
  <button onclick="fadeIn()" id="fadeInBtn">FadeIn</button>

  
</body> */}

// S2E22 : timing events________________________________________
// // setTimeout
// // let ID;
// // function printMessage(){
// //   document.getElementById('message').innerText = 'Hello word after 5 second'
// // }
// // function start(){
// //   ID = window.setTimeout(printMessage,5000)
// // }
// // function stop(){
// //   window.clearTimeout(ID )
// // }

// // setInterval
// let ID;
// let seconds = 0;
// function printMessage() {
//   document.getElementById('message').innerHTML = seconds + ' second'
//   seconds++;
// }
// function start(){
//   ID = window.setInterval(printMessage,1000)
// }
// function stop(){
//   window.clearInterval(ID)
// }
// index.html codes
{/* <button onclick="start()">start</button>
<h2 id="message">reactApp.ir</h2>
<button onclick="stop()">stop</button> */}

// S1E21 : Create to do list using dom__________________________
// window.onload = function () {
//   // // all li tags in class"name-list"(directly) right down here 
//   // const userList = document.querySelectorAll('.name-list li')
//   // //console.log(userList)
//   // for (user of userList) {
//   //   user.addEventListener('click', function () {
//   //     console.log(this)
//   //     this.style.color = 'lightblue'
//   //   })
//   // }
//   let userList = document.querySelector('.name-list')
//   let listInput = document.querySelector('.list-input')
//   let btn = document.querySelector('.addListButton')
//   btn.addEventListener('click', function () {
//     const newUser = document.createElement('li')
//     const name = document.createTextNode(listInput.value)
//     newUser.appendChild(name)
//     userList.appendChild(newUser)
//     listInput.value = ''
//   })

//   const newUserList = document.querySelectorAll('.name-list li')
//   for (user of newUserList) {
//     user.addEventListener('click', function () {
//       this.remove()
//     })
//   }
// }
// // index.html codes
// {/* <body>
//   <button class="addListButton">
//     Add User
//   </button>
//   <ul class="name-list">
//     <li>mahdi</li>
//     <li>ali</li>
//     <li>alireza</li>
//   </ul>
//   <input type="text" class="list-input" /> */}

// S1E20 : work with DOM_____________________________________
// Everything we can change in the document is a node
// window.onload = function(){
//   const newParagraph = document.createElement(
//     'p'
//   )
//   newParagraph.innerText = 'And this is a dynamically created paragraph';
//   document.body.appendChild(newParagraph)
//   newParagraph.style.marginLeft = '100px'
//   newParagraph.style.borderStyle = 'solid'
// }
// function clickHandler(){
//   const link = document.getElementById('link')
//   // console.log(link)
//   console.log(link.getAttribute('href'))
// }

// S01E18 : Constructor Function_____________________________

// // Camel notation : oneTwoThree
// // Pascal notation : OneTwoThree
// const course={
//   title:'js',
//   students:['mahdi','alireza','maryam'],
//   showStudents:function(){
//     this.students.foreach(function(student){console.log(student)})
//   }
// }
// //factory function
// function createCourse(title, students) {
//   return {
//     title,
//     students,
//     showStudents: function(){
//       this.students.foreach(function(student){console.log(student)})
//     }
//   }
// }
// // const jsCourse = createCourse('js',['mahdi','alireza','maryam','ali'])
// // console.log(jsCourse)

// //constructor function
// function CreateCourse(title,students){
//   this.title = title;
//   this.students = students;
//   this.showStudents = function(){
//     this.students.foreach(function(student){console.log(student)})
//   }
// }
// const jsCourse = createCourse('js',['mahdi','alireza','maryam','ali'])
// console.log(jsCourse)
// jsCourse.showStudents()