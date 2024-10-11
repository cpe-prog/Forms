let loginForm = document.getElementById("loginForm");

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let address = document.getElementById("address");

let table = document.getElementById("outputTable");
let newRow = table.insertRow(table.rows.length);
let actionButton =
	'<button onClick="editData(this)">Edit</button>' +
	'<button onclick="deleteData(this)">Delete</button>';

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (
		firstName.value == "" &&
		lastName.value == "" &&
		email.value == "" &&
		address.value == ""
	) {
		window.alert("Empty Form");
	} else {
		newRow.insertCell(0).innerHTML = firstName.value;
		newRow.insertCell(1).innerHTML = lastName.value;
		newRow.insertCell(2).innerHTML = email.value;
		newRow.insertCell(3).innerHTML = address.value;
		newRow.insertCell(4).innerHTML = actionButton;
	}
	clearData();
});

function clearData() {
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("email").value = "";
	document.getElementById("address").value = "";
}

let addForm = document.getElementById("addForm");

let editTemplate = `
         <form id="editFormData" action="">
				<div id="formContainer">
					<label  for="nameInput"> FirstName: </label>
					<input value={firstName.value} type="text" id="firstName" placeholder="Enter Name..." />
					<label for="emailInput"> LastName: </label>
					<input value={lastName.value} type="text" id="lastName" placeholder="Enter Email..." />
					<label for="numberInput"> Email: </label>
					<input value={email.value} type="text" id="email" placeholder="Enter Mobile Details..." />
					<label for="address"> Address: </label>
					<textarea value={address.value} id="address" placeholder="Enter Address..."></textarea>
					<br />
					<button id="submit">Save</button>
				</div>
			</form>
`;
function editData(button) {
	loginForm.style.visibility = "hidden";
	addForm.innerHTML = editTemplate;
}

function deleteData(button) {
	let row = button.parentNode.parentNode;
	row.parentNode.removeChild(row);
}
