$(document).ready(function(){

	characterSelected = false;
	enemySelected = false;




//Choosing character and moving unselected to enemies
$(".characters").on("click", "button", function(){		
	$(this).detach(".characters").appendTo("#myCharacter");
	$("#myCharacter").siblings().appendTo("#enemies")
	characterSelected = true;
	console.log(characterSelected);


$(".characters").on("click", "button", function() {
	if(characterSelected = true) {
		$(this).detach().appendTo("#defender");
		enemySelected = true;
		console.log(enemySelected);		
	};

$("#attack").on("click", function (){
	if((characterSelected) = true && (enemySelected = true)) {
		console.log("awesome");
	}
})
});

});


	

	
	
//end of script tag. DO NOT TOUCH
});



	
	
