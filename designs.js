  // creating a variable to access table tag
  let table = document.getElementById( 'pixelCanvas' );

  // assigning chosen color to colorPicker
  let colorPicker = document.getElementById( 'colorPicker' );

  function makeGrid(tableHeight, tableWidth) {

    // creating custom table with width and height given in the form
    for (let i=0; i<tableHeight; i++)
    {
      // creating a table row, <tr> element
      let row = document.createElement('tr');

      for (let j=0; j<tableWidth; j++)
      {
        // creating a <td> element, cell
        let col = document.createElement('td');
        // appending it to tr element
        row.appendChild(col);
      }

      //appending tr element to the table
      table.appendChild(row);
    }

    //printing size of the grid to console
    console.log( 'inside makeGrid: ', tableWidth, tableHeight );
    
  };

  document.getElementById('colorPicker').addEventListener('change', function() {
    colorPicker = document.getElementById('colorPicker');
  } );

  document.getElementById('pixelCanvas').addEventListener('click', function(evt) {
    evt.target.style.backgroundColor = colorPicker.value;
  }, false );

  document.getElementById('pixelCanvas').addEventListener('dblclick', function(evt) {
    console.log( 'double click' );
    evt.target.style.backgroundColor = '';
  }, false );

  document.getElementById( 'submitButton' ).addEventListener( 'click', function(evt){
    evt.preventDefault();
    // assigning height and width from input form
    const tableHeight = document.getElementById( 'inputHeight' ).value;
    const tableWidth = document.getElementById( 'inputWidth' ).value;
    makeGrid(tableHeight,tableWidth);
  } );
