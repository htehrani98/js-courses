function validate() {
  const username = document.getElementById('username')
  const password = document.getElementById('password')
  if (username.value.trim() === '' || password.value.trim() === '') {
    return false
  }
  else {
    return true
  }
  

}