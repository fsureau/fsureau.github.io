/**
* OnLoaded 
**/
$(document).ready(function() {

	// TEMP
	$(".toRemove").remove();
	// END TEMP
	
	init();
	
	$(".linkFormation").click(function() {
    	showSection("formation");
    });
    
	$(".linkCompetences").click(function() {
    	showSection("competences");
    });
    
	$(".linkExperiences").click(function() {
    	showSection("experiences");
    });
    
	$(".linkContact").click(function() {
    	showSection("contact");
    });
});

/**
* Initialization
**/
function init() {
	showSection("experiences");
	//showSection("contact");
}

/**
* Show section and hide others
**/
function showSection(sectionName) {

	if(sectionName == "formation"){
		$("section#formation").show();
		$(".linkFormation").addClass('active');	
	}
	else{
		$("section#formation").hide();
		$(".linkFormation").removeClass('active');	
	}
	
	if(sectionName == "competences"){
		$("section#competences").show();
		$(".linkCompetences").addClass('active');	
	}
	else{
		$("section#competences").hide();
		$(".linkCompetences").removeClass('active');		
	}
	
	if(sectionName == "experiences"){
		$("section#experiences").show();
		$(".linkExperiences").addClass('active');	
	}
	else{
		$("section#experiences").hide();
		$(".linkExperiences").removeClass('active');		
	}
	
	if(sectionName == "contact"){
		$("section#contact").show();
		$(".linkContact").addClass('active');	
	}
	else{
		$("section#contact").hide();
		$(".linkContact").removeClass('active');		
	}
	
	$("#mobileCollapsedMenu").collapse('hide');
}