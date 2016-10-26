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
	var count = 0
	var hero = {};
	var enemy = {};
	var characterSelected = false;
	var enemySelected = false;
	var heroStatus = "";
	var enemyStatus = "";

function reset(){
	$(".choices").css({"pointer-events": "auto"});
	$(".enemies").appendTo(".allCharacters").addClass("characters").css({"background-color" : "white", "border" : "solid green 3px"});;
	$(".hero").appendTo(".allCharacters").addClass("characters");
	$("button").removeClass("enemies hero villian");
	$(".characters").children(':last').detach("heroHealth");

};	

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
	};

// Game begins
$(".choices").on("click", function() {
	if (characterSelected == false) {
		$(this).removeClass("characters").detach(".allCharacters").appendTo("#myCharacter").addClass("hero");
		$(this).children(':last').addClass("heroHealth");
		chooseHero();		
	} else {		
		$(this).detach().appendTo("#defender").removeClass("characters").addClass("villian");
		$(this).children(':last').addClass("villianHealth");
		chooseEnemy();
		$(".characters").css("pointer-events", "none");
	}
	});

//activating the attack button and begining the battle.
$("#attack").on("click", function (){
	if((characterSelected = true) && (enemySelected = true)) {
		count++;
		heroPower = (8*(count));
		heroStatus = ((hero.health) -= (enemy.power));
		enemyStatus = ((enemy.health) -=(heroPower));
		console.log(enemy);
	
	$(".herohealth").html(heroStatus);
	$(".villianHealth").html(enemyStatus);
	$("#status").html("<p>You attacked " + enemy.name + "for " + heroPower + " damage.<br>" + enemy.name + " attacked you back for " + enemy.power + " damage<p>");
	
	if (heroStatus <= 0) {
		$("#status").html("<p>You've been defeated! Game Over!<p>");
		$("<button>reset</button>").appendTo("#status").addClass("reset");
		characterSelected = false;
		$(".choices").css("pointer-events", "none");
		$("#attack").css("pointer-events", "none");		
		$(".reset").on("click", function() {
			reset();
		});

	} else if (enemyStatus <=0) { 
		
		$(".villian").hide().removeClass("#defender").addClass("dead");
		$(".characters").css({"pointer-events": "auto"});
		$(enemy).remove();
		(enemySelected == false);

		chooseEnemy();
		$("#status").html("<p>Choose another enemy to fight.<p>");
			if((enemyStatus <=0) && (enemy == {})) {
				$("#status").html("<p>You won!<p>");
				$("<button>reset</button>").appendTo("#status");		
			};
	}
	}}); //<- 98
			
		


		

	
//});	
//end of script tag. DO NOT TOUCH
});