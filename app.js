// Get references to elements
const productButtons = document.querySelectorAll('.product-button');
const mainContent = document.querySelector('main');
const displayText = document.getElementById('display-text');
const backButton = document.getElementById('back-button');

// Add event listeners to product buttons
productButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get button text
    const buttonText = button.textContent;

    // Hide main content and display the button text
    mainContent.style.display = 'none';
    displayText.textContent = buttonText;
    displayText.style.display = 'block';

    // Show the back button
    backButton.style.display = 'flex';

    // Change the URL to include the button text
    window.history.pushState({}, '', `/${buttonText}`);
  });
});

// Add event listener to the back button
backButton.addEventListener('click', () => {
  // Show the main content again
  mainContent.style.display = 'block';
  displayText.style.display = 'none';

  // Hide the back button
  backButton.style.display = 'none';

  // Revert the URL to the previous state
  window.history.back();
});
