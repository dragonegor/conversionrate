let style = `
    <style>
      #mobile-header {
        transition: all 0.3s;
      }
      
      #mobile-header.cls {
        top: -70px;
      }
    
      .btm_tabs {
        position:fixed;
        padding: 10px;
        bottom: -200px;
        left: 0;
        width: 100%;
        background-color: #F5F4F3;
        z-index: 14;
        transition: all 0.3s;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1), 0 -4px 24px rgba(0, 0, 0, 0.1);
      }
      
      .btm_tabs.active {
        bottom: 0;
      }
      
      .btm_tabs .tabs {
        height: 70px;
        margin-bottom: 50px;
        display:flex;
        justify-content:center;
      }
      
      .btm_tabs .tabs a {
        display: inline-flex;
        align-items: center;
        justify-content:center;
        width: 33%;
        padding: 5px;
        text-decoration: none;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        color: #1E415F;
        border: none;
      }
      
      .btm_tabs .tabs a:not(:last-child) {
        border-right: 1px solid #1E415F;
      }
    </style>
`

let tabs = `
    <div class="btm_tabs">
      <div class="tabs">
        <a class="btm_tab_1" data-scroll="howandwhysomnifixworks1" href=".howandwhysomnifixworks">How SomniFix works</a>
        <a class="btm_tab_2" data-scroll="donotusesomnifixifyou1" href=".donotusesomnifixifyou">When to not use SomniFix</a>
        <a class="btm_tab_3" data-scroll="somnifixvsothersleepproducts1" href=".somnifixvsothersleepproducts">Comparison with other sleep products</a>
      </div>
    </div>
`

document.addEventListener('DOMContentLoaded', function () {

    document.body.insertAdjacentHTML('afterbegin', style)
    document.body.insertAdjacentHTML('beforeend', tabs)

    let lastPos = 0
    window.addEventListener('scroll', function () {
        window.pageYOffset > lastPos ? show() : hide()
        lastPos = window.pageYOffset;
    })

    function show() {
        document.querySelector('.btm_tabs').classList.add('active')
        document.querySelector('#mobile-header').classList.add('cls')
    }

    function hide() {
        document.querySelector('.btm_tabs').classList.remove('active')
        document.querySelector('#mobile-header').classList.remove('cls')
    }

    document.querySelector('.btm_tab_1').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add 3 button near sticky button',
            'eventAction': 'click on button',
            'eventLabel': 'Left tab — ...'
        });
    });

    document.querySelector('.btm_tab_2').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add 3 button near sticky button',
            'eventAction': 'click on button',
            'eventLabel': 'Center tab — ...'
        });
    });

    document.querySelector('.btm_tab_3').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add 3 button near sticky button',
            'eventAction': 'click on button',
            'eventLabel': 'Right tab — ...'
        });
    });

$('.btm_tabs a').on('click', function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    console.log(anchor)

    $('html,body').stop().animate({
        scrollTop: $(anchor).offset().top - 70
    }, 300);
});

});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'optimize_pdp');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Add 3 button near sticky button',
    'eventAction': 'loaded'
});
