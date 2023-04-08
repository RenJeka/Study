window.addEventListener('load', () => {
    const sendBtn = document.querySelector('#send_btn');
    // TODO: check requirements for inputs
    const errorContainer = document.querySelector('#errorMsg');
    sendBtn.addEventListener('click', async (event) => {

        event.preventDefault();
        const inputs = document.querySelectorAll('input');
        for (let input of inputs) {
            console.dir(input);
            console.log('value: ', input.value);
        }

        const itemId = parseInt(inputs[3].value);

        // TODO: Do with FormData
        const formData = {
            name: inputs[0].value,
            description: inputs[1].value,
            get completed() {
                return inputs[2].checked ? 1 : 0
            },
            id: itemId
        };

        console.log('formData: ', formData);

        const result = await fetch(`/edit/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        console.log('fetch result: ', await result.text());

    });
});
