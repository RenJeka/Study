        var sP = document.getElementById("selAllPar");
        var sL = document.getElementById("selAllLinks");
        var sD = document.getElementById("selAllDiv");

        function onClickParagraph() {
            var paragraph = document.getElementsByTagName('p');
            for (var pCounter = 0; pCounter < paragraph.length; pCounter++) {
                paragraph[pCounter].style.border = "1px solid red"

            }
        }

        function onClickLinks() {
            var link = document.getElementsByTagName('a');
            for (var lCounter = 0; lCounter < link.length; lCounter++) {
                link[lCounter].style.border = "1px solid blue"

            }
        }
        
        function onClickDiv() {
            var div = document.getElementsByTagName('div');
            for (var dCounter = 0; dCounter < div.length; dCounter++) {
                div[dCounter].style.border = "1px solid green"

            }
        }
