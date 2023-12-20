document.getElementById("guestForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a new message element
    const newMessage = document.createElement("div");
    newMessage.className = "container border border-dark rounded bg-light";
    newMessage.style.marginTop = "20px"; // Add top margin
    newMessage.innerHTML = `
        <div class="row border-bottom border-dark" style="background-color: #2B3035; color: white;">
            <div class="col font-weight-bold">${name}</div>
            <div class="col">
            <div class="col">
            <div class="float-right" style="margin-left: 50%; margin-right: 0;">${new Date().toLocaleString()}</div>
        </div>
            </div>
        </div>
        <div class="row">
            <div class="col">${message}</div>
        </div>
        <div class="row border-top border-dark">
        </div>
    `;

    // Append the message element to the container
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.appendChild(newMessage);

    // Reset the form
    document.getElementById('guestForm').reset();
});
