let link1 = document.createElement('link');
link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
link1.rel = 'stylesheet'
document.head.appendChild(link1);

let script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
script.async = false;
document.head.appendChild(script)

let faq = [
    ['How do I place stickers to protect my whole child\'s body?',
    `Kids aged 0-2 need 1 patch: One patch placed centrally on clothes (ie, on their jumpsuit on the stomach, chest)<br>
      Kids aged 3-5 need 2 patches: One patch on the top clothes (sweater, t-shirt) and one on the shorts.<br>
      Kids aged 6+ need 2-4 patches: One patch on the clothing next to each exposed limb (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side of the shorts)`],
    ['How long do unopened stickers last?',
    `1 pack consists of 10 separately packed sheets. Each sheet contains 6 stickers. Opened sticker sheets are most effective within 8 hours of opening, and continue to be effective for up to 72 hours.<br>
      BuzzPatch when sealed will last up to 6 months.`],
    ['Where are they made?',
    'The stickers are made in Australia and USA.'],
    ['How do they work?',
     'Mosquitoes find us by sensing the carbon dioxide (CO2) we emit when we exhale. Certain compounds, including specific essential oils, overpower the CO2 we emit, essentially hiding us from mosquitoes.'],
    ['How many stickers do I need?',
    `Kids aged 0-2 need 1: One patch placed centrally on clothes (ie, on their jumpsuit on the stomach, chest)<br>
        Kids aged 3-5 need 2: One patch on the top clothes (sweater, t-shirt) and one on the shorts.<br>
        Kids aged 6+ need 2-4: One patch on the clothing next to each exposed limb (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side of the shorts)`],
    ['How long will shipping take?',
    'All orders are dispatched the same day, and usually take 3-5 days to USA, Canada and Australia. However, with current travel restrictions, we’re seeing shipping times range between 10-15 days, and in some cases up to 25 days.'],
    ['Is shipping free?', 'Yes! We provide FREE, worldwide shipping on all orders.']
]

let style = `
    <style>
    
      .modal.show .modal-dialog {
        margin-top: 50% !important;
      }
    
      .js-main header {
        background-color: #ECEEF0 !important;
      }
    
      header .navbar.navbar-expand-lg {
        padding: 5px 15px !important;
      }
    
      .guarantee {
        background-color: #FF3C7F;
        width: 100%;
        color: white;
        display:flex;
        justify-content:center;
        margin-bottom: 17px;
      }
      
      .guarantee p {
        margin: 10px 0;
        padding: 0 15px;
        display:flex;
        align-items: center;
        justify-content:center;
        font-size: 14px;
        font-weight: 500;
      }
      
      .guarantee p:first-child {
        border-right: 1px solid white;
      }
      
      .guarantee+h1 {
        margin: 40px 20px;
      }
      
      .rated_trustpilot {
        display:flex;
        justify-content:space-between;
        width: 90%;
        margin: 0 auto 60px;
        padding: 17px 25px;
        background-color: #fff;
        border-radius: 15px;
        color: black;
      } 
      
      .rated_trustpilot>:first-child {
        width: 55%;
      }
      
      .rated_trustpilot>* img{
        width: 100%;
      }
      
      .rated_trustpilot>:last-child {
        width: 40%;
        display:flex;
        justify-content:space-between;
        align-items: flex-end;
        flex-direction: column;
      }
      
      h1.js-title,
      section.js-mobile,
      section.included,
      #children-safe,
      #purchase>:first-child,
      #ingredients>.container>:first-child,
      .card-link span.arrow,
      #getNow p.sub,
      #getNow .star,
      #getNow .mc
       {
        display: none !important;
      }
      
      #ingredients {
        background: none;
        margin-bottom: 20px;
      }
      
      #ingredients .new-btn {
        margin: 35px auto 0;
        width: 90%;
      }
      
      #js-accordion {
        margin-top: -50px;
      }
      
      #js-accordion .card-link {
        font-weight: 600;
        display:flex !important;
        align-items: center;
        padding: 10px 0 !important;
      }
      
      #js-accordion .card-link img {
        margin-right: 20px;
      }
      
      #js-accordion .card-body {
        background: rgba(249, 183, 73, 0.08) !important;
        font-size: 18px !important;
        margin-bottom: 0 !important;
      }
      
      #js-accordion .card {
        border: none !important;
        margin-bottom: 20px;
      }
      
      .ingredients .js-video {
        margin-top: 0 !important;
      }
      
      .natural {
        padding: 40px 0;
        background: #ECEEF0 url("https://i.ibb.co/X3rFZDY/bg-natural.jpg") bottom center no-repeat;
        background-size: contain;
      }
      
      .natural p {
        padding: 0 26px;
      }
      
      .withImg img{
        height: 54px;
        margin-right: 20px;
      }
      
      .withImg b {
        font-size: 22px;
      }
      
      .withImg {
        display: flex;
        margin-bottom: 30px;
        align-items: center;
      }
      
      .natural p:last-child {
        font-size: 18px !important;
        margin-bottom: 140px;
      }
      
      #new_block {
        padding: 0 26px;
      }
      
      #new_block p:not(.withImg):not(.title) {
        font-size: 18px !important;
        margin: 25px 0;
      }
      
      .new-btn {
        margin: 0 auto;
        display: flex !important;
        align-items: center;
        justify-content:center;
        width: 100%;
        box-shadow: none !important;
        height: 65px;
      }
      
      #new_block .title {
        margin-top: 20px;
        font-size: 24px !important;
        text-align: center;
      }
      
      .brands {
        text-align: center;
      }
      
      .brands img {
        margin-bottom: 15px;
      }
      
      .brands img:nth-child(4) {
        margin: 0 30px 15px;
      }
      
      .slider_block>p {
        font-weight: 700;
        font-size: 20px !important;
        text-align: center;
        margin: 25px 0;
      }
      
      .slide_wrap {
        padding: 15px 26px;
      }
      
      .slide {
        padding: 22px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.14);
      }
      
      .reviewImg {
        height: 200px;
        width: 100%;
        border-radius: 10px;
        margin-bottom: 15px;
        overflow: hidden;
      }
      
      .reviewImg img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
      
      .slide .name {
        display: flex;
        justify-content:space-between;
        margin-bottom: 15px;
      }
      
      .slide .name p{
        font-weight: 700;
        font-size: 14px !important;
      }
      
      .slide .name p:last-child {
        font-weight: 300;
        opacity: .45;
      }
      
      .review_footer {
        display: flex;
        justify-content:space-between;
        margin-top: 15px;
      }
      
      .review_footer>img {
        width: 104px;
        height: 29px;
      }
      
      .review_footer p {
        font-weight: 300;
        opacity: .45;
        font-size: 14px !important;
        display:flex;
        align-items: center;
      }
      
      .review_footer p img {
        margin-right: 10px;
      }
      
      #getNow h2+p {
        font-size: 20px !important;
        font-weight: 600;
      }
      
      #getNow img {
        max-width: none !important;
        margin-bottom: 15px;
      }
      
      .money_back {
        display: flex;
        align-items: center;
        justify-content:space-between;
      }
      
      .money_back>img{
        width: 25%;
      }
      
      .money_back .rated_trustpilot {
        width: 70%;
        margin: 0;
        background-color: #F9F8F6;
      }
      
      .tns-nav {
        text-align: center;
        margin-top: 20px;
      }
      
      .tns-nav button {
        border: none;
        height: 10px;
        width: 10px;
        background-color: #c9c9c9;
        border-radius: 50%;
        margin: 0 10px;
      }
      
      .tns-nav button.tns-nav-active {
        background-color: #FF3C7F;
      }
      
    </style>
`

let block1 = `
    <div class="guarantee">
      <p>Free shipping</p>
      <p>30-day money-back guarantee</p>
    </div>
    <h1>Keep mosquitoes away. 100% Effectively</h1>
    <a href="https://www.trustpilot.com/review/buzzpatch.com" class="rated_trustpilot" target="_blank">
      <div>
        <p>Is rated<br>
        <b>Excellent</b></p>
        <img src="https://i.ibb.co/bJ7dzWV/stars.png" alt="stars">
      </div>
      <div>
        <img src="https://i.ibb.co/PZ7JjbS/logo-trust.png" alt="logo">
        <p>Reviews 233</p>
      </div>
    </a>
`


let natural = `
    <div class="natural">
      <p class="withImg"><img src="https://i.ibb.co/HFLFrZG/natural.png" alt="natural"><b>100% natural content & chemical free</b></p>
      <p>The BuzzPatch has only 3 natural ingredients:  Lavender, Citronella and Geraniol oils. It is completely
       chemical free and safe for kids.</p>
    </div>
`

let effective = `
    <section id="new_block">
       <div class="12hours">
        <p class="withImg"><img src="https://i.ibb.co/fpq1tYw/hours.png" alt="hours"><b>Effective up to 12 hours</b></p>
        <p>Stickers are the most effective in the first 8 hours after opening, and continues to be effective for 24-72 hours from opening. </p>
       </div>
       <img src="https://i.ibb.co/YZ57H2F/path.png" alt="product">
       <p>6-piece sheet is the most effective within first 8 hours after opening, and continue to be effective for 24-72 hours from opening</p>
       <p class="withImg"><img src="https://i.ibb.co/09P5Bfd/shield.png" alt="shield"><b>Protects the whole body</b></p>
       <p>Just put several stickers on your kids cloths and be safe</p>
       <p class="withImg"><img src="https://i.ibb.co/dBL8X8K/baby.png" alt="baby"><b>Safe for kids 0+ year old</b></p>
       <p>100% natural components and medical adhensive are safe for even the youngest ones</p>
       <a href="#getNow" class="btn js-btn btn-primary new-btn">GET BUZZPATCH</a>
       <p class="title">As seen on:</p>
       <div class="brands">
        <img src="https://i.ibb.co/jVP2M1w/yahoo.png" alt="img1">
        <img src="https://i.ibb.co/CbSyB9J/wh.png" alt="img2">
        <img src="https://i.ibb.co/ncNMVDh/ut.png" alt="img3">
        <img src="https://i.ibb.co/HHtKgYV/delish.png" alt="img4">
        <img src="https://i.ibb.co/KxRBFR2/today.png" alt="img5">
       </div>
    </section> 
`

let slider = `
    <div class="slider_block">
      <p>Why people love BuzzPatch</p>
      <div class="slider">
        <div class="slide_wrap">
        <div class="slide">
          <div class="reviewImg">
            <img src="https://cdn.stamped.io/uploads/photos/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e.jpg?v=1597379799" alt="">
          </div>
          <div class="name">
            <p>Fadya A.</p>
            <p>07/31/2020</p>
          </div>
          <div class="review">
            <img src="https://i.ibb.co/4Ff3rdh/review-stars.png" alt="">
            <p>The sticker itself is very good quality, I was worried it would fall but the glue is very good and I 
                changed the location of the sticker more than once and it never fell!
                Didn't get any mosquito bites, I started to think something works with those little birds!
                Other than that, I had the best experience ordering, following up and exchanging emails since my 
                order was few days delayed. I really can’t be happier with this whole experience!
            </p>
          </div>
          <div class="review_footer">
            <p><img src="https://i.ibb.co/HpV2jQ8/flag.png" alt="flag">Canada</p>
            <img src="https://i.ibb.co/4dFzMpR/buyer.png" alt="verify">
          </div>
        </div></div>
        <div class="slide_wrap">
        <div class="slide">
          <div class="name">
            <p>Brooke L.</p>
            <p>08/28/2020</p>
          </div>
          <div class="review">
            <img src="https://i.ibb.co/4Ff3rdh/review-stars.png" alt="">
            <p>They are great! They come in sealed packages so that they stay fresh, my kids think they are cute and 
            they have so far worked really well to keep the miquito's away! I am very satisfied with this product and 
            would totally recommend them to a friend!! I will be ordering again next summer!
            </p>
          </div>
          <div class="review_footer">
            <p><img src="https://i.ibb.co/HpV2jQ8/flag.png" alt="flag">Canada</p>
            <img src="https://i.ibb.co/4dFzMpR/buyer.png" alt="verify">
          </div>
        </div></div>
        <div class="slide_wrap">
        <div class="slide">
          <div class="reviewImg">
            <img src="https://cdn.stamped.io/tr:w-350,/uploads/photos/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e.jpg?" alt="">
          </div>
          <div class="name">
            <p>Lauren S</p>
            <p>07/13/2020</p>
          </div>
          <div class="review">
            <img src="https://i.ibb.co/4Ff3rdh/review-stars.png" alt="">
            <p>We just took the patches on a camping trip. We have an 8 month old so therefore I'm hesitant to put
             much on her to protect her from the mosquitos and it's still quite buggy where we are, so the patches 
             were an awesome option. For the most part, they help immensely! On very, very buggy hikes, they didn't 
             necessarily fend absolutely all of the mosquitos off, but did a pretty good job.
            </p>
          </div>
          <div class="review_footer">
            <p><img src="https://i.ibb.co/HpV2jQ8/flag.png" alt="flag">Canada</p>
            <img src="https://i.ibb.co/4dFzMpR/buyer.png" alt="verify">
          </div>
        </div></div>
        <div class="slide_wrap">
        <div class="slide">
          <div class="reviewImg">
            <img src="https://cdn.stamped.io/tr:w-350,/uploads/photos/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd.jpg?" alt="">
          </div>
          <div class="name">
            <p>Joanne</p>
            <p>06/28/2020</p>
          </div>
          <div class="review">
            <img src="https://i.ibb.co/4Ff3rdh/review-stars.png" alt="">
            <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)
            </p>
          </div>
          <div class="review_footer">
            <p><img src="https://i.ibb.co/HpV2jQ8/flag.png" alt="flag">Canada</p>
            <img src="https://i.ibb.co/4dFzMpR/buyer.png" alt="verify">
          </div>
        </div>
        </div>
      </div>
    </div>
`

let lastBlock = `
<div class="money_back">
    <img src="https://i.ibb.co/pjzKN5d/back.png" alt="">
    <a href="https://www.trustpilot.com/review/buzzpatch.com" class="rated_trustpilot" target="_blank">
      <div>
        <p>Is rated<br>
        <b>Excellent</b></p>
        <img src="https://i.ibb.co/bJ7dzWV/stars.png" alt="stars">
      </div>
      <div>
        <img src="https://i.ibb.co/PZ7JjbS/logo-trust.png" alt="logo">
        <p>Reviews 233</p>
      </div>
    </a>
</div>
`

// document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('afterbegin', style)
    document.querySelector('.navbar-expand-lg').insertAdjacentHTML('afterend', block1)
    document.querySelector('header').insertAdjacentHTML('afterend', natural)
    document.querySelector('#ingredients').after(document.querySelector('#faqs'))
    document.querySelector('.natural').insertAdjacentHTML('afterend', slider)
    document.querySelector('.natural').insertAdjacentHTML('afterend', effective)
    document.querySelector('#ingredients').insertAdjacentHTML('beforeend', `<a href="#getNow" class="btn js-btn btn-primary new-btn">GET BUZZPATCH</a>`)
    document.querySelector('#getNow .star+img').remove()
    document.querySelector('#getNow p.sub').insertAdjacentHTML('afterend', `<img src="https://i.ibb.co/NKDRJ0L/patches.png">`)
    document.querySelector('#getNow .btn').insertAdjacentHTML('afterend', lastBlock)


    document.querySelectorAll('#faqs .card').forEach((item, i) => {
        if (i > 6) {
            item.style.display = 'none'
        } else {
            let collapsed = item.querySelector('a').classList.contains('collapsed')
            if (!collapsed) {
                item.querySelector('a').innerHTML = `<img class="point" src="https://i.ibb.co/MfC9Pzf/minus.png"> ${faq[i][0]}`
            } else {
                item.querySelector('a').innerHTML = `<img class="point" src="https://i.ibb.co/Rj2dGt5/plus.png"> ${faq[i][0]}`
            }
            item.querySelector('.card-body').innerHTML = `<p>${faq[i][1]}</p>`
        }
    })



    setTimeout(function () {
        let s = tns({
            container: '.slider',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto'
        })

        s.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvements',
                'eventAction': 'Swipe by reviews slider'
            });
        })
    }, 1000)



    document.querySelectorAll('#faqs .card-link').forEach((item) => {
        let imgSrc = (item.classList.contains('collapsed'))? 'https://i.ibb.co/Rj2dGt5/plus.png' : 'https://i.ibb.co/MfC9Pzf/minus.png'

        item.addEventListener('click', function () {
            document.querySelectorAll('#faqs .card-link').forEach((i) => {
                if(!i.classList.contains('collapsed')) {
                    i.querySelector('img').setAttribute('src', 'https://i.ibb.co/MfC9Pzf/minus.png')
                } else {
                    i.querySelector('img').setAttribute('src', 'https://i.ibb.co/Rj2dGt5/plus.png')
                }
            })

        })


    })

    document.querySelectorAll('.rated_trustpilot').forEach((item) => {
        item.addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvements',
                'eventAction': 'click on Trustpilot'
            });
        })
    })

    document.querySelectorAll('.new-btn').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault()
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvements',
                'eventAction': 'click on Get Buzzpatch'
            });
            document.getElementById('getNow').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    });
// });

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'pdp_improvements');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PDP improvements',
    'eventAction': 'loaded'
});
