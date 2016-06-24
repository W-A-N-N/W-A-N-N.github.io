		
		
function search(term){

 		
 function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
	}
	
 	var term = String(getUrlVars()["search"]);
 	var clean = term.replace(/\+/g," ");
 	if(clean !== null){
 		var turn = search(clean);
 	}

