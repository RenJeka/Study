window.addEventListener('load', () => {

    const sendBtn = document.querySelector('#send_btn');
    // TODO: check requirenments for inputs
    const errorContainer = document.querySelector('#errorMsg');
    sendBtn.addEventListener('click', async (event) => {

        event.preventDefault();
        const inputs = document.querySelectorAll('input');
        for (let input of inputs) {
            console.dir(input);
            console.log('value: ', input.value);
        }

        // TODO: Do with FormData
        const formData = {
            name: inputs[0].value,
            description: inputs[1].value,
            get completed() {
                return inputs[2].checked ? 1 : 0
            }
        };

        console.log('formData: ', formData);

        const result = await fetch('add/newItem', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (result.status === 201 && (await result.text()).toLowerCase() === 'success!' ) {
            location.href = '/';
        }

    });

});
