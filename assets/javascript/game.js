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


$(".allCharacters").on("click", "button", function chooseHero(){
//character options
	if ($(this).hasClass("link")) {
		$(".link").removeClass("characters").detach(".allCharacters").appendTo("#myCharacter").addClass("hero");
		hero = $(hero).extend(link);
		characterSelected = true;
		}
	else if 
		($(this).hasClass("zelda")) {
		$(".zelda").removeClass("characters").detach(".allCharacters").appendTo("#myCharacter").addClass("hero");
		hero = $(hero).extend(zelda);
		characterSelected = true;
		}
	else if 
		($(this).hasClass("ganon")) {
		$(".ganon").removeClass("characters").detach(".allCharacters").appendTo("#myCharacter").addClass("hero");
		hero = $(hero).extend(ganon);
		characterSelected = true;
		}
	else if 
		($(this).hasClass("ganondorf")) {
		$(".ganondorf").removeClass("characters").detach(".allCharacters").appendTo("#myCharacter").addClass("hero");
		hero = $(hero).extend(ganondorf);
		characterSelected = true;
		}
//take the other non-selected characters, moves them to an enemy div and changes colors to red
	$("#myCharacter").siblings().appendTo("#enemies").addClass("enemies")	
	$(".characters").css({"background-color" : "red", "border" : "solid black 2px"});	
		
}); //chooseHero function

//Choosing enemy.
$(".enemies").on("click", "button", function chooseEnemy() {
		if ($(this).hasClass("link")) {
		$(".link").detach().appendTo("#defender").removeClass("characters").addClass("villian");
		$(".characters").css("pointer-events", "none");
		enemy = $(enemy).extend(link);
		}
		else if ($(this).hasClass("zelda")) {
		$(".zelda").detach().appendTo("#defender").removeClass("characters").addClass("villian");
		$(".characters").css("pointer-events", "none");
		enemy = $(enemy).extend(zelda);
		}
		else if ($(this).hasClass("ganon")) {
		$(".ganon").detach().appendTo("#defender").removeClass("characters").addClass("villian");
		$(".characters").css("pointer-events", "none");
		enemy = $(enemy).extend(ganon);
		}
		else if ($(this).hasClass("ganondorf")) {
		$(".ganondorf").detach().appendTo("#defender").removeClass("characters").addClass("villian");
		$(".characters").css("pointer-events", "none");
		enemy = $(enemy).extend(ganondorf);

		}
		enemySelected = true;
		});//chooseEnemy function

//checks to see if user has selected their character
$(".choices").on("click", function() {
	if (characterSelected = false) {
		chooseHero();	
		} else if (characterSelected = true){
		chooseEnemy();
	}
});
	

//activating the attack button and begining the battle.
$("#attack").on("click", function (){
	if((characterSelected = true) && (enemySelected = true)) {
		console.log(hero.power);
		console.log(enemy.power);
	}}); //<- 98
			
		//number of clicks * 8
		//$(".characters").css("pointer-events", "auto")







		



			



	

	
//});	
//end of script tag. DO NOT TOUCH
});