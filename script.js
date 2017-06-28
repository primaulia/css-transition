document.addEventListener('DOMContentLoaded', init)

function init () {
  // targeting all the divs
  // var allDivs = document.querySelectorAll('div')
  //
  // allDivs.forEach(function (div) {
  //   div.addEventListener('mouseover', addExpanded)
  // })

  // targeting the circle
  var circle = document.querySelector('.circle')
  circle.addEventListener('mouseover', moveCircle)
}

function randomizer (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function moveCircle (event) {
  console.log(event)
  var elem = event.target
  elem.style.top = randomizer(0, 500) + 'px'
  elem.style.left = randomizer(0, 500) + 'px'
}

function addExpanded (event) {
  var elem = event.target
  elem.classList.add('expanded')
  elem.classList.add('move')
  // elem.className += ' expanded'
}
