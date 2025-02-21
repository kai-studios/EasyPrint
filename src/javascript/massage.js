function toggleContact() {
    const contactSection = document.getElementById('contact');
    const toggleButton = document.getElementById('toggle-contact');
    contactSection.classList.toggle('hidden');
    toggleButton.classList.toggle('active'); 

    if (!contactSection.classList.contains('hidden')) {
        contactSection.style.opacity = '1'; 
        contactSection.style.transform = 'translateY(0)';
    } else {
        contactSection.style.opacity = '0'; 
        contactSection.style.transform = 'translateY(20px)';
    }
}