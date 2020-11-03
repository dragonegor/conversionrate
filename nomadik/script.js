(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1885763,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'shorter_flow');

let script = document.createElement('script');
script.src = 'https://dragonegor.github.io/conversionrate/autoria/more-photo-desktop.js';
script.async = false;
document.head.appendChild(script);

window.addEventListener('load', function () {
    let slider = tns({
        container: ".slider-sample-kit",
        prevButton: ".prev-sample-kit",
        nextButton: ".next-sample-kit",
        navPosition: "bottom",
        preventScrollOnTouch: 'force'
    })

    let slider2 = tns({
        container: ".slider-types",
        prevButton: ".prev-types",
        nextButton: ".next-types",
        navPosition: "bottom",
        preventScrollOnTouch: 'force'
    })

    let slider3 = tns({
        container: ".slider-brands",
        prevButton: ".prev-brands",
        nextButton: ".next-brands",
        nav: false,
        preventScrollOnTouch: 'force'
    })

    let slider4 = tns({
        container: ".slider-featured",
        prevButton: ".prev-featured",
        nextButton: ".next-featured",
        nav: false,
        preventScrollOnTouch: 'force'
    })

    slider.events.on('transitionStart', (info, eventName) => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'swipe Sample kits'
        });
    });

    slider2.events.on('transitionStart', (info, eventName) => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'swipe Type of gear you will get'
        });
    });

    slider3.events.on('transitionStart', (info, eventName) => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'swipe Brands'
        });
    });

    slider4.events.on('transitionStart', (info, eventName) => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'swipe Featured in'
        });
    });

})

document.addEventListener("DOMContentLoaded", ready);

function ready () {
    let select = document.querySelector('.subscription select');
    select.addEventListener('change', function () {
        let index = +this.value-1;
        document.querySelectorAll('.item').forEach((item) => {;
            item.classList.remove('active');
        });
        document.querySelectorAll('.item')[index].classList.add('active');

        switch (index) {
            case 0:
                document.querySelector('.subscription form label').classList.remove('blue');
                document.querySelector('.subscription form label').classList.add('green');
                break;
            case 1:
                document.querySelector('.subscription form label').classList.remove('green', 'blue');
                break;
            case 2:
                document.querySelector('.subscription form label').classList.remove('green');
                document.querySelector('.subscription form label').classList.add('blue');
                break;
            default:
                '';
        }

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'loaded'
        });
    })


    document.querySelectorAll('.faq-icon').forEach((item) => {
        item.addEventListener('click', function () {
            if(this.classList.contains('active')){
                this.classList.remove('active');
                this.nextElementSibling.style.height = "0";
                this.children[0].classList.remove('fa-arrow-up');
                this.children[0].classList.add('fa-arrow-down');
            } else {
                this.classList.add('active');
                this.nextElementSibling.style.height = "100%";
                this.children[0].classList.remove('fa-arrow-down');
                this.children[0].classList.add('fa-arrow-up');
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - Shorter Flow',
                    'eventAction': 'click to expand FAQ'
                });
            }
        })
    })

    document.querySelector('.m1').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'click on Continue-1'
        });
    })

    document.querySelector('.m6').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'click on Continue-6'
        });
    })

    document.querySelector('.m12').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'click on Continue-12'
        });
    })

    document.querySelector('.subscription select').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Shorter Flow',
            'eventAction': 'click on Dropdown to select a plan'
        });
    })
}

