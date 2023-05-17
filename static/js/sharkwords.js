const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => { 
  const wordContainer = document.querySelector("#word-container")
  for (const letter of word) {
    wordContainer.insertAdjacentHTML(
      "beforeend", 
      `<div class="letter-box ${letter}"></div>`);
  }}
  
function generateLetterButtons(alphabet = "abcdefghijklmnopqrstuvwxyz") {
  for (const letter of alphabet) {
    document.getElementById("letter-buttons").insertAdjacentHTML(
      "beforeend",
      `<button>${letter}</button>`);
}}


//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {
  if (word.includes(letter)) {
    return true
   }
};
// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
const handleCorrectGuess = (letter) => {
  const letterDivs = document.querySelectorAll(`.${letter}`)
  letterDivs.insertAdjacentHTML("beforeend",`${letter}`)
}
const handleWrongGuess = (letter) => {
  const letterDivs = document.querySelectorAll(`.${letter}`)
  disableLetterButton(letterDivs)
  numWrong += 1
  if(numWrong = 5){
    disableLetterButton(document.querySelectorAll('button'))
    document.querySelector(#shark-img).src = "/static/images/guess5.png";
    document.getElementById("play-again").style.display
  }
  if (numWrong = 4){
    document.querySelector(#shark-img).src = "/static/images/guess4.png"
  }
  if (numWrong = 3){
    document.querySelector(#shark-img).src = "/static/images/guess3.png"
  }
  if (numWrong = 2){
    document.querySelector(#shark-img).src = "/static/images/guess2.png"
  }
  if (numWrong = 1){
    document.querySelector(#shark-img).src = "/static/images/guess1.png"
  }
}
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => {
      const letter = button.innerHTML;
      disableLetterButton(button)
      if (word.includes(letter)){
        handleCorrectGuess(letter)
      }
      else{
        handleWrongGuess(letter)
      }
    });

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();

