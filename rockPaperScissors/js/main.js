let botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;


function playerThrowsRock(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	console.log(botsWeapon);
}
function playerThrowsScissors(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	console.log(botsWeapon);
}
function playerThrowsPaper(){
	getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	console.log(botsWeapon);
}


function getRandomWeapon(){
	let randomNumber=Math.random();
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}else{
		botsWeapon="rock"
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("Tie game.");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}


function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Stand tall, Guardian. This battle is lost, but there will be others.");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Good work, Guardian. Your light is strong.");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}
