
// Simple JavaScript for enhancing user interactivity

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("input[type='submit']");

    form.addEventListener("submit", function(event) {
        let valid = true;
        const inputs = form.querySelectorAll("input[required], textarea[required]");

        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                valid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (!valid) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        }
    });

    submitButton.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#0056b3";
    });

    submitButton.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#007BFF";
    });
});
