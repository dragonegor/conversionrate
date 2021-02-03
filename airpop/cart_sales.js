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
    
    let cart = JSON.parse(localStorage.getItem('mage-cache-storage')).cart
    let cartItems = JSON.parse(localStorage.getItem('mage-cache-storage')).cart.summary_count
    let prodId = cart.items[0].product_id
    if (cartItems === 1) {
        console.log('cart1')
        if (upgradeList[prodId] && !document.querySelector('.big-sale')) {
            let bigSaleBlock = `
            <div class="big-sale">
              <p><b>${upgradeList[prodId][2]}% off + FREE SHIPPING</b><br>when you buy ${upgradeList[prodId][1]} masks</p>
              <p class="sale-price">Special Price: <b>$${upgradeList[prodId][3]}</b></p>
              <button class="upgrade-cart to_checkout" type="button">upgrade</button>
              <div class="sale-block">${upgradeList[prodId][2]}%<span>OFF</span></div>
            </div>
        `

            document.querySelector('.block-minicart .bottom').insertAdjacentHTML('beforebegin', bigSaleBlock)
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
            let btnSale = `
            <div class="btn-sale to_checkout">
              <p>UPGRADE to ${upgradeList[prodId][1]} masks<br><span>${upgradeList[prodId][2]}% off + FREE SHIPPING</span></p>
            </div>
        `
            if(!document.querySelector('.btn-sale')) {
                document.querySelector('.block-minicart .bottom .subtotal').insertAdjacentHTML('afterend', btnSale)
            }
        } else {
            if(document.querySelector('.btn-sale')) {
                document.querySelector('.btn-sale').remove()
            }
        }
    }
    if (document.querySelector('.to_checkout')) {
        document.querySelector('.to_checkout').addEventListener('click', function () {

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
                document.querySelector('.block-minicart .product-item .delete').click()
                setTimeout(document.querySelector('#top-cart-btn-checkout').click(), 2000)
            })
        })
    }
    if(cart.items.length > 0) {
        document.querySelectorAll('.block-minicart .product-item .delete').forEach((item) => {
            item.removeEventListener('click', bannerDraw)
            item.addEventListener('click', bannerDraw)
        })
    }
}

if (document.querySelector('.minicart-wrapper .counter')) {
    document.querySelector('.minicart-wrapper .counter').addEventListener('click', function () {
        bannerDraw()
    })
}

if (document.querySelector('#product-addtocart-button')) {
    document.querySelector('#product-addtocart-button').addEventListener('click', function () {
        setTimeout(bannerDraw, 2500)
    })
}
