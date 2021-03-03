let navbar = 'data-v-4d3f649e',
    mainpage = 'data-v-693ebc60'

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
      
      .choose-plan-1[data-v-465d81fa] {
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
      }
      
      .mini_pdp ul {
        margin: 0 0 0 25px;
        padding: 0;
      }
      
      .mini_pdp ul+img {
        width: 20%;
      }
      
      .mini_pdp ul li{
        font-size: 14px;
        list-style: none;
        position:relative;
      }
      
      .mini_pdp ul li:not(:last-child) {
        margin-bottom: 20px;
      }
      
      .mini_pdp ul li::before {
        position:absolute;
        content: '—';
        left: -25px;
        top: 0;
        color: black;
      }
      
      a.btn {
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
      
      .btn_block .btn {
        margin-top: 0;
      }
      
      .mini-faqs[data-v-074a3fd6] {
        padding-bottom: 50px;
      }
      
      .comparison-chart-component .btn {
        border: 1px solid white;
        background-color: #3f4cec;
      }
    </style>
`

let mainsection = `
    <div class="main_section flx">
        <div class="text">
            <h1>Whole Genome Sequencing - The only genetic test that decodes 100% of DNA</h1>
            <div class="flx">
                <p>The most accurate DNA test in the world to examine your ancestry, health, diet, and physical activity</p>
                <img src="https://i.ibb.co/xG6Bybx/plane.png" alt="plane">
            </div>
            <a href="#choose">Choose your plan</a>
        </div>
        <img src="https://portal.nebula.org/api/public-images/brochure/hero-image.png" alt="bg">
    </div>
`

let btn = `
    <div class="btn_block">
      <a href="#choose" class="btn">Choose your plan</a>
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
          <a href="https://portal.nebula.org/cart/nebula-30x" class="btn">Buy your DNA test</a>
        </div>
        <div class="x100">
        <h3>Ultra Deep Whole Genome Sequencing</h3>
          <ul class="list">
            <li>Discover your rare genetic mutations with highest accuracy</li>
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
          <a href="https://portal.nebula.org/cart/nebula-100x" class="btn">Buy your DNA test</a>
        </div>
      </div>
    </div>
`

function drawHomepage() {
    document.body.insertAdjacentHTML('afterbegin', homepageStyle)
    document.querySelector('.mainpage').innerHTML = mainsection
    document.querySelector('.choose-plan-1 .right').innerHTML = `<img src="https://portal.nebula.org/api/public-images/brochure/30xProduct/choose-product-bg.png">`
    document.querySelector('.choose-plan-1').insertAdjacentHTML('afterbegin', `<h2>About Our DNA tests, reports and technology</h2>`)
    document.querySelector('.choose-plan-1').insertAdjacentHTML('afterend', miniPdp)
    document.querySelector('.navbar-image img').setAttribute('src', 'https://i.ibb.co/Pc5JBYq/logo.png')
    document.querySelector('.mini-faqs').insertAdjacentHTML('beforebegin', btn)
    document.querySelector('.mini-faqs').insertAdjacentHTML('afterend', btn)
    document.querySelector('.comparison-chart-component').insertAdjacentHTML('beforeend', `<a href="#choose" class="btn">Choose your plan</a>`)


    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

let mut = new MutationObserver((ms) => {
    if (document.querySelector('.mainpage-page')) {
        drawHomepage()
    }
})

mut.observe(document, {
    childList: true,
    subtree: true
})
