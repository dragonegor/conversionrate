let style = `
    <style>
      p.subtitleAdd {
        font-size: 12px;
        color: #3856A7;
        font-weight: 400;
      }
      
      .first_discount {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background-color: #fff;
        border-radius: 5px;
      }
      
      .close_first_discount {
        border: 1px solid #3856a7;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        cursor: pointer;
        background: url("https://i.ibb.co/8PypjkN/close.png") center center no-repeat;
        background-size: 80% 80%;
      }
      
      .first_discount .discount_percent {
        background-color: #FFDADA;
        border-radius: 20px;
        padding: 3px 10px;
        flex-shrink: 0;
      }
      
      .first_discount p {
        font-size: 12px;
        font-weight: 500;
        color: #15226A;
        margin-bottom: 0;
        max-width: 30%;
      }
      
      .first_discount .total_sum {
        font-weight: 700;
      }
      
      .promo_btn {
        position:relative;
        display: inline-block;
        font-size: 11px;
        font-weight: 500;
        margin: 15px 0 10px;
        cursor:pointer;
      }
      
      .promo_btn::after {
        content: "";
        position:absolute;
        height: 3px;
        width: 7px;
        background: url("https://i.ibb.co/N2nFBQh/Vector-19.png") center center no-repeat;
        background-size: contain;
        top: 50%;
        right: -10px;
        transform: rotateZ(180deg);
      }
      
      .promo_btn.active::after {
        transform: rotateZ(0deg);
      }
      
      .summary-table .sum-row.promo-code {
        display: none !important;
      }
      
      .summary-table .sum-row.promo-code.active {
        display: block !important;
      }
      
      .sum-row.total.coupon .caption,  .sum-row.total.coupon .total {
          font-size: 11px;
      }
      
      .summary-table .sum-row.total:nth-child(4) .caption, .summary-table .sum-row.total:nth-child(4) .total {
        font-size: 12px;
      }
      
      .sum-row.total:nth-child(5) {
        display: none;
      }
      
      .sum-row.total.coupon:nth-child(8) {
        display: none;
      }
    </style>
`



window.onload = function () {
let totalOrderSum = document.querySelector('.sum-row.order-total .total').innerHTML

let block = `
    <div class="first_discount">
      <p>First 2 weeks for special price</p>
      <p class="discount_percent">30% OFF</p>
      <p class="total_sum">${totalOrderSum}</p>
      <div class="close_first_discount">
      </div>
    </div>
    <div class="promo_btn">I have a coupon code</div>
`


document.body.insertAdjacentHTML('afterbegin', style)

let accountForm = document.querySelector('.form-wrap .checkout-block:first-child')
let payments = document.querySelector('.form-wrap .checkout-block:last-child .inputs')

document.querySelector('.form-wrap .checkout-block:first-child input[name=email]').addEventListener('focus', function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Checkout Improvement',
        'eventAction': 'click to Focus on the email address field'
    });
})

document.querySelector('.form-wrap .checkout-block:first-child input[name=password]').addEventListener('focus', function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Checkout Improvement',
        'eventAction': 'click to Focus on the password field'
    });
})

payments.after(accountForm)

let subtotal = document.querySelectorAll('.sum-row.total')[0]
let discount = document.querySelectorAll('.sum-row.total')[1]


discount.after(subtotal)



accountForm.querySelector('.checkout-title').innerHTML = 'Create an account to manage your orders'
accountForm.querySelector('.checkout-title').insertAdjacentHTML('afterend',`<p class="subtitleAdd">Also in an account you can 
update Rolpf’s behaviour characteristics as he grows to receive new food recommendations and adjust the content of boxes.</p>`)

subtotal.querySelector('.caption').innerHTML = 'Subtotal (2 weeks of food)'

let mut = new MutationObserver((mutations) => {
    mut.disconnect()
    redrawing()
})



function redrawing() {
    let totalSum = document.querySelector('.sum-row.order-total .total').innerHTML

    if(!document.querySelector('.promo_btn')) {
        document.querySelectorAll('.sum-row.total')[2].insertAdjacentHTML('afterend', block)
        if (!document.querySelector('.sum-row.total.coupon:nth-child(5)')) {
            document.querySelector('.first_discount').remove()
        } else {
            document.querySelector('.first_discount .total_sum').innerHTML = totalSum
            document.querySelector('.first_discount .close_first_discount').addEventListener('click', function () {
                document.querySelector('.first_discount').remove()
                document.querySelector('.coupon-remove-btn').click()
            })
        }
        document.querySelector('.promo_btn').addEventListener('click', function () {
            if(document.querySelector('.promo_btn').classList.contains('active')) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: Checkout Improvement',
                    'eventAction': 'click on I have a coupon code - collapse'
                });
            } else {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: Checkout Improvement',
                    'eventAction': 'click on I have a coupon code - expand'
                });
            }
            document.querySelector('.sum-row.promo-code').classList.toggle('active')
            document.querySelector('.promo_btn').classList.toggle('active')
        })
    }
    if(document.querySelector('.first_discount')) {
        document.querySelector('.first_discount .total_sum').innerHTML = totalSum
    }

    if(document.querySelector('.sum-row.promo-code .promo-add')) {
        document.querySelector('.sum-row.promo-code .promo-add').click()
    }
    if (document.querySelectorAll('.sum-row-hr')[2]) {
        document.querySelectorAll('.sum-row-hr')[2].style.display = 'none'
    }

    if (document.querySelector('.sum-row.promo-code')) {
        document.querySelector('.promo_btn').after(document.querySelector('.sum-row.promo-code'))
    }

    if (document.querySelector('.promo_btn').classList.contains('active') && document.querySelector('.sum-row.promo-code')) {
        document.querySelector('.sum-row.promo-code').classList.add('active')
    }

    if (document.querySelector('.summary-table .sum-row.total.coupon:nth-child(7)')) {
        document.querySelectorAll('.sum-row.total')[1].after(document.querySelector('.summary-table .sum-row.total.coupon:nth-child(7)'))
        document.querySelector('.summary-table .sum-row.total.coupon:nth-child(5)').style.display = 'flex'
    }

    if(!document.querySelector('.summary-table .sum-row.total.coupon:nth-child(5)') && !document.querySelector('.summary-table .sum-row.total.coupon:nth-child(7)') && !document.querySelector('.first_discount')){
        subtotal.querySelector('.total').style.textDecoration = 'none'
    } else {
        subtotal.querySelector('.total').style.textDecoration = 'line-through'
    }

    if(document.querySelector('.apply-btn')) {
        document.querySelector('.apply-btn').addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Checkout Improvement',
                'eventAction': 'click on Apply coupon'
            });
        })

        document.querySelector('.input-holder input').addEventListener('focus', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Checkout Improvement',
                'eventAction': 'click to Focus on the coupon code field'
            });
        })
    }



    mut.observe(document.body,{
        childList: true,
        subtree: true
    })
}

redrawing()



};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2171597,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'checkout_improvement');


window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Checkout Improvement',
    'eventAction': 'loaded'
});
