window.addEventListener('load', () => {
    var tbody = document.getElementsByTagName('tbody')[0];

    tbody.addEventListener('click', function(e) {


        if (e.target.hasAttribute('id')) {

            // if (e.target.classList.contains('edit')) {
            //
            //     // запрос для редактирования элемента
            //     var xhr = new XMLHttpRequest();
            //     xhr.open('GET', e.target.id);
            //     xhr.send();
            //
            //     xhr.onload = function() {
            //         // TODO: '/edit' instead http://localhost:8080/edit/
            //         location.href = 'http://localhost:8080/edit/' + e.target.id;
            //     }
            //
            // } else if (e.target.classList.contains('delete')) {
            //     // запрос для редактирования элемента
            //     var xhr = new XMLHttpRequest();
            //
            //     xhr.open('DELETE', 'edit/' + e.target.id);
            //     xhr.send();
            //     xhr.onload = function() {
            //         // TODO: '/' instead http://localhost:8080
            //         location.href = 'http://localhost:8080';
            //         console.log('item deleted');
            //     }
            //
            // }
        }
    })
});


