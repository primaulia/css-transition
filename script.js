document.addEventListener('DOMContentLoaded', init)

function init () {
  // targeting all the divs
  var allDivs = document.querySelectorAll('div')

  allDivs.forEach(function (div) {
    div.addEventListener('mouseover', addExpanded)
  })
}

function addExpanded (event) {
  var elem = event.target
  elem.classList.add('expanded')
  elem.classList.add('move')
  // elem.className += ' expanded'
}
