window.onload = function(){
  function createHeart(){
    const heart = document.createElement('div');
    heart.style.left = Math.random()*100+'vw';
    heart.style.animationDuration = Math.random()*6+3+'s'
    heart.classList.add('heart');
    heart.innerText = '💝';
    document.body.appendChild(heart)
    setTimeout(function(){
      heart.remove()
    },10000)
  }
  setInterval(createHeart, 10)
}