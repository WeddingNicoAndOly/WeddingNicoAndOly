// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Display the loading animation and pop-up
    showLoadingAnimation();

    // Handle the confirmation when the user clicks on the pop-up buttons
    document.getElementById("confirm-yes").addEventListener("click", function() {
        // Redirect to home.html
        window.location.href = "home.html";
    });

    document.getElementById("confirm-no").addEventListener("click", function() {
        // Remove the loading animation and pop-up
        hideLoadingAnimation();
    });
});

// Function to display the loading animation and pop-up
function showLoadingAnimation() {
    // Display the loading animation (you can customize this according to your preference)
    // For example, you can show a spinner or progress bar.

    // Display the pop-up
    document.getElementById("loading-popup").style.display = "block";
}

// Function to hide the loading animation and pop-up
function hideLoadingAnimation() {
    // Hide the loading animation

    // Hide the pop-up
    document.getElementById("loading-popup").style.display = "none";
}

// Get modal and related elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Add event listeners to gallery images
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

// Close modal when clicking on the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
