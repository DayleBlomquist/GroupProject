"use strict"; // interpret document contents in JavaScript strict mode


	function Validate(form) {
    if (form.Email.value.length === 0) {
        alert("Please enter a Name");
        return false;
    }
    return true;
}
}

