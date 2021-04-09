let style = `
  <style>
    .bundles *, .wrap * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  
    .bundles {
      background: linear-gradient(161.67deg, #F7AD42 3.53%, #FFB237 84.13%);
      padding: 25px 22px;
    }
    
    .bundles h2{
      font-size: 36px;
      color: white;
      text-align: center;
      margin-bottom: 28px;
    }
    
    .bundles .products {
      display: flex;
      position:relative;
      justify-content:space-between;
    }
    
    .bundles .products::after {
      display: block;
      content: '';
      position:absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 28px;
      width: 28px;
      background: url("https://dragonegor.github.io/conversionrate/buzzpatch/img1/plusProd.svg") center center no-repeat;
      background-size: contain;
    }
    .bundles .products>div {
      width: 49%;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
      padding: 88px 13px 24px;
      position:relative;
      text-align: center;
      display:flex;
      flex-direction: column;
      justify-content:space-between;
      align-items: center;
    }
    
    .bundles .products>div .descr {
      font-size: 14px !important;
      margin-top: auto;
    }
    
    .bundles .products>div>img {
      position:absolute;
      width: 70%;
      left: 15%;
      top: -40px;
    }
    
    .bundles .products>:last-child>img {
      top: -30px;
    }
    
    .bundles .title {
      font-size: 18px !important;
      font-family: 'Din Condensed', Roboto, sans-serif;
    }
    
    .bundles .price {
      font-weight: 700;
      font-size: 18px;
      color: #FF3C7F;
      margin: 15px;
    }
    
    .qty {
      display:flex;
      justify-content:space-between;
      width: 90%;
    }
    
    .qty span {
      display:flex;
      align-items: center;
      justify-content:center;
      font-size: 24px;
      font-weight: 500;
      border-radius: 50%;
      height: 41px;
      width: 41px;
    }
    
    span.minus {
      border: 2px solid #626262;
      color: #FF3C7F;
      background-color: #fff;
    }
    
    span.plus {
      color: #fff;
      background-color: #FF3C7F;
    }
    
    .qty input {
      border: none;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0;
      width: 20px;
      text-align: center;
      padding: 0;
      background-color: #fff;
      font-family: 'Roboto', sans-serif;
    }
    
    .popup .qty {
      width: 50%;
      margin: 0 auto 15px;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    
    input[type='number'] {
      -moz-appearance: textfield;
    }
    
    .total_sum {
      font-size: 18px !important;
      font-weight: 700;
      color: white;
      margin: 25px auto 20px;
      text-align: center;
    }
    
    .total_sum>:last-child {
      color: #FF3C7F;
    }
    
    .bundles button {
      background-color: #FF3C7F;
      padding: 20px;
      color: white;
      width: 100%;
      font-size: 24px;
      font-family: 'Din Condensed', Roboto, sans-serif;
      border: none;
      border-radius: 100px;
      text-transform:uppercase;
    }
    
    .dark_bg {
      display: none;
      background: rgba(69, 69, 69, 0.46);
      position:fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }
    
    .wrap_popup {
      display: none;
      position:fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1031;
      overflow-y: scroll;
    }
    
    .dark_bg.active, .wrap_popup.active {
      display: block;
    }
    
    .popup {
      width: 95%;
      margin: 50px auto;
      background: #FFFFFF;
      box-shadow: 0 4px 11px rgba(0, 0, 0, 0.11);
      border-radius: 10px;
      padding: 0 25px 38px;
      position:relative;
    }
    
    .popup h2 {
      font-size: 30px;
      color: black;
      margin-bottom: 35px;
      padding-top: 38px;
      text-align: center;
    }
    
    .popup h2+div {
      display:flex;
      justify-content:space-between;
    }
    
    .popup h2+div img {
      width: 48%;
      border: 1px solid #FFDCE8;
      border-radius: 3px;
      height: 125px;
    }
    
    .popup .close_popup {
      position:absolute;
      right: 15px;
      top: -17px;
      height: 34px;
      width: 34px;
      background: #fff url("https://dragonegor.github.io/conversionrate/buzzpatch/img1/close.svg") center center no-repeat;
      background-size:cover;
      border-radius: 50%;
    }
    
    .popup ul {
      padding: 25px 0;
      margin-left: 25px;
      margin-bottom: 0;
    }
    
    .popup li {
      color: #FF3C7F;
      font-size: 18px;
      font-weight: 700;
    }
    
    .popup li:not(:last-child) {
      margin-bottom: 15px;
    }
    
    .popup li span {
      font-weight: 400;
      color: black;
    }
    
    .popup .price {
      margin-top: 25px;
      font-size: 24px !important;
      font-weight: 700;
      color: #FF3C7F;
      text-align: center;
    }
    
    .popup .price+p {
      margin: 8px 0 30px;
      font-size: 14px !important;
      font-weight: 600;
      text-align: center;
    }
    
    .popup button {
      border: 1px solid #FF3C7F;
      border-radius: 100px;
      font-family: 'Din Condensed', Roboto, sans-serif;
      text-transform:uppercase;
      padding: 10px;
      width: 100%;
      font-size: 24px;
    }
    
    .popup button.add {
      color: white;
      background-color: #FF3C7F;
      margin-bottom: 10px;
    }
    
    .popup button.skip {
      color: #FF3C7F;
      background-color: #fff;
    }
    
    #getNow .to_popup {
      padding: 20px 10px;
      font-size: 20px;
      margin-bottom: 20px;
      border-radius: 100px;
      font-family: 'Din Condensed', Roboto, sans-serif;
      color: white;
      width: 90%;
      border: none;
      background-color: #FF3C7F;
    } 
    
    #getNow .btn-primary {
      display: none;
    }
    
  </style>  
`

let bundles = `
    <section class="bundles">
      <h2>Frequently bought together</h2>
      <div class="products">
        <div class="prod1 prod" data-price="14.99" data-id="34137893142572">
          <img src="https://dragonegor.github.io/conversionrate/buzzpatch/img1/prod1.png" alt="prod1">
          <p class="title">Mosquito repellent patches</p>
          <p class="descr">60 patches in 1 pack</p>
          <p class="price">$<span>14.99</span>/pack</p>
          <div class="qty">
            <span class="minus">-</span>
            <input type="number" value="1" max="4" min="1" readonly>
            <span class="plus">+</span>
          </div>
        </div>
        <div class="prod2 prod" data-price="14.99" data-id="34767547138092">
          <img src="https://dragonegor.github.io/conversionrate/buzzpatch/img1/prod2.png" alt="prod2">
          <p class="title">Itch relief patches</p>
          <p class="descr">27 patches in 1 pack</p>
          <p class="price">$<span>14.99</span>/pack</p>
          <div class="qty">
            <span class="minus">-</span>
            <input type="number" value="1" max="4" min="1" readonly>
            <span class="plus">+</span>
          </div>
        </div>
      </div>
      <div class="total_sum">
        $<span>14.99</span> + $<span>14.99</span> = <span>$29.98</span>
      </div>
      <button>Buy Both</button>
    </section>
`

let popup = `
    <div class="wrap_popup">
      <div class="popup" data-id="34767547138092">
          <span class="close_popup"></span>
          <h2>Add Itch relief patches</h2>
          <div>
            <img src="https://dragonegor.github.io/conversionrate/buzzpatch/img1/prod2.png" alt="">
            <img src="https://dragonegor.github.io/conversionrate/buzzpatch/img1/prod2-2.png" alt="">
          </div>
          <ul>
              <li><span>Reduce pain in 30-60 seconds</span></li>
              <li><span>Lasts for up to 7 days</span></li>
              <li><span>Waterproof</span></li>
              <li><span>100% natural</span></li>
          </ul>
          <p>27 patches in 1 pack</p>
          <p class="price">$<span>14.99</span>/pack</p>
          <div class="qty">
            <span class="minus">-</span>
            <input type="number" value="1" max="4" min="1" readonly>
            <span class="plus">+</span>
          </div>
          <button class="add">Add</button>
          <button class="skip">Skip</button>
      </div>
    </div>
    <div class="dark_bg"></div>
`
window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', style)
    document.body.insertAdjacentHTML('beforeend', popup)
    document.querySelector('#purchase').insertAdjacentHTML('afterend', bundles)

    document.querySelector('#getNow .prices').insertAdjacentHTML('afterend', `<button class="to_popup">PROCEED TO CHECKOUT</button>`)

    document.querySelector('#getNow .to_popup').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — PDP: Add bundle',
            'eventAction': 'activated',
            'eventLabel': 'Popup PDP'
        });
        document.querySelector('.dark_bg').classList.add('active')
        document.querySelector('.wrap_popup').classList.add('active')
        document.body.style.overflow = 'hidden'
    })

    document.querySelector('.close_popup').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — PDP: Add bundle',
            'eventAction': 'closed',
            'eventLabel': 'Popup PDP'
        });
        document.querySelector('#getNow .btn-primary').click()
    })

    document.querySelector('.popup button.skip').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — PDP: Add bundle',
            'eventAction': 'click on button Skip',
            'eventLabel': 'Popup PDP'
        });
        document.querySelector('#getNow .btn-primary').click()
    })

    document.querySelector('.popup button.add').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — PDP: Add bundle',
            'eventAction': 'click on button Add',
            'eventLabel': 'Popup PDP'
        });
        let id1
        let id2 = this.closest('.popup').getAttribute('data-id')
        let prod1 = document.querySelector('input[name="radios"]:checked').id
        switch (prod1) {
            case 'radios-3':
                id1 = '34137893142572'
                break;
            case 'radios-2':
                id1 = '39307585519660'
                break;
            case 'radios-0':
                id1 = '39264142393388'
                break;
            case 'radios-1':
                id1 = '39264134070316'
                break;
            default:
                break;
        }

        let formData = {
            'items': [{
                'id': id1,
                'quantity': 1
            },
            {
                'id': id2,
                'quantity': 1
            }]
        };

        addToCart(formData)
    })

    document.querySelectorAll('.qty span.minus').forEach(item => {
        item.addEventListener('click', function () {
            let label = (this.closest('.prod'))? 'Section: Frequently bought together' : 'Popup PDP'
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP: Add bundle',
                'eventAction': 'click on button Minus',
                'eventLabel': label
            });
            let val = +item.nextElementSibling.value
            if (val > 1) {
                item.nextElementSibling.value = val - 1
            }
            if(this.closest('.prod')) {
                setId(this)
                totalSum()
            } else {
                setIdPrice(this)
            }

        })
    })

    document.querySelectorAll('.qty span.plus').forEach(item => {
        item.addEventListener('click', function () {
            let label = (this.closest('.prod'))? 'Section: Frequently bought together' : 'Popup PDP'
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP: Add bundle',
                'eventAction': 'click on button Plus',
                'eventLabel': label
            });
            let val = +item.previousElementSibling.value
            if (val < 4) {
                item.previousElementSibling.value = val + 1
            }
            if(this.closest('.prod')) {
                setId(this)
                totalSum()
            } else {
                setIdPrice(this)
            }
        })
    })

    document.querySelector('.total_sum+button').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — PDP: Add bundle',
            'eventAction': 'click on button Buy both',
            'eventLabel': 'Section: Frequently bought together'
        });
        let id1 = document.querySelector('.prod1').getAttribute('data-id')
        let id2 = document.querySelector('.prod2').getAttribute('data-id')

        let formData = {
            'items': [{
                'id': id1,
                'quantity': 1
            },
                {
                    'id': id2,
                    'quantity': 1
                }]
        };

        addToCart(formData)

    })
}
let productsId = {
    prod1: ['34137893142572', '39307585519660', '39264142393388', '39264134070316'],
    prod2: ['34767547138092', '39307589058604', '39307593187372', '39307595546668']
}
let packPrice = ['14.99', '13.5', '12', '10.5']
let price = ['14.99', '27', '36', '42']

function setId(a) {
    let main = a.closest('.prod')
    let qty = main.querySelector('input').value - 1
    let prod = (main.classList.contains('prod1'))? 'prod1' : 'prod2'
    main.setAttribute('data-id', productsId[prod][qty])
    main.setAttribute('data-price', price[qty])

    main.querySelector('.price span').innerHTML = packPrice[qty]
    if (prod === 'prod1') {
        main.closest('.bundles').querySelector('.total_sum span:first-child').innerHTML = price[qty]
    } else {
        main.closest('.bundles').querySelector('.total_sum span:nth-child(2)').innerHTML  = price[qty]
    }
}

function totalSum() {
    let p1 = document.querySelector('.prod1').getAttribute('data-price')
    let p2 = document.querySelector('.prod2').getAttribute('data-price')
    document.querySelector('.total_sum span:last-child').innerHTML  = `$${+p1 + +p2}`
}

function setIdPrice(a) {
    let qty = a.closest('.popup').querySelector('input').value - 1
    a.closest('.popup').querySelector('.price span').innerHTML = packPrice[qty]
    a.closest('.popup').setAttribute('data-id', productsId.prod2[qty])
}

function addToCart(formData) {
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            response.json().then(r => {
                console.log(r)
                window.location = '/checkout'
            })
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'pdp_add_bundle');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PDP: Add bundle',
    'eventAction': 'loaded'
});
