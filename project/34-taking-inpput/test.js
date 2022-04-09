function textInputHandler(){
  const username = document.getElementById('username').Value;
  const password = document.getElementById('password').value;
  console.log(password)
}
function radioButtonHandler(){
  const apple = document.getElementById('apple')
  const banana = document.getElementById('banana')
  if(banana.checked){
    console.log('The fruit selected is '+banana.value)
  }else if(apple.checked){
    console.log('The fruit selected is '+apple.value)
  }
}
function selectOptionHandler(){
  const selectBox = document.getElementById('selectBox');
  console.log(selectBox.option[selectBox.selectedIndex].value)
}
window.onload = function(){
  const form = document.forms.myForm
  console.log(form.name.value)
  console.log(form.color.value)
}