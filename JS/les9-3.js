$(document).ready(function() {
  
  //store text in var after button click
  $('#btn').click(function() {
    var addedMSG = $('#textInput').val();
    
  //log the created var  
    console.log(addedMSG);

  

  //add text to div  
    $('#dummyDiv').append("" + addedMSG); 
  
  
  });

  
});


