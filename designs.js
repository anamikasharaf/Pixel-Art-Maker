
// collect form input
function formInput() {

  //accessing the form with name sizePicker
  const dimension = document.forms.sizePicker;

  //picking out the form data (height, width and color)
  const height = dimension.height;
  const width = dimension.width;
  const colorPicked = dimension.colorPick;

  //returning all form data
  const dataReturn = [height,width,colorPicked];
  return dataReturn;
  // alert(height);

}

// When size is submitted by the user, call makeGrid()

function makeGrid(formInput) {

  // calling formInput for form data
  const [ht,wt,coPic] = formInput();

  //accesing the table with id="pixelCanvas"
  const myCustomCanvas = document.querySelector('#pixelCanvas');

  // creating custom table with width and height given in the form
  for (let i=0; i<ht; i++)
  {
    // creating a table row, <tr> element
    let row = document.createElement("tr");

    for (let j=0; j<wt; j++)
    {
      // creating a <td> element, cell
      let cell = document.createElement("td");
      // appending it to the row
      row.appendChild(cell);
    }

    // adding the row to the table
    myCustomCanvas.appendChild(row);
  }

  // adding an eventlisten upon click on the grid
  myCustomCanvas.addEventListener('click', respondToClick(evt){
    evt.target.color = coPic;
  });

}
