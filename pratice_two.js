const numberOfGames = 3;
const pointsMike = prompt("Introduce the points for Mike Team");
const pointsJonh = prompt("Introduce the points for John Team");
const pointsMary = prompt("Introduce the points for Mary Team");

const splitedMikePoints = pointsMike.split(" ");
const splitedJonhPoints = pointsJonh.split(" ");
const splitedMaryPoints = pointsMary.split(" ");

var sumMikePoints = 0;
var sumJonhPoints = 0;
var sumMaryPoints = 0;
for(var i = 0; i< 3; i++) {    
    sumMikePoints += splitedMikePoints[i];
    sumJonhPoints += splitedJonhPoints[i];
    sumMaryPoints += splitedMaryPoints[i];
}
const averageMike = sumMikePoints/numberOfGames;
const averageJonh = sumJonhPoints/numberOfGames;
const averageMary = sumMaryPoints/numberOfGames;

var averageValues = [ 
    {name: 'Mike', point: averageMike}, 
    {name: 'Jonh', point: averageJonh},
    {name: 'Jonh', point: averageMary}
];
var x;
var maxAverage = 0; 
var winner = { name: "Draw" , 
               points: averageMike
            };
for(var x=0; x<3;x++) {    
    var average = averageValues[x];
    console.log(average);
    if(maxAverage < average.point)
    {           
        maxAverage = x.point;
        winner = x;
    }
}

maxAverage === 0 ? console.log("A DRAW HAPPEN") : console.log("Winner is "+winner.name + " With "+winner.points +" Points" );

