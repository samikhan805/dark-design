var button = document.querySelector('.button')
var mainBtn = document.querySelector('.main-btn')
var body = document.querySelector('body')
var img = document.querySelector('.img')

button.addEventListener('click', function() {
  button.classList.toggle('active')
  body.classList.toggle('active')
  img.classList.toggle('active')
  mainBtn.classList.toggle('active')
  
  if (mainBtn.innerHTML == 'Day') {
    mainBtn.innerHTML = 'Dark'
  }
  else {
    mainBtn.innerHTML = 'Day'
  }
})