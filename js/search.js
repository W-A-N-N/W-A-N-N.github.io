		
		
function search(term){
		$.ajax({
  			url: "newsfeed.xml",
  			datatype: "xml",
  			success: function(data){
    				$(data).find("wannfeed item").each(function(){
    				var idStem = $(this).attr("id");
    				var id = "search-"+idStem;
				var results;
          			var header = $(this).find("header").text();
          			$(this).find("story").each(function(){
            				var storyId = $(this).attr("id");
            				var title = $(this).find("title").text();
            				var desc = $(this).find("desc p").html();
            				var clean_term = new RegExp(term, "i");
            				var pos = clean_term.test(String(desc));
            				if (pos = true) {
              					results = results + "<div class='"+storyId+"'><strong>"+title+"</strong><br>"+desc+"</div>";
            				} else {
              					pos = clean_term.test(title);
              					if(pos == true){
                					results = results + "<div class='"+storyId+"'><strong>"+title+"</strong><br>"+desc+"</div>";
              					}
              					else{
              						results = results + "?";
              					}
            				}
          			});
        			$(".results").append("<div class='panel panel-primary' id='"+id+"'><div class='panel-heading'><h2 color='white'><a href='"+idStem+"'>"+header+"</a></h2></div></div>")
        			$("#"+id).append("<div class='panel-body'>"+results+"</div>");
        			$("#"+id).append("<div class='panel-footer'><em>Search results for <strong>"+term+"</strong></em></div>");
    				});
    				if (results !== null){
  					return true;
  				} else {
  					return false;
				}
  			},
  
  			error: function(data){
				$(".results").append("<div class='panel panel-danger'><div class='panel-heading'><h2>Sorry, there was an error fetching the feed</h2></div><div class='panel-body'><p>Sorry, looks like I've done something wrong! Please try again later. If this error persists please report an issue <a href='https://github.com/W-A-N-N/W-A-N-N.github.io'>here</a></p></div></div>")
  			},
		});
}
 		
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
 	event.preventDefault();

