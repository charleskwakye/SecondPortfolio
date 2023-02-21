const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const navbarMenu = document.querySelector('#navbar-cta');

navbarToggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navbarMenu.classList.toggle('hidden');
});

// Get the current URL
const currentUrl = window.location.href;

// Get the links in the navigation bar
// const homeLink = document.getElementById('home-link');
//get element by href attribute;
const homeLink = document.querySelector('a[href="index.html"]');
const aboutLink = document.getElementById('about-link');
const contactLink = document.getElementById('contact-link');

//make homeLink invisible

// Check if the current URL matches the link URL and add the "active" class
if (currentUrl === homeLink.href) {
    homeLink.classList.add('active');
} else if (currentUrl === aboutLink.href) {
    aboutLink.classList.add('active');
} else if (currentUrl === contactLink.href) {
    contactLink.classList.add('active');
}
