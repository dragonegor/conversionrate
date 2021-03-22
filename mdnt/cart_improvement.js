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
      .page-content {
        padding-top: 20px;
      }
    
      .top-checkout {
        position: sticky;
        top: 59px;
        display:flex;
        padding: 5px 0;
        margin-top: 20px;
        justify-content:space-between;
        align-items: center;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
      
      .top-checkout p {
        text-align: left;
        font-size: 14px;
        font-weight: 700;
        margin-right: 20px;
      }
      
      .top-checkout p span {
        font-weight: 400;
      }
      
      .top-checkout .btn {
        width: 50%;
        height: 40px;
      }
      
      .owl-wrapper-outer {
        overflow: hidden;
      }
      
      .owl-wrapper {
        display:flex !important;
      }
      
      .owl-controls {
        height: 20px;
      }
      
      .owl-pagination {
        display: flex;
        align-items: center;
        justify-content:center;
      }
      
      .owl-page {
        height: 10px;
        width: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        margin-right: 10px;
      }
      
      .owl-page.active {
        background-color: rgba(0, 0, 0, 0.5);
      }
      
      .owl-next, .owl-prev {
        position:absolute;
        top: 40% !important;
        right: 10px !important;
        height: 24px;
        width: 24px;
        background: url("https://dragonegor.github.io/conversionrate/mdnt/img/arrow.svg") center center no-repeat;
        background-size: contain;
      }
      
      .owl-prev {
        right: auto !important;
        left: 10px !important;
        transform: rotateZ(180deg);
      }
      
      #sca-fg-slider-cart {
        background: rgba(0, 0, 0, 0.05);
        position:relative; 
      }
      
      #sca-fg-slider-cart::before {
        display: block;
        position:absolute;
        top: 10px;
        left: 10px;
        content: 'FREE';
        font-size: 12px;
        background-color: #C10302;
        color: white;
        padding: 6px 12px;
      }
      
      .sca-fg-cart-title {
        background: none;
      }
      
      #sca_freegift_list .item {
        background:none;
        padding: 10px 0;
      }
      
      .sca-fg-cart-title strong {
        font-size: 14px;
        font-weight: 700;
        padding-top: 40px;
      }
      
      img.lazyOwl {
        width: 30% !important;
      }
      
      .sca-product-title {
        font-size: 10px;
        text-transform:uppercase;
        display:inline-block;
        width: 70%;
        margin-bottom: 10px;
      }
      
      .sca-price {
        font-size: 12px;
        margin-bottom: 10px;
      }
      
      form.cart .cart__row>.cart__row--table-large .h4 {
        font-weight: 600;
        letter-spacing: 0;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 15px;
      }
      
      form.cart .cart__row>.cart__row--table-large .btn {
        background-color: #fff;
        color: black;
        border: 1px solid #e5e5e5;
        width: 100%;
      }
      
      form.cart .cart__row>.cart__row--table-large .one-quarter {
        width: 35%;
      }
      
      form.cart .cart__row>.cart__row--table-large .three-quarters {
        width: 63%;
      }
      
      .new_price {
        display:inline-block;
        font-size: 16px;
      }
      
      .total_sum {
        font-weight: 700;
        text-transform:uppercase;
        font-size: 12px;
        display:flex;
        align-items: center;
        justify-content:space-between;
        margin-top: 25px;
      }
      
      .total_sum span, .subtotal span {
        font-size: 16px;
        font-weight: 400;
      }
      
      .h4+p.cart__product-meta {
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom: 15px;
      }
      
      form.cart>:last-child .h4,
      form.cart>:last-child small,
      form.cart>:last-child button[name="update"]
       {
        display: none;
      }
      
      form.cart>:last-child button[name="checkout"] {
        font-size: 16px;
        padding: 15px;
        width: 100%;
        font-weight: 400;
      }
      
      .guaranty {
        width: 100%;
        border-top: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        padding: 10px 0;
        margin: 30px 0;
      }
      
      .guaranty p {
        display:flex;
        align-items: center;
        font-size: 12px;
        margin-bottom: 5px;
      }
      
      .guaranty img {
        margin-right: 20px;
      }
      
      .subtotal {
        font-size: 18px;
        font-weight: 700;
        display:flex;
        align-items: center;
        justify-content:space-between;
        margin: 25px 0 30px;
      }
      
      form.cart>:last-child .cti-heading center {
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 12px;
        font-style: normal;
      }
      
      .dark_bg {
        display: none;
        background-color: rgba(0, 0, 0, .4);
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
      }
      
      .dark_bg.active {
        display: block;
      }
      
      .product_popup_wrap {
        display: none;
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 101;
        overflow-y: scroll;
        padding: 50px 20px;
      }
      
      .product_popup_wrap.active {
        display: block;
      }
      
      .product_popup {
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 2px;
        position:relative;
        padding: 20px 0;
      }
      
      .product_popup .close {
        position:absolute;
        height: 24px;
        width: 24px;
        top: 20px;
        right: 20px;
        background: url("https://dragonegor.github.io/conversionrate/mdnt/img/close.svg") center center no-repeat;
        background-size: contain;
      }
      
      .product_popup h3 {
        font-size: 14px;
        text-transform:uppercase;
        font-weight: 700;
        margin: 0 20px 20px;
        padding-right: 30px;
      }
      
      .product_popup .info {
        display:flex;
        justify-content:space-between;
        align-items: flex-end;
        margin: 20px;
      }
      
      .product_popup p.fabric {
        font-size: 14px;
      }
      
      .product_popup b {
        text-transform:uppercase;
        font-size: 12px;
      }
      
      .product_popup a {
        display: block;
        margin: 0 20px 20px;
        text-decoration: underline;
      }
      
      .product_popup a::after {
        content: ' >';
      }
      
      .product_popup .prod_price {
        font-size: 16px;
      }
      
      .product_popup .descr {
        margin: 0 20px 20px;
      }
      
      .product_popup .flx {
        display:flex;
        justify-content:space-between;
        margin: 0 20px 20px;
        align-items: flex-end;
      }
      
      .product_popup .btn {
        width: 90%;
        margin: 0 auto;
        display: block;
        font-size: 16px;
        font-weight: 400;
        text-transform:none;
        letter-spacing: unset;
      }
      
      
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
         font-size: 14px;
         font-weight: 700;
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
      
      .tns-nav {
        text-align: center;
        margin: 0 20px;
      }
      
      .tns-nav button {
        height: 10px;
        width: 10px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        padding: 0;
      }
      
      .tns-nav button:not(:last-child) {
        margin-right: 17px;
      }
      
      .tns-nav button.tns-nav-active {
        background-color: rgba(0, 0, 0, 0.5);
      }
      
      .announcement-bar {
        display:none;
      }
    </style>
`
let handles = ['gothic-hooded-cowl-scarf',
    'black-wool-scarf-with-leather-trim',
    'faux-leather-kimono-belt',
    'black-extra-large-vegan-leather-purse',
    'winter-black-mittens',
    'cosplay-black-hood-1',
    'hooded-scarf',
    'geometric-tote-bag',
    'black-leather-wide-bracelets',
    'oversized-black-snood',
    'blanket-scarf',
    'womens-black-long-mesh-fingerless-gloves',
    'holographic-chest-body-harness',
    'womens-black-long-leather-fingerless-gloves',
    'black-chest-bondage'
]


let subtotal = document.querySelectorAll('form.cart>:last-child .h4')[1].innerHTML

let topCheckoutBtn = `
    <div class="top-checkout">
      <p>CART SUB-TOTAL:<br><span>${subtotal}</span></p>
      <button class="btn">checkout</button>
    </div>
`

let msgs = `
    <div class="guaranty">
      <p><img src="https://dragonegor.github.io/conversionrate/mdnt/img/30days.svg" alt="icon">30-day money back guarantee </p>
      <p><img src="https://dragonegor.github.io/conversionrate/mdnt/img/delivery.svg" alt="icon">Free worldwide shipping on orders over $399</p>
      <p><img src="https://dragonegor.github.io/conversionrate/mdnt/img/confirm.svg" alt="icon">The Real Handmade</p>
    </div>
`

let popup = `
    <div class="product_popup_wrap">
      
    </div>
    <div class="dark_bg"></div>
`


let completeLook = `
    <div class="complete_look">
      <h3>Complete the look:</h3>
      <div class="slider_look">
       
      </div>
    </div>
`
window.onload = function () {

    //основные перестановки и изменения структуры
    document.querySelector('#MainContent').style.opacity = '1'
    document.body.insertAdjacentHTML('afterbegin', style)
    document.body.insertAdjacentHTML('beforeend', popup)
    document.querySelector('.section-header__title+div').style.display = 'none'
    document.querySelector('.section-header__title+div').insertAdjacentHTML('afterend', topCheckoutBtn)
    document.querySelector('form.cart>div:last-child').before(document.querySelector('#sca-fg-slider-cart'))
    document.querySelector('.cart__checkout-wrapper').insertAdjacentHTML('afterend', msgs)
    document.querySelector('.cart__checkout-wrapper').insertAdjacentHTML("beforebegin", `<p class="subtotal">CART SUB-TOTAL:<br><span>${subtotal}</span></p>`)
    // document.querySelector('form.cart>:last-child .cti-heading center').innerHTML = 'We accept:'
    document.querySelector('#sca-fg-slider-cart').insertAdjacentHTML('afterend', completeLook)
    document.querySelector('.top-checkout .btn').addEventListener('click', function () {
        document.querySelector('.btn.cart__checkout').click()
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "GO — Cart improvement",
            eventAction: "click on top button Checkout"
        })
    })

    //расстановка элементов в каждом продукте в корзине
    document.querySelectorAll('form.cart .cart__row>.cart__row--table-large').forEach(item => {
        let price = item.querySelector('.medium-up--text-right .cart__price').innerHTML
        let total = item.querySelector('.text-right .cart__price').innerHTML

        item.querySelector('.cart__image').after(item.querySelector('.three-quarters p>:last-child'))
        item.querySelector('.medium-up--two-fifths').style.display = 'none'

        item.querySelector('.h4+p.cart__product-meta').insertAdjacentHTML("beforeend", `<span class="new_price">${price}</span>`)
        item.querySelector('.h4+p.cart__product-meta').after(item.querySelector('input'))
        item.querySelector('.three-quarters').insertAdjacentHTML("beforeend", `<p class="total_sum">Total <span>${total}</span></p>`)
    })

    //активация слайдера
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

    handles.forEach(item => {
        getProductInfo(item)
    })


    function addToCart(id) {
        let formData = {
            'items': [{
                'id': id,
                'quantity': 1
            }]
        };

        fetch('https://mdnt45.com/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            response.json().then(r => {
                location.reload()
            })
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    //получение информации о продукте по чпу
    function getProductInfo(handle) {
        jQuery.getJSON(`/products/${handle}.js`, function (product) {
            let block = `
            <div class="item_slide" data-id="${product.variants[0].id}" data-handle="${product.handle}">
              <img src="${product.images[0]}" alt="img">
              <p class="name">${product.title}</p>
              <p class="prod_price">₴${new Intl.NumberFormat('en-IN').format(product.price / 100)}</p>
              <button class="btn">Add to Cart</button>
            </div>
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
                addToCart(product.variants[0].id)
            })
        });
    }

    //события на динамически созданые элементы в нижнем слайдере
    let sliderLook = document.querySelector('.slider_look')
    sliderLook.onclick = function (event) {
        if (event.target.classList.contains('btn')) return;
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "GO — Cart improvement",
            eventAction: "activated",
            eventLabel: "Popup: PDP"
        })
        openPopup(event.target);
    };


    //открытие попапа и прорисовка продукта
    function openPopup(item) {
        let handle = item.closest('.item_slide').getAttribute('data-handle')

        jQuery.getJSON(`/products/${handle}.js`, function (product) {
            document.querySelector('.product_popup_wrap').innerHTML = ''
            let imgs = ''
            product.images.forEach(item => {
                imgs += `<div><img src="${item}" alt="img1"></div>`
            })

            let block = `
          <div class="product_popup" data-id="${product.variants[0].id}">
              <h3>${product.title}</h3>
              <div class="close"></div>
              <div class="slider">
                ${imgs}
              </div>
              <div class="flx">
                <div class="prod_price">₴${new Intl.NumberFormat('en-IN').format(product.price / 100)}</div>
              </div>
              <div class="descr">${product.description}</div>
              <a href="https://mdnt45.com/${product.url}" target="_blank">Read more</a>
              <button class="btn">Add to Cart</button>
          </div>
        `
            document.querySelector('.product_popup_wrap').insertAdjacentHTML('afterbegin', block)
            document.querySelector('.product_popup_wrap .prod_price').before(document.querySelector('.product_popup_wrap .product_feature'))
            document.querySelector('.product_popup_wrap .extended_description').remove()
            document.querySelector('.dark_bg').classList.add('active')
            document.querySelector('.product_popup_wrap').classList.add('active')
            document.querySelector('.product_popup .close').addEventListener('click', function () {
                window.dataLayer = window.dataLayer || []
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: "GO — Cart improvement",
                    eventAction: "close",
                    eventLabel: "Popup: PDP"
                })
                document.querySelector('.product_popup_wrap').classList.remove('active')
                document.querySelector('.dark_bg').classList.remove('active')
            })

            document.querySelector('.product_popup .btn').addEventListener('click', function () {
                window.dataLayer = window.dataLayer || []
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: "GO — Cart improvement",
                    eventAction: "click on button Add to cart",
                    eventLabel: "Popup: PDP"
                })
                addToCart(product.variants[0].id)
            })

            document.querySelector('.product_popup a').addEventListener('click', function () {
                window.dataLayer = window.dataLayer || []
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: "GO — Cart improvement",
                    eventAction: "click on PDP"
                })
            })

            let slider = tns({
                container: '.product_popup .slider',
                controls: false,
                navPosition: 'bottom',
                preventScrollOnTouch: 'auto',
                items: 1.5,
                gutter: 10
            })
        });
    };

};


(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1382816,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'cart_mobile');

window.dataLayer = window.dataLayer || []
dataLayer.push({
    event: "event-to-ga",
    eventCategory: "GO — Cart improvement",
    eventAction: "loaded"
})
