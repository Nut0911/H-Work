const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    // ປ່ຽນ type ລະຫວ່າງ password ແລະ text
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    
    // ປ່ຽນ icon
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});