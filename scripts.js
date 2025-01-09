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

const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImg');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = image.src;
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});
