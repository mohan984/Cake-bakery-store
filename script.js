
// Mobile Navigation Toggle
document.getElementById('mobile-nav-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
    
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Page Navigation
function loadPage(page) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Remove active class from all nav items
    document.querySelectorAll('nav li').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(page + '-content').style.display = 'block';
    
    // Add active class to selected nav item
    document.querySelector('.nav-' + page).classList.add('active');
    
    // Update body class for styles
    document.body.className = '';
    document.body.classList.add(page);
    
    // Close mobile menu if open
    document.getElementById('main-nav').classList.remove('active');
    const icon = document.querySelector('#mobile-nav-toggle i');
    if (icon.classList.contains('fa-times')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

