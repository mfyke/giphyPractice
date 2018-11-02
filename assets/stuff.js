var key = "VrQFXYVTwGnFT8z6FXdyBRJzsGaSLVCl";
var topics = ["overwatch", "world of warcraft", "hearthstone", "league of legends", "diablo 3"];
var topic;


$(document).ready(function() {
	generateButtons();
});
// generate buttons when the page loaded with the topics that we have preset
var generateButtons	= function() {
	$("#buttonsArea").empty();
	for (var i=0; i<topics.length; i++) {
		var button = $("<button>").attr("id", topics[i]).attr("onClick", "search(this)").addClass("btn btn-primary").text(topics[i]);
		$("#buttonsArea").append(button);
	}
	
}
// when a button is clicked make an api term with the text of the button
var search = function(element) {
	topic=element.id;
	generateGifs();
}
// display gifs and start as stills
var generateGifs = function() {
	var query = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + topic + "&limit=15&offset=0&lang=en"
	$.getJSON(query, function(res) {
		console.log(res);
		console.log(res.data.length);
		$("#gifsArea").empty();
		for(var i=0;i<res.data.length;i++) {
			var badge = $("<div>").addClass("col-xs-3");
			var gifImg = $("<img>").addClass("img-responsive").attr("data-still", res.data[i].images.fixed_height_still.url).attr("data-animate", res.data[i].images.fixed_height.url).attr("src", res.data[i].images.fixed_height_still.url).attr("onClick", "play(this)");
			var rating =$("<h1>").text(res.data[i].rating);
			$(badge).append(gifImg).append(rating);
			$("#gifsArea").append(badge);
		}
	});
}	
// when gif image is clicked play the gif
var play = function(element) {
	if(element.dataset.still == element.src) {
		element.src=element.dataset.animate;
	}
	else {
		element.src=element.dataset.still;
	}
}
// type something in search bar to make a new button
$( "#searchBar" ).submit(function( event ) {
	event.preventDefault();
  	topics.push($("#searchTerm").val().trim());
  	$("#searchTerm").val("");
  	generateButtons();
});
