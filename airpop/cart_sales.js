let style = `
    <style>
      .big-sale {
        margin: 0 10px;
        padding: 15px;
        background-color: #EAFBFC;
        border: 1px solid #26CAD3;
        border-radius: 10px;
        position:relative;
      }
      
      .big-sale p {
        font-size: 12px;
        margin-bottom: 0;
        max-width: 80%;
      }
      
      p.sale-price, p.sale-coupon {
        font-size: 9px;
      }
      
      p.sale-coupon {
        text-align: center;
        max-width: 100%;
      }
      
      .upgrade-cart {
        background-color: #26CAD3;
        border: none;
        color: white;
        text-transform:uppercase;
        width: 100%;
        padding: 10px;
      }
      
      .sale-block {
        position:absolute;
        height: 20vw;
        width: 20vw;
        max-height: 65px;
        max-width: 65px;
        top: 0;
        right: 0;
        transform: translate(15%, -15%);
        border-radius: 50%;
        color: white;
        display:flex;
        flex-direction: column;
        background-color: #26CAD3;
        justify-content:center;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
      }
      
      .sale-block span {
        font-size: 12px;
        font-weight: 600;
      }
      
      
      .btn-sale {
        width: 100%;
        height: 40px;
        background-color: #EAFBFC;
        border: 1px solid #26CAD3;
        border-radius: 20px;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        margin-bottom: 10px;
      }
      
      .btn-sale p {
        text-align: center;
        font-size: 12px;
        font-weight: 500;
      }
      
      .btn-sale span {
        color: #35B4BB;
        font-size: 10px;
        font-weight: 700;
      }
    </style>
`

let tL = {
    1: 'off + FREE SHIPPING',
    2: 'when you buy',
    3: 'masks',
    4: 'Special Price:',
    5: '',
    6: 'off',
    7: 'UPGRADE to',
    8: 'Upgrade'
}

if (window.location.href.includes('/de/')) {
    tL = {
        1: 'Rabatt + KOSTENLOSER VERSAND',
        2: 'beim Kauf von',
        3: 'Masken',
        4: 'Sonderpreis:',
        5: '-',
        6: '',
        7: 'UPGRADE zu',
        8: 'Aktualisierung'
    }
} else if(window.location.href.includes('/nl/')) {
    tL = {
        1: 'korting + GRATIS VERZENDING',
        2: 'bij aankoop van',
        3: 'maskers',
        4: 'Speciale prijs:',
        5: '-',
        6: '',
        7: 'UPGRADE naar',
        8: 'Upgrade'
    }
} else if(window.location.href.includes('/it/')) {
    tL = {
        1: 'di sconto + SPEDIZIONE GRATUITA',
        2: 'quando acquisti',
        3: 'maschere',
        4: 'Prezzo speciale:',
        5: '-',
        6: '',
        7: 'AGGIORNA a',
        8: 'Upgrade'
    }
}


let upgradeList = {
    3175: ['3462', '8', '8', '54.99'],
    3462: ['3463', '12', '22', '69.99'],
    // 3463: ['3177', '20', '33', '99.99'],
    3174: ['3460', '8', '31', '54.99'],
    3176: ['3460', '8', '31', '54.99'],
    3460: ['3461', '12', '42', '69.99'],
    // 3461: ['3178', '20', '50', '99.99'],
    3160: ['3458', '8', '25', '44.99'],
    3167: ['3458', '8', '25', '44.99'],
    3458: ['3459', '12', '33', '59.99'],
    // 3459: ['3319', '20', '40', '89.99'],
    3159: ['3456', '8', '25', '44.99'],
    3166: ['3456', '8', '25', '44.99'],
    3456: ['3457', '12', '33', '59.99'],
    // 3457: ['3318', '20', '40', '89.99'],
    3162: ['3470', '8', '25', '44.99'],
    3470: ['3471', '12', '33', '59.99'],
    // 3471: ['3472', '20', '40', '89.99'],
    3180: ['3467', '8', '25', '44.99'],
    3163: ['3467', '8', '25', '44.99'],
    3467: ['3468', '12', '33', '59.99'],
    // 3468: ['3469', '20', '40', '89.99'],
    3179: ['3464', '8', '25', '44.99'],
    3464: ['3465', '12', '33', '59.99'],
    // 3465: ['3466', '20', '40', '89.99']
}

document.head.insertAdjacentHTML('beforeend', style)

function bannerDraw() {
    let cart, cartItems, prodId
    if (JSON.parse(localStorage.getItem('mage-cache-storage')).cart) {
        cart = JSON.parse(localStorage.getItem('mage-cache-storage')).cart
        cartItems = JSON.parse(localStorage.getItem('mage-cache-storage')).cart.summary_count
        if (cart.items[0]) {
            prodId = cart.items[0].product_id
        }
    }
    if (cartItems === 1) {
        if(document.querySelector('.btn-sale')) {
            document.querySelector('.btn-sale').remove()
        }
        console.log('cart1')
        if (upgradeList[prodId] && !document.querySelector('.big-sale')) {
            let bigSaleBlock = `
                <div class="big-sale">
                  <p><b>${upgradeList[prodId][2]}% ${tL["1"]}</b><br>${tL["2"]} ${upgradeList[prodId][1]} ${tL["3"]}</p>
                  <p class="sale-price">${tL["4"]} <b>$${upgradeList[prodId][3]}</b></p>
                  <button class="upgrade-cart to_checkout" type="button" onclick="addToCart()">${tL["8"]}</button>
                  <div class="sale-block">${tL["5"]}${upgradeList[prodId][2]}%<span>${tL["6"]}</span></div>
                </div>
            `
            document.querySelector('.block-minicart .minicart-items-wrapper').insertAdjacentHTML('afterend', bigSaleBlock)
        }

    } else if (cartItems > 1) {
        let count = 0;
        for (let i = 0; i < cart.items.length; i++) {
            if (cart.items[i].product_id in upgradeList) {
                count++
                prodId = cart.items[i].product_id
            }
        }
        console.log(count)
        if (count === 1) {
            if (document.querySelector('.big-sale')) {
                document.querySelector('.big-sale').remove()
            }

            let btnSale = `
            <div class="btn-sale to_checkout" onclick="addToCart2()">
              <p>${tL["7"]} ${upgradeList[prodId][1]} ${tL["3"]}<br><span>${upgradeList[prodId][2]}% ${tL["1"]}</span></p>
            </div>
        `
            if(!document.querySelector('.btn-sale')) {
                if(document.querySelector('.big-sale')) {
                    document.querySelector('.big-sale').remove()
                }
                document.querySelector('.block-minicart .bottom .subtotal').insertAdjacentHTML('afterend', btnSale)
            }
        } else {
            if (document.querySelector('.big-sale')) {
                document.querySelector('.big-sale').remove()
            }

            if(document.querySelector('.btn-sale')) {
                document.querySelector('.btn-sale').remove()
            }
        }
    }
}

let mut = new MutationObserver(mutations => {
    bannerDraw()
} )

mut.observe(document.querySelector('.block-minicart'), {
    childList: true,
    subtree: true
})

function addToCart() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP improvements',
        'eventAction': 'click on button',
        'eventLabel': 'Upgrade'
    });
    let prodId
    let cart = JSON.parse(localStorage.getItem('mage-cache-storage')).cart
    if (cart.items[0]) {
        prodId = cart.items[0].product_id
    }
    let y = 0

    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product_id in upgradeList) {
            y=i
        }
    }

    jQuery.ajax({
        url: window.BASE_URL + 'checkout/cart/add/uenc/aaaa/product/' + upgradeList[prodId][0] + '/',
        type: 'POST',
        data: {
            product: upgradeList[prodId][0],
            selected_configurable_option: '',
            related_product: '',
            item: upgradeList[prodId][0],
            form_key: jQuery.cookie('form_key'),
            qty: 1
        }
    }).done(function (response) {
        document.querySelectorAll('.block-minicart .product-item .delete')[y].click()
        document.querySelector('.big-sale').remove()
        setTimeout(bannerDraw, 1000)
    })
}

function addToCart2() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP improvements',
        'eventAction': 'click on button',
        'eventLabel': 'Upgrade to x masks'
    });
    let prodId
    let cart = JSON.parse(localStorage.getItem('mage-cache-storage')).cart
    if (cart.items[0]) {
        prodId = cart.items[0].product_id
    }
    let y = 0

    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product_id in upgradeList) {
            y=i
        }
    }

    jQuery.ajax({
        url: window.BASE_URL + 'checkout/cart/add/uenc/aaaa/product/' + upgradeList[prodId][0] + '/',
        type: 'POST',
        data: {
            product: upgradeList[prodId][0],
            selected_configurable_option: '',
            related_product: '',
            item: upgradeList[prodId][0],
            form_key: jQuery.cookie('form_key'),
            qty: 1
        }
    }).done(function (response) {
        document.querySelectorAll('.block-minicart .product-item .delete')[y].click()
        document.querySelector('.btn-sale').remove()
        setTimeout(bannerDraw, 1000)
    })
}


(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'upgrade_offer_in_cart');


window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Upgrade offer in the cart',
    'eventAction': 'loaded'
});

