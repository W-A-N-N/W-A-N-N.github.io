		
		
function search(term){
	 $.ajax({ 
   url: "newsfeed.xml", 
   datatype: "xml", 
    
   success: function(data){ 
     $(data).find("wannfeed item").each(function(){ 
       var header = $(this).find("header").text(); 
       var story = 0 
       var id = $(this).attr("no"); 
       var regTerm = new RegExp(term, 'i');
       $(".results").append("<div id='"+id+"' class='panel panel-primary'></div>"); 
       $("#" + id).append("<div class='panel-heading'><h2>"+header+"</h2></div>"); 

                 $(this).find("story").each(function(){ 
                 var title = $(this).find("title").text(); 
                 var desc = $(this).find("desc p").html(); 
                  story = story + 1 
                  var title_contains = regTerm.test(title);
                  var desc_contains = regTerm.test(desc);
                  
                 if(title_contains === true || desc_contains === true){
                 $("#" + id).append("<div class='panel-body'><strong>"+title+"</strong><br>"+desc+"</div>");
                 } 
       }); 
         				$("#" + id).append("<div class='panel-footer'><em>Stay up to date on the forums and all WA news</em></div>"); 
     }); 
  }, 
   
   error: function(data){ 
     $(".feed").append("<h2>Sorry, there was an error fetching the feed</h2>") 
   }, 
 }); 

 		
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
 	},

