function validate() {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const message = document.getElementById('message')
  const usError = document.getElementById('usError')
  if (username.value.trim() === '' || password.value.trim() === '') {
//    message.innerText = "you must fill all input"
    alert('you must fill all input')
    username.style.border = '3px solid red'
    usError.style.display='block'
    message.innerText = "you must inter username correct"
    return false
  }
  else {
    message.innerText = ""
    return true
  }
}