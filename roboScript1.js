function spanGen(str) {
  let color;
  switch(str[0]) {
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

  return `<span style="color: ${color}">${str}</span>`
}

function highlight(code) {
  const digits = "0123456789"
  let retStr = '';
  let subStr = '';

  code.split('').forEach((char,i) => {
    if (code[i] === code[i+1] || (digits.includes(code[i]) && digits.includes(code[i+1]))) {
      subStr += char
      return;
    }
    if ('()'.includes(char)) {
      retStr += subStr + char;
    } else {
      retStr += spanGen(subStr + char);
    }
    subStr = '';
  })

  return retStr;
}

// String should only contain: F, L, R, 0-9 and ()'s
//iterate across input code string
//  if char is not a paren () then use helper to return span tag with that element inside
//need to allow for multiple chars to be within a single span

// Expected: '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
// tead got: '<span style="color: pink">F</span><span style="color: pink">F</span><span style="color: pink">F</span><span style="color: green">R</span><span style="color: orange">3</span><span style="color: orange">4</span><span style="color: orange">5</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">L</span><span style="color: red">L</span>'

Expected: '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">345</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'
tead got: '<span style="color: pink">FFF</span><span style="color: green">R</span><span style="color: orange">3</span><span style="color: orange">4</span><span style="color: orange">5</span><span style="color: pink">F</span><span style="color: orange">2</span><span style="color: red">LL</span>'

Expected: '<span style="color: green">RRRRR</span>(<span style="color: pink">F</span><span style="color: orange">45</span><span style="color: red">L</span><span style="color: orange">3</span>)<span style="color: pink">F</span><span style="color: orange">2</span>'
tead got: '<span style="color: green">RRRRR</span>(<span style="color: orange">(</span><span style="color: pink">F</span><span style="color: orange">45</span><span style="color: red">L</span><span style="color: orange">3</span>)<span style="color: orange">)</span><span style="color: pink">F</span><span style="color: orange">2</span>'