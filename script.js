const button = document.getElementById('myButton');

// 2. DOM Property Method
button.onclick = function() {
    alert('Button clicked . (DOM Property)');
};

let btn = document.getElementById('thirdButton');
let output = document.getElementById('output');

btn.addEventListener('click', function() {
    output.textContent = 'Button clicked . addEventListener method\n';
});

// different events
let input = document.getElementById('inputBox');

// keydown event
input.addEventListener('keydown', function(event) {
    console.log(event.key + ' key pressed');});

// focus event
input.addEventListener('focus', function() {
    input.style.background = 'lightblue';});

// blur event
input.addEventListener('blur', function() {
    input.style.background = 'yellow';});

// dark mode
function ToggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// drag and drop

let dragItem = document.getElementById('dragitem');
let dropZone = document.getElementById('dropzone');

dragItem.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('id', event.target.id);
});

dropzone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropzone.addEventListener('drop', function(event) {
    event.preventDefault();
    let id = event.dataTransfer.getData('id');
    dropzone.appendChild(document.getElementById(id));
    dropzone.style.background = 'lightgreen';
});

// validate form

function validateemail() {

    let format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return format.test(email);
}

function validatepassword() {
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
}

function validatesignup() {
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let email = document.getElementById('email').value.trim();

    if (username === '' || password === '' || email === '') {
        alert('All fields are required!');
        return false;
    }

    if(!validateemail(email)) {
        alert('Invalid email format!');
        return false;
    }

    if(!validatepassword(password)) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
        return false;
    }

    alert('Signup successful!');
    return true;

}
