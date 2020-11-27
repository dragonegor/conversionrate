let a = document.createElement("script");
a.src = "//code.jquery.com/jquery-3.3.1.min.js"
document.getElementsByTagName("head")[0].appendChild(a);

let openTimeTxt = window.initialState.salon_schedule[0][2].hours.slice(0, 5)
let closeTimeTxt = window.initialState.salon_schedule[0][2].hours.slice(7)

let btnTxt = `Запросити додаткові фото`,
    infoTitle = `Немає потрібного фото?`,
    infoBlock = `
    <p>Якщо ви хочете подивитися додаткові фото цього авто, запросіть їх у автосалону.</p>
  <p>Вони зроблять фото або відео і вишлють зручним вам способом (Viber, Telegram, email та ін.).</p>
  <p><b>Це швидко і абсолютно безкоштовно.</b></p>
  <button>Запросити додаткові фото</button>`,
    mainTitle = 'Як запросити додаткові фото цього авто:',
    p1 = 'Зателефонуйте менеджеру автосалону і назвіть модель даного авто.',
    p2 = 'Поясніть, які саме фото ви хочете побачити.',
    p3 = 'Домовтеся, яким способом вам зручно отримати фото (Viber, Telegram, email та ін.).',
    timeWork = `Відділ продажу салону працює<br>з ${openTimeTxt} до ${closeTimeTxt}`


if (!window.location.pathname.includes('/uk/')) {
  btnTxt = `Запросить дополнительные фото`
  infoTitle = `Нет нужного фото?`
  infoBlock = `
  <p>Если вы хотите посмотреть дополнительные фото этого авто, запросите их у автосалона.</p>
      <p>Они сделают фото или видео и вышлют удобным вам способом (Viber, Telegram, email и др.).</p>
      <p><b>Это быстро и абсолютно бесплатно.</b></p>
      <button>Запросить дополнительные фото</button>
  `
  mainTitle = 'Как запросить дополнительные фото этого авто:'
  p1 = 'Позвоните менеджеру автосалона и назовите модель данного авто.'
  p2 = 'Объясните, какие именно фото вы хотите увидеть.'
  p3 = 'Договоритесь, каким способом вам удобно получить фото (Viber, Telegram, email и др.).'
  timeWork = `Отдел продаж салона работает<br>c ${openTimeTxt} до ${closeTimeTxt}`
}

let style = `
  <style>
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
  }

  .more-img-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F3FAFD;
    border-radius: 2px;
    font-size: 16px;
    border: none;
    color: #256799;
  }
  .more-img-button svg {
    margin: 3px;
  }
  .info-block {
    padding: 24px 30px 30px;
    background-color: #F3FAFD;
    border-radius: 6px;
    width: 450px;
    position: absolute;
    margin-bottom: 20px;
    bottom: 150%;
    left: -10%;
    display: none;
  }
  
  .info-block.active {
    display: block;
  }
  
  .info-block h3 {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .info-block h3 svg {
    margin-right: 20px;
  }
  .info-block p {
    font-size: 13px;
    margin-bottom: 20px;
  }
  .info-block button {
    background-color: #219BE7;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }
  .info-block .close {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .info-block .pin {
    position: absolute;
    background-color: #F3FAFD;
    height: 20px;
    width: 20px;
    bottom: 0;
    left: 48%;
    transform-origin: bottom left;
    transform: rotateZ(45deg);
  }
  
  .more-img-block {
    position: absolute;
    bottom: 11px;
    left: 110px;
    z-index: 98;
  }
  
  .darkBgImg {
    position:absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 97;
    background-color: rgba(0, 0, 0, .6);
    display: none;
  }
  
  .darkBgImg.active, .darkBg.active {
    display: block;
  }
  
  .darkBg {
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(65, 64, 66, 0.5);
    display: none;
    z-index: 99;
  }
  
  .test_banner .react_modal__container {
      max-width: 800px !important;
    }
    
  .test_banner .react_modal__body {
      z-index: 100;
      display:flex;
      flex-wrap:wrap;
      padding: 0 15px 30px;
  }
  
  .test_banner.react_modal.calls_modal .react_modal__header {
      z-index: 2;
      color: white;
  }
  
  .popup-content h3 {
    font-size: 21px;
    font-weight: 700;
  }
  .popup-content .step {
    font-size: 13px;
    margin: 5px 0;
  }
  .popup-content .step b {
    margin-right: 5px;
  }
  .popup-content .popup-phone-block {
    border-radius: 6px;
    border: 1px solid #9B9B9B;
    padding: 12px;
    font-size: 16px;
    text-align: center;
  }
  .popup-content .popup-phone-block > *:not(:last-child) {
    margin-bottom: 8px;
  }
  .popup-content .popup-phone-block .phone {
    font-size: 26px;
    font-weight: 700;
    color: #3C9806;
  }
  .popup-content .popup-phone-block .work-time {
    color: #9B9B9B;
    margin: 0;
    font-size: 14px;
  }
  
  .test_banner .phones_modal_wrap {
    padding-left: 15px;
  }
  
  .test_banner .react_modal__body>div {
    width: 50%;
    min-width: 380px;
  }
  
  @media (max-width: 768px) {
    .test_banner .react_modal__body>div {
      width: 100%;;
    }
  }
  
  .test_banner .react_modal__body>div:first-child {
    display:flex;
    align-items: center;
  }
  .test_banner .react_modal__body .mt-20 {
    margin-top: 5px;
  }
  
  .test_banner .react_modal__body>div:first-child img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  
    
</style>
`;


let btnBlock = `
<div class="darkBgImg"></div>
<div class="more-img-block">
<button class="more-img-button">
  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.11546 5.6473C8.10143 5.6473 7.27936 6.48099 7.27936 7.50944C7.27936 8.53785 8.10139 9.37159 9.11546 9.37159C10.1295 9.37159 10.9516 8.5379 10.9516 7.50944C10.9516 6.48099 10.1295 5.6473 9.11546 5.6473ZM9.11546 8.48481C8.58429 8.48481 8.15369 8.04811 8.15369 7.5094C8.15369 6.97069 8.58429 6.53399 9.11546 6.53399C9.64664 6.53399 10.0772 6.97069 10.0772 7.5094C10.0772 8.04811 9.64664 8.48481 9.11546 8.48481Z" fill="#256799"/>
    <path d="M16.438 1.39096L4.50341 0.0165599C4.04022 -0.0502272 3.57092 0.0869112 3.21379 0.393436C2.8567 0.674247 2.62781 1.0905 2.5799 1.54617L2.36134 3.36398H1.68369C0.72192 3.36398 0.000590707 4.22852 0.000590707 5.20393V14.2707C-0.0236335 15.2009 0.700206 15.9749 1.61738 15.9994C1.63947 16 1.6616 16.0001 1.68369 15.9998H13.6838C14.6456 15.9998 15.5199 15.2461 15.5199 14.2707V13.916C15.8181 13.8576 16.101 13.7368 16.3506 13.5614C16.7047 13.2589 16.9315 12.8307 16.9844 12.3643L17.9899 3.36398C18.0924 2.38631 17.4006 1.50684 16.438 1.39096ZM14.6456 14.2707C14.6456 14.7584 14.1647 15.1131 13.6838 15.1131H1.68369C1.24929 15.1261 0.886804 14.7794 0.874043 14.3388C0.873374 14.3161 0.873666 14.2934 0.874922 14.2707V12.6303L4.26296 10.1031C4.66996 9.78619 5.24323 9.81436 5.61818 10.1696L8.00073 12.2977C8.36255 12.6058 8.818 12.7781 9.29039 12.7855C9.65973 12.79 10.023 12.6903 10.3396 12.4973L14.6457 9.97008V14.2707H14.6456ZM14.6456 8.92818L9.88051 11.7435C9.47134 11.9894 8.95342 11.9449 8.59086 11.6327L6.18647 9.48238C5.49735 8.88184 4.49014 8.84501 3.7602 9.39369L0.874922 11.5218V5.20393C0.874922 4.71622 1.20281 4.25071 1.68369 4.25071H13.6838C14.1976 4.27231 14.6125 4.68355 14.6456 5.20393V8.92818ZM17.1164 3.24428C17.1161 3.2472 17.1159 3.25017 17.1156 3.2531L16.0882 12.2534C16.09 12.4868 15.9851 12.7078 15.8041 12.8519C15.7166 12.9406 15.5199 12.985 15.5199 13.0293V5.20393C15.4854 4.19402 14.6799 3.38685 13.6838 3.36398H3.23563L3.43235 1.63485C3.47503 1.41094 3.59046 1.20803 3.76024 1.05846C3.95194 0.924041 4.18372 0.86137 4.41601 0.8811L16.3288 2.27769C16.8094 2.32398 17.1621 2.75674 17.1164 3.24428Z" fill="#256799"/>
  </svg>
  ${btnTxt}
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L0.736842 12L0 11.16L4.52632 6L0 0.84L0.736842 0L6 6Z" fill="#256799"/>
  </svg>
</button>

<div class="info-block">
  <h3>
    <svg width="52" height="46" viewBox="0 0 52 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2484 10.2936L10.5311 8.50889C9.44798 8.35489 8.35054 8.6711 7.5154 9.37788C6.68036 10.0254 6.14509 10.9852 6.03306 12.0358L5.52196 16.2273H3.93729C1.6882 16.2273 0.00138136 18.2207 0.00138136 20.4698V41.3758C-0.0552666 43.5205 1.63742 45.3052 3.78221 45.3618C3.83387 45.3632 3.88563 45.3635 3.93729 45.3628H31.9994C34.2485 45.3628 36.2931 43.6249 36.2931 41.3758V40.558C36.9904 40.4233 37.6519 40.1447 38.2355 39.7402C39.0637 39.0429 39.594 38.0554 39.7178 36.98L41.0248 25.4444C40.3359 25.5641 39.628 25.6287 38.906 25.6336L37.6221 36.7243C37.6262 37.2624 37.3808 37.7721 36.9575 38.1044C36.8531 38.2089 36.6819 38.2867 36.5394 38.3514C36.4031 38.4134 36.293 38.4634 36.293 38.5134V25.3855C35.589 25.2449 34.9058 25.0467 34.2485 24.7959V29.0571L23.1054 35.5487C22.1486 36.1156 20.9374 36.013 20.0896 35.2932L14.467 30.335C12.8555 28.9503 10.5001 28.8653 8.79316 30.1305L2.04599 35.0375V20.4698C2.04599 19.3453 2.81274 18.2719 3.93729 18.2719H27.2153C26.9077 17.6187 26.6535 16.9352 26.4586 16.2273H7.56647L8.0265 12.2403C8.1263 11.724 8.39623 11.2562 8.79326 10.9113C9.24155 10.6013 9.78357 10.4568 10.3268 10.5023L26.0097 12.3152C26.0362 11.626 26.1172 10.9507 26.2484 10.2936ZM31.9994 43.3182C33.124 43.3182 34.2485 42.5004 34.2485 41.3758H34.2486V31.4595L24.179 37.2866C23.4387 37.7317 22.5891 37.9617 21.7254 37.9511C20.6207 37.9341 19.5557 37.537 18.7096 36.8266L13.138 31.9195C12.2612 31.1004 10.9206 31.0355 9.96887 31.7662L2.04599 37.5933V41.3758C2.04305 41.4282 2.04237 41.4805 2.04394 41.5329C2.07378 42.5487 2.92144 43.348 3.93729 43.3182H31.9994ZM17.0227 25.7858C17.0227 23.4144 18.9451 21.4921 21.3164 21.4921C23.6877 21.4921 25.6101 23.4144 25.6101 25.7858C25.6101 28.1572 23.6876 30.0795 21.3164 30.0795C18.945 30.0795 17.0227 28.1571 17.0227 25.7858ZM19.0673 25.7857C19.0673 27.0279 20.0742 28.0348 21.3164 28.0348C22.5585 28.0348 23.5654 27.0279 23.5654 25.7857C23.5654 24.5436 22.5585 23.5366 21.3164 23.5366C20.0742 23.5366 19.0673 24.5436 19.0673 25.7857Z" fill="#32709E"/>
      <circle cx="38.8167" cy="12.8167" r="12.8167" fill="#D5E0EB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M38.8167 23.7745C44.8685 23.7745 49.7745 18.8685 49.7745 12.8167C49.7745 6.76489 44.8685 1.85891 38.8167 1.85891C32.7649 1.85891 27.8589 6.76489 27.8589 12.8167C27.8589 18.8685 32.7649 23.7745 38.8167 23.7745ZM38.8167 25.6334C45.8952 25.6334 51.6334 19.8952 51.6334 12.8167C51.6334 5.73824 45.8952 0 38.8167 0C31.7382 0 26 5.73824 26 12.8167C26 19.8952 31.7382 25.6334 38.8167 25.6334Z" fill="#32709E"/>
      <path d="M39.5203 15.7946H37.4371C37.4317 15.4951 37.429 15.3127 37.429 15.2473C37.429 14.572 37.5406 14.0165 37.7639 13.5808C37.9872 13.1451 38.4338 12.655 39.1036 12.1104C39.7735 11.5658 40.1738 11.2091 40.3045 11.0403C40.506 10.7734 40.6067 10.4793 40.6067 10.158C40.6067 9.71142 40.427 9.3302 40.0676 9.01433C39.7136 8.69301 39.2343 8.53236 38.6298 8.53236C38.0471 8.53236 37.5597 8.69846 37.1676 9.03067C36.7755 9.36288 36.5059 9.86936 36.3588 10.5501L34.2512 10.2887C34.3111 9.31386 34.725 8.48606 35.4929 7.80531C36.2663 7.12456 37.2792 6.78418 38.5318 6.78418C39.8497 6.78418 40.8981 7.13 41.6769 7.82165C42.4557 8.50785 42.8451 9.30842 42.8451 10.2233C42.8451 10.7298 42.7007 11.2091 42.4121 11.6611C42.1289 12.1131 41.519 12.7285 40.5822 13.5073C40.0975 13.9103 39.7953 14.2344 39.6755 14.4794C39.5611 14.7245 39.5094 15.1629 39.5203 15.7946ZM37.4371 18.8825V16.587H39.7327V18.8825H37.4371Z" fill="#32709E"/>
    </svg>
    ${infoTitle}
  </h3>
  ${infoBlock}
  <div class="close">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.17495 5.9995L10.7583 2.4245C10.9152 2.26758 11.0034 2.05476 11.0034 1.83284C11.0034 1.61092 10.9152 1.39809 10.7583 1.24117C10.6014 1.08425 10.3885 0.996094 10.1666 0.996094C9.9447 0.996094 9.73187 1.08425 9.57495 1.24117L5.99995 4.8245L2.42495 1.24117C2.26803 1.08425 2.0552 0.996094 1.83328 0.996094C1.61136 0.996094 1.39854 1.08425 1.24162 1.24117C1.0847 1.39809 0.996539 1.61092 0.996539 1.83284C0.996539 2.05476 1.0847 2.26758 1.24162 2.4245L4.82495 5.9995L1.24162 9.57451C1.16351 9.65197 1.10151 9.74414 1.05921 9.84569C1.0169 9.94724 0.995117 10.0562 0.995117 10.1662C0.995117 10.2762 1.0169 10.3851 1.05921 10.4867C1.10151 10.5882 1.16351 10.6804 1.24162 10.7578C1.31909 10.8359 1.41125 10.8979 1.5128 10.9402C1.61435 10.9826 1.72327 11.0043 1.83328 11.0043C1.94329 11.0043 2.05221 10.9826 2.15376 10.9402C2.25531 10.8979 2.34748 10.8359 2.42495 10.7578L5.99995 7.1745L9.57495 10.7578C9.65242 10.8359 9.74459 10.8979 9.84614 10.9402C9.94769 10.9826 10.0566 11.0043 10.1666 11.0043C10.2766 11.0043 10.3855 10.9826 10.4871 10.9402C10.5886 10.8979 10.6808 10.8359 10.7583 10.7578C10.8364 10.6804 10.8984 10.5882 10.9407 10.4867C10.983 10.3851 11.0048 10.2762 11.0048 10.1662C11.0048 10.0562 10.983 9.94724 10.9407 9.84569C10.8984 9.74414 10.8364 9.65197 10.7583 9.57451L7.17495 5.9995Z" fill="#9B9B9B"/>
    </svg>
  </div>
  <div class="pin"></div>
</div>
</div>
`

let imgSrc = document.querySelectorAll('.image-gallery-slide')[0].querySelector('img').getAttribute('src');
let phones = window.initialState.phones[0].phone_formatted;
let htmlBlock = `
    <div class="popup-content">
      <h3>${mainTitle}</h3>
      <p class="step">
          <b>1</b> ${p1}
        <p>
      <div class="popup-phone-block">
        <a href="tel:${phones}" class="phone">${phones}</a> 
        <p class="work-time">${timeWork}</p>
      </div>
      <p class="step"><b>2</b>${p2}</p>
      <p class="step"><b>3</b>${p3}</p>
    </div>
`


document.body.insertAdjacentHTML('afterbegin', style);
document.querySelector('.count-photo').insertAdjacentHTML("afterend", btnBlock);

document.querySelector('.more-img-button').addEventListener('click', function () {
  if (document.querySelector('.info-block').classList.contains('active')){
    document.querySelector('.info-block').classList.remove('active');
    document.querySelector('.darkBgImg').classList.remove('active');
  }
  document.querySelectorAll(".phone.bold")[0].click();
  activePopUp()
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'pdp_extra_photos',
    'eventAction': 'click on button extra photos',
    'eventLabel': 'main button'
  });
});

document.querySelector('.info-block .close').addEventListener('click', function () {
  document.querySelector('.info-block').classList.remove('active');
  document.querySelector('.darkBgImg').classList.remove('active');
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'pdp_extra_photos',
    'eventAction': 'click on infoBlock',
    'eventLabel': 'close'
  });
});

document.querySelector('.darkBgImg').addEventListener('click', function () {
  document.querySelector('.info-block').classList.remove('active');
  document.querySelector('.darkBgImg').classList.remove('active');
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'pdp_extra_photos',
    'eventAction': 'click out of infoBlock',
    'eventLabel': 'close'
  });
});

document.querySelector('.info-block button').addEventListener('click', function () {
  document.querySelector('.info-block').classList.remove('active');
  document.querySelector('.darkBgImg').classList.remove('active');
  document.querySelectorAll(".phone.bold")[0].click();
  activePopUp();
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'pdp_extra_photos',
    'eventAction': 'click on button extra photos',
    'eventLabel': 'info block button'
  });
});

function activePopUp () {
  let mut = new MutationObserver((mutations) => {
    console.log(mutations)
    document.querySelector(".react_modal").classList.add('test_banner');
    document.querySelector('.react_modal .react_modal__body .phones_modal__item').innerHTML = htmlBlock
    document.querySelector('.react_modal .react_modal__body').insertAdjacentHTML('afterbegin', `<div><img src="${imgSrc}" alt="auto"></div>`)
    mut.disconnect()

    document.querySelector('.react_modal__backdrop').addEventListener("click", function() {
      setTimeout(function (){document.querySelector(".react_modal").classList.remove('test_banner');}, 500)
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'pdp_extra_photos',
        'eventAction': 'click out of popUp',
        'eventLabel': 'close'
      });
    })

    document.querySelector('.react_modal:not(.thankyou) .react_modal__close').addEventListener('click', function () {
      setTimeout(function (){document.querySelector(".react_modal").classList.remove('test_banner');}, 500)
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'pdp_extra_photos',
        'eventAction': 'click on popUp',
        'eventLabel': 'close'
      });
    })
    setTimeout(function () {
     document.querySelectorAll('.test_banner .rating-group-label')forEach((item) => {
        item.addEventListener('click', function () {
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'pdp_extra_photos',
            'eventAction': 'click on popUp rate'
          });
        });
     })
}, 400)
   
    document.querySelector('.react_modal__body .phone').addEventListener('click', function () {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'pdp_extra_photos',
        'eventAction': 'click on popUp',
        'eventLabel' : 'phone number'
      });
    });

  })

  mut.observe(document.body, {
    characterData: true,
    childList: true,
    subtree: true,
    characterDataOldValue: true
  })

  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'pdp_extra_photos',
    'eventAction': 'popUp loaded'
  });
}


let lookedPhoto = 1;
let imgListLength = window.initialState.photos.length;

function counter () {
  if(lookedPhoto >= 8 || lookedPhoto >= imgListLength) {
    document.querySelector('.info-block').classList.add('active');
    document.querySelector('.darkBgImg').classList.add('active');
    document.querySelectorAll('.image-gallery-nav').forEach((item) => {
      item.removeEventListener('click', counter);
    })
    document.querySelectorAll('.image-gallery-thumbnail').forEach((item) => {
      item.removeEventListener('click', counter);
    })
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'pdp_extra_photos',
      'eventAction': 'info block loaded'
    })
  } else {
    lookedPhoto += 1;
  }
}

document.querySelectorAll('.image-gallery-nav').forEach((item) => {
  item.addEventListener('click', counter);
});

document.querySelectorAll('.image-gallery-thumbnail').forEach((item) => {
  item.addEventListener('click', counter);
});

try {
  (function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1953436,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
  hj('trigger', 'pdp_extra_photos');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'event-to-ga',
  'eventCategory': 'pdp_extra_photos',
  'eventAction': 'loaded'
});


