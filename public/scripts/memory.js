let cardContainer = document.querySelector(".card-container");
let result = document.querySelector(".result-div");

let imgCollection = [
  "<div class='card'><img class='card-image' src='../images/1.png'></div>",
  "<div class='card'><img class='card-image' src='../images/2.png'></div>",
  "<div class='card'><img class='card-image' src='../images/3.png'></div>",
  "<div class='card'><img class='card-image' src='../images/4.png'></div>",
  "<div class='card'><img class='card-image' src='../images/5.png'></div>",
  "<div class='card'><img class='card-image' src='../images/6.png'></div>",
  "<div class='card'><img class='card-image' src='../images/7.png'></div>",
  "<div class='card'><img class='card-image' src='../images/8.png'></div>",
  "<div class='card'><img class='card-image' src='../images/9.png'></div>",
  "<div class='card'><img class='card-image' src='../images/10.png'></div>",
  "<div class='card'><img class='card-image' src='../images/11.png'></div>",
  "<div class='card'><img class='card-image' src='../images/12.png'></div>",
  "<div class='card'><img class='card-image' src='../images/13.png'></div>",
  "<div class='card'><img class='card-image' src='../images/14.png'></div>",
  "<div class='card'><img class='card-image' src='../images/15.png'></div>",
  "<div class='card'><img class='card-image' src='../images/16.png'></div>",
  "<div class='card'><img class='card-image' src='../images/17.png'></div>",
  "<div class='card'><img class='card-image' src='../images/18.png'></div>",
  "<div class='card'><img class='card-image' src='../images/19.png'></div>",
  "<div class='card'><img class='card-image' src='../images/20.png'></div>",
  "<div class='card'><img class='card-image' src='../images/21.png'></div>",
  "<div class='card'><img class='card-image' src='../images/22.png'></div>",
];

function fillRandomNumArray() {
  let random = 0;
  let duplicate = false;
  let randomNumArray = [];

  //fill an array with 8 unique int between 1-22
  for (let i = 16; i > randomNumArray.length; ) {
    duplicate = false;

    //pick a random number
    random = Math.ceil(Math.random() * 21);

    //check if the random number already exists in the array
    for (let j = 0; j < 16; j++) {
      //break loop if random exists in the array
      if (random === randomNumArray[j]) {
        duplicate = true;
      }
    }

    //if random does not exist in the array add it
    if (duplicate === false) {
      randomNumArray.push(random);
      randomNumArray.push(random);
    }
  }

  shuffleNum(randomNumArray);
}

function shuffleNum(randomNumArray) {
  let shuffledArray = [];

  while (shuffledArray.length !== 16) {
    let random = Math.round(Math.random() * randomNumArray.length);

    if (random === randomNumArray.length) {
      random--;
    }

    shuffledArray.push(randomNumArray[random]);
    randomNumArray.splice(random, 1);
  }

  setCards(shuffledArray);
}

function setCards(shuffledArray) {
  for (let i = 0; i < shuffledArray.length; i++) {
    cardContainer.innerHTML += imgCollection[shuffledArray[i]];
  }

  setTimeout(setMysteryCards, 3000, shuffledArray);
}

function setMysteryCards(shuffledArray) {
  cardContainer.innerHTML = "";

  for (let i = 0; i < shuffledArray.length; i++) {
    cardContainer.innerHTML +=
      "<div class='card'><img class='card-image' src='../images/question-solid.svg'></div>";
  }

  addCardEvents(cardContainer, shuffledArray);
}

let selectedCount = 0;
let cardOne = "";
let cardTwo = "";
function addCardEvents(cardContainer, shuffledArray) {
  for (let i = 0; i < shuffledArray.length; i++) {
    cardContainer.childNodes[i].addEventListener("click", function () {
      cardContainer.childNodes[i].innerHTML = imgCollection[shuffledArray[i]];

      selectedCount++;

      if (selectedCount === 1) {
        cardOne = imgCollection[shuffledArray[i]];
      } else if (selectedCount === 2) {
        cardTwo = imgCollection[shuffledArray[i]];
      }

      compareCards(shuffledArray, cardOne, cardTwo);
    });
  }
}

let wrong = 0;
function compareCards(shuffledArray, cardOne, cardTwo) {
  if (cardOne === cardTwo) {
    for (let i = 0; i < shuffledArray.length; i++) {
      if (cardContainer.childNodes[i].innerHTML.indexOf(cardOne) !== -1) {
        cardContainer.childNodes[i].classList.add("matched");
      }
    }
  } else {
    if (cardTwo !== "") {
      wrong++;
    }
  }

  if (wrong < 5) {
    if (selectedCount > 1) {
      setTimeout(resetUnmatchedCards, 1000, shuffledArray);
    }
  } else {
    result.innerHTML = "<h2>You Lose!!!</h2>";

    cardContainer.innerHTML = "";

    for (let i = 0; i < shuffledArray.length; i++) {
      cardContainer.innerHTML += imgCollection[shuffledArray[i]];
    }
  }
}

function resetUnmatchedCards(shuffledArray) {
  selectedCount = 0;
  cardOne = "";
  cardTwo = "";
  let matchedCards = 0;

  for (let i = 0; i < shuffledArray.length; i++) {
    if (!cardContainer.childNodes[i].classList.contains("matched")) {
      cardContainer.childNodes[i].innerHTML =
        "<div class='card'><img class='card-image' src='../images/question-solid.svg'></div>";
    }

    if (cardContainer.childNodes[i].classList.contains("matched")) {
      matchedCards++;
    }
  }

  if (matchedCards === 16) {
    result.innerHTML = "<h2>You Win!!!<h2>";
  }
}

fillRandomNumArray();

// let imgCollection = [
//   "../images/1.png",
//   "../images/2.png",
//   "../images/3.png",
//   "../images/4.png",
//   "../images/5.png",
//   "../images/6.png",
//   "../images/7.png",
//   "../images/8.png",
//   "../images/9.png",
//   "../images/10.png",
//   "../images/11.png",
//   "../images/12.png",
//   "../images/13.png",
//   "../images/14.png",
//   "../images/15.png",
//   "../images/16.png",
//   "../images/17.png",
//   "../images/18.png",
//   "../images/19.png",
//   "../images/20.png",
//   "../images/21.png",
//   "../images/22.png",
// ];


// function setCards(shuffledArray) {
//   for (let i = 0; i < shuffledArray.length; i++) {
//     cardContainer.innerHTML +=
//       "<div class='card'><img class='card-image' src=" +
//       imgCollection[shuffledArray[i]] +
//       "></div>";
//   }

//   setTimeout(setMysteryCards, 3000, shuffledArray);
// }

// function addCardEvents(cardContainer, shuffledArray) {
//   for (let i = 0; i < shuffledArray.length; i++) {
//     cardContainer.childNodes[i].addEventListener("click", function () {
//       cardContainer.childNodes[i].innerHTML =
//         "<div class='card'><img class='card-image' src=" +
//         imgCollection[shuffledArray[i]] +
//         "></div>";

//       selectedCount++;

//       if (selectedCount === 1) {
//         cardOne = imgCollection[shuffledArray[i]];
//       } else if (selectedCount === 2) {
//         cardTwo = imgCollection[shuffledArray[i]];
//       }

//       compareCards(shuffledArray, cardOne, cardTwo);
//     });
//   }
// }

// function compareCards(shuffledArray, cardOne, cardTwo) {
//   if (cardOne === cardTwo) {
//     for (let i = 0; i < shuffledArray.length; i++) {
//       if (cardContainer.childNodes[i].innerHTML.indexOf(cardOne) !== -1) {
//         cardContainer.childNodes[i].classList.add("matched");
//       }
//     }
//   } else {
//     if (cardTwo !== "") {
//       wrong++;
//     }
//   }

//   if (wrong < 5) {
//     if (selectedCount > 1) {
//       setTimeout(resetUnmatchedCards, 1000, shuffledArray);
//     }
//   } else {
//     result.innerHTML = "<h2>You Lose!!!</h2>";

//     cardContainer.innerHTML = "";

//     for (let i = 0; i < shuffledArray.length; i++) {
//       cardContainer.innerHTML +=
//         "<div class='card'><img class='card-image' src=" +
//         imgCollection[shuffledArray[i]] +
//         "></div>";
//     }
//   }
// }
