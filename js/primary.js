
$.ajax({
  url: "newsfeed.xml",
  datatype: "xml",
  
  success: function(data){
    
  }
  
  error: function(data){
    $(".feed").append("<h2>Sorry, there was an error fetching the feed</h2>")
  }
})
