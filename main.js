//class
class Message {
  constructor(mantra, affirmation) {
    this.id = Date.now();
    this.mantra = mantra;
    this.affirmation = affirmation;
  }
}




//Mantra
var mantra = [

`Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.`,

`Never let yesterday take up too much of today.`,

`Every day is a second chance.`,

`Tell the truth and love everyone.`,

`I am free from sadness.`,

`I am enough.`,

`In the beginning it is you, in the middle it is you and in the end it is you.`,

`I love myself.`,

`I am present now.`,

`Inhale the future, exhale the past.`,

`This too shall pass.`,

`Yesterday is not today.`,

`The only constant is change.`,

`Onward and upward.`,

`I am the sky, the rest is weather.`,

]

var affirmation = [

`I forgive myself and set myself free.`,

`I believe I can be all that I want to be.`,

`I am in the process of becoming the best version of myself.`,

`I have the freedom & power to create the life I desire.`,

`I choose to be kind to myself and love myself unconditionally.`,

`My possibilities are endless.`,

`I am worthy of my dreams.`,

`I am enough.`,

`I deserve to be healthy and feel good.`,

`I am full of energy and vitality and my mind is calm and peaceful.`,

`Every day I am getting healthier and stronger.`,

`I honor my body by trusting the signals that it sends me.`,

`I manifest perfect health by making smart choices.`,

]

//querySelectors
var affirmationButton = document.querySelector(`#affirmation`)
var mantraButton = document.querySelector(`#mantra`)
var messageBox = document.querySelector(`.message-output-box`)
var photoBell = document.querySelector(`.photo`)
var viewMessageButton = document.querySelector(`.receive-message`)
var radios = document.querySelectorAll('input')
var inspirationalMessage = document.querySelector(".inspirational-message")
var hideLogo = document.querySelector(`.photo`)



//RANDOM Message VARIABLES
var randomMantra = mantra[getRandomIndex(mantra)];
var randomAffirmation = affirmation[getRandomIndex(affirmation)];

//Event Listeners
viewMessageButton.addEventListener(`click`, generateMessageHome);
hideLogoClick.addEventListener(`click`)

var newRandomMessage = new Message(randomMantra, randomAffirmation)
//Page View
function generateMessageHome() {
  var newRandomMessage = new Message(randomMantra, randomAffirmation)
  event.preventDefault()
  inspirationalMessage.innerText = ``
  // for (var i = 0; i < newRandomMessage.length; i++) {
      // inspirationalMessage.innerText = inspirationalMessage.innerText +
      // `<p class="inspirational-message">${mantra}</p>`
  if (affirmationButton.checked === true) {
    inspirationalMessage.innerText = getRandomIndex(affirmation)
  } else if (mantraButton.checked === true) {
    inspirationalMessage.innerText = getRandomIndex(mantra)
    hiddenLogo()
}
}

// function hiddenLogo() {
// if (inspirationalMessage === true) {
//   .svg = false;
// }
// }



function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}
