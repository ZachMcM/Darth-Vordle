//search bar elements
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".guess-input");
const suggestionBox = document.querySelector(".suggestion-box");
//containers for the different info
const nameContainer = document.querySelector(".data-box1");
const filmContainer = document.querySelector(".data-box2");
const homeworldContainer = document.querySelector(".data-box3");
const genderContainer = document.querySelector(".data-box4");
const speciesContainer = document.querySelector(".data-box5");
const heightContainer = document.querySelector(".data-box6");
const massContainer = document.querySelector(".data-box7");
//btn that submits guess
const guessBtn = document.querySelector(".guess-btn");
//modal one elements
const htpBtn = document.querySelector(".question");
const closeModalOne = document.querySelector("#close-modal-one");
const htpModal = document.querySelector("#modal-one");
//modal two elements
const endModal = document.querySelector("#modal-two");
const endHeader = document.querySelector(".end-header");
const endMessage = document.querySelector(".end-message");
const characterImage = document.querySelector(".character-image");
const playAgainBtn = document.querySelector(".play-again");
const shareScoreBtn = document.querySelector(".share-score");
//modal three elements
const statsBtn = document.querySelector(".stats-btn");
const statsModal = document.querySelector("#modal-three");
const closeModalThree = document.querySelector("#close-modal-three");
const winPCT = document.querySelector(".win-pct");
const gamesPlayed = document.querySelector(".num-games-played");
const statsShare = document.querySelector(".share-stats");
//modal four elements
const aboutBtn = document.querySelector(".about-btn");
const aboutModal = document.querySelector("#modal-four");
const closeModalFour = document.querySelector("#close-modal-four");
//character info div
const characterDiv = document.querySelector(".character-info");
//index of character that user guesses
let guessCharacter;
//index of mystery character
let mysteryIndex = Math.floor(Math.random() * 83 + 1) - 1;
//checks how many times the user has made a guess
let guessCounter = 0;
//stores the amount of games a user has played in local data
let winStatus;
let numWins = 0;
let numGames = 0;

//checks to see if the user has no stats in local storage and if they don't initalizes the stats
window.addEventListener("DOMContentLoaded", function () {
  const numGamesKey = localStorage.getItem("Games Played");
  if (numGamesKey) {
    return;
  } else {
    localStorage.setItem("Games Played", "0");
    localStorage.setItem("Times Won", "0");
  }
});

//function that resets the UI
function resetUI() {
  while (nameContainer.firstChild) {
    nameContainer.removeChild(nameContainer.lastChild);
  }
  while (filmContainer.firstChild) {
    filmContainer.removeChild(filmContainer.lastChild);
  }
  while (homeworldContainer.firstChild) {
    homeworldContainer.removeChild(homeworldContainer.lastChild);
  }
  while (genderContainer.firstChild) {
    genderContainer.removeChild(genderContainer.lastChild);
  }
  while (speciesContainer.firstChild) {
    speciesContainer.removeChild(speciesContainer.lastChild);
  }
  while (heightContainer.firstChild) {
    heightContainer.removeChild(heightContainer.lastChild);
  }
  while (massContainer.firstChild) {
    massContainer.removeChild(massContainer.lastChild);
  }
}

//updates the statistics saved in the local storage
function updateStats(winStatus) {
  const newNumGames = parseInt(localStorage.getItem("Games Played")) + 1;
  localStorage.setItem("Games Played", JSON.stringify(newNumGames));
  if (winStatus) {
    const newTimesWon = parseInt(localStorage.getItem("Times Won")) + 1;
    localStorage.setItem("Times Won", JSON.stringify(newTimesWon));
  }
}

//automatically opens up how to play modal
window.addEventListener("DOMContentLoaded", function () {
  htpModal.classList.add("active");
  //closes modal if user clicks close button
  closeModalOne.addEventListener("click", function () {
    htpModal.classList.remove("active");
  });
  //closes modal if anywhere outside of the modal is clicked
  window.addEventListener("click", function (event) {
    if (event.target == htpModal) {
      htpModal.classList.remove("active");
    }
  });
});

//opens up how to play modal (modal one)
htpBtn.addEventListener("click", function () {
  htpModal.classList.add("active");
  closeModalOne.addEventListener("click", function () {
    htpModal.classList.remove("active");
  });

  //closes modal if anywhere outside of the modal is clicked
  window.addEventListener("click", function (event) {
    if (event.target == htpModal) {
      htpModal.classList.remove("active");
    }
  });
});

//brings up the stats modal
statsBtn.addEventListener("click", function () {
  let gamesPlayedValue = localStorage.getItem("Games Played");
  gamesPlayed.innerText = gamesPlayedValue;
  let winPCTValue =
    Math.round(
      (parseInt(localStorage.getItem("Times Won")) /
        parseInt(localStorage.getItem("Games Played"))) *
        100
    ) + "%";
  if (gamesPlayedValue == 0) {
    winPCT.innerText = "0%";
  } else {
    winPCT.innerText = winPCTValue;
  }
  statsModal.classList.add("active");
  closeModalThree.addEventListener("click", function () {
    statsModal.classList.remove("active");
  });
  window.addEventListener("click", function (event) {
    if (event.target == statsModal) {
      statsModal.classList.remove("active");
    }
  });
  statsShare.addEventListener("click", function () {
    let statsContent =
      "I have a " +
      winPCTValue +
      " win percentage with " +
      gamesPlayedValue +
      " games played on Darth Vordle! Play Darth Vordle at darthvordle.com today!";
    navigator.clipboard.writeText(statsContent).then(function () {
      console.log("stats copied to clipboard");
      alert("Your stats have been copied to your clipboard!");
    });
  });
});

aboutBtn.addEventListener("click", function () {
  aboutModal.classList.add("active");
  closeModalFour.addEventListener("click", function () {
    aboutModal.classList.remove("active");
  });
  window.addEventListener("click", function (event) {
    if (event.target == aboutModal) {
      aboutModal.classList.remove("active");
    }
  });
});

//code for search bar and suggestions
searchInput.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = nameList.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = "<li>" + data + "</li>");
    });
    displaySuggestions(emptyArray);
    searchContainer.classList.add("active");
    let allList = suggestionBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchContainer.classList.remove("active");
  }
};

//displays the suggestions
function displaySuggestions(list) {
  let listData;
  if (!list.length) {
    console.log("no related character found");
    searchContainer.classList.remove("active");
    userValue = searchInput.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  suggestionBox.innerHTML = listData;
}

//makes the guess input what character the user clicks
function select(element) {
  let pickUserData = element.textContent;
  searchInput.value = pickUserData;
  searchContainer.classList.remove("active");
  //tracks the amount of guesses made
  guessCounter++;
  let futureGuessNumber = guessCounter + 1;
  searchInput.placeholder = "Enter Guess " + futureGuessNumber + " of 8";
  //clears the console
  console.clear();
  //shows the character info div
  characterDiv.classList.add("active");
  getGuess();
  checkGuess();
}

function getGuess() {
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name == searchInput.value) {
      guessCharacter = characters[i];
    }
  }
  console.log(guessCharacter);
}

function gameDone() {
  characterDiv.classList.remove("active");
  updateStats(winStatus);
  endModal.classList.add("active");
  let imageURL = "images/" + mysteryIndex + ".jpg";
  characterImage.src = imageURL;
}

function toFeet(height) {
  let realFeet = (height * 0.3937) / 12;
  let feet = Math.floor(realFeet);
  let inches = Math.round((realFeet - feet) * 12);
  return feet + "ft " + inches + "in";
}

function checkGuess() {
  //adds the name to the UI
  const nameDiv = document.createElement("div");
  const nameContent = document.createTextNode(
    guessCounter + ". " + guessCharacter.name
  );
  nameDiv.appendChild(nameContent);
  nameContainer.appendChild(nameDiv);
  //adds the film to the UI
  const filmDiv = document.createElement("div");
  const filmContent = document.createTextNode(
    guessCounter + ". " + guessCharacter.films[0]
  );
  filmDiv.appendChild(filmContent);
  filmContainer.appendChild(filmDiv);
  //adds the homeworld to the UI
  const homeworldDiv = document.createElement("div");
  const homeworldContent = document.createTextNode(
    guessCounter + ". " + guessCharacter.homeworld
  );
  homeworldDiv.appendChild(homeworldContent);
  homeworldContainer.appendChild(homeworldDiv);
  //adds the gender to the UI
  const genderDiv = document.createElement("div");
  const genderContent = document.createTextNode(
    guessCounter + ". " + guessCharacter.gender
  );
  genderDiv.appendChild(genderContent);
  genderContainer.appendChild(genderDiv);
  //adds the species to the Ui
  const speciesDiv = document.createElement("div");
  const speciesContent = document.createTextNode(
    guessCounter + ". " + guessCharacter.species
  );
  speciesDiv.appendChild(speciesContent);
  speciesContainer.appendChild(speciesDiv);
  //adds the height to the UI
  const heightDiv = document.createElement("div");
  let heightContent;
  if (guessCharacter.height == "unknown") {
    heightContent = document.createTextNode(
      guessCounter + ". " + guessCharacter.height
    );
  } else {
    let guessHeightCustomary = toFeet(guessCharacter.height);
    heightContent = document.createTextNode(
      guessCounter + ". " + guessHeightCustomary
    );
  }
  heightDiv.appendChild(heightContent);
  heightContainer.appendChild(heightDiv);
  //adds the mass to the UI
  const massDiv = document.createElement("div");
  let massContent;
  if (guessCharacter.mass == "unknown") {
    massContent = document.createTextNode(
      guessCounter + ". " + guessCharacter.mass
    );
  } else {
    massContent = document.createTextNode(
      guessCounter + ". " + Math.round(guessCharacter.mass * 2.20462) + "lbs"
    );
  }
  massDiv.appendChild(massContent);
  massContainer.appendChild(massDiv);
  let correctCounter = 0;
  let mysteryCharacter = characters[mysteryIndex];
  if (guessCharacter.name == mysteryCharacter.name) {
    console.log("You won");
    winStatus = true;
    gameDone();
    endHeader.innerText = "Congratulations, You Won!";
    endMessage.innerText =
      "The mystery character was... " + mysteryCharacter.name;
    playAgainBtn.addEventListener("click", function () {
      endModal.classList.remove("active");
      resetUI();
      guessCounter = 0;
      return (mysteryIndex = Math.floor(Math.random() * 83 + 1) - 1);
    });
    shareScoreBtn.addEventListener("click", function () {
      let scoreContent =
        "I was able to guess the mystery character... " +
        mysteryCharacter.name +
        " in " +
        guessCounter +
        " guesses! Play Darth Vordle at darthvordle.com today!";
      navigator.clipboard.writeText(scoreContent).then(function () {
        console.log("Score copied to clipboard");
        alert("Your score has been copied to your clipboard!");
      });
    });
    searchInput.value = "";
    searchInput.placeholder = "Enter Guess 1 of 8";
  } else {
    if (guessCounter != 8) {
      if (guessCharacter.films[0] == mysteryCharacter.films[0]) {
        filmDiv.style.color = "#06e606";
        correctCounter++;
      }
      if (guessCharacter.homeworld == mysteryCharacter.homeworld) {
        homeworldDiv.style.color = "#06e606";
        correctCounter++;
      }
      if (guessCharacter.species == mysteryCharacter.species) {
        speciesDiv.style.color = "#06e606";
        correctCounter++;
      }
      if (guessCharacter.gender == mysteryCharacter.gender) {
        genderDiv.style.color = "#06e606";
        correctCounter++;
      }
      const guessHeightValue = Number(guessCharacter.height);
      const mysteryHeightValue = Number(mysteryCharacter.height);
      if (guessHeightValue == mysteryHeightValue) {
        heightDiv.style.color = "#06e606";
        correctCounter++;
      } else if (guessHeightValue > mysteryHeightValue) {
        heightDiv.innerHTML = heightDiv.innerText + "&#x2193";
        if (guessHeightValue - mysteryHeightValue <= 5) {
          heightDiv.style.color = "#FFE81F";
        }
      } else if (mysteryHeightValue > guessHeightValue) {
        heightDiv.innerHTML = heightDiv.innerText + "&#x2191";
        if (mysteryHeightValue - guessHeightValue <= 5) {
          heightDiv.style.color = "#FFE81F";
        }
      }
      const guessMassValue = Number(guessCharacter.mass);
      const mysteryMassValue = Number(mysteryCharacter.mass);
      if (guessMassValue == mysteryMassValue) {
        massDiv.style.color = "#06e606";
        correctCounter++;
      } else if (guessMassValue > mysteryMassValue) {
        massDiv.innerHTML = massDiv.innerText + "&#x2193";
        if (guessMassValue - mysteryMassValue <= 5) {
          massDiv.style.color = "#FFE81F";
        }
      } else if (mysteryMassValue > guessMassValue) {
        massDiv.innerHTML = massDiv.innerText + "&#x2191";
        if (mysteryMassValue - guessMassValue <= 5) {
          massDiv.style.color = "#FFE81F";
        }
      } else {
        console.log(guessMassValue, mysteryMassValue);
      }
      if (correctCounter == 0) {
        console.log("No matching attributes");
      }
      searchInput.value = "";
    } else {
      console.log("You lost");
      winStatus = false;
      gameDone();
      endHeader.innerText = "Oops, You Lost!";
      endMessage.innerText =
        "The mystery character was... " + mysteryCharacter.name;
      playAgainBtn.addEventListener("click", function () {
        endModal.classList.remove("active");
        resetUI();
        guessCounter = 0;
        return (mysteryIndex = Math.floor(Math.random() * 83 + 1) - 1);
      });
      shareScoreBtn.addEventListener("click", function () {
        let scoreContent =
          "I couldn't guess the mystery character... " +
          mysteryCharacter.name +
          ". Play Darth Vordle at darthvordle.com today!";
        navigator.clipboard.writeText(scoreContent).then(function () {
          console.log("Score copied to clipboard");
          alert("Your score has been copied to your clipboard!");
        });
      });
      searchInput.value = "";
      searchInput.placeholder = "Enter Guess 1 of 8";
    }
  }
}
