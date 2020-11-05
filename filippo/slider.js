let script4 = document.createElement('script');
script4.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
script4.async = false;
document.head.appendChild(script4);

let linkstyle = document.createElement('link');
linkstyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
linkstyle.rel = "stylesheet"
linkstyle.async = false;
document.head.appendChild(linkstyle);

let style = `
<style>
  .slider_reviews {
    position: relative;
    margin: 15px 0;
    padding: 15px 20px 0;
    background-color: #FAFAFA;
  }
  
  .sliderBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .leftBtn {
    left: -20px;
  }
  .rightBtn {
    right: -20px;
  }
  
  .slider_item .author,  .slider_item .review {
    font-size: 12px;
    font-weight: 600;
    line-height: 26px;
    margin-bottom: 0;
  }
  
  .slider_item .review {
    font-weight: 400;
  }
  
  .tns-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px 0;
    margin: 15px -20px 0;
  }
  
  .tns-nav button {
    padding: 0;
    display: block;
    height: 8px;
    width: 8px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: #fff;
    margin: 0 5px;
  }
  .tns-nav button.tns-nav-active {
    background-color: black;
  }
</style>
`

  let sliderHtml = `
  <div class="slider_reviews">
    <div class="leftBtn sliderBtn">
      <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16L1 8.5L9 1" stroke="#4B4B4B" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="slider_content">
      <div class="slider_item">
        <div class="stars">
          <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#E5C676"/>
            <path d="M14 0L14.8981 2.76393H17.8042L15.4531 4.47214L16.3511 7.23607L14 5.52786L11.6489 7.23607L12.5469 4.47214L10.1958 2.76393H13.1019L14 0Z" fill="#E5C676"/>
            <path d="M24 0L24.8981 2.76393H27.8042L25.4531 4.47214L26.3511 7.23607L24 5.52786L21.6489 7.23607L22.5469 4.47214L20.1958 2.76393H23.1019L24 0Z" fill="#E5C676"/>
            <path d="M34 0L34.8981 2.76393H37.8042L35.4531 4.47214L36.3511 7.23607L34 5.52786L31.6489 7.23607L32.5469 4.47214L30.1958 2.76393H33.1019L34 0Z" fill="#E5C676"/>
            <path d="M44 0L44.8981 2.76393H47.8042L45.4531 4.47214L46.3511 7.23607L44 5.52786L41.6489 7.23607L42.5469 4.47214L40.1958 2.76393H43.1019L44 0Z" fill="#E5C676"/>
          </svg>
        </div>
        <p class="author">Jake T. Verified Buyer</p>
        <p class="review">It’s an excellent and amazing company! My brother bought one timepiece first and me and my
         husband, we loved it; then we bought two pieces, one for each! The delivery is very fast ( 1 week) and the 
         product is really well made and stunning! The bracelet is incredibly awesome, has really an easy way to modify
          the size and it fits my wrist perfectly (I have a very thin one, very hard to find watches that fit that 
          perfectly) and my husband has a very thick wrist and it also get perfect!</p>
      </div>
      <div class="slider_item">
        <div class="stars">
          <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#E5C676"/>
            <path d="M14 0L14.8981 2.76393H17.8042L15.4531 4.47214L16.3511 7.23607L14 5.52786L11.6489 7.23607L12.5469 4.47214L10.1958 2.76393H13.1019L14 0Z" fill="#E5C676"/>
            <path d="M24 0L24.8981 2.76393H27.8042L25.4531 4.47214L26.3511 7.23607L24 5.52786L21.6489 7.23607L22.5469 4.47214L20.1958 2.76393H23.1019L24 0Z" fill="#E5C676"/>
            <path d="M34 0L34.8981 2.76393H37.8042L35.4531 4.47214L36.3511 7.23607L34 5.52786L31.6489 7.23607L32.5469 4.47214L30.1958 2.76393H33.1019L34 0Z" fill="#E5C676"/>
            <path d="M44 0L44.8981 2.76393H47.8042L45.4531 4.47214L46.3511 7.23607L44 5.52786L41.6489 7.23607L42.5469 4.47214L40.1958 2.76393H43.1019L44 0Z" fill="#E5C676"/>
          </svg>
        </div>
        <p class="author">Ari E. Verified Buyer</p>
        <p class="review">My Filippo Loreti collection just got bigger! I just received my 7th watch - limited edition
         Ascari in black. Fantastic watch design. The quality is top level and finishing is excellent. All my watches are
          absolutely stunning and I would recommend this company any day!</p>
      </div>
      <div class="slider_item">
        <div class="stars">
          <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#E5C676"/>
            <path d="M14 0L14.8981 2.76393H17.8042L15.4531 4.47214L16.3511 7.23607L14 5.52786L11.6489 7.23607L12.5469 4.47214L10.1958 2.76393H13.1019L14 0Z" fill="#E5C676"/>
            <path d="M24 0L24.8981 2.76393H27.8042L25.4531 4.47214L26.3511 7.23607L24 5.52786L21.6489 7.23607L22.5469 4.47214L20.1958 2.76393H23.1019L24 0Z" fill="#E5C676"/>
            <path d="M34 0L34.8981 2.76393H37.8042L35.4531 4.47214L36.3511 7.23607L34 5.52786L31.6489 7.23607L32.5469 4.47214L30.1958 2.76393H33.1019L34 0Z" fill="#E5C676"/>
            <path d="M44 0L44.8981 2.76393H47.8042L45.4531 4.47214L46.3511 7.23607L44 5.52786L41.6489 7.23607L42.5469 4.47214L40.1958 2.76393H43.1019L44 0Z" fill="#E5C676"/>
          </svg>
        </div>
        <p class="author">Eric M. Verified Buyer</p>
        <p class="review">I just received my 2 limited edition timepieces. The Ascari and Okeanos are both just stunning. 
        I have 6 Filippo Loreti watches in my collection. Hands down the best watches I have bought to date.</p>
      </div>
      <div class="slider_item">
        <div class="stars">
          <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 0L4.89806 2.76393H7.80423L5.45308 4.47214L6.35114 7.23607L4 5.52786L1.64886 7.23607L2.54692 4.47214L0.195774 2.76393H3.10194L4 0Z" fill="#E5C676"/>
            <path d="M14 0L14.8981 2.76393H17.8042L15.4531 4.47214L16.3511 7.23607L14 5.52786L11.6489 7.23607L12.5469 4.47214L10.1958 2.76393H13.1019L14 0Z" fill="#E5C676"/>
            <path d="M24 0L24.8981 2.76393H27.8042L25.4531 4.47214L26.3511 7.23607L24 5.52786L21.6489 7.23607L22.5469 4.47214L20.1958 2.76393H23.1019L24 0Z" fill="#E5C676"/>
            <path d="M34 0L34.8981 2.76393H37.8042L35.4531 4.47214L36.3511 7.23607L34 5.52786L31.6489 7.23607L32.5469 4.47214L30.1958 2.76393H33.1019L34 0Z" fill="#E5C676"/>
            <path d="M44 0L44.8981 2.76393H47.8042L45.4531 4.47214L46.3511 7.23607L44 5.52786L41.6489 7.23607L42.5469 4.47214L40.1958 2.76393H43.1019L44 0Z" fill="#E5C676"/>
          </svg>
        </div>
        <p class="author">Chris Z. Verified Buyer</p>
        <p class="review">I am a proud owner of 5 Filippo Loreti watches! I absolutely love them...the quality is perfect,
         it looks gorgeous. Also, all of my questions were answered very quickly and professionally. Wonderful experience!
          Thank you!</p>
      </div>
    </div>
    <div class="rightBtn sliderBtn">
      <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 16L9 8.5L1 1" stroke="#4B4B4B" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
`

document.addEventListener('DOMContentLoaded', function () {
  document.body.insertAdjacentHTML('afterbegin', style);
  document.querySelector('.wishlist-wrao').insertAdjacentHTML('afterend', sliderHtml);
})

window.addEventListener('load', function () {
  let slider = tns({
    container: ".slider_content",
    prevButton: ".leftBtn",
    nextButton: ".rightBtn",
    navPosition: "bottom",
    preventScrollOnTouch: 'auto'
  })

  slider.events.on('transitionStart', (info, eventName) => {
    console.log('slider swipe');
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp - Review_under_ATC_on_pdp',
      'eventAction': 'click on slider arrows'
    });
  });
});


  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1885763,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
  hj('trigger', 'Review_under_ATC_on_pdp');

  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Review_under_ATC_on_pdp',
    'eventAction': 'loaded'
  });

