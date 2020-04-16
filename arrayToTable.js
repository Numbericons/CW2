function toTable(data, headers = false, index = false) {
  const start = headers ? 1 : 0;
  let str = "<table>";
  let headText = "<thead><tr>";
  let bodyText = "<tbody>";

  if (headers) {
    data[0].forEach(txt => {
      headText += `<th>${txt}</th>`;
    });
    str = str + headText + "</tr></thead>";
  }
  
  for (let z=start; z < data.length;z++) {
    if (index) bodyText += `<tr><td>${z}</td></tr>`; //might be one off, does this accurately give all index's?
    let rowText = "<tr>";
    for (let q=start; q < data[z].length;q++) {
      rowText += `<td>${data[z][q]}</td>`;
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