$(document).ready(function() {




$('#btn1').click(function() {
  var cssDiv1 = {
    'font-size': '1.5rem',
    'background-color': 'blue',
    'color': 'white' 
  };

  console.log(cssDiv1);
  
  $('#div1').removeClass(div1);  
  $('#div1').css(cssDiv1);
})  



$('#btn2').click(function() {
  var cssDiv2 = {
    'font-size': '1rem',
    'background-color': 'gray',
    'color': 'red' 
  };
  console.log(cssDiv2);
  
  $('#div2').removeClass(div2);  
  $('#div2').css(cssDiv2);
})  

$('#btn3').click(function() {
  var cssDiv3 = {
    'font-size': '.75rem',
    'background-color': 'green',
    'color': 'white' 
  };

  console.log(cssDiv3);
   
  $('#div3').removeClass(div3);  
  $('#div3').css(cssDiv3);
})  






})