var Rover = {
	position: [0,0],
	direction: 'N'
}

function moveRover(rover){
	switch(Rover.direction){
		case 'N':
		Rover.position[0]++;
		break;
		case 'S':
		Rover.position[0]--;
		break;
		case 'E':
		Rover.position[1]++;
		break;
		case 'W':
		Rover.position[1]--;
		break;

	}

}
function viewPosition(rover){
	document.getElementById("posX").innerHTML = Rover.position[0];
	document.getElementById("posY").innerHTML = Rover.position[1];
}
function clickUP(rover){
	Rover.direction = 'N';
	moveRover();
	viewPosition();
}
function clickDown(rover){
	Rover.direction = 'S';
	moveRover();
	viewPosition();
}
function clickLeft(rover){
	Rover.direction = 'W';
	moveRover();
	viewPosition();
}
function clickRight(rover){
	Rover.direction = 'E';
	moveRover();
	viewPosition();
}
