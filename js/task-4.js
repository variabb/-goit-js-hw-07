
const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    console.log('password:', password);
    console.log('email:', email);
    if (email === '' || password === '') {
        alert('All form fields must be filled in');
    }

    const formObject = {
    email,
    password,
    };
    console.log('formObject:', formObject)
    form.reset();

}
    





