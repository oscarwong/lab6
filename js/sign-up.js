//signup.js 
// add your JavaScript code to this file

//document is ready for manipulation
$(function(){
	var stateSelect = $('select[name="state"]');
	var option;
	var idx;
	var state;

	for (idx = 0; idx < usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}

	$('.signup-form').submit(function(){
		var signupForm = $(this);
		var addr1Input = signupForm.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		if (addr1Value && addr1Value.trim().length > 0) {
			var zip1Input = signupForm.find('input[name="zip"]');
			var zip1Value = zip1Input.val();
			if (zip1Value && zip1Value.trim().length > 0) {
				return true;
			} else {
				alert("You must enter a zip code.");
				return false;
			}
		} else {
			alert("You must enter an address.")
			return false;
		}
	});

	$('.cancel-signup').click(function(){
		 $('.cancel-signup-modal').modal();
	});

	$('.btn-abandon').click(function(){
    	window.location = 'http://www.google.com';
	});
});