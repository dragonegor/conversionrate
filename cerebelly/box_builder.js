let style = `
    <style id="test-style">
      #recommended-pack {
        background-color: rgb(248, 245, 237);
        position:relative;
      }
      
      .recommended-pack {
        padding: 35px 0 8px;
        margin: 0 auto;
        width: 90%;
        max-width: 1000px;
        display: grid;
        grid-template-columns: 34% 34% 30%;
        grid-template-areas: 
        "info info addBlock"
        "products products addBlock"
      }
      .recommended-pack .info {
        grid-area: info;
      }
      
      .recommended-pack .info .col-lg-3.col-md-4.col-12 {
        position: unset;
      }
      
      .recommended-pack .info .col-lg-9.col-md-8.col-12 {
          width: 100%;
          -webkit-flex: 0 0 100%; 
          flex: 0 0 100%;
          max-width: 100%;
      }
      
      .recommended-pack .info h2 span:first-child {
        font-size: 28px;
        font-weight: 700;
      }
      
      .recommended-pack .info h2 span:last-child {
        font-size: 14px;
        font-weight: 700;
        display:inline-block;
        margin-left: 30px;
      }
      
      .recommended-pack .info button {
        position:absolute;
        top: 20px;
        right: 20px;
        background-color: rgb(248, 245, 237) !important;
        color: rgb(56, 86, 167) !important;
      }
      
      .recommended-pack .info button span {
        padding-left: 15px;
      }
      
      .recommended-pack .info button span:before {
        content: "";
        position: absolute;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNzg2OTIgNy42MTI3NUMxLjMwMjU1IDguNTM5NTUgMS4wNTE2OCA5LjU3MDU1IDEuMDU2MDkgMTAuNjE2M0MxLjA1NjA5IDExLjkxMzcgMS40NDA3OCAxMy4xODE5IDIuMTYxNTYgMTQuMjYwNkMyLjg4MjM1IDE1LjMzOTQgMy45MDY4NSAxNi4xODAyIDUuMTA1NDcgMTYuNjc2N0M2LjMwNDA5IDE3LjE3MzEgNy42MjI5OCAxNy4zMDMgOC44OTU0MyAxNy4wNDk5QzEwLjE2NzkgMTYuNzk2OCAxMS4zMzY3IDE2LjE3MjEgMTIuMjU0MSAxNS4yNTQ3QzEzLjE3MTQgMTQuMzM3MyAxMy43OTYyIDEzLjE2ODUgMTQuMDQ5MyAxMS44OTZDMTQuMzAyNCAxMC42MjM2IDE0LjE3MjUgOS4zMDQ2NSAxMy42NzYgOC4xMDYwM0MxMy4xNzk1IDYuOTA3NDEgMTIuMzM4OCA1Ljg4MjkgMTEuMjYwMSA1LjE2MjEyQzEwLjE4MTMgNC40NDEzMyA4LjkxMzA5IDQuMDU2NjQgNy42MTU3MiA0LjA1NjY0SDQuNzAxMjkiIHN0cm9rZT0iIzM4NTZBNyIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy42MTU0OSAxLjEzMzNMNC43MDEwNSA0LjA4MzQxTDcuNjE1NDkgNi45ODg5MiIgc3Ryb2tlPSIjMzg1NkE3IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=);
        left: 15px;
        top: 8px;
        width: 15px;
        height: 19px;
      }
      
      .recommended-pack .products {
        grid-area: products;
        margin-top: 50px;
      }
      
      .recommended-pack .products .product .title{
        margin: 12px 10px 8px;
        text-align: center;
        font-weight: 600;
        font-size: 16px;
        line-height: 145%;
        letter-spacing: 0.01em;
        min-height: 46px;
      }
      .recommended-pack .products .product {
        height: 100%;
      }
      
      .recommended-pack .products .new-info,
      .recommended-pack .products .out-of-stock-info,
      .recommended-pack .products .recommended-info,
      .header-progress-wrap {
        display: none;
      }
      
      .recommended-pack .add_block {
        grid-area: addBlock;
        padding-top: 50px;
        margin-left: 20px;
      }
      
      .recommended-pack .add_block ul {
        padding-left: 40px;
      }
      
      .recommended-pack .add_block ul li, .cart_list li{
        list-style: none;
        font-size: 14px;
        line-height: 1.1;
        margin-bottom: 15px;
        position:relative;
      }
      
      .recommended-pack .add_block ul li {
        display:flex;
        align-items: center;
      }
      
      .recommended-pack .add_block ul li img {
        width: 100px;
      }
      
      .recommended-pack .add_block ul li:before, .cart_list li:before {
        position:absolute;
        left: -24px;
        content: '';
        display: block;
        height: 14px;
        width: 14px;
        background: url("https://dragonegor.github.io/conversionrate/cerebelly/img/confirm.svg") center center no-repeat;
        background-size: contain;
        align-self: flex-start;
      }
      
      .recommended-pack .add_block button {
        border: none;
        color: white;
        background-color: #FC4E38;
        border-radius: 5px;
        text-transform:uppercase;
        width: 100%;
        font-size: 14px;
        padding: 15px;
        margin-bottom: 15px;
        cursor: pointer;
      }
      
      .recommended-pack .add_block button+p {
        color: #DE4432;
        font-size: 12px;
        text-align: center;
      }
      
      .recommended-pack .add_block button+p span {
        display:inline-block; 
        padding: 0 5px;
      }
      
      .recommended-pack .products img{
        width: 100%;
        transition: all 0.3s ease 0s;
      }
      
      .recommended-pack .products img:hover {
        transform: scale(1.05);
      }
      
      .more_products {
        padding: 0 0;
        margin: 15px 20% 0;
        max-width: 1000px;
      }
      
      .more_products h2 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 15px;
      }
      
      .more_products .links {
        display:flex;
        flex-wrap:wrap;
      }
      
      .more_products a {
        font-size: 18px;
        padding: 10px 20px;
        background-color: #ECEEF6;
        color: #15226A;
        text-decoration: none;
        border-radius: 40px;
        margin-bottom: 15px;
        display:flex;
        justify-content:space-between;
        align-items: center;
      }
      
      .more_products a img {
        height: 40px;
        margin-right: 10px;
      }
      
      .more_products a:not(:last-child) {
        margin-right: 20px;
      }
      
      .box-blueprint-progress,
      .box-blueprint-title .secondary,
      .css-1ehfhhn>h4{
        display: none;
      }
      
      .css-1ehfhhn>h5 {
        text-align: center;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        padding: 22px 0px;
      }
      
      .cart_info {
        margin: 20px 0;
        padding: 15px;
        text-align: center;
        background-color: #F8F5ED;
        border-radius: 5px;
        display: flex;
        justify-content:space-between;
        align-items: center;
      }
      
      .cart_info p {
        font-size: 12px;
        font-weight: 500;
        text-align: left;
        margin-bottom: 0;
        margin-right: 10px;
      }
      
      .cart_info button {
        background-color: #00845C;
        color: white;
        padding: 8px 13px;
        border-radius: 5px;
        font-size: 12px;
        border: none;
        flex-shrink: 0;
        cursor: pointer;
      }
      
      .cart_info2 {
        margin: 20px 0;
        padding: 15px;
        text-align: center;
        background-color: #D7DAF6;
        border-radius: 5px;
      }
      
      .cart_info2 span {
        color: #ea9341;
      }
      
      .cart_info2 p {
        margin-bottom: 0;
        font-size: 13px; 
      }
      
      .cart_list {
        display:flex;
        padding: 25px;
        justify-content:space-between;
        align-items: center;
      }
      
      .cart_list li {
        font-size: 11px;
        padding-left: 25px;
        display: flex;
        align-items: center;
      }
      
      .cart_list li:before {
        left: 0;
      }
      
      .cart_list li .tooltip {
        margin-bottom: 0;
        margin-left: 10px;
        display: flex;
        align-items: center;
        position:relative;
      }
      
      .tooltip span {
        position:absolute;
        bottom: 100%;
        right: 50%;
        display: none;
        padding: 10px;
        border-radius: 5px;
        background-color:#ECEEF6;
        color: #1E415F;
        font-size: 11px;
        width: 150px;
        line-height: 1.3;
      }
      
      .tooltip.active span {
          display: block;
      }
      
      .new_info {
        color: #00845C;
        font-size: 12px !important;
        margin-bottom: 0;
        font-weight: 400 !important;
        text-align: right;
        padding: 0 23px;
      }
      
      @media (max-width: 769px) {
        .recommended-pack {
          display: block;
        }
        
        .recommended-pack .add_block {
          margin-left: 0;
        }
        
        .more_products {
          width: 95%;
          margin: 15px auto -20px;
          padding: 0 15px;
        }
        
        .more_products a img {
            height: 30px;
            margin-right: 5px;
        }
        .more_products a {
            font-size: 16px;
            padding: 5px 15px;
        }
        
        .sidemenuContainer,
        .recommended-pack .info button {
          display: none;
        }
        
        .cart_info {
          margin: 20px;
        }
        
        .cart_info button {
          width: 40%;
        }
      }
    </style>
`

let stylebox = `
    <style id="special_style">
    .css-10no68i .css-ve8dmg {
      display:none;
    }
</style>
`

let moreProducts = `
    <div class="more_products">
      <h2>Add more products to your box</h2>
      <div class="links">
        <a href="#pouches">Purees</a>
        <a href="#peppa">Cerebelly x Peppa</a>
        <a href="#smoothies">Smoothies</a>
        <a href="#bars">Smart Bars</a>
        <a href="#bundles">Bundles</a>
      </div>
    </div>
`

let addToCartBlock = `
    <div class="add_block">
      <ul>
          <li>Balanced combination of food based on Rolf’s age and developmental milestones</li>
          <li>Farm fresh, science-backed nutrition.</li>
          <li>Each ingredient was carefully selected to taste great</li>
          <li>Net WT 4 oz (113 g) each</li>
          <li>256 5-star reviews <img src="https://dragonegor.github.io/conversionrate/cerebelly/img/stars.png" alt=""></li>
      </ul>
      <button>ADD TO  CART</button>
      <p>Free shipping</p>
    </div>
`

let cartInfo = `
    <div class="cart_info"">
      <p>Your box is full. Increase box size to add more units to your order.</p>
      <button onclick="boxUp()">Increase box size</button>
    </div>
`

let cartInfo2 = `
    <div class="cart_info2"">
      <p>Add <span>3</span> more items and get <span>10% OFF</span> + <span>Free Shipping</span></p>
    </div>
`

let cartList = `
    <ul class="cart_list">
        <li>Ships every 14 days</li>
        <li>Flavor guarantee</li>
        <li>100% flexible <p class="tooltip"><img src="https://dragonegor.github.io/conversionrate/cerebelly/img/question.svg" alt=""><span>Feel free to pause, reschedule, cancel, or customize your shipments at any time, with no penalty</span></p></li>
    </ul>
`



let mut = new  MutationObserver((muts) => {
    mut.disconnect()
        drawMainPage()
        if(document.querySelector('.box-blueprint-title')) {
            drawCart()
        }
    mut.observe(document,{
        childList: true,
        subtree: true
    })
})
let start = setInterval(function () {
    let loc = window.location.pathname
    if(loc === '/box-builder' && document.querySelector('#recommended-pack') && document.querySelector('.css-1lf9uz2') && document.querySelector('h1.desktop')) {
        clearInterval(start)
            document.querySelector('.css-1lf9uz2').insertAdjacentHTML('beforebegin', moreProducts)
            document.querySelectorAll('.links a').forEach(item => {
                item.addEventListener('click', function (e) {
                    e.preventDefault()
                    let id = item.getAttribute('href').split('#')[1]
                    document.getElementById(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                })
            })
            mut.observe(document,{
                childList: true,
                subtree: true
            })
            drawMainPage()
    }
}, 50)



function drawMainPage() {
    let loc = window.location.pathname
    if(loc === '/box-builder' && !document.querySelector('#test-style')) {
        document.body.insertAdjacentHTML('afterbegin', style)
    } else if (loc !== '/box-builder') {
        document.querySelector('#test-style').remove()
    }

    if (document.querySelector('.css-1lf9uz2')) {
        document.querySelector('.css-1lf9uz2').before(document.querySelector('.more_products'))
        document.querySelector('.more_products').before(document.querySelector('#recommended-pack'))
    }
    let name = document.querySelector('h1.desktop').innerText.split("'")[0]
    document.querySelector('h1.desktop').style.display = 'none'
    document.querySelector('#recommended-pack .info-text h2 span:first-child').innerText = name + "’s personalized food box"
    document.querySelector('#recommended-pack .info-text .description').innerText = "Key nutrients to support brain development"
    if (!document.querySelector('.add_block')) {
        document.querySelector('.recommended-pack ').insertAdjacentHTML('beforeend', addToCartBlock)
        document.querySelector('.recommended-pack .add_block button').addEventListener('click', function () {
            document.querySelector('header .e-right-quiz button').click()
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Box Builder Improvement',
                'eventAction': 'Add to Cart click'
            });
        })
    }
}

function boxUp() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Box Builder Improvement',
        'eventAction': 'Box Increase'
    });
    document.body.insertAdjacentHTML("afterbegin", stylebox)
    document.querySelector('.box-blueprint-title .secondary').click()

    setTimeout(function () {
        let index = 0;
        document.querySelectorAll('.group .plan').forEach((item, i) => {
            index = (item.classList.contains('active'))? i+1 : index
        })
        document.querySelectorAll('.group .plan').forEach((item, i) => {
            if(i === index) {
                item.click()
            }
        })
        document.querySelector('#special_style').remove()
    }, 30)
}

function boxDown() {
    let b = document.querySelector('.box-blueprint-name .box-blueprint-items').innerText.split(' ')[0].split('-')
    if(b.length === 1) {
        b = b[0].split('+')
    }
    let items = +document.querySelector('.css-1ehfhhn h4').innerText.split('(')[1].split(')')[0]
    if(items < +b[0]) {
        document.body.insertAdjacentHTML("afterbegin", stylebox)
        document.querySelector('.box-blueprint-title .secondary').click()
        setTimeout(function () {
            let index = 4;
            document.querySelectorAll('.group .plan').forEach((item, i) => {
                index = (item.classList.contains('active')) ? i - 1 : index
            })
            document.querySelectorAll('.group .plan').forEach((item, i) => {
                if (i === index) {
                    item.click()
                }
            })
            document.querySelector('#special_style').remove()
        }, 30)
    }
}

function drawCart() {
    if(!document.querySelector('.cart_info2')) {
        document.querySelector('.box-blueprint-title').insertAdjacentHTML('afterend', cartInfo2)
    }
    if(!document.querySelector('.css-10no68i .cart_list')) {
        document.querySelector('.css-10no68i .remove-button').insertAdjacentHTML('afterend', cartList)
        document.querySelector('.tooltip').addEventListener('click', function () {
            document.querySelector('.tooltip').classList.toggle('active')
        })
    } else {
        document.querySelector('.css-10no68i .remove-button').after(document.querySelector('.cart_list'))
    }
    document.querySelector('.css-10no68i button.action').innerText = 'CHECKOUT'
    document.querySelector('.css-10no68i button.action').addEventListener('click', function () {
        setTimeout(function () {
            document.querySelector('.css-10no68i button.action').click()
        }, 20)
    })

    let box = document.querySelector('.box-blueprint-name .box-blueprint-items').innerText.split(' ')[0].split('-')
    if(box.length === 1) {
        box = box[0].split('+')
    }
    let items = +document.querySelector('.css-1ehfhhn h4').innerText.split('(')[1].split(')')[0]
    let discount = 10
    if(+box[1] !== 13) {
        discount = document.querySelector('.discount').innerText.split('%')[0]
    }
    console.log(+box[1] !== 13)

    if(+box[1]-items <= 0 ) {
        document.querySelector('.cart_info2').remove()
    } else {
        document.querySelector('.cart_info2 span:first-child').innerHTML = +box[1]-items
        document.querySelector('.cart_info2 span:nth-child(2)').innerHTML = `${+discount + 5}% OFF`
    }


    if(!document.querySelector('.css-10no68i .new_info')) {
        document.querySelector('.css-10no68i table.products').insertAdjacentHTML('afterend', `<p class="new_info">Free shipping</p>`)
    }

    if(items === +box[1]) {
        if (!document.querySelector('.cart_info')){
            document.querySelector('.box-blueprint-title').insertAdjacentHTML('afterend', cartInfo)
        }
    } else {
        if (document.querySelector('.cart_info')) {
            document.querySelector('.cart_info').remove()
        }
    }
    if(!document.querySelector('.css-1ehfhhn>h5')) {
        document.querySelector('.css-1ehfhhn>h4').insertAdjacentHTML('beforebegin', `<h5>CART (<span>${items}</span>)</h5>`)
    } else {
        document.querySelector('.css-1ehfhhn>h5 span').innerHTML = items
    }

    document.querySelectorAll('.css-1ehfhhn button.remove').forEach(item => {
        item.addEventListener('click', boxDown)
        item.addEventListener('click', clickMinus)
    })

    document.querySelectorAll('.css-1ehfhhn button.add').forEach(item => {
        item.addEventListener('click', clickPlus)
    })
}


function clickPlus() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Box Builder Improvement',
        'eventAction': '+ clicked'
    });
}

function clickMinus() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Box Builder Improvement',
        'eventAction': '- clicked'
    });
}



(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2171597,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'box_builder_improvement');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Box Builder Improvement',
    'eventAction': 'loaded'
});
