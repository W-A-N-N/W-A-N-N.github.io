
$.ajax({
  url: "newsfeed.xml",
  datatype: "xml",
  
  success: function(data){
    $(data).find("wannfeed item").each(function(){
      var header = $(this).find("header").text();
      var story = 0
      var id = $(this).attr("no");
     
        				$(".feed").append("<div id='"+id+"' class='panel panel-default'></div>");
        				$("#" + id).append("<div class='panel-heading'><h2>"+header+"</h2></div>");
                $(this).find("story").each(function(){
                  var title = $(this).find("title").text();
                  var desc = $(this).find("desc p").html();
                  story = story + 1
                  $("#" + id).append("<div class='panel-body'><strong>"+title+"</strong><br>"+desc+"</div>");
      });
        				$("#" + id).append("<div class='panel-footer'><em>Stay up to date on the forums and all WA news</em></div>");
    });
  },
  
  error: function(data){
    $(".feed").append("<h2>Sorry, there was an error fetching the feed</h2>")
  },
});
