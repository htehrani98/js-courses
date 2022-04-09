//regular expressions are patterns used to match character combinations in strings. in JavaScript, regular expressions are also objects.

function validate(){
  const username = document.getElementById('username').value
  const pattern = /USER/i
  if(pattern.test(username)){
    alert('valid username')
  }else{
    alert('invalid username')
  } 
}
function valid(){
  const phone = document.getElementById('phone').value
  const pattern = /^[0]{2}[9][8][0-9]{10}$/
  if(pattern.test(phone)){
    alert('valid phone number')
  }else{
    alert('invalid phone number')
  } 
}