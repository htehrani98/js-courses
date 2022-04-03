window.onload = function(){
  const btn = document.getElementById('btn')
  const container = document.getElementById('container')
  btn.addEventListener('click', function(){
    creatNotification()
  })
  function creatNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = 'khob ke chi'
    container.appendChild(notif)
    setTimeout(function(){
      notif.remove()
    }, 3000)
  }
}