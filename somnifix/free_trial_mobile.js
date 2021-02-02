let styleTrial = `
<style>
  .freeBtn {
    height: 40px;
    padding: 10px 25px;
    border: 1px solid #1e415f;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 700;
    color: #1E415F;
    text-align: center;
    background-color: #fff;
    text-transform:uppercase;
    line-height: normal;
    cursor: pointer;
    margin: 5px 0 10px;
  }
  
  .on-mobile-btn-wrapper {
    display: block !important;
  }
  
  .flx {
    display: flex;
    justify-content:center;
    align-items: stretch;
  }
  
  /*.freeBtn:hover {*/
  /*  background-color: #1e415f;*/
  /*  color: white;*/
  /*}*/
  
  .bgTrialBlock {
    display: none;
    position:fixed;
    padding: 15px 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
  
  .trialBlock {
    display: none;
    margin: 0 auto;
    padding: 20px 10px;
    width: 95%;
    position: relative;
    background-color: #fff;
    border-radius: 18px;
    z-index: 9999;
  }
  
  .trialBlock .closeTrial {
    position:absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  
  .trialBlock .closeTrial img {
    height: 18px;
    width: 18px;
  }
  
  .trialBlock .flx img {
    height: 300px;
    width: 300px;;
  }
  
  .trialBlock .steps {
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    color: #1E415F;
  }
  
  .trialBlock .steps p:not(.li) {
    font-size: 16px;
    font-weight: 700;
    padding-left: 30px;
  }
  
  .trialBlock .steps .li {
    position:relative;
    font-size: 12px;
    font-weight: 700;
    padding-left: 40px;
    margin-bottom: 10px;
  }
  
  .trialBlock .steps .li span {
    top: 3px;
    left: 3px;
    display: block;
    position:absolute;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border: 1px solid #1E415F;
    background-color: #ececec; 
  }
  
  .trialBlock .steps .li span::after{
    color: white; 
    content: "1";
    position:absolute;
    display:flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 23px;
    width: 23px;
    background-color: #1E415F;
  }
  
  .trialBlock .steps .li span.i2::after {
    content: "2";
  }
  
  .trialBlock .steps .li span.i3::after {
    content: "3";
  }
  
  .trialBlock h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 40px;  
    letter-spacing: 0.085em;
    color: #1E415F;
    text-align: center;
  }
  
  .trialBlock .addInfo {
    margin-top: 40px;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    color: #aeaeae;
  }
  
  .trialBlock .btnTrialCheckout {
    position: sticky;
    bottom: 15px;
    width: 100%;
    height: 45px;
    border-radius: 50px;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F27113;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .bgTrialBlock.active, .trialBlock.active {
    display: block;
  }
  
  .for-mobile {
    flex-direction: column;
    align-items: center;
  }
  
  .for-mobile img {
    order: 2;
  }
  
</style>
`

let freeTrialBlock = `
<div class="bgTrialBlock">
<div class="trialBlock">
  <div class="closeTrial">
    <img src="https://i.ibb.co/7yWPzhd/close.png" alt="close">
  </div>
  <h3>Try somnifix for free</h3>
  <div class="flx for-mobile">
    <img src="https://i.ibb.co/g4F2CDh/Group-58.jpg" alt="product">
    <div class="steps">
      <p>Three steps to high quality sleep:</p>
      <p class="li"><span class="i1"></span>We provide 3 SomniFix strips for FREE. You pay only for shipment (US shipping is free).</p>
      <p class="li"><span class="i2"></span>We deliver 3 SomniFix strips for your FREE trial.</p>
      <p class="li"><span class="i3"></span>After 7 days of your FREE trial, you are charged $49.97 for a subscription to a 12-week pack. You can cancel any time.</p>
    </div>
  </div>
  <p class="addInfo">
    Shipment is paid by customer. Offer of 3 free Somnifix strips is subject to 12-week subscription of 3 packs
     (84 Somnifix strips) every 12 weeks. Subscription is $49.97 and may be cancelled anytime. Valid credit card 
     information required. Billing starts 8 days from subscription date. Subscription may be cancelled during free 
     trial period via customer cabinet  -  <a href="https://somnifix.com/account/login">https://somnifix.com/account/login</a>
  </p>
  <div class="btnTrialCheckout">
        try for free
      </div>
</div>

  
</div>
`

let mainButtonTrial = `
    <div class="freeBtn">
      try for free
    </div>
`
document.addEventListener('DOMContentLoaded', function () {


    document.body.insertAdjacentHTML('afterbegin', styleTrial)
    document.body.insertAdjacentHTML('beforeend', freeTrialBlock)
    document.querySelector('.on-mobile-btn-wrapper').insertAdjacentHTML('beforeend', mainButtonTrial)

    document.querySelector('.freeBtn').addEventListener('click', function () {
        document.querySelector('.trialBlock').classList.add('active')
        document.querySelector('.bgTrialBlock').classList.add('active')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Free trial subscriptions',
            'eventAction': 'click on Try for free'
        });
    })

    document.querySelector('.closeTrial').addEventListener('click', function () {
        document.querySelector('.trialBlock').classList.remove('active')
        document.querySelector('.bgTrialBlock').classList.remove('active')
    })

    document.querySelector('.btnTrialCheckout').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Free trial subscriptions',
            'eventAction': 'Subscription in pop up'
        });
        $('#activate-free-trial').click()
    });



    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1651990,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'free_trial');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Free trial subscriptions',
        'eventAction': 'loaded'
    });
})

