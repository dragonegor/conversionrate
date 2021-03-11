let navbar = 'data-v-4d3f649e',
    mainpage = 'data-v-693ebc60'

let href = window.location.href

let homepageStyle = `
    <style>
      .flx {
        display:flex;
        justify-content: center;
        align-items: center;
      }
      
      .navbar-image img[data-v-4d3f649e] {
        width: 140px;
      }
    
      .navbar[${navbar}] {
        background-color: #fff;
      }
      
      .navbar-links a[${navbar}] {
        color: black;
        font-size: 14px;
        text-transform:uppercase;
      }
      
      .navbar-login-button a[${navbar}] {
        background-color: #3F4CEC;
        font-size: 16px;
      }
      
      .mainpage[${mainpage}] {
        background: #f9f9f9;
        padding-bottom: 75px;
      }
      
      .main_section h1{
        font-weight: 700;
        color: #505985;
        font-size: 48px;
        margin-bottom: 30px;
      }
      
      .main_section .text {
        margin: 0 4vh 0 10vw;
        text-align: left;
      }
      
      .main_section>* {
        width: 50%;
      }
      
      .main_section p {
        font-size: 24px;
        line-height: 38px;
        margin-bottom: 30px;
      }
      
      .main_section a {
        display: block;
        background: #2E3ACA;
        border-radius: 5px;
        width: 300px;
        padding: 17px 0;
        color: white;
        font-size: 18px;
        border: none;
        text-decoration:none;
        text-align: center;
      }
      
      .choose-plan-1[data-v-65739f6e] {
        background-color: #ffffff;
        padding-bottom: 55px;
      }
      
      .choose-plan-component .left .product-text-div .product-descriptions .product-description .fa-check[data-v-3871e4bd],
      .choose-plan-component .left[data-v-3871e4bd] {
        color: black;
        font-size: 18px;
      }
      
      .choose-plan-component .right[data-v-3871e4bd] {
        background: none;
        width: 40%;
      }
      
      .choose-plan-component .right[data-v-3871e4bd] img {
        width: 100%;
      }
      
      .choose-plan-1 .image-1[data-v-465d81fa] {
        display:none;
      }
      
      .choose-plan-1 h2 {
        font-size: 36px;
        color: #505985;
        width: 100%;
        text-align: center;
      }
      
      .choose-plan-component .left[data-v-3871e4bd] {
        width: 60%;
        padding: 0;
      }
      
      .choose-plan-component .left h2 {
        display: none !important;
      }
      
      .choose-plan-component[data-v-3871e4bd] {
        align-items: center;
      }
      
      .mini_pdp {
        background-color: #3F4CEC;
        padding: 70px 60px 60px;
      }
      
      .mini_pdp h2 {
        color: white;
        font-size: 36px;
        text-transform:uppercase;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .mini_pdp h3 {
        color: #0B0F41;
        font-size: 28px;
        margin-bottom: 20px;
      }
      
      .mini_pdp .flx {
        margin: 0 auto;
        justify-content:space-between;
      }
      
      .mini_pdp>.flx {
        max-width: 1300px;
        align-items: stretch;
      }
      
      .mini_pdp>.flx>div {
        width: 48%;
        max-width: 640px;
        background-color: #fff;
        border-radius: 6px;
        padding: 60px 60px 36px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      
      .mini_pdp ul, .checkout_info ul {
        margin: 0 0 0 25px;
        padding: 0;
      }
      
      .mini_pdp ul+img {
        width: 20%;
      }
      
      .mini_pdp ul li, .checkout_info ul li{
        font-size: 14px;
        list-style: none;
        position:relative;
        padding-left: 10px;
        color: black;
      }
      
      .mini_pdp ul li.yellow, .checkout_info ul li.yellow{
        background: rgba(255, 194, 26, 0.8);
        border-radius: 5px;
      }
      
      .mini_pdp ul li:not(:last-child), .checkout_info ul li:not(:last-child) {
        margin-bottom: 20px;
      }
      
      .mini_pdp ul li::before, .checkout_info ul li::before {
        position:absolute;
        content: '—';
        left: -25px;
        top: 0;
        color: black;
      }
      
      a.btn_choose {
        display: block;
        margin: 50px auto 0;
        color: white;
        width: 300px;
        padding: 14px 0;
        border-radius: 5px;
        background-color: #2e3aca;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
      }
      
      .mini_pdp p+img {
        width: 25%;
        margin-left: 5%;
      }
      
      .mini_pdp .price {
        font-size: 48px;
        color: #0B0F41;
        font-weight: 700;
      }
      
      .mini_pdp .save {
        font-size: 16px;
        font-weight: 300;
      }
      
      .mini_pdp .save b{
        font-size: 18px;
      }
      
      .mini_pdp .list {
        margin-bottom: 50px;
      }
      
      .btn_block {
        padding: 24px 0;
        background-color: #f9f9f9;
      }
      
      .btn_block .btn_choose {
        margin-top: 0;
      }
      
      .mini-faqs[data-v-074a3fd6] {
        padding-bottom: 50px;
      }
      
      .comparison-chart-component .btn_choose {
        border: 1px solid white;
        background-color: #3f4cec;
      }
      
      .charleston-be-content>a {
        display: block;
        background-color: #fff;
        color: black;border-radius: 5px;
        height: 44px;
        padding: 12px !important;
        text-decoration:none;
        font-size: 20px !important;
      }
    </style>
`

let styleCheckout = `
    <style>
      .checkout_steps {
        width: 100%;
        padding: 15px;
        display:flex;
        align-items: center;
        justify-content:space-around;
        border-radius: 5px;
        border: 3px solid #4FA0FE;
        background-color: #ECF7FD;
        margin-bottom: 15px;
      }
      
      .checkout_steps>div {
        display:flex;
        align-items: center;
        justify-content:center;
        width: 32%;
      }
      
      .checkout_steps img {
        margin-right: 15px;
      }
      
      .checkout_steps p {
        font-size: 14px;
        font-weight: 500;
        margin: 0;
      }
      
      .cart-page .cart-page-component .left-component {
        border-left: 1px solid #eee;
        border-right: none !important;
      }
      
      .cart-page .cart-page-component button[data-v-f514eb88] {
        background-color: #2E3ACA !important;
      }
      
      .order-summary-page>.label,
      .order-summary-page .name,
      .plan-selection-desktop .plan-label,
      .plan-selection-desktop .learn-more,
      .subtotal .previous,
      .free-shipping,
       .subscription-details-bottom {
        display: none !important;
      }
      
      .checkout_info h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #0B0F56;
      }
      
      .checkout_info h2 {
        font-size: 24px;
        font-weight: 500;
        color: #2E3ACA;
      }
      
      .checkout_info {
        display:flex;
        align-items: center;
        justify-content:space-between;
        margin-bottom: 15px;
      }
      
      .checkout_info>:first-child {
        width: 65%;
      }
      .checkout_info>:last-child {
        width: 30%;
      }
      .checkout_info>:last-child>div {
        display:flex;
        justify-content:space-between;
        align-items: center;
      }
      .checkout_info>:last-child img {
        width: 100%;
      }
      
      .checkout_info>:last-child>div>img {
        width: 48%;
      }
      
      .checkout_sign h3 {
        font-size: 24px;
        font-weight: 500;
        color: #505985;
      }
      
      .checkout_sign ol{
        padding-left: 20px;
      }
     
     p.economy {
      font-size: 16px;
      margin: 0;
     }
     
     .subtotal{
      width: 30% !important;
      font-size: 28px !important;
     }

    .cart-page .quantity {
        margin-right: 15px;
    }
      
     .product-image-order-summary .order-summary .quantity-subtotal[data-v-6cc7eacc],
      .total[data-v-6cc7eacc]{
       align-items: center;
     }
     
     .amount {
        font-size: 48px !important;
        color: #2E3ACA !important;
     }
     .total-label {
      font-size: 18px !important;
     }
     
     .total-label span {
      display:inline-block;
      color: #2E3ACA;
      font-size: 14px;
      margin-left: 30px;
     }
     
     .info {
      height: 20px;
      width: 20px;
      background: url("https://i.ibb.co/P9dYTNt/info.png") center center no-repeat;
      background-size: contain;
      position:relative;
      margin-left: 15px;
      display:inline-block;
     }
     .info .popup_info {
      position:absolute;
      left: 125%;
      top: 0;
      transform: translateY(-43%);
      display: none;
      padding: 15px;
      background-color: #f2f2f2;
      border-radius: 5px;
      width: 300px;
      color: black;
      font-size: 12px;
      z-index: 100;
      
     }
     
     .info .popup_info::before {
      position:absolute;
      content: '';
      height: 8px;
      width: 8px;
      border-radius: 2px;
      background-color: #f2f2f2;
      transform: rotateZ(45deg) translateX(-100%);
      top: 55%;
      left: 0;
     }
     
     .plan-name{
      display:flex !important;
      align-items: center !important;
     }
     
     .info:hover {
      background: url("https://i.ibb.co/5c1rsdT/info-hover.png") center center no-repeat;
     }
     
     .info:hover .popup_info {
      display: block;
     }
    </style>
`

let info = `
<div class="info"> <div class="popup_info">$19.99/mo, charged when sequencing is completed, cancel anytime thereafter.  <a href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>
`

let topCheckoutBlock = `
    <div class="checkout_steps">
      <div>
          <img src="https://i.ibb.co/DbZxzC0/1.png" alt="">
          <p>Cutting-edge privacy technology that gives you maximum security and full control over your genomic data </p>
      </div>
      <div>
          <img src="https://i.ibb.co/n66v2rv/2.png" alt="">
          <p>Free world-wide shipping</p>
      </div>
      <div>
          <img src="https://i.ibb.co/BVQxJ3V/3.png" alt="">
          <p>The only genetic test that decodes 100% of your DNA</p>
      </div>
    </div>
`

let infoBlockCheckout = `
    <div class="checkout_info">
       <div>
        <h1>Order Summary</h1>
        <h2>Deep Whole Genome Sequencing</h2>
        <ul>
            <li>99.5% Genome Sequence accuracy (market-leading standard)</li>
            <li>Decodes 100% of your DNA</li>
            <li>Every position in the genome is decoded on average 30 times</li>
        </ul>
       </div>
       <div>
         <img src="https://i.ibb.co/X4y27gJ/box.png" alt="box">
         <div>
          <img src="https://i.ibb.co/0jXbtSk/best-value2.png" alt="best value">
          <img src="https://i.ibb.co/xh0YpT5/plane2.png" alt="free shipping">
         </div>
       </div>
    </div>
`

if (href.includes('-100x')) {
    infoBlockCheckout = `
    <div class="checkout_info">
       <div>
        <h1>Order Summary</h1>
        <h2>Ultra Deep Whole Genome Sequencing</h2>
        <ul>
          <li class="yellow">Discover your rare genetic mutations with highest accuracy</li>
           <li>99.99% Genome Sequence accuracy (market-leading standard)</li>
           <li>Decodes 100% of your DNA</li>
           <li>Every position in the genome is decoded on average 100 times</li>
        </ul>
       </div>
       <div>
         <img src="https://i.ibb.co/X4y27gJ/box.png" alt="box">
         <div>
          <img src="https://i.ibb.co/xh0YpT5/plane2.png" alt="free shipping">
         </div>
       </div>
    </div>
`
}

let listCheckout = `
    <div class="checkout_sign">
      <h3>Sign up to our Nebula Explore™ Reporting to get access to:</h3>
      <ol>
          <li>New DNA reports every week that are based on the latest genomic research and learn how they apply to your DNA results.</li>
          <li>Access to exploration tools that will enable you to examine any of your ~20,000 genes and generate your personalized reports.</li>
          <li>Access to deep ancestry analysis that will enable you to do your full genealogical research. Get deeper insights than with any other DNA test on the market.</li>
          <li>Access to premium support provided by geneticists at Nebula Genomics.</li>
      </ol>
    </div>
`

let mainsection = `
    <div class="main_section flx">
        <div class="text">
            <h1>Whole Genome Sequencing - The only genetic test that decodes 100% of DNA</h1>
            <div class="flx">
                <p>The most accurate DNA test in the world to examine your ancestry, health, diet, and physical activity</p>
                <img src="https://i.ibb.co/xG6Bybx/plane.png" alt="plane">
            </div>
            <a href="#choose" data-number="1">Choose your plan</a>
        </div>
        <img src="https://portal.nebula.org/api/public-images/brochure/hero-image.png" alt="bg">
    </div>
`

let btn = `
    <div class="btn_block">
      <a href="#choose" class="btn_choose" data-number="3">Choose your plan</a>
    </div>
`

let miniPdp = `
    <div class="mini_pdp" id="choose">
      <h2>Whole genome sequencing options</h2>
      <div class="flx">
        <div class="x30">
          <h3>Deep Whole Genome Sequencing</h3>
          <div class="flx list">
            <ul>
              <li>99.5% Genome Sequence accuracy (market-leading standard)</li>
              <li>Decodes 100% of your DNA (6 billion letters incl. all ~20,000 genes)</li>
              <li>Every position in the genome is decoded on average 30 times</li>
              <li>Generates over 100 gigabytes of genomic big data</li>
            </ul>
            <img src="https://i.ibb.co/PC0yz3V/best-value.png" alt="">
          </div>
          <div class="flx">
            <p class="save">Normally $1000<br>
            <b>Save 70%!</b></p>
            <img src="https://i.ibb.co/X4y27gJ/box.png" alt="">
            <div class="price">$299</div>
          </div>
          <a href="https://portal.nebula.org/cart/nebula-30x" class="btn_choose test299">Buy your DNA test</a>
        </div>
        <div class="x100">
        <h3>Ultra Deep Whole Genome Sequencing</h3>
          <ul class="list">
            <li class="yellow">Discover your rare genetic mutations with highest accuracy</li>
            <li>99.99% Genome Sequence accuracy (market-leading standard)</li>
            <li>Decodes 100% of your DNA (6 billion letters incl. all ~20,000 genes) </li>
            <li>Every position in the genome is decoded on average 100 times</li>
            <li>Generates over 300 gigabytes of genomic big data</li>
          </ul>
          <div class="flx">
            <p class="save">Normally $3500<br>
            <b>Save 70%!</b></p>
            <img src="https://i.ibb.co/X4y27gJ/box.png" alt="">
            <div class="price">$999</div>
          </div>
          <a href="https://portal.nebula.org/cart/nebula-100x" class="btn_choose test999">Buy your DNA test</a>
        </div>
      </div>
    </div>
`

document.body.insertAdjacentHTML('afterbegin', homepageStyle)
if (document.querySelector('.navbar-image img')) {
    document.querySelector('.navbar-image img').setAttribute('src', 'https://i.ibb.co/Pc5JBYq/logo.png')
}
function drawHomepage() {
    let path = window.location.pathname
    if (document.querySelector('.navbar-image img')) {
        document.querySelector('.navbar-image img').setAttribute('src', 'https://i.ibb.co/Pc5JBYq/logo.png')
    }
    if(path.includes('whole-genome-sequencing-dna-test')) {
        if(!document.querySelector('.main_section')) {
            if (document.querySelector('.mainpage') && document.querySelector('.choose-plan-1') && document.querySelector('.mini-faqs')){
                document.querySelector('.mainpage').innerHTML = mainsection
                document.querySelector('.choose-plan-1 .right').innerHTML = `<img src="https://portal.nebula.org/api/public-images/brochure/30xProduct/choose-product-bg.png">`
                document.querySelector('.choose-plan-1').insertAdjacentHTML('afterbegin', `<h2>About Our DNA tests, reports and technology</h2>`)
                document.querySelector('.choose-plan-1').insertAdjacentHTML('afterend', miniPdp)
                document.querySelector('.mini-faqs').insertAdjacentHTML('beforebegin', btn)
                document.querySelector('.mini-faqs').insertAdjacentHTML('afterend', btn)
                document.querySelector('.comparison-chart-component').insertAdjacentHTML('beforeend', `<a href="#choose" class="btn_choose" data-number="2">Choose your plan</a>`)
            }

            document.querySelector('.test299').removeEventListener('click', buyTest299)
            document.querySelector('.test299').addEventListener('click', buyTest299)
            document.querySelector('.test999').removeEventListener('click', buyTest999)
            document.querySelector('.test999').addEventListener('click', buyTest999)

            const anchors = document.querySelectorAll('a[href*="#"]')

            for (let i=0; i<anchors.length; i++) {
                anchors[i].removeEventListener('click', clickAnchors.bind(anchors[i]))
                anchors[i].addEventListener('click', clickAnchors.bind(anchors[i]))
            }
        }
    }
}

function links() {
    mut.disconnect()
    if (document.querySelector('.get-started-button a') && (document.querySelector('.get-started-button a').innerText !== 'Choose your plan') || (document.querySelector('a.link-tag') && document.querySelector('a.link-tag').innerHTML !== 'Choose your plan')) {

        document.querySelectorAll('.purchase-button').forEach((item) => {
            item.innerHTML = 'Choose your plan'
        })

        document.querySelectorAll('a.link-tag').forEach((item) => {
            item.removeEventListener('click', clickLT)
            item.addEventListener('click', clickLT)
        })

        document.querySelectorAll('.button-div button').forEach((item) => {
            item.innerHTML = 'Choose your plan'
        })

        document.querySelectorAll('a.button-div').forEach((item) => {
            item.removeEventListener('click', clickBD)
            item.addEventListener('click', clickBD)
        })

        if(document.querySelector('.get-started-button a')) {
            document.querySelectorAll('.get-started-button a')[0].innerHTML = 'Choose your plan'
            document.querySelectorAll('.get-started-button a')[0].removeEventListener('click', clickAboutlink1)
            document.querySelectorAll('.get-started-button a')[0].addEventListener('click', clickAboutlink1)

            document.querySelectorAll('.get-started-button a')[1].innerHTML = 'Choose your plan'
            document.querySelectorAll('.get-started-button a')[1].removeEventListener('click', clickAboutlink2)
            document.querySelectorAll('.get-started-button a')[1].addEventListener('click', clickAboutlink2)
        }

    }
    mut.observe(document.body, {
        childList: true,
        subtree: true
    })
}

function drawCheckout () {

    document.body.insertAdjacentHTML('afterbegin', styleCheckout)
    document.querySelector('.cart-page-component').insertAdjacentHTML('beforebegin', topCheckoutBlock)
    document.querySelector('.toggle-product-container').remove()
    document.querySelector('.left-component').style.order = '2'
    document.querySelector('.product-image-order-summary>:first-child').remove()
    document.querySelector('.product-details').innerHTML = infoBlockCheckout
    document.querySelector('.plan-selection-desktop .plan-offers').innerHTML = listCheckout
    document.querySelector('.quantity').insertAdjacentHTML('afterend', `<p class="economy"><span>Normally  <s><b>${(href.includes('-30x'))?'$1000':'$3500'}</b></s></span> <span>Save <b>70%!</b></span></p>`)
    document.querySelector('.total-label').insertAdjacentHTML('beforeend', `<span>FREE shipping!</span>`)
    document.querySelectorAll('.plan-name')[0].insertAdjacentHTML('beforeend', `<div class="info"> <div class="popup_info">$19.99/mo, charged when sequencing is completed, cancel anytime thereafter. <a class="return_policy" href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>`)
    document.querySelectorAll('.plan-name')[1].insertAdjacentHTML('beforeend', `<div class="info"> <div class="popup_info">$9.99/mo, billed yearly, charged when sequencing is completed, cancel anytime thereafter. <a class="return_policy" href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>`)
    document.querySelectorAll('.plan-name')[2].insertAdjacentHTML('beforeend', `<div class="info"> <div class="popup_info">One time payment, unlimited access to all reporting features. <a class="return_policy" href="https://nebulagenomics.zendesk.com/hc/en-us/articles/360028257612-Refund-Policy-" target="_blank">Refund policy.</a></div></div>`)
    let cl = new Event('click')
    document.querySelector('.coupon-code-question').dispatchEvent(cl)


    document.querySelectorAll('input#monthly-plan.form-check-input')[0].removeEventListener('click', monthlyPlan)
    document.querySelectorAll('input#monthly-plan.form-check-input')[0].addEventListener('click', monthlyPlan)

    document.querySelectorAll('label[for="monthly-plan"] .info')[0].removeEventListener('mouseover', monthlyPlanInfo)
    document.querySelectorAll('label[for="monthly-plan"] .info')[0].addEventListener('mouseover', monthlyPlanInfo)

    document.querySelectorAll('input#yearly-plan.form-check-input')[0].removeEventListener('click', yearlyPlan)
    document.querySelectorAll('input#yearly-plan.form-check-input')[0].addEventListener('click', yearlyPlan)

    document.querySelectorAll('label[for="yearly-plan"] .info')[0].removeEventListener('mouseover', yearlyPlanInfo)
    document.querySelectorAll('label[for="yearly-plan"] .info')[0].addEventListener('mouseover', yearlyPlanInfo)

    document.querySelectorAll('input#yearly-plan.form-check-input')[0].removeEventListener('click', noPlan)
    document.querySelectorAll('input#yearly-plan.form-check-input')[0].addEventListener('click', noPlan)

    document.querySelectorAll('label[for="no-plan"] .info')[0].removeEventListener('mouseover', noPlanInfo)
    document.querySelectorAll('label[for="no-plan"] .info')[0].addEventListener('mouseover', noPlanInfo)

    document.querySelectorAll('.return_policy').forEach((item) => {
        item.removeEventListener('click', returnPolicy)
        item.addEventListener('click', returnPolicy)
    })


}


let mut = new MutationObserver((ms) => {
    let h = window.location.href
    if(h.includes('/oasis-labs-partnership/') || h.includes('/george-church/')) {
        links()
    } else {
        drawHomepage()
    }
})

window.onload = function() {
    if (!href.includes('cart')) {
        if (href.includes('/oasis-labs-partnership/') || href.includes('/george-church/')) {
            links()
        } else {
            drawHomepage()
        }

        mut.observe(document.body, {
            childList: true,
            subtree: true
        })

    } else {
        let timer = setInterval(function () {
            console.log('work')
            if (document.querySelector('.cart-page-component')) {
                drawCheckout()
                console.log('end')
                clearInterval(timer)
            }
        }, 100)
    }
}

let clickLink = new Event('click')


function scrollTOPdp() {
    setTimeout(function () {
        document.getElementById('choose').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, 1500)
}

function clickBD(e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Choose your plan-1 Oasis Labs'
    });
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickLT(e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Choose your plan-2 Oasis Labs'
    });
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickAboutlink1 (e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': `click on Choose your plan-1 About Us`
    });
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickAboutlink2 (e) {
    e.preventDefault()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': `click on Choose your plan-2 About Us`
    });
    document.querySelector('.navbar-links>:first-child a').click()
    scrollTOPdp()
}

function clickAnchors(e) {
    e.preventDefault()
    const blockID = this.getAttribute('href').substr(1)
    let i = this.getAttribute('data-number')
    console.log(i)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': `click on Choose your plan-${i} Homepage`
    });

    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

function buyTest299() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Buy your DNA test $299'
    });
}

function buyTest999() {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Buy your DNA test $999'
    });
}

function monthlyPlan(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Monthly checkbox Checkout'
    });
}

function monthlyPlanInfo(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on info for Monthly Checkout'
    });
}

function yearlyPlan(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Yearly checkbox Checkout'
    });
}

function yearlyPlanInfo(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on info for Yearly Checkout'
    });
}

function noPlan(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Unlimited checkbox Checkout'
    });
}

function noPlanInfo(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on info for ULA Checkout'
    });
}

function returnPolicy(e) {
    e.stopImmediatePropagation()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Homepage mini PDP',
        'eventAction': 'click on Return policy Checkout'
    });
}

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1209457,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'homepage_mini-PDP');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - HP mini PDPs',
    'eventAction': 'loaded'
});

