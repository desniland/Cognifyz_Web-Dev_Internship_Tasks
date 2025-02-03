
// Create an alert box that displays a greeting message based on the current time.
const sendButton = document.querySelector('.form-button .btn');

// Function to get a greeting message based on the current time
function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
        return "Good Morning!";
    } else if (currentHour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

// Adds a click event listener to the button
sendButton.addEventListener('click', function () {
    // Change the button's background color when clicked
    sendButton.style.backgroundColor = '#e3dc05'; // gold color
    sendButton.style.transition = 'background-color 0.3s ease'; // Smooth transition

    // Get the greeting message based on the current time
    const greetingMessage = getGreeting();

    // Display an alert box with the greeting message
    alert(`${greetingMessage} Thank you for reaching out! Your message has been sent.`);
});
