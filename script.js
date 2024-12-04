// Get elements
const galleryImages = document.querySelectorAll('.page-thumbnail');
const fullPageView = document.querySelector('.full-page-view');
const fullImage = document.getElementById('full-image');
const backButton = document.getElementById('back-button');

// Add click event to gallery images
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        const fullImageSrc = image.getAttribute('data-full');
        fullImage.src = fullImageSrc; // Set full image src
        fullPageView.classList.remove('hidden'); // Show full page view
    });
});

// Add click event to back button
backButton.addEventListener('click', () => {
    fullPageView.classList.add('hidden'); // Hide full page view
    fullImage.src = ''; // Clear full image src
});

// font switch for user with local storage
// Get references to the dropdown and body
const fontSelector = document.getElementById('font-selector');
const body = document.body;

// Load font from localStorage or set default
const savedFont = localStorage.getItem('selectedFont') || 'Poppins';
body.style.setProperty('--dynamic-font', savedFont);  // Set the font variable
fontSelector.value = savedFont; // Set the dropdown to the saved font

// Event listener for font selection
fontSelector.addEventListener('change', () => {
    const selectedFont = fontSelector.value;
    body.style.setProperty('--dynamic-font', selectedFont); // Apply the selected font

    // Save font choice to localStorage
    localStorage.setItem('selectedFont', selectedFont);
});
