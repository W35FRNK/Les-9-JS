$(document).ready(function() {
    //store hex color in var after button click
  $('#btn').click(function() {
    var colorHex = $('#inputHex').val();
    
  //log the created var  
    console.log(colorHex);

  //create css in var for object 
    var cssDiv = {
      'font-size': '1.5rem',
      'background-color': colorHex  
    };
  
  //log the created css var  
    console.log(cssDiv);

  //add css to div  
    $('#dummyDiv').css(cssDiv); 
  });

  $('#darkMode').click(function() {
    var cssDivDark = {
      'color': 'white',
      'background-color': 'black'
    };

    $('#dummyDiv').css(cssDivDark);
  })

  $('#colorMode').click(function() {
    var cssDivColor = {
      'color': 'red',
      'background-color': 'aqua'
    };

    $('#dummyDiv').css(cssDivColor);
  })
})

  