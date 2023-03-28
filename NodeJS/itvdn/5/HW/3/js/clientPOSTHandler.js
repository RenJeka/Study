window.addEventListener('load', () => {
    const container = document.querySelector('#container');
    const authForm = document.querySelector("#auth_form");

    authForm.onsubmit = async (event) => {
        event.preventDefault();
        const authFormData = new FormData(event.target);
        const value = Object.fromEntries(authFormData.entries());
        console.log('value: ', value);

        let response = await fetch('/data', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(value)
        });

        // // expressJS can not read json data without headers from client : 'Content-type': 'application/json'
        // let response = await fetch('/data', {
        //     method: 'POST',
        //     body: JSON.stringify(value)
        // });

        if (response.status === 200) {
            container.classList = 'valid';
        } else if (response.status === 401) {
            container.classList = 'invalid';
        }

        container.innerHTML = await response.text();
    };
});
