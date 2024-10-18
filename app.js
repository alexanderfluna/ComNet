document.querySelectorAll('.product-button').forEach(button => {
  button.addEventListener('click', () => {
    // Hide all elements under the navbar
    document.querySelector('.main-content').style.display = 'none';
    
    // Show the back button
    const backButton = document.querySelector('.back-button');
    backButton.style.display = 'block';
    
    // Change URL
    const buttonText = button.innerText.toLowerCase().replace(/\s+/g, '-');
    window.history.pushState({}, '', `/${buttonText}`);
    
    // Display the button's text in the center of the screen
    const message = document.createElement('div');
    message.className = 'message';
    message.style.textAlign = 'center';
    message.style.fontSize = '36px';
    message.style.marginTop = '100px';
    message.innerText = button.innerText;
    
    document.body.appendChild(message);
  });
});

// Add event listener for the back button
document.querySelector('.back-button').addEventListener('click', () => {
  // Remove the message and show the main content again
  const message = document.querySelector('.message');
  if (message) {
    message.remove();
  }
  
  document.querySelector('.main-content').style.display = 'block';
  
  // Hide the back button
  document.querySelector('.back-button').style.display = 'none';
});
