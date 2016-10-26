$(document).ready(function(){
	var link = {
		name: "Link",
		health: 120,
		power: 15
	};
	var zelda = {
		name: "Zelda",
		health: 100,
		power: 5		
	};

	var ganondorf = {
		name: "Ganondorf",
		health: 150,
		power: 20		
	};

	var ganon = {
		name: "Ganon",
		health: 180,
		power: 25		
	};

	var hero = {};
	var enemy = {};
	var characterSelected = false;
	var enemySelected = false;	

//function to select hero, and bring other divs to next section
function chooseHero(){
		if ($(".hero").hasClass(".link")) {
		hero = $(hero).extend(link);		
		}
		else if ($(".hero").hasClass("zelda")) {
		hero = $(hero).extend(zelda);		
		}
		else if ($(".hero").hasClass("ganondorf")) {
		hero = $(hero).extend(ganondorf);		
		}
		else if ($(".hero").hasClass("ganon")) {
		hero = $(hero).extend(ganon);		
		};
		console.log(hero);
		$(".characters").appendTo("#enemies").addClass("enemies").css({"background-color" : "red", "border" : "solid black 2px"});	
		characterSelected = true;				
};

//function to select enemy
function chooseEnemy () {
	if ($(".villian").hasClass("link")) {
		enemy = $(enemy).extend(link);
		}
	else if ($(".villian").hasClass("zelda")) {		
		enemy = $(enemy).extend(zelda);
		}
	else if ($(".villian").hasClass("ganon")) {	
		enemy = $(enemy).extend(ganon);
		}
	else if ($(".villian").hasClass("ganondorf")) {	
		enemy = $(enemy).extend(ganondorf);		
		};	
enemySelected = true;		
$(".characters").css("pointer-events", "none");
console.log(enemy);
	};

// Game begins
$(".choices").on("click", function() {
	if (characterSelected == false) {
		$(this).removeClass("characters").detach(".allCharacters").appendTo("#myCharacter").addClass("hero");
		chooseHero();		
	} else {
		$(this).detach().appendTo("#defender").removeClass("characters").addClass("villian");
		chooseEnemy();
	}

	});
	

//activating the attack button and begining the battle.
$("#attack").on("click", function (){

if((characterSelected = true) && (enemySelected = true)) {
	var heroPower = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
	var heroStatus = ((hero.health) -= (enemy.power));
	
		for(i =0; i<heroPower; i++) {
			var enemyStatus = ((enemy.health) -=(heroPower))
			console.log(enemyStatus);
		}
	
	if (heroStatus <= 0) {
		console.log("you lose");
	}

	

		
		console.log(heroStatus);
	
		
	}}); //<- 98
			
		

			//}
		//number of clicks * 8
		//$(".characters").css("pointer-events", "auto")
		

	
//});	
//end of script tag. DO NOT TOUCH
});