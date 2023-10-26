//footer quotes
 function writeRandomQuote() {
    let quotes = new Array();
    quotes[0] = "'Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.' - Steve Jobs";
    quotes[1] = "'If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.' -James Cameron";
    quotes[2] = "'Life is either a daring adventure or nothing at all.' -Helen Keller";
    quotes[3] = "'Life is never fair, and perhaps it is a good thing for most of us that it is not.' -Oscar Wilde";
    quotes[4] = "'Life is trying things to see if they work.'-Ray Bradbury";
    quotes[5] = "'The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.' -Barack Obama";
    let rand = Math.floor(Math.random()*quotes.length);
    document.querySelector('.quoteParagraph').innerText = (quotes[rand])
  }
  writeRandomQuote();

//scroll to top arrow
let bttn = document.querySelector(".backToTop")

window.onscroll = function() {scrollFunction()}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    bttn.style.display = "block";
  } else {
    bttn.style.display = "none";
  }
}

bttn.addEventListener("click", backToTop)

function backToTop(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
