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
      .card-link span.arrow
       {
        display: none !important;
      }
      
      #ingredients {
        background: none;
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
      
      #new_block button {
        margin: 0 auto;
        display: block;
        width: 100%;
        box-shadow: none;
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
      
      .slider_block {
        padding: 0 26px;
      }
      
      .slider_block>p {
        font-weight: 700;
        font-size: 20px !important;
        text-align: center;
        margin-bottom: 25px;
      }
      
      .slide {
        padding: 22px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.14);;
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
      
      .review_footer p {
        font-weight: 300;
        opacity: .45;
        font-size: 14px !important;
      }
    </style>
`

let block1 = `
    <div class="guarantee">
      <p>Free shipping</p>
      <p>30-day money-back guarantee</p>
    </div>
    <h1>Keep mosquitoes away. 100% Effectively</h1>
    <div class="rated_trustpilot">
      <div>
        <p>Is rated<br>
        <b>Excellent</b></p>
        <img src="https://i.ibb.co/bJ7dzWV/stars.png" alt="stars">
      </div>
      <div>
        <img src="https://i.ibb.co/PZ7JjbS/logo-trust.png" alt="logo">
        <p>Reviews 233</p>
      </div>
    </div>
`

//    https://i.ibb.co/gRxpdMy/delivery.png
//    https://i.ibb.co/pjzKN5d/back.png

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
       <button class="btn js-btn btn-primary">GET BUZZPATCH</button>
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
        </div>
      </div>
    </div>
`

document.body.insertAdjacentHTML('afterbegin', style)
document.querySelector('.navbar-expand-lg').insertAdjacentHTML('afterend', block1)
document.querySelector('header').insertAdjacentHTML('afterend', natural)
document.querySelector('#ingredients').after(document.querySelector('#faqs'))
document.querySelector('.natural').insertAdjacentHTML('afterend', slider)
document.querySelector('.natural').insertAdjacentHTML('afterend', effective)



document.querySelectorAll('#faqs .card-link').forEach((item) => {
    let imgSrc = (item.classList.contains('collapsed'))? 'https://i.ibb.co/Rj2dGt5/plus.png' : 'https://i.ibb.co/MfC9Pzf/minus.png'
    item.insertAdjacentHTML('afterbegin', `<img class="point" src="${imgSrc}">`)

    item.addEventListener('click', function () {
        if(item.classList.contains('collapsed')) {
            item.querySelector('img').setAttribute('src', 'https://i.ibb.co/MfC9Pzf/minus.png')
        } else {
            item.querySelector('img').setAttribute('src', 'https://i.ibb.co/Rj2dGt5/plus.png')
        }
    })
})
