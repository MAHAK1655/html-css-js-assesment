// Greet the user
function greetUser() {
    const name = document.getElementById("nameInput").value.trim();
    const greeting = document.getElementById("greeting");
    
    if (name) {
        greeting.textContent = `Hello, ${name}`;
    } else {
        greeting.textContent = "Hello";
    }
}

// Change background color on box click
const boxes = document.querySelectorAll(".color-box");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        const color = box.getAttribute("data-color");
        box.style.backgroundColor = color;
    });
});
