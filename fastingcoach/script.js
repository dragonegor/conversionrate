
$(document).ready(function () {
    let checkScrollSpeed = (function () {

        let lastPos, newPos, delta

        return function () {
            newPos = window.scrollY;
            if (lastPos != null) {
                delta = newPos - lastPos;
            }
            lastPos = newPos;
            return delta;
        };
    })();
    // take result weight and time

    let weight, year, date

    if(!document.querySelector('.summary:not(.summary_a) .result_date')){
        let result = document.querySelector('.summary:not(.summary_a) .result_date').childNodes;
        weight = result[0].textContent;
        year = result[2].textContent;
        date = result[1].innerText;
        localStorage.setItem('weight', weight);
        localStorage.setItem('year', year);
        localStorage.setItem('date', date);
    } else {
        weight = localStorage.getItem('weight');
        year = localStorage.getItem('year');
        date = localStorage.getItem('date');
    }

    // put it to popup

    $('.leave-popup .weight').empty().append(`${weight}<span class="byTime">${date} ${year}</span>`);


    // listen to "scroll" event
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    let popup = getCookie('popup');

    function handler() {
        let speed = checkScrollSpeed();
        console.log(speed);
        if (speed < -100 && /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            $('.popup-bg').addClass('active');
            $('.leave-popup').addClass('active'); 
            document.cookie = "popup=true";
            window.removeEventListener('scroll', handler);

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - Exit-intent popup on checkout',
                'eventAction': 'popup loaded'
            });
        }
    }
    
    if (!popup) {
        window.addEventListener('scroll', handler);
    }

    $('.close-popup, .popup-bg').click(function () {
        $('.popup-bg').removeClass('active');
        $('.leave-popup').removeClass('active');
    });

    $('.close-popup').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit-intent popup on checkout',
            'eventAction': 'click on Leave anyway'
        });
    });

    $('.popup-bg').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit-intent popup on checkout',
            'eventAction': 'click on Background to close popup'
        });
    });

    $('.leave-popup .btn').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Exit-intent popup on checkout',
            'eventAction': 'click on Save my plan and continue'
        });
    });

    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
        h._hjSettings = { hjid: 1962080, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script'); r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    window.hj = window.hj || function () { (hj.q = hj.q || []).push(arguments) };
    try {
        hj('trigger', 'exit_intent_popup_checkout');
    }
    catch (e) { }

})