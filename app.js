const square = document.querySelectorAll('.square')
// console.log(square)
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0 
let currentTime = timeLeft.textContent


// function to pick a random square for the mole to appear
function randomSquare(){

    // First remove the existing mole on the square
    square.forEach(theClass => {
        theClass.classList.remove('mole')
    })

    // Add mole to a random square
    let randomPosition = square[Math.floor(Math.random() * 9)] // picks a random number from 0 to 8 inclusive

    randomPosition.classList.add('mole')


    // hitPosition to compare with the mouse event to increase the score
    hitPosition = randomPosition.id

}


square.forEach(id => {
    id.addEventListener('mouseup', () => {
        // comparing the mouse event with the square which has mole
      if(id.id === hitPosition){
        result = result + 1
        score.textContent = result
        hitPosition=null
      }
    })
  })


// function to trigger mole to change position every 1/2 sec
  function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000)
  }

  moveMole()

// Timer

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
  
    if(currentTime === 0 ) {
      clearInterval(timerId)
      alert('Game over!!' + ' Here is your result: ' + result + ' Click ok to re-play!')
      location.reload();
    }
  }
  
  let timerId = setInterval(countDown, 1000)

