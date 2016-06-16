function getUrlVars() {
var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
vars[key] = value;
});
return vars;
}

var searchterm = getUrlVars()["search"]

$(".feed").empty()
$(".feed").prepend(searchterm)
