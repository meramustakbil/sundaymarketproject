document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // Simulate form submission (Replace this with actual backend handling)
        document.getElementById("thankYouMessage").style.display = "block";

        // Optional: Clear form fields
        document.getElementById("contactForm").reset();
    });
});
