$(document).ready(function() {

  
  //variabelen opslaan in var, verwerken in css en console log
  $('#btnB').click(function() {
   var inputB = parseInt($('#divWidth').val());
   console.log(inputB);
   var cssDivB = {
    'width': inputB+'px',
    'overflow': 'hidden'  
    };
    console.log(cssDivB)
  
  //check of waarden nummers zijn, ifelse toevoegen
    
    if(!$.isNumeric($('#divWidth').val())) {
      alert("Alleen getallen gebruiken!");
      return false;
      }
      else
      { 
        $('.divTekst').css(cssDivB);
       
      }
  

  })
  //variabelen opslaan in var, verwerken in css en console log
  $('#btnH').click(function() {
    var inputH = parseInt($('#divHeigth').val());
    console.log(inputH);
    var cssDivH = {
     'max-height': inputH+'px',
     'overflow': 'hidden'    
     };
     console.log(cssDivH)
   
   //check of waarden nummers zijn, ifelse toevoegen
 
     if(!$.isNumeric($('#divHeigth').val())) {
       alert("Alleen getallen gebruiken!");
       return false;
       }
       else
       { 
         $('.divTekst').css(cssDivH);
        
       }
   
 
   })






});
