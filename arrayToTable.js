function toTable(data, headers = false, index = false) {
  let str = "<table>";
  const start = headers ? 1 : 0;

  if (headers) {
    let headText = "<thead><tr>";
    data[0].forEach(txt => {
      headText += `<th>${txt}</th>`;
    }
    str = str + headText + "</tr></thead>";
  }



  return str + "</table>";
}

//start with string of the table
//check if header
//if so, add thead and iterate through first element of data to become header cells