let audio = document.getElementById("themeSong")
audio.volume = 0.2

document.addEventListener("keydown", moveFrank =>{
  if(moveFrank.code === "ArrowUp"){
    document.querySelector(".frank").classList.add("moveUp")
    document.querySelector(".charlie").classList.remove("hide")
    document.querySelector(".taglineOne").classList.remove("hide")
    document.getElementById("themeSong").play()
  }else if (moveFrank.code === "ArrowDown") {
      document.querySelector(".frank").classList.add("moveDown")
      document.querySelector(".mac").classList.remove("hide")
      document.querySelector(".taglineFour").classList.remove("hide")
      document.getElementById("themeSong").play()
  }else if (moveFrank.code === "ArrowLeft") {
    document.querySelector(".frank").classList.add("moveLeft")
    document.querySelector(".dee").classList.remove("hide")
    document.querySelector(".taglineTwo").classList.remove("hide")
    document.getElementById("themeSong").play()
  }else if(moveFrank.code === "ArrowRight"){
    document.querySelector(".frank").classList.add("moveRight")
    document.querySelector(".dennis").classList.remove("hide")
    document.querySelector(".taglineThree").classList.remove("hide")
    document.getElementById("themeSong").play()
  }else{
    alert("Press an Arrow Key")
  }
})

document.querySelectorAll(".reset").forEach(tag => tag.addEventListener("click", backToStart))

function backToStart(click){

  location.reload()
}
