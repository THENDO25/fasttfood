const navbarLinks = document.querySelectorAll('.nav-link');
const orderNowButton = document.getElementById('ordernow');
const closeButton = document.querySelector('.popup-content');
const popup = document.querySelector('.popup');

// Event Listeners
navbarLinks.forEach(link => {
    link.addEventListener('click', toggleSection);
});

orderNowButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Functions
function toggleSection(event) {
    const sectionName = event.target.getAttribute('data-section');

    // Hide all sections
    document.querySelectorAll('.menu-items > div').forEach(section => {
        section.style.display = 'none';
    });

    // Show all menu items for the selected section
    document.querySelectorAll(`.${sectionName}`).forEach(item => {
        item.style.display = 'block';
    });

    // Add the active class to the selected link
    navbarLinks.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

function openPopup() {
    popup.style.display = 'flex';
}

function closePopup(event) {
    if (event.target === closeButton) {
        popup.style.display = 'none';
    }
}