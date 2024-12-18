// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("bookingForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function(event) {
      // Prevent the form from reloading the page
      event.preventDefault();

      // Get values from the form
      const fullName = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const destination = document.getElementById("destination").value;
      const travelDate = document.getElementById("travelDate").value;
      const numTravelers = document.getElementById("numTravelers").value;
      const specialRequests = document.getElementById("specialRequests").value;

      // Clear previous output
      output.innerHTML = '';

      // Create the content to display
      output.innerHTML = `
          <h2>Booking Successful!</h2>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Travel Date:</strong> ${travelDate}</p>
          <p><strong>Number of Travelers:</strong> ${numTravelers}</p>
          <p><strong>Special Requests/Additional Info:</strong> ${specialRequests}</p>
      `;

      // Display the output
      output.style.display = "block";
  });
});
