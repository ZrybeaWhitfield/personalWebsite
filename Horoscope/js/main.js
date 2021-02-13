document.querySelector("#aquarius").addEventListener("click", aquaHoro)
document.querySelector("#pisces").addEventListener("click", piscHoro)
document.querySelector("#aries").addEventListener("click", arieHoro)
document.querySelector("#taurus").addEventListener("click", taurHoro)
document.querySelector("#gemini").addEventListener("click", gemiHoro)
document.querySelector("#cancer").addEventListener("click", cancHoro)
document.querySelector("#leo").addEventListener("click", leoHoro)
document.querySelector("#virgo").addEventListener("click", virgHoro)
document.querySelector("#libra").addEventListener("click", librHoro)
document.querySelector("#scorpio").addEventListener("click", scorHoro)
document.querySelector("#sagittarius").addEventListener("click", sagiHoro)
document.querySelector("#capricorn").addEventListener("click", caprHoro)

// Helped by Shawn Charles line 15
document.querySelectorAll(".reset").forEach(tag => tag.addEventListener("click", backToStart))

function aquaHoro(click){
  document.querySelector(".aquarius").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function piscHoro(click){
  document.querySelector(".pisces").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}
function arieHoro(click){
  document.querySelector(".aries").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function taurHoro(click){
  document.querySelector(".taurus").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function gemiHoro(click){
  document.querySelector(".gemini").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function cancHoro(click){
  document.querySelector(".cancer").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}
function leoHoro(click){
  document.querySelector(".leo").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function virgHoro(click){
  document.querySelector(".virgo").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function librHoro(click){
  document.querySelector(".libra").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function scorHoro(click){
  document.querySelector(".scorpio").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}
function sagiHoro(click){
  document.querySelector(".sagittarius").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}

function caprHoro(click){
  document.querySelector(".capricorn").classList.toggle("hide")
  document.querySelector(".putAway").classList.add("hide")
}
function backToStart(click){
  document.querySelectorAll(".horoscope").forEach(tag => tag.classList.add("hide"))
  document.querySelector(".putAway").classList.toggle("hide")
}
