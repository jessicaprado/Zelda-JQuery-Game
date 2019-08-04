//functions in order of how they should work

function createCharacters() {
  //creates characters from list of character array.
  for (var i = 0; i < characterArray.length; i++) {
    var singleCharacterBlock = $('<button class="character ' + (characterArray[i].name).toLowerCase() +'">');
    singleCharacterBlock.attr('data-attack', characterArray[i].power);
    singleCharacterBlock.attr('data-health', characterArray[i].health);
    singleCharacterBlock.attr('data-name', characterArray[i].name);

    var characterName = $('<p class="name">' + characterArray[i].name + '</p>');
    var characterHealth = $('<p>Health: ' + characterArray[i].health + '</p>');
    var characterAttack = $('<p>Power: ' + characterArray[i].power + '</p>');
    var characterImg = $('<img src="assets/images/' + characterArray[i].image + '">')
    $(characterImg).appendTo(singleCharacterBlock);
    $(characterName).appendTo(singleCharacterBlock);
    $(characterHealth).appendTo(singleCharacterBlock);
    $(characterAttack).appendTo(singleCharacterBlock);
    $(singleCharacterBlock).appendTo('.allCharacters');
  }
}

function createAttackButton() {
  var attackButton = $('<button>')
  attackButton.addClass('attack').html('Attack');
  attackButton.appendTo('#attack')
}

function createResetButton(buttonText) {
  var resetButton = $('<button class="reset">');
  resetButton.text(buttonText)
  $(resetButton).appendTo('#results');
}

function startGame(hero, enemy) {
  var heroHealth = $(hero).attr('data-health');
  var heroAttack = $(hero).attr('data-attack');
  var enemyHealth = $(enemy).attr('data-health');
  var enemyAttack = $(enemy).attr('data-attack');

  heroHealth = ((heroHealth) -= (enemyAttack));
  enemyHealth = ((enemyHealth) -= (heroAttack));

  $(hero).attr('data-health', heroHealth);
  $(enemy).attr('data-health', enemyHealth);


  $('#heroStatus').html('<h4>Hero Health: '+ heroHealth +'</h4>')
  $('#enemyStatus').html('<h4>Enemy Health: '+ enemyHealth +'</h4>')

  if ((heroHealth === 0) && (enemyHealth > 0)) {
    $('.attack').empty();
    $('#heroStatus').empty();
    $('#enemyStatus').empty();
    $('#results').html('<h4>You Lost</h4>');
    createResetButton("Try Again")
  } else if ((heroHealth > 0 ) && (enemyHealth < 0)) {
    $('.attack').empty();
    $('#heroStatus').empty();
    $('#enemyStatus').empty();
    $('#results').html('<h4>You Won</h4>');
    createResetButton("Play Again")
  }
}

function resetGame() {
  count = 0
  isHeroChosen = false;
  isEnemyChosen = false;
  selectedHero;
  selectedEnemy;

  $('.character').removeClass('disable');
  $('.allCharacters button').empty();
  $('#myCharacter').empty();
  $('#enemies').empty();
  $('#results').empty();

  createCharacters()
}
