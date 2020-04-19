function calculateDamage(yourType, opponentType, attack, defense) {
  const typeTable = { 
    'fire': {
      'strong': ['grass'],
      'weak': ['water']
    },
    'water': {
      'strong': ['fire'],
      'weak': ['grass', 'electric']
    },
    'grass': {
      'strong': ['water'],
      'weak': ['fire']
    },
    'electric': {
      'strong': ['water'],
      'weak': []
    }
  }
  let effectiveness = 1;

  if (yourType === opponentType) {
    effectiveness = .5;
  } else {
    if (typeTable[yourType]['strong'].includes(opponentType)) effectiveness = 2;
    if (typeTable[yourType]['weak'].includes(opponentType)) effectiveness = .5;
  }

  return 50 * (attack / defense) * effectiveness;
}


//build an object whos keys are the attacker type
//  when referencing the obj w/ at attacker type, returns an object with strong and weak keys
//     pointing to arrays of types that the attacker type is strong and weak against
//       check if one of these arrays includes the defender (opponent) type and create effectiveness variable
//         if attacker and defender types are the same, the effectiveness will be poor (.5)

//damage equation: 50 * (attack / defense) * effectiveness

//fire > grass
// fire < water
// fire = electric
// water < grass
// water < electric
// grass = electric