  // creating tbody element
  const tbody = document.createElement( 'tbody' );
  // adding tbody element to "pixelCanvas" table
  document.getElementById( 'pixelCanvas' ).appendChild( tbody );

  // assigning chosen color to colorPicker
  let colorPicker = document.getElementById( 'colorPicker' );

  function makeGrid(tableHeight, tableWidth) {

    //creating empty grid first
    let grid = '';

    // creating custom table with width and height given in the form
    for (let i=0; i<tableHeight; i++)
    {
      // creating a table row, <tr> element
      grid += '<tr>';

      for (let j=0; j<tableWidth; j++)
      {
        // creating a <td> element, cell
        grid += '<td></td>';
      }

      //closing the row
      grid += '</tr>';
    }

    //print console to check
    console.log( 'inside makeGrid: ', tableWidth, tableHeight );
    //adding the grid to tbody
    document.getElementsByTagName('tbody')[0].innerHTML = grid;
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
