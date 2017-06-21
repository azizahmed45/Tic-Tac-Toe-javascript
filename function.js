/*
Tic Tac Toe Game with JavaScript
*/



var p1 = [], p2 = [];		//Player1 and player2 clicked array
var p1c = 0, p2c = 0;		//Player 1 and player2 click count
var count = 0;				//Total click count
var index = [];				//Array of clicked button position



//Function for every click
function tap(n){
	if(check(n) && !wincheck(p1) && !wincheck(p2)){
		if(count % 2 == 0){
			p1[p1c] = n;
			p1c++;
			document.getElementById(n).src = "round.png";
			document.getElementById('p').innerHTML = "Player X's turn";
		}
		else{
			p2[p2c] = n;
			p2c++;
			document.getElementById(n).src = "cross.png";
			document.getElementById('p').innerHTML = "Player O's turn";
		}
		index[count] = n;
		count++;
	}
	
	
	if(p1.length>=3 && wincheck(p1)){
		document.getElementById('result').innerHTML = "Player O Wins";
		console.log('p1 wins');
	}
	
	
	else if(p2.length>=3 && wincheck(p2)){
		document.getElementById('result').innerHTML = "Player X Wins";
		console.log('p2 wins');
	}
	
	else if(index.length>=9){
		document.getElementById('result').innerHTML = "Game tied";
		document.getElementById('p').innerHTML = "";
	}

}




//Reset function
function reset(){
	p1 = [];
	p2 = [];
	p1c = 0;
	p2c = 0;
	count = 0;
	index = [];
	document.getElementById(11).src = "int.png";
	document.getElementById(12).src = "int.png";
	document.getElementById(13).src = "int.png";
	document.getElementById(21).src = "int.png";
	document.getElementById(22).src = "int.png";
	document.getElementById(23).src = "int.png";
	document.getElementById(31).src = "int.png";
	document.getElementById(32).src = "int.png";
	document.getElementById(33).src = "int.png";
	document.getElementById('p').innerHTML = "Player O's turn";
	document.getElementById('result').innerHTML = "";
	
}





//Check Is the button is clicked once?
function check(m){
	for(var i = 0, j = 0; i<9; i++){
		if(index[i] == m){
			return j++;
			break;
		}
		
	}
	if(j == 0){
		return true;
	}
	else{
		return false;
	}
	
}




//Check with compare availabe win options
function findcheck(a, b){ 
	var i,j,k=0;
	for(i=0;i<a.length;i++){
		for(j=0; j<b.length; j++){
			if(a[i] == b[j]){
				k++;
			
			}
		}
	}
	if(k>=3) return true;
	else return false;
}




//Check available win options
function wincheck(l){
	var win1 = [11,12,13];
	var win2 = [21,22,23];
	var win3 = [31,32,33];
	var win4 = [11,21,31];
	var win5 = [12,22,32];
	var win6 = [13,23,33];
	var win7 = [21,22,23];
	var win8 = [11,22,33];
	var win9 = [13,22,31];
	
	if(findcheck(l,win1)) return true; 
	else if(findcheck(l,win2)) return true;
	else if(findcheck(l,win3)) return true;
	else if(findcheck(l,win4)) return true;
	else if(findcheck(l,win5)) return true;
	else if(findcheck(l,win6)) return true;
	else if(findcheck(l,win7)) return true;
	else if(findcheck(l,win8)) return true;
	else if(findcheck(l,win9)) return true;
	else  return false;
	
}
