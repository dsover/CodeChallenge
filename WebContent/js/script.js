$(document).ready(function(){
	$("#flip").submit(function( event){
	    event.preventDefault();
	     var output = flip($("#flipIn").val());
		$("#flipOut").text(output);
	});
	$("#count").submit(function( event){
	    event.preventDefault();  
	    var output = count($("#countIn").val());
		$("#countOut").html(output);
	});
	function flip(string){
	    return string.split("").reverse().join("");
	}
	function count(string){
		var count = {};
		var stringArr = string.split("");
		$.each(stringArr, function(){
			var char = this[0];
			count[char] = count[char]+1 || 1;
		});
		countOut = "<pre>"+JSON.stringify(count,undefined,2)+"</pre>";
		console.log(countOut);
		return countOut;	
	}	
});




function clk(id){
	$('#content').fadeOut(250,function(){
		var sections = ["stringFlip","charCount"];	
		
		sections.forEach(function(section){
			var sectionDiv = section+"Div";
			var sectionLi = section+"li";
			
			if(!(id == section)){
				$("#"+sectionLi).removeClass("active");
				$("#"+sectionDiv).removeClass("activeDiv");
				$("#"+sectionDiv).addClass("inactiveDiv");
			}
			if(id == section){
				$("#"+sectionLi).addClass("active");
				$("#"+sectionDiv).removeClass("inactiveDiv");
				$("#"+sectionDiv).addClass("activeDiv");
			}
	
		});
	});
	$('#content').fadeIn(350);
	
}