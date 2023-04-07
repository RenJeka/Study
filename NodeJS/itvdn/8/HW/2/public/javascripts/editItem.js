// window.onload = function() {
//     var btn = document.getElementsByClassName('btn')[0];
//
//     btn.addEventListener('click', function() {
//
//         // запрос для редактирования элемента
//         var xhr = new XMLHttpRequest();
//         xhr.open('PUT', '/edit/' + this.id);
//
//         var data = {
//             name: document.getElementById('name').value,
//             description: document.getElementById('description').value,
//             get completed () {
//                 return document.getElementById('completed').checked ? 1 : 0
//             },
//             id: this.id
//         }
//
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.send(JSON.stringify(data))
//     })
// }
