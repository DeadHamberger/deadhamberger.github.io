
function ticketPrompt() {
	var clss = Math.floor((Math.random() * 10000000) + 1);
	clss == clss + '';
	var ticketType = window.prompt("Ticket type:", "perm, enav");
	var seat = window.prompt("Seat ID:", "A1");
	var name = window.prompt("Name:", "Jonathan")
	var finalText = "Ticket type: " +ticketType+ " - Seat ID: " + seat + " - Name: "+name; 
	var prevText =document.getElementById("tickets").innerHTML;
	document.getElementById("tickets").innerHTML = prevText + '<div id=' + clss +' class="black-border"> <p></p> <div>'+finalText+"</div><button id='check-in-btn' class='ui-button' onclick=checkIn(" + clss + ")>Check in/Seated</button>";

}

function checkIn(button_clss) {

	var test = document.getElementById(button_clss).innerHTML = "<p></p>Checked In: ";
}