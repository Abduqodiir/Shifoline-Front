document.addEventListener('DOMContentLoaded', () => {
    const togglePasswordButton = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('.inputGroup input');

    togglePasswordButton.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        const newIcon = type === 'password' 
            ? '../public/images/hide.svg' 
            : '../public/images/eye.svg';
        togglePasswordButton.querySelector('img').setAttribute('src', newIcon);
    });
}); 
