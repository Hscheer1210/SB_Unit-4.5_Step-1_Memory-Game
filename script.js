const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
      // create a new div
      const newDiv = document.createElement("div");
      
      // give it a class attribute for the value we are looping over
      newDiv.classList.add(color);

      // call a function handleCardClick when a div is clicked on
      newDiv.addEventListener("click", handleCardClick);

      // append the div to the element with an id of game
      gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  
  clickCounter();
  
  if (cardsClicked < 2) {
    
    const cardColor = event.target.classList.value;
    event.target.setAttribute('id', cardColor);

  } else if (cardsClicked == 2) {
    
    const cardColor = event.target.classList.value;
    event.target.setAttribute('id', cardColor);

    const blueCard = document.getElementById('blue');
    const orangeCard = document.getElementById('orange');
    const purpleCard = document.getElementById('purple');
    const redCard = document.getElementById('red');
    const greenCard = document.getElementById('green');

    let numBlue = document.querySelectorAll('#blue');
    let numOrange = document.querySelectorAll('#orange');
    let numPurple = document.querySelectorAll('#purple');
    let numRed = document.querySelectorAll('#red');
    let numGreen = document.querySelectorAll('#green');


    if (numBlue.length == 2) {
      matchTotal += 1;
      matches();
      numBlue[0].setAttribute('name', 'matched blue');
      numBlue[1].setAttribute('name', 'matched blue');
    }

    if (numOrange.length == 2) {
      matchTotal += 1;
      matches();
      numOrange[0].setAttribute('name', 'matched orange');
      numOrange[1].setAttribute('name', 'matched orange');
    }

    if (numPurple.length == 2) {
      matchTotal += 1;
      matches();
      numPurple[0].setAttribute('name', 'matched purple');
      numPurple[1].setAttribute('name', 'matched purple');
    }

    if (numRed.length == 2) {
      matchTotal += 1;
      matches();
      numRed[0].setAttribute('name', 'matched red');
      numRed[1].setAttribute('name', 'matched red');
    }

    if (numGreen.length == 2) {
      matchTotal += 1;
      matches();
      numGreen[0].setAttribute('name', 'matched green');
      numGreen[1].setAttribute('name', 'matched green');
    } 

    if (matchTotal == 5) {
      setTimeout(function() {
        alert("Hooray, You Won!")
      }, 1000);
      
    }

    setTimeout(function() {
      
      event.target.removeAttribute('id');
    
      if (blueCard) {
        blueCard.removeAttribute('id');
      } 
      if (orangeCard) {
        orangeCard.removeAttribute('id');
      }
      if (purpleCard) {
        purpleCard.removeAttribute('id');
      }
      if (redCard) {
        redCard.removeAttribute('id');
      }
      if (greenCard) {
        greenCard.removeAttribute('id');
      }

      resetCounter();
      
    }, 1000);
    

  } else if (cardsClicked > 2) {
    resetCounter();
    
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

var matchTotal = 0;
var cardsClicked = 0;
var guessesMade = 0;

function clickCounter() {
    cardsClicked += 1;
    guessesMade += 1;
    document.querySelector('#guesses').innerText = "Number of tries: " + guessesMade
}

function resetCounter() {
  cardsClicked -= cardsClicked;
}

function matches() {
  if (matchTotal == 1) {
    document.querySelector('#matches').innerText = "Matches: " + matchTotal
    console.log("You got a match!")
  } else if (matchTotal > 1) {
    document.querySelector('#matches').innerText = "Matches: " + matchTotal
    console.log("You've gotten " + matchTotal + " matches!")
  }
}

function startOver () {
  window.location.reload();
}