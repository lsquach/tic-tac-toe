console.log("JS is working");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var turn = 0;
  var icon = 'X';
  var player = 'Player 1';
  //clicking event. Switch from X to O and draw the corresponding icon every turn, plus incrementing the turn counter
  $('.box').click(function handleTurn(){
    if($(this).html()===""){
      if (turn%2!==0) {
        icon = 'O';
        player = 'Player 2';
      } else {
        icon = 'X';
        player = 'Player 1';
      }
      $(this).html(icon);
      checkWin();
      turn++;
    }
    else {
      alert("Pick another square!");
    }
  });
  //restart the game
  $('.btn').click(function handleReset(){
    $('.box').empty();
    turn = 0;
  });
  //check if any of the winning possibilities are true
  function checkWin(){
    if ($('#item1').html()===icon && $('#item2').html()===icon && $('#item3').html()===icon ) {
      $('#item1, #item2, #item3');
      alert(player + ' won!');
    } else if ($('#item4').html()===icon && $('#item5').html()===icon && $('#item6').html()===icon ) {
      $('#item4, #item5, #item6');
      alert(player + ' won!');
    } else if ($('#item7').html()===icon && $('#item8').html()===icon && $('#item9').html()===icon ) {
      $('#item7, #item8, #item9');
      alert(player + ' won!');
    } else if ($('#item7').html()===icon && $('#item4').html()===icon && $('#item1').html()===icon ) {
      $('#item7, #item4, #item1');
      alert(player + ' won!');
    } else if ($('#item8').html()===icon && $('#item5').html()===icon && $('#item2').html()===icon ) {
      $('#item8, #item5, #item2');
      alert(player + ' won!');
    } else if ($('#item9').html()===icon && $('#item6').html()===icon && $('#item3').html()===icon ) {
      $('#item9, #item6, #item3');
      alert(player + ' won!');
    } else if ($('#item7').html()===icon && $('#item5').html()===icon && $('#item3').html()===icon ) {
      $('#item7, #item5, #item3');
      alert(player + ' won!');
    } else if ($('#item9').html()===icon && $('#item5').html()===icon && $('#item1').html()===icon ) {
      $('#item9, #item5, #item');
      alert(player + ' won!');
    }
    //check if all the squares are taken
    else if (turn === 8) {
      alert("It's a draw!");
    }
  }
});

//user clicks
//if cell is empty
//mar x
// else if filled, do nothing
