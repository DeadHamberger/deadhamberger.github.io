var threshold_upper = 70;
var threshold_lower = 50;


$(function() {

	var utc = new Date().toJSON().slice(0,10);//Gets the mm-dd-yy date
	document.getElementById('date').value = utc;//Sets the datye field to the date


	// any time the status of a radio changes, do something.
	$( ".answer" ).change(function() {
		//calculate();//runs the calculate functions

		//console.log( $(this).val() );

		var ques_num = 0; // number of questions
		var total = 0; //created the variable likert_total
		var average = 0; //CReates the variable average

		// loop thru all the radios and log their values in the console
		$('.answer').each(function(){
			ques_num++;
			total = total + parseInt($(this).val());
		});

		average = Math.round(total / ques_num);
		$('#go_no_go').text(average);
		$('#go_no_go').removeClass("yes no maybe");
		if (average>=threshold_upper) {
			$('#go_no_go').addClass("yes");
		}
		if (average>threshold_lower && average<threshold_upper) {
			$('#go_no_go').addClass("maybe");
		}		
		if (average<=threshold_lower) {
			$('#go_no_go').addClass("no");
		}		

	});

});
