function spanGen(char) {
  let color;
  switch(char) {
    case 'F':
      color = 'pink';
      break;
    case 'L':
      color = 'red';
      break;
    case 'R':
      color = 'green';
      break;
    default:
      color = 'orange';
  }

  return `<span style="color: ${color}">${char}</span>`
}

function highlight(code) {
  let retStr = '';

  code.split('').forEach(char => {
    if ('()'.includes(char)) retStr += char;
    retStr += spanGen(char);
  })

  return retStr;
}

// String should only contain: F, L, R, 0-9 and ()'s
//iterate across input code string
//  if char is not a paren () then use helper to return span tag with that element inside
//