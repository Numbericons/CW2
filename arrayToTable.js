function toTable(data, headers = false, index = false) {
  const start = headers ? 1 : 0;
  let str = "<table>";
  let headText = "<thead><tr>";
  let bodyText = "<tbody>";

  if (headers) {
    if (index) headText += `<th></th>`;
    data[0].forEach(txt => {
      headText += `<th>${txt}</th>`;
    });
    str = str + headText + "</tr></thead>";
  }
  
  for (let z=start; z < data.length;z++) {
    let rowText = "<tr>";
    if (index) rowText += `<td>${z}</td>`; //might be one off, does this accurately give all indices?
    for (let q=0; q < data[z].length;q++) {
      let txt = data[z][q] === 'None' ? "" : data[z][q];
      rowText += `<td>${txt}</td>`;
    }
    bodyText += rowText + "</tr>";
  }
  str = str + bodyText + "</tbody>";

  return str + "</table>";
}

//start with string of the table
//check if header
//if so, add thead and iterate through first element of data to become header cells
//set start so that if header, can start the body at index 1
// set up body string, if index add a <tr> with that index
//   might be off by one depending on how we need to account for headers/start
//iterate through each sub array element from data and build <tr>'s


Expected: '<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>'
tead got: '<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td>              <td>sit amet</td></tr></tbody></table>'