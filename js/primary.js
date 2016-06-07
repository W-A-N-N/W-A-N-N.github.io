
$.ajax({
  url: "newsfeed.xml",
  datatype: "xml",
  
  success: function(data){
    $(data).find("wannfeed item").each(function(){
      var header = $(this).find("header").text();
      var story = 0
      $(data).find("wannfeed item story").each(function(){
        var title = $(this).find("title").text();
        var desc = $(this).find("desc").text();
        story = story + 1
      });
      if(story > 1){
        
      }
      else{
        $(".feed").prepend
      }
    })
  }
  
  error: function(data){
    $(".feed").append("<h2>Sorry, there was an error fetching the feed</h2>")
  }
})
