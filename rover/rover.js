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
	console.log("Rover position X is: " + Rover.position[0]);
	console.log("Rover position Y is: " + Rover.position[1]);
}

moveRover();
viewPosition()
moveRover();
moveRover();
moveRover();
viewPosition();