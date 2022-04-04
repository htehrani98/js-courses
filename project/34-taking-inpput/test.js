function validate() {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const message = document.getElementsById('message')
  if (username.value.trim() === '' || password.value.trim() === '') {
    message.innerText = "you must fill all input"
    alert('you must fill all input')
    return false
  }
  else {
    message.innerText = ""
    return true
  }
}