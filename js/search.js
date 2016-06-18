function search(term){
$.ajax({
  url: "newsfeed.xml",
  datatype: "xml",
  
  success: function(data){
    
    $(data).find("wannfeed item").each(function(){
      var results = "<button class='btn btn-lg btn-danger' id="clear">Clear Search</div>";
      var id = "search-" + $(this).attr("id");
      var idStem = $(this).attr("id");
          var header = $(this).find("header").text();
          $(this).find("story").each(function(){
            var searchId = $(this).attr("id");
            var title = $(this).find("title").text();
            var desc = $(this).find("desc p").html();
            pos = term.test(String(desc));
            if(pos = true){
              results = results + "<div class='"+storyId+"'><strong>"+title+"</strong><br>"+desc+"</div>";
            }
            else{
              pos = term.test(title);
              if(pos == true){
                results = results + "<div class='"+storyId+"'><strong>"+title+"</strong><br>"+desc+"</div>";
              }
            }
          });
        $(".results").append("<div class='panel panel-primary' id='"+id+"'><div class='panel-heading'><a href='"+idStem+"' stlye="text-decoration:none;">"+header+"</a></div><div class='panel-body'>"+results+"</div><div class='panel-footer'><em>Search result for <strong>"+term+"</strong>.</em></div></div>")

    });
  },
  
  error: function(data){
    $(".results").append("<div class='panel panel-danger'><div class='panel-heading'><h2>Sorry, there was an error fetching the feed</h2></div><div class='panel-body'><p>Sorry, looks like I've done something wrong! Please try again later. If this error persists please report an issue <a href='https://github.com/W-A-N-N/W-A-N-N.github.io'>here</a></p></div></div>")
  },
});
}
