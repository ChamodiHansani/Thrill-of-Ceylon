function validateForm() {
			var name = document.forms["myform"]["name"];
			var email = document.forms["myform"]["email"];
			var feedback = document.forms["myform"]["feedback"];
			// Remove previous error messages
			removeErrorMessages();
	
			// Validate Full Name
			if (name.value.trim() === "") {
				alert("*Please enter your full name.");
				displayErrorMessage(name, "*Please enter your full name");
				return false;
			}
			// Validate email address
			if (email.value.trim() === "") {
				alert("*Please enter your email address.");
				displayErrorMessage(email, "*Please enter your email address");
				return false;
			}
			// Validate feedback
			if (feedback.value.trim() === "") {
				alert("*Please enter your feedback.");
				displayErrorMessage(feedback, "*Please enter your feedback");
				return false;
			}
				// Form submission successful
				showThankYouMessage();
				return false; // Prevent form submission
		}
		
	//Display validation error message
		function displayErrorMessage(field, message) {
			var errorMessage = document.createElement("div");
			errorMessage.className = "error-message";
			errorMessage.textContent = message;
			field.parentNode.insertBefore(errorMessage, field.nextSibling);
			field.classList.add("error");
		}
	//remove the error message
		function removeErrorMessages() {
			var errorMessages = document.querySelectorAll(".error-message");
			errorMessages.forEach(function (errorMessage) {
				errorMessage.parentNode.removeChild(errorMessage);
			});
	
			var fields = document.querySelectorAll("input, textarea");
			fields.forEach(function (field) {
				field.classList.remove("error");
			});
		}

		function showThankYouMessage() {
		var formSection = document.getElementById("feedback-form-section");
		formSection.classList.add("hide");

		var thankYouMessage = document.createElement("p");
		thankYouMessage.textContent = "Thank you for your feedback! ";
		thankYouMessage.classList.add("thankYouMessage"); // Add the correct class name
		formSection.parentNode.insertBefore(thankYouMessage, formSection.nextSibling);
	}