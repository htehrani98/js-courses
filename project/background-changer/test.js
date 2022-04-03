window.onload = function(){
  const btn = document.getElementById('btn')
  btn.addEventListener('click',function(){
    document.body.style.background = randomBg()
  })
  function randomBg(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  }
}  