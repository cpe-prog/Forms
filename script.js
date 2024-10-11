let loginForm = document.getElementById("loginForm");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");

let button = document.getElementById("submit");
// button.disabled = true;

let table = document.getElementById("outputTable");
let newRow = table.insertRow(table.rows.length);

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (
		firstName.value === "" ||
		lastName.value === "" ||
		email.value === "" ||
		address.value === ""
	) {
		window.alert("Empty Form");
	}
	{
		newRow.insertCell(0).innerHTML = firstName.value;
		newRow.insertCell(1).innerHTML = lastName.value;
		newRow.insertCell(2).innerHTML = email.value;
		newRow.insertCell(3).innerHTML = address.value;
		newRow.insertCell(5).innerHTML =
			'<button onclick="editData(this)">Edit</button>' +
			'<button onclick="deleteData(this)">Delete</button>';
	}

	// loginForm.style.visibility = "hidden";
});

function deleteData(button) {
	// Get the parent row of the clicked button
	let row = button.parentNode.parentNode;

	// Remove the row from the table
	row.parentNode.removeChild(row);
}
