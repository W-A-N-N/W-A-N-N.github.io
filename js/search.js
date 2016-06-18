function search(term){
$.ajax({
  url: "newsfeed.xml",
  datatype: "xml",
  
  success: function(data){
    $(data).find("wannfeed item").each(function(){
          var header = $(this).find("header").text()
          var desc = $(this).find("story desc p").html();
          pos = term.test(String(desc));
          if(pos = true){
            $(".results").append("<div class='panel panel-primary' id='"+id+"'><div class='panel-heading'></div><div class='panel-body'></div><div class='panel-footer'><em>Search result for <strong>"+term+"</strong>.</em></div></div>")
          }
    });
  },
  
  error: function(data){
    $(".results").append("<div class='panel panel-danger'><div class='panel-heading'><h2>Sorry, there was an error fetching the feed</h2></div><div class='panel-body'><p>Sorry, looks like I've done something wrong! Please try again later. If this error persists please report an issue <a href='https://github.com/W-A-N-N/W-A-N-N.github.io'>here</a></p></div></div>")
  },
});
}
