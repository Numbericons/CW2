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
    let idx = headers ? z : z + 1;
    if (index) rowText += `<td>${idx}</td>`;
    for (let q=0; q < data[z].length;q++) {
      let txt = data[z][q] === null ? "" : data[z][q];
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


// Expected: '<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>'
// tead got: '<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td>              <td>sit amet</td></tr></tbody></table>'

// Expected: '<table><tbody><tr><td>1</td><td>1</td><td>2</td><td>3</td></tr><tr><td>2</td><td>4</td><td>5</td><td>6</td></tr><tr><td>3</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>'
// tead got: '<table><tbody><tr><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><td>1</td><td>4</td><td>5</td><td>6</td></tr><tr><td>2</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>'


// Expected: '<table><thead><tr><th>id</th><th>name</th><th>price</th><th>quantity</th></tr></thead><tbody><tr><td>24351</td><td>pen</td><td>2.41</td><td>500</td></tr><tr><td>    </td><td>pencil</td><td>0.99</td><td>25</td></tr><tr><td>63401</td><td>grizzly bear</td><td>    </td><td>1</td></tr><tr><td>3532</td><td>rubber duck</td><td>5.45</td><td>24</td></tr><tr><td>1523</td><td>    </td><td>3</td><td>6.8</td></tr><tr><td>11765</td><td>caviar</td><td>67.95</td><td>    </td></tr></tbody></table>'
// tead got: '<table><thead><tr><th>id</th><th>name</th><th>price</th><th>quantity</th></tr></thead><tbody><tr><td>24351</td><td>pen</td><td>2.41</td><td>500</td></tr><tr><td>null</td><td>pencil</td><td>0.99</td><td>25</td></tr><tr><td>63401</td><td>grizzly bear</td><td>null</td><td>1</td></tr><tr><td>3532</td><td>rubber duck</td><td>5.45</td><td>24</td></tr><tr><td>1523</td><td>null</td><td>3</td><td>6.8</td></tr><tr><td>11765</td><td>caviar</td><td>67.95</td><td>null</td></tr></tbody></table>'