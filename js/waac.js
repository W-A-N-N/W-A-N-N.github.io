$.ajax({
  url: "alliances.xml",
  datatype: "xml",
  
  success: function(data){
    $(data).find("alliances alliance").each(function(){
     var rep = $(this).attr("rep").value();
     var local = $(this).attr("based");
     var name = $(this).find("name").text();
     var leader = $(this).find("leader").text();
     if(7 >= rep > 5){
       var color = "warning"
     } else if(10 >= rep > 7){
       var color = "danger"
     } else if(5 >= rep > 3){
       var color = "primary"
     } else if(3 >= rep > 0){
       var color = "success"
     }
     $(".list").append("<div class='panel panel-"+color+"' id='"+leader+"'><div class='panel-heading'><h3>"+name+"</h3><p>"+leader+"</p></div></div> ")
    }
  }
