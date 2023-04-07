window.addEventListener('load', () => {
    const editBtn = document.querySelector('#edit_btn');
    const removeBtn = document.querySelector('#remove_btn');

    editBtn.addEventListener('click', async (event) => {
        const itemId = event.target.dataset.itemId;
        await fetch(`/edit/${itemId}`, {
            method: 'GET'
        });
        location.href = '/edit/' + itemId;
    });

    removeBtn.addEventListener('click', async (event) => {
        const itemId = event.target.dataset.itemId;
        const result = await fetch(`/edit/${itemId}`, {
            method: 'DELETE'
        });

        console.log('DELETE result: ', await result.text());

    });
});


