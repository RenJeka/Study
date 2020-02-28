// 

function openPopup(url) {
    var x = screen.width / 2;
    var y = screen.height / 2;
    window.open(url, 'newwin', 'height=auto,width=auto,left=' + x + ',top=' + y);
}

function SocialInit(url) {
    var urlEncoded = encodeURIComponent(url);
    var title = encodeURIComponent(document.title);
    var repostItemId = $("#repostItemInfo").attr("data-id");

    showVkVidgets(function (show) {
        if (show) {
            $.getScript('//vk.com/js/api/openapi.js?120', function () {
                VK.init({ apiId: 5159660, onlyWidgets: true });
                getVkontakteShares(urlEncoded);
                $('#vkontakte-share').click(function () {
                    processShare('vk', repostItemId);
                    window.open('https://vk.com/share.php?url=' + url + '&noparse=true', 'vk_openapi', 'width=550,height=420,left=200,top=100,location=no, directories=no,status=no,toolbar=no,menubar=no');
                    return false;
                });
            });
        } else {
            $('.vk-vidget').remove();
        }
	});
	

    $(".fb-share").click(function () {
        openPopup("https://www.facebook.com/share.php?u=" + urlEncoded);
	});
	
    $(".tweet").click(function () {
        openPopup("https://twitter.com/home?status=" + title + " " + urlEncoded);
	});
}

function showVkVidgets(callback) {
    var countryCode = getCookie('country_code').toLowerCase();
    if (countryCode == '') {
        $.getJSON('https://ipapi.co/json/', function (data) {
            if (data["error"] != 'true') {
                countryCode = data.country.toLowerCase();
                if (countryCode != '') {
                    setCookie('country_code', countryCode, 365);
                    if (countryCode == 'ua') {
                        callback(false);
                    } else {
                        callback(true);
                    }
                }
            }
            else {
                callback(true);
            }
        });
    } else {
        if (countryCode == 'ua') {
            callback(false);
        } else {
            callback(true);
        }
    }
}

jQuery(document).ready(function () {
    SocialInit(window.location.href);
});