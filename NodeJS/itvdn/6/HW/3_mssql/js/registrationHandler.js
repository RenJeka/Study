window.addEventListener('load', () => {
    const validationContainer = document.querySelector('#validationContainer');
    const registrationForm = document.querySelector("#registration_form");
    const password = document.querySelector("#pass");
    const repeatPassword = document.querySelector("#repeat_pass");

    registrationForm.onsubmit = async (event) => {
        event.preventDefault();
        const authFormData = new FormData(event.target);
        const value = Object.fromEntries(authFormData.entries());

        if (checkComparingPasswords()) {
            password.setAttribute('aria-invalid', "false");
            repeatPassword.setAttribute('aria-invalid', "false");
            await sendData(value);
        } else {
            password.setAttribute('aria-invalid', "true");
            repeatPassword.setAttribute('aria-invalid', "true");
        }

    };

    function checkComparingPasswords() {
        return password.value === repeatPassword.value;
    }

    async function sendData(data) {
        let response = await fetch('/registration', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            validationContainer.classList = 'valid';
            validationContainer.innerText = 'Successful!';
            console.log('All data in MongoDB: ', await response.json());
        } else {
            validationContainer.innerText = await response.text();
            validationContainer.classList = 'invalid';
        }
    }
});
