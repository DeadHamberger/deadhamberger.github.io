
function ticketPrompt() {
	var clss = Math.floor((Math.random() * 10000000) + 1);
	clss == clss + '';
	var ticketNum = window.prompt("Ticket number:", "146462");
	var name = window.prompt("Name:", "Edwardo")
	var finalText = "Ticket Number: " +ticketNum+ " - Name: " + name; 
	var prevText =document.getElementById("tickets").innerHTML;
	document.getElementById("tickets").innerHTML = prevText + '<div id=' + clss +' class="black-border"> <p></p> <div>'+finalText+"</div><button id='check-in-btn' class='ui-button' onclick=checkIn(" + clss + ")>Check in</button>";

}

function checkIn(button_clss) {

	var test = document.getElementById(button_clss).innerHTML = "<p></p>Checked In";

}