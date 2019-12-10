
function dwarfRollCall(dwarves) {
  var rollCall = []
  for (let i=0; i<dwarves.length; i++) {
    rollCall.push(`${i+1}. ${dwarves[i]} `)
  }
  return rollCall.join('')
}

function summonCaptainPlanet(planeteerCalls){
  let upperCaseCalls = []
  for (let i=0; i<planeteerCalls.length; i++) {
    upperCaseCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return upperCaseCalls
}

function longPlaneteerCalls(words) {
  for (let i=0; i<words.length; i++) {
    if (words[i].length>4){
      return true
      }
      else return false
  }
}

function findTheCheese (array) {
  for (let i=0; i<array.length; i++) {
    if (array[i]==='gouda') {
      return 'gouda'
       }
    else if (array[i]==='camembert') {
      return 'camembert'
       }
    else if (array[i]==='cheddar') {
      return 'cheddar'
    }
    }
  return 'no cheese!'
}
