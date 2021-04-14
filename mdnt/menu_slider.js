let link1 = document.createElement('link');
link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
link1.rel = 'stylesheet'
document.head.appendChild(link1);

let script22 = document.createElement('script');
script22.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
script22.async = false;
document.head.appendChild(script22)

let style = `
<style>
    .complete_look {
         margin: 30px -17px 0;
         padding: 28px 0 28px 28px;
         overflow: hidden;
         background-color: rgba(0, 0, 0, 0.05);
    }
    
    .slider_look {
      display: flex;
      align-items: stretch;
    }
    
    .slider_look>div {
      display:flex !important; 
      flex-direction: column;
      justify-content: space-between;
    }
       
    .complete_look h3 {
       font-size: 16px;
       font-weight: 500;
       text-transform: uppercase;
       margin-bottom: 12px;
    }
       
    .slider_look .name {
       font-size: 12px;
       text-transform: uppercase;
       font-weight: 300;  
       margin-bottom: 10px;
    }
    
    .slider_look .prod_price {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 10px;
      margin-top: auto;
    }
    
    .slider_look .prod_price span {
      color: rgba(0, 0, 0, 0.5);
      text-decoration: line-through;
    }
    
    .slider_look .btn {
      letter-spacing: 0;
      text-transform: none;
      font-weight: 400;
    }
    
    .mobile-nav__social {
      margin: 0;
    }
    
    .mobile-nav__item.appear-delay-6 {
      padding-bottom: 15px;
    }
    
    .red_btn {
      position:absolute;
      width: 100%;
      background-color: #C10302;
      bottom: 0;
      left: 0;
      padding: 20px;
      font-size: 16px;
      color: white !important;
      text-transform:uppercase;
      text-align:center;
      display: none;
    }
    
    .complete_look .btn {
      width: calc(100% - 25px);
      border: 2px solid black;
      color: black;
      background: none;
    }
    
    .mobile-nav {
      margin-bottom: 100px;
    }
</style>
`




let title = 'Bestsellers'
let href = 'https://mdnt45.com/collections/bestsellers'
let handles = ['men-hooded-shirt',
    'women-hooded-shirt',
    'futuristic-jumper-new-ninja',
    'black-lotus-women-s-shirt',
    'men-loose-pants-for-summer',
    'black-women-leggings',
    'mens-longsleeve-melange'
]

let hr = window.location.href

if((hr.includes('/men-') || hr.includes('/mens-') || hr.includes('for-him')) && !hr.includes('women')){
    title = 'Men bestsellers'
    href = 'https://mdnt45.com/collections/bestsellers-1'
    handles = ['men-s-sweater-sutor',
        'futuristic-jumper-new-ninja',
        'aku-gaki-coat',
        'mens-longsleeve-melange',
        'sweetshot-with-clamp-idle',
        'mens-harem-pants',
        'black-turtleneck-sweater'
    ]
}

if((hr.includes('dress')) || hr.includes('women')){
    title = 'Women bestsellers'
    href = 'https://mdnt45.com/collections/bestsellers-w'
    handles = ['black-lotus-women-s-shirt',
        'women-black-train-tunic',
        'asymmetrical-white-shirt-with-black-mesh-top',
        't-shirt-mini-dress',
        'black-women-leggings',
        'women-hooded-shirt',
        'high-waist-corset-leggings'
    ]
}


let slider = `
    <div class="complete_look">
      <h3>${title}</h3>
      <div class="slider_look">
        
      </div>
      <a href="${href}" class="btn">View all bestsellers</a>
    </div>
`

let btnRed = `
    <a class="red_btn" href="">Check ${title}</a>
`


setTimeout(function () {



    document.body.insertAdjacentHTML('afterbegin', style)
    document.querySelector('.mobile-nav__item.appear-delay-6 a').after(document.querySelector('.mobile-nav__social'))
    document.querySelector('.mobile-nav__social').insertAdjacentHTML('afterend', slider)
    document.querySelector('#NavDrawer').insertAdjacentHTML('beforeend', btnRed)

    if ( document.querySelector('.collapsible-trigger.collapsible--auto-height.is-open')){
        document.querySelector('.collapsible-trigger.collapsible--auto-height.is-open').click()
    }

    handles.forEach(item => {
        getProductInfo(item)
    })

    setTimeout(function () {
        let slider2 = tns({
            container: '.slider_look',
            controls: false,
            preventScrollOnTouch: 'auto',
            nav: false,
            items: 2.5,
            gutter: 10,
            loop: false
        })
    }, 1000)

    function getProductInfo(handle) {
        jQuery.getJSON(`/products/${handle}.js`, function (product) {
            let block = `
            <a href="${product.url}"  class="item_slide" data-id="${product.variants[0].id}" data-handle="${product.handle}">
              <img src="${product.images[0]}" alt="img">
              <p class="name">${product.title}</p>
              <p class="prod_price">${(product.price > 100000) ? '₴' : '$'}${new Intl.NumberFormat('en-IN').format(product.price / 100)}</p>
            </a>
        `
            document.querySelector('.slider_look').insertAdjacentHTML('beforeend', block)
            document.querySelector(`.item_slide[data-id="${product.variants[0].id}"] .btn`).addEventListener('click', function (e) {
                e.preventDefault()
                window.dataLayer = window.dataLayer || []
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: "GO — Cart improvement",
                    eventAction: "click on button Add to cart",
                    eventLabel: "Complete look"
                })
            })
        });
    }

    let $ = jQuery;

    $('.collapsible-trigger').click(function () {
        setTimeout(function () {
            if (document.querySelector('.mobile-nav__item .collapsible-content.is-open')) {
                $('.complete_look').slideUp()
                $('.red_btn').css('display', 'block')
            } else {
                $('.complete_look').slideDown()
                $('.red_btn').css('display', 'none')
            }
        }, 500)
    })

    $('.item_slide').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Bestsellers block',
            'eventAction': 'Clicks to bestellers',
            'eventLabel': 'Section: items'
        });
    })

    $('.red_btn').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Bestsellers block',
            'eventAction': 'Clicks to bestellers',
            'eventLabel': 'button'
        });
    });

}, 200);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'bestsellers_block');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Bestsellers block',
    'eventAction': 'loaded'
});
