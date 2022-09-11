// MESSAGE CLASS
class Message {
  constructor(mantra, affirmation) {
    this.id = Date.now();
    this.mantra = mantra;
    this.affirmation = affirmation;
  }
}




//MANTRA VARIABLE ARRAY
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

`My mind is brilliant. My body is healthy. My spirit is tranquil.`,

`I create my own path and walk it with joy.`,

`My positive thoughts guide me to new heights.`,

`I am conquering my fears and becoming stronger each day.`,

`I will have a good day, because it’s my choice.`,

`I am not afraid to be wrong.`,

`My body is a temple. I keep my temple clean.`,

`I hold the key to better health through eating better and exercise.`,

`Good health is a practice, and I have patience.`,

`I listen to my body and give it what it needs.`,

`Every cell in my body is alive and beautiful.`,

`My potential is limitless, and I choose where to spend my energy.`,

`While I support others, I also ask for help when needed.`,

`I surrender to the flow and have faith in the ultimate good.`,

`I will speak with confidence and self-assurance.`,

`My commitment to myself is unbreakable.`,
]

// AFFIRMATION VARIABLE ARRAY
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

`I am successful.`,

`I am confident.`,

`I am powerful.`,

`I am strong.`,

`I am getting better and better every day.`,

`All I need is within me right now.`,

`I wake up motivated.`,

`I am an unstoppable force of nature.`,

`I am a living, breathing example of motivation.`,

`I am living with abundance.`,

`I am having a positive and inspiring impact on the people I come into contact with.`,

`I am inspiring people through my work.`,

`Today is a phenomenal day.`,

`I am filled with focus.`,
]

//querySelectors
var affirmationButton = document.querySelector(`#affirmation`)
var mantraButton = document.querySelector(`#mantra`)
var messageBox = document.querySelector(`.message-output-box`)
var photoBell = document.querySelector(`.photo`)
var viewMessageButton = document.querySelector(`.receive-message`)
var radios = document.querySelectorAll('input')
var inspirationalMessage = document.querySelector(".inspirational-message")
var meditateImg = document.querySelector(`.meditate-img`)
var mainPage = document.querySelector(`.main-page`)
var signInButton = document.querySelector(`.signin-button`)
var signInName = document.querySelector(`.signin-name`)
var loginGreeting = document.querySelector(`.greeting`)
var nameBox = document.querySelector(`.name-container`)

//PAGE VIEW
var mainPage = document.querySelector(`.main-page`)
var loginPage = document.querySelector('login-page')


//RANDOM MESSAGE VARIABLES
var randomMantra = mantra[getRandomIndex(mantra)];
var randomAffirmation = affirmation[getRandomIndex(affirmation)];

//Event Listeners
viewMessageButton.addEventListener(`click`, generateMessageHome);
// signInButton.addEventListener(`click`, logIn);


// HIDDEN LOGO ADD TO HOMEPAGE
meditateImg.classList.remove(`hidden`);
// mainPage.classList.add("hidden")


//LOGIN PAGE


// mainPage.classList.add("hidden");







//MAIN PAGE VIEW
function generateMessageHome() {
  var newRandomMessage = new Message(randomMantra, randomAffirmation)
  inspirationalMessage.innerText = ``
  if (affirmationButton.checked === true) {
    inspirationalMessage.innerText = getRandomIndex(affirmation)
    meditateImg.classList.add(`hidden`);
  } else if (mantraButton.checked === true) {
    inspirationalMessage.innerText = getRandomIndex(mantra)
    meditateImg.classList.add(`hidden`);
}
}

function logIn(){
//
//   console.log(signInName)
// var signInButton = document.querySelector(`.signin-button`)

event.preventDefault()
nameBox.classList.add('hidden')
loginGreeting.innerText = `<h4 class='greeting'>${signInName}</h4>`
console.log(greeting)
}




// RANDOM INDEX MESSAGE VARIABLE
function getRandomIndex(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}
