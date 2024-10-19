// Magic Button Functionality
document.getElementById("magicButton").addEventListener("click", function() {
    const messages = [
        "Hello, World!",
        "You clicked the button!",
        "Keep coding, you're doing great!",
        "JavaScript is fun!",
        "This is a simple but powerful app."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("output").innerText = messages[randomIndex];
});

// Todo List Functionality
const addTodoButton = document.getElementById("addTodoButton");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", function() {
    const task = todoInput.value.trim();
    if (task) {
        const listItem = document.createElement("li");
        listItem.innerText = task;
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click", function() {
            todoList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = "";
    }
});

// Calculator Functionality
document.getElementById("calculateButton").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        document.getElementById("sumOutput").innerText = `The sum is: ${sum}`;
    } else {
        document.getElementById("sumOutput").innerText = "Please enter valid numbers.";
    }
});

// Contact Form Functionality
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name && email && message) {
        document.getElementById("formOutput").innerText = `Thank you, ${name}! Your message has been sent.`;
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formOutput").innerText = "Please fill out all fields.";
    }
});