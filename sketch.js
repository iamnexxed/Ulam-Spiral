let spacing = 5;
let num = 1;
let state = 1;
let i = 0;
let points = [];

let numSteps = 1;

let col = 0;
let row = 0;

class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function setup() {
    createCanvas(1920, 1080);
    frameRate(60);
}

function isPrime(num)
{
	if(num < 2)
	return false;
	for(let j = 2; j <= sqrt(num); j++)
	{
		if(num % j == 0)
		 return false;
	}
	return true;
}

function draw() {
    translate(910, 540);
    background(10);
    stroke('purple'); // Change the color
    strokeWeight(5); // Make the points 10 pixels in size
   

   switch (state) {
   	case 0:
   		col++;
   		break;
   	case 1:
   		
		   row++;
   		break;
   	case 2:
   		col--;
   		break;
   	case 3:
   		
		   row--;
   		break;
   }

    
	 
    

	if (i == numSteps) {


		i = 0;
		
		state++;
		state %= 4;
		
		//console.log("Round counter : " + roundCounter);
		if (state == 1 || state == 3)
		{
			numSteps++;
		}
	
	} 
	i++;
	num++;

	// The coding train solution
	// if(i % numSteps == 0)
	// {
	// 	state = (state + 1) % 4;

	// 	roundCounter++;
	// 	if(roundCounter % 2 == 0)
	// 	{
	// 		numSteps++;
	// 	}
	// }

	// i++;

 	//console.log("Row : " + row + " Col : " + col);
	//console.log("State : " + state);
	
	if(isPrime(num))
	{
		points.push(new Point(row * spacing, col * spacing));
	}
 	

    for(let j = 0; j < points.length; j++)
    {
        point(points[j].x, points[j].y);
    }

    
    
     
}