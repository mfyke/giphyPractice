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
// $.getJSON(query, function(data) {
// 	console.log(data);
// });
// display gifs and start as stills
var generateGifs = function() {
	var query = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + topic + "&limit=15&offset=0&lang=en"
	$.getJSON(query, function(data) {
		console.log(data);
	});
}	
// when gif image is clicked play the gif

// type something in search bar to make a new button

