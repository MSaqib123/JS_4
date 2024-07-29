
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

    //1. Loop over the game.scored array and print each player name to the console, 
            //along with the goal number (Example: "Goal 1: Lewandowski")
    for(let [i,player] of game.scored.entries()){
            console.log(`Goal ${i+1} : ${player}`)
    }

    
    //2. Use a loop to calculate the average odd and log it to the console 
            //(We already studied how to calculate averages, you can go check if you don't remember)

    const odds = Object.values(game.odds);
    let average = 0;
    for (const odd of odds) average += odd;
    average /= odds.length;
    console.log(average);
    
    // 3.
    for (const [team, odd] of Object.entries(game.odds)) {
            const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
            console.log(`Odd of ${teamStr} ${odd}`);
    }
    

    // BONUS
    // So the solution is to loop over the array, 
            //and add the array elements as object properties, and then increase 
            //the count as we encounter a new occurence of a certain element
  const scorers = {};
  for(let player of game.scored) 
    scorers[player] ? scorers[player]++ : (scorers[player] = 1)
  console.log(scorers)
    
