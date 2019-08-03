$(document).ready(function(){

	createCharacters()

	$(document).on('click', '.character', function(){
		if(isHeroChosen === false) {
			selectedHero = this;
			isHeroChosen = true;
			$('#myCharacter').append('<h3>You have chosen ' + ($(selectedHero).attr('data-name')) + ' as your hero</h3>')
			$(selectedHero).appendTo('#myCharacter')

		} else if(isHeroChosen === true)  {
			selectedEnemy = this;
			isEnemyChosen = true;
			$('#enemies').append('<h3>You have chosen ' + ($(selectedEnemy).attr('data-name')) + ' as your opponent</h3>')
			$(selectedEnemy).appendTo('#enemies');
			if ((isHeroChosen === true) && (isEnemyChosen === true)) {
				//disable other character from being chosen
				$('.allCharacters button').addClass('disable');
				createAttackButton();
			}
		}
	});

	$(document).on('click', '.attack', function(){
		startGame(selectedHero, selectedEnemy)
	})

	$(document).on('click', '.reset', function(){
		resetGame()
	})


});
