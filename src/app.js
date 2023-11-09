//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managername, managerage, currentteam, trophieswon){
return (managername, managerage, currentteam, trophieswon)
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  var object = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2]
  };
  return object;
};

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let playerDebut = players.filter((player) => 
                        player.debut == year);
  return playerDebut;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let playerPosition = players.filter((player) => 
                        player.position == position)
  return playerPosition;
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  let awardsforeach = players.filter((player) => {
    let confirm = false;
    for (let i = 0; i < player.awards.length; i++){
      if (player.awards[i].name == awardName){
        confirm = true;
      }
      return confirm;
    }
  })
  return awardsforeach;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  let numberofawardsforeach = players.filter((player) => {
    let noOfTimes = 0;
    for (let i = 0; i < player.awards.length; i++){
      if (player.awards[i].name == awardName){
        noOfTimes += 1;
      }
    }
    return noOfTimes;
  })
  return numberofawardsforeach;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName, country){
  let oneswhowon = filterByAward(awardName);
  let foreachcountry = oneswhowon.filter((player) => 
                      player.country == country);
  return foreachcountry;                    
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  let filtering = []
  if (player.team == team && player.age <= age && player.awards.length >= 1){
    filtering.push(player);
  };
return filtering;
}
//Progression 9 - Sort players in descending order of their age
function sortByAge(){
  let decreasingorder = players.sort((a, b) => b.age - a.age );
  return decreasingorder;
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  let newfilter = players.filter((player) => {
    return player.team == team;
  })
  return newfilter.sort((a, b) => b.awards.length - a.awards.length);
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  let final = players.filter((player) => {
    let noOfTimes = 0;
    for (let i = 0; i < player.awards.length; i++){
      if (player.awards[i].name == awardName){
        noOfTimes += 1;
      }
    } 
  return player.country == country, noOfTimes;
  })
  return final.sort((a, b) => a.name.localeCompare(b.name));
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  let final2 = players.filter((player) => 
                     player.age > age);
  final2.sort((a, b) => a.name.localeCompare(b.name))
  for (let i = 0; i < final2.length; i++){
    player[i].awards.sort((a, b) => b.awards.year - a.awards.year);
  }
}