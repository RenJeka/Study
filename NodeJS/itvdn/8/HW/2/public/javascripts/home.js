window.addEventListener('load', () => {
    const editBtns = document.querySelectorAll('table > tbody > tr button.table-btn_edit');
    const removeBtns = document.querySelectorAll('table > tbody > tr button.table-btn_remove');

    for (const editBtn of editBtns) {
        editBtn.addEventListener('click', async (event) => {
            const itemId = event.target.dataset.itemId;
            await fetch(`/edit/${itemId}`, {
                method: 'GET'
            });
            location.href = '/edit/' + itemId;
        });
    }

    for (const removeBtn of removeBtns) {
        removeBtn.addEventListener('click', async (event) => {
            const itemId = event.target.dataset.itemId;
            const result = await fetch(`/edit/${itemId}`, {
                method: 'DELETE'
            });

            console.log('DELETE result: ', await result.text());
        });
    }
});


