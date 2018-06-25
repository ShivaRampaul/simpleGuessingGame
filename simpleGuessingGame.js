var guess = 0;
var ans = Math.ceil(Math.random() * 100);

while(guess >= 0 ) {
	guess = prompt("Guess a number between 1 - 100. Enter a negative number to quit.");
	if(Number(guess) === ans) {
		alert("You win!");
	} else if(guess < 0) {
		break;
	} else if(guess < ans) {
		alert("Too low, guess again");
	} else {
		alert("Too high, guess again");
	}
}