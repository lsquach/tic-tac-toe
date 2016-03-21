console.log("JS is working");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

  var turn = 0;
  var icon = 'X';
  var player = 'Player 1';
  var gameOn = true;
  //Clicking event
  // Switch from X to O, draws and increment the turn counter
  $('.box').click(function handleTurn(){
    $('h2').text("Player 2 turn");
    if($(this).html()==="" && gameOn === true){
      if (turn%2!==0) {
        icon = 'O';
        player = 'Player 2';
        $('h2').text("Player 1 turn");
      } else {
        icon = 'X';
        player = 'Player 1';
      }
      $(this).html(icon);
      checkWin();
      turn++;
      console.log(turn);
    }
    else if (gameOn === true){
      alert("Pick another square!");
    }
    else {
      alert("Click on Reset to start a new game.");
      $('h2').text(player + ' won!');
    }
  });
  //Restarts the game
  $('.btn').click(function handleReset(){
    $('.box').empty();
    $('.box').removeClass('win');
    $('h2').text("Player 1 goes first");
    turn = 0;
    gameOn = true;

  });
  //Checks for possible wins
  function checkWin(){
    if ($('#item1').html()===icon && $('#item2').html()===icon && $('#item3').html()===icon ) {
      $('#item1, #item2, #item3').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item4').html()===icon && $('#item5').html()===icon && $('#item6').html()===icon ) {
      $('#item4, #item5, #item6').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item7').html()===icon && $('#item8').html()===icon && $('#item9').html()===icon ) {
      $('#item7, #item8, #item9').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item7').html()===icon && $('#item4').html()===icon && $('#item1').html()===icon ) {
      $('#item7, #item4, #item1').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item8').html()===icon && $('#item5').html()===icon && $('#item2').html()===icon ) {
      $('#item8, #item5, #item2').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item9').html()===icon && $('#item6').html()===icon && $('#item3').html()===icon ) {
      $('#item9, #item6, #item3').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item7').html()===icon && $('#item5').html()===icon && $('#item3').html()===icon ) {
      $('#item7, #item5, #item3').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    } else if ($('#item9').html()===icon && $('#item5').html()===icon && $('#item1').html()===icon ) {
      $('#item9, #item5, #item1').addClass('win');
      $('h2').text(player + ' won!');
      gameOn = false;
    }
    //Checks for draw
    else if (turn === 8) {
      $('h2').text("Game Over");
      alert("It's a draw!");
      gameOn = false;
    }
  }
});
