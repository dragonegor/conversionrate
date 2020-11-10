
let a = document.createElement("script");
a.src = "//code.jquery.com/jquery-3.3.1.min.js"
document.getElementsByTagName("head")[0].appendChild(a);



let openTime = window.initialState.salon_schedule[0][2].hours.slice(0, 3)
openTime = openTime[0] === '0' ? openTime[1] : openTime

let closeTime = window.initialState.salon_schedule[0][2].hours.slice(7, 9)

let p1 = 'оставьте свой номер телефона',
    p2 = 'мы перезвоним и дадим информацию по кредитам',
    callMe = 'Позвонить мне',
    wrongNumber = 'Мобильный телефон некорректен. Пример 0931234567',
    info = 'На этот автомобиль повышенный спрос!',
    infoBtn = 'Уточнить о наличии этой комплектации',
    timeWork = `Отдел продаж салона работает<br>с ${openTime} до ${closeTime}`,
    rate = 'Оцените автосалон',
    thx1 = 'Спасибо за вашу заявку!',
    thx2 = 'Мы с вами свяжемся в ближайшее время'

if (window.location.pathname.includes('/uk/')) {
  p1 = 'залиште свій номер телефону'
  p2 = 'ми зателефонуємо і надамо інформацію про наявність'
  callMe = 'Зателефонувати мені'
  wrongNumber = 'Мобільний телефон некоректний. Приклад 0931234567'
  info = 'На це авто підвищенний попит!'
  infoBtn = 'Дізнатися про наявність цієї комплектації'
  timeWork = `Відділ продажу салону працює<br>з ${openTime} до ${closeTime}`
  rate = 'Оцініть автосалон'
  thx1 = 'Дякуємо за вашу заявку!'
  thx2 = 'Ми зателефонуємо вам у найближчий час'
}

let style = `
  <style>
    .high-demand-wrap{
      background:#db5c4c14;
      border-radius:3px;
      color:#414042;
      padding:20px 17px;
      margin:0 0 22px;
      text-align: center;
    }
    .high-demand-wrap .title-holder{display:flex}
    .high-demand-wrap .high-demand-text{
      font-size:22px;
      font-weight:700;
      margin:4px 0 7px 11px;
      max-width:250px;
      line-height:1.2
    }
    .high-demand-wrap .high-demand-link{
      color:#db5c4c;font-size:13px;
      font-weight:700;
      padding:8px 15px;
      border:1px solid #db5c4c;
      border-radius:5px;
      display:block;
      text-align:center
    }
    .react_modal__container {
      max-width: 100% !important;
    }
    
    .react_modal__body {
      z-index: 100;
    }
    
    .react_modal__body {
      padding: 20px;
      margin-top: -20px;
    }
    
    .react_modal.calls_modal .react_modal__header {
      z-index: 2;
      color: white;
    }
    
    .react_modal__body .popup-content {
      color: #414042;
    }
    .react_modal__body .popup-content > div:last-child > *:not(:last-child) {
      margin-bottom: 12px;
    }
    .react_modal__body .popup-content > div {
      width: 100%;
    }
    .react_modal__body .popup-content > div:first-child {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .react_modal__body .popup-content > div:first-child img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
    .react_modal__body .popup-content .step {
      font-size: 13px;
    }
    .react_modal__body .popup-content .step b {
      margin-right: 5px;
    }
    .react_modal__body .popup-content .popup-phone-block {
      border-radius: 6px;
      border: 1px solid #9B9B9B;
      padding: 12px;
      font-size: 16px;
      text-align: center;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
    }
    .react_modal__body .popup-content .popup-phone-block > *:not(:last-child) {
      margin-bottom: 8px;
    }

    .react_modal__body .popup-content .popup-phone-block .work-time {
      color: #9B9B9B;
      padding: 15px 0 7px;
    }

    .react_modal__body .popup-content .popup-phone-block form {
      display: flex;
      height: 40px;
    }
    .react_modal__body .popup-content .popup-phone-block form label {
      position: relative;
    }
    .react_modal__body .popup-content .popup-phone-block form label:first-child {
      width: 55%;
    }
    .react_modal__body .popup-content .popup-phone-block form label:last-child {
      width: 45%;
    }
    .react_modal__body .popup-content .popup-phone-block form label svg {
      position: absolute;
      height: 12px;
      left: 14px;
      top: 14px;
    }
    .react_modal__body .popup-content .popup-phone-block form input{
      width: 100%;
      height: 100%;
      border: 1px solid #9B9B9B;
      border-radius: 5px 0px 0px 5px;
      padding-left: 40px;
      font-size: 13px;
      color: #414042;
    }
    .react_modal__body .popup-content .popup-phone-block form input::placeholder {
      font-family: "Arial", sans-serif;
      font-size: 13px;
      color: #9B9B9B;
    }
    .react_modal__body .popup-content .popup-phone-block form button {
      width: 50%;
      height: 100%;
      background-color: #79be00;
      color: white;
      font-size: 13px;
      font-weight: 700;
      border: none;
      border-radius: 0 5px 5px 0;
    }
    
    .react_modal__body .popup-content .popup-phone-block form button:focus {
      outline: none;
    }
    
    .react_modal__body .wrong-number {
      display: none;
      color:#db5c4c;
      font-size:12px;
      margin: -5px 0 0
    }
    
    .react_modal__body.error .wrong-number {
      display: block;
    }
    
    .thankyou .react_modal__body .popup-content > div {
      width: 100%;
    }
    
    .thx_holder{text-align:center}
    .thx_holder .modal_title{padding:0;font-size:20px; font-weight: 700;}
    .thx_holder .info_text{padding:4px 0 0; color: #9B9B9B}
    .thx_holder .info_text p{margin-bottom: 0;}
  </style>
`

let htmlBlock = `
  <div class="popup-content">
    <div><img src="https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/opel_grandland-x__989237-620x465x70.jpg" alt="auto"></div>
    <div>
      <div class="popup-phone-block">
        <p class="work-time">${timeWork}</p>
        <p><b>${p1}</b></p>
        <p>${p2}</p>
        <form>
          <label>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75387 0.980217C2.91787 0.816198 3.11487 0.688926 3.3318 0.606844C3.54874 0.524763 3.78065 0.489747 4.01215 0.504121C4.24365 0.518495 4.46944 0.58193 4.67456 0.690218C4.87967 0.798505 5.05942 0.94917 5.20187 1.13222L6.88287 3.29422C7.19187 3.69022 7.30087 4.20722 7.17887 4.69422L6.66587 6.74722C6.63919 6.85375 6.64055 6.96537 6.66981 7.07121C6.69908 7.17706 6.75525 7.27353 6.83287 7.35122L9.13687 9.65422C9.21456 9.73183 9.31102 9.78801 9.41687 9.81727C9.52272 9.84654 9.63434 9.8479 9.74087 9.82122L11.7929 9.30822C12.0336 9.24811 12.2848 9.24352 12.5275 9.2948C12.7702 9.34608 12.9981 9.45189 13.1939 9.60422L15.3559 11.2852C16.1329 11.8892 16.2049 13.0382 15.5089 13.7332L14.5389 14.7032C13.8459 15.3962 12.8089 15.7012 11.8419 15.3612C9.36827 14.4906 7.12242 13.0742 5.27087 11.2172C3.41351 9.36576 1.99681 7.1199 1.12587 4.64622C0.785867 3.67922 1.09087 2.64222 1.78387 1.94822L2.75387 0.979217V0.980217Z" fill="#9B9B9B"/>
            </svg>
            <input class="input_number" type="text" placeholder="(000) 000 00 00" onkeypress="return (event.charCode >= 48 && event.charCode <= 57 && /^\\d{0,9}$/.test(this.value));">
          </label>
          <button type="submit" class="modal_btn">${callMe}</button>
        </form>
        <div class="wrong-number">${wrongNumber}</div>
      </div>
    </div>
  </div>
`

let banner = `
      <div class="high-demand-wrap">
        <div class="title-holder"> 
          <svg width="32" height="59" viewBox="0 0 32 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M20.2199 23.7326C20.5182 25.6354 20.8015 27.4791 21.0848 29.3229C21.2637 30.4439 21.4874 31.5501 21.6067 32.6711C21.6663 33.2316 21.9049 33.3496 22.4119 33.3349C23.7241 33.3054 25.0513 33.3201 26.3635 33.3201C28.7195 33.3349 30.0168 35.5031 28.9431 37.5534C28.8388 37.7599 28.8537 38.1139 28.9581 38.3204C29.4501 39.2791 29.4352 40.1936 28.973 41.1524C28.8686 41.3589 28.794 41.6834 28.8835 41.8751C29.5247 43.3059 29.5247 43.7631 28.8239 45.0316C29.0177 45.8281 29.3159 46.4771 29.3159 47.1261C29.3159 48.6306 28.0783 49.7664 26.5126 49.8106C25.8266 49.8254 25.1407 49.8106 24.3057 49.8106C24.6486 51.2414 24.7679 52.5836 23.6794 53.5719C23.1575 54.0439 22.4268 54.4126 21.7409 54.5454C21.1295 54.6634 20.384 54.5011 19.8173 54.2356C19.2805 53.9701 18.7735 53.4539 18.4753 52.9229C18.1622 52.3771 18.1025 51.6839 17.8639 51.0644C17.7595 51.6249 17.4017 52.1411 17.9534 52.7311C18.2069 52.9966 18.356 53.4096 18.4156 53.7931C18.5797 54.8109 18.699 55.8434 18.7884 56.8611C18.8928 58.1444 18.1174 58.9851 16.8052 58.9851C11.8546 58.9999 6.91891 58.9999 1.96831 58.9851C0.6561 58.9851 -0.119296 58.1444 -0.0149158 56.8611C0.074553 55.8139 0.178933 54.7519 0.357871 53.7194C0.417517 53.3506 0.596454 52.9229 0.86486 52.6869C1.34203 52.3034 1.44641 51.8166 1.53588 51.2856C1.92357 49.1321 2.34109 46.9786 2.72879 44.8399C2.80335 44.4564 2.80335 44.0581 2.84808 43.6746C2.92264 43.0699 3.19105 42.6569 3.87698 42.6421C4.47343 42.6421 4.87604 43.0256 4.80149 43.7189C4.66728 44.9874 4.45852 46.2411 4.24976 47.5096C3.99627 48.9994 3.69804 50.4891 3.41472 52.0379C7.51537 52.0379 11.5266 52.0379 15.6421 52.0379C15.7167 51.4626 15.7912 50.8874 15.836 50.3121C15.8956 49.6189 16.2684 49.2059 16.9394 49.1174C20.0559 48.6896 23.1873 48.2766 26.3038 47.8784C26.8257 47.8194 27.2581 47.7161 27.3178 47.1261C27.3774 46.5214 27.0047 46.2411 26.4231 46.1674C25.8565 46.0936 25.5135 45.7544 25.5284 45.1791C25.5284 44.6334 25.8565 44.3236 26.4082 44.2646C26.945 44.2056 27.3178 43.9549 27.3178 43.3944C27.3178 42.8339 26.945 42.6126 26.4082 42.5389C25.9012 42.4651 25.5284 42.1701 25.5284 41.6096C25.5135 41.0049 25.9012 40.6951 26.438 40.6214C26.9897 40.5476 27.3327 40.3116 27.3327 39.7511C27.3327 39.1611 26.9301 38.9841 26.4082 38.9104C25.8863 38.8366 25.5433 38.5121 25.5433 37.9664C25.5284 37.4206 25.8565 37.1109 26.3784 36.9929C26.9152 36.8749 27.4371 36.7421 27.3327 36.0194C27.2283 35.2966 26.6468 35.2819 26.0801 35.2819C22.6803 35.2819 19.2656 35.2819 15.8658 35.2819C14.822 35.2819 14.1808 34.8689 13.8826 34.0429C13.6291 33.3496 13.808 32.7301 14.3597 32.5236C15.0158 32.2876 15.4632 32.5384 15.7167 33.1726C15.7465 33.2316 15.8211 33.2611 16.0596 33.2906C15.9105 31.8156 15.7465 30.3259 15.5825 28.7181C14.5536 28.7919 13.5545 28.7624 12.6002 28.9541C11.4669 29.1754 10.3635 29.5736 9.2451 29.9424C8.9767 30.0309 8.73811 30.2521 8.54426 30.4734C6.904 32.2581 5.83038 34.3379 5.36812 36.7126C5.3383 36.8306 5.32339 36.9486 5.29356 37.0666C5.12954 37.8336 4.71202 38.1729 4.08574 38.0549C3.48928 37.9369 3.22087 37.4354 3.35507 36.6684C3.86206 33.8069 5.05498 31.2699 7.08294 29.1754C7.61975 28.6149 8.38024 28.1871 9.1109 27.8921C10.9152 27.1841 12.8089 26.7711 14.7773 26.7859C14.9413 26.7859 15.1053 26.7416 15.3439 26.6974C15.2544 25.9156 15.1799 25.1781 15.0755 24.3521C13.4501 24.5586 11.9143 24.7651 10.3635 24.9569C9.1109 25.1191 7.85834 25.2961 6.59086 25.4584C4.26467 25.7386 2.66915 24.5586 2.35601 22.2576C1.71481 17.6261 1.08853 13.0094 0.492074 8.37787C0.193845 6.12112 1.41658 4.54287 3.69804 4.21837C6.88909 3.76112 10.0951 3.36287 13.301 2.93512C13.465 2.90562 13.6291 2.87612 13.8527 2.81712C13.7931 2.22712 13.7334 1.68137 13.6738 1.12087C13.6142 0.516118 13.8826 0.117868 14.4939 -0.0148818C15.0457 -0.132882 15.5228 0.250618 15.6421 0.884868C15.7316 1.41587 15.7763 1.94687 15.8658 2.58112C17.1034 2.41887 18.3113 2.27137 19.5042 2.12387C21.6663 1.84362 23.8285 1.53387 26.0056 1.28312C28.1827 1.03237 29.7782 2.22712 30.0764 4.35112C30.7325 9.07112 31.3737 13.8059 31.9702 18.5259C32.2386 20.6646 30.9115 22.2576 28.7642 22.5379C26.11 22.8771 23.4408 23.2311 20.7866 23.5851C20.6225 23.6294 20.4883 23.6736 20.2199 23.7326ZM19.698 33.2906C19.6831 33.0841 19.6831 32.9661 19.6533 32.8334C19.1463 29.6474 18.6393 26.4761 18.1323 23.2901C17.9832 22.3461 18.2665 21.9479 19.2209 21.8299C22.2777 21.4316 25.3346 21.0334 28.3765 20.6351C29.6142 20.4729 30.1361 19.8386 29.9869 18.6291C29.3756 14.0271 28.7642 9.42512 28.123 4.82312C27.9441 3.53987 27.3178 3.08262 26.0205 3.25962C18.6841 4.21837 11.3476 5.19187 4.01118 6.15062C2.83317 6.29812 2.29636 6.97662 2.46039 8.12712C3.08667 12.7734 3.71295 17.4344 4.35414 22.0806C4.50326 23.1279 5.23392 23.6736 6.27772 23.5409C9.34948 23.1279 12.4362 22.7296 15.5079 22.3166C16.4921 22.1839 16.8947 22.4789 17.014 23.4524C17.178 24.9421 17.3271 26.4319 17.4911 27.9216C17.685 29.6916 17.8937 31.4764 18.1025 33.2759C18.6542 33.2906 19.1314 33.2906 19.698 33.2906ZM16.8201 57.0086C16.7307 56.1826 16.6263 55.4009 16.5666 54.6339C16.5368 54.1619 16.3579 54.0144 15.8658 54.0144C14.4492 54.0439 13.0326 54.0291 11.616 54.0291C8.73811 54.0291 5.8602 54.0291 2.98229 54.0439C2.7437 54.0439 2.32618 54.1619 2.31127 54.2799C2.14725 55.1796 2.07269 56.0941 1.96831 57.0086C6.99347 57.0086 11.8695 57.0086 16.8201 57.0086ZM22.3821 50.2384C21.9348 50.3121 21.562 50.3564 21.2041 50.4154C20.8164 50.4744 20.4436 50.5481 20.041 50.6219C20.0559 51.4036 19.9814 52.2001 20.8015 52.5099C21.1892 52.6574 21.8304 52.5689 22.1584 52.3329C22.904 51.8166 22.5312 51.0349 22.3821 50.2384Z" fill="#9B9B9B"/><path d="M19.1314 11.8887C19.1314 12.9212 19.1314 13.9537 19.1314 14.9862C19.1165 16.4022 18.2069 17.4937 16.8947 17.6854C15.4781 17.8919 14.2404 17.0954 13.8677 15.6794C13.3308 13.6587 12.8239 11.6379 12.3318 9.61715C11.9292 7.9209 12.8984 6.51965 14.6431 6.25415C15.1351 6.1804 15.6272 6.10665 16.1193 6.07715C17.685 5.9739 18.9226 7.05065 18.9972 8.5994C19.0419 9.70565 19.0121 10.8119 19.0121 11.9034C19.0419 11.8887 19.0867 11.8887 19.1314 11.8887ZM17.1631 11.9182C17.1184 11.9182 17.0885 11.9182 17.0438 11.9182C17.0438 11.1807 17.0587 10.4432 17.0438 9.70565C17.014 7.9209 16.9692 7.87665 15.165 8.14215C14.2703 8.2749 14.0913 8.52565 14.3001 9.3664C14.7623 11.2249 15.2246 13.0834 15.6869 14.9419C15.8062 15.3992 15.9702 15.8417 16.5517 15.7384C17.1184 15.6499 17.1631 15.1927 17.1631 14.7059C17.1482 13.7767 17.1631 12.8474 17.1631 11.9182Z" fill="#9B9B9B"/><path d="M16.6859 20.7087C16.0596 20.7234 15.657 20.4432 15.5825 19.8384C15.5079 19.2337 15.8658 18.8649 16.4623 18.7617C16.8201 18.6879 17.1929 18.6289 17.5657 18.6289C18.1025 18.6289 18.4753 18.9092 18.5499 19.4402C18.6244 19.9712 18.4007 20.3694 17.8639 20.5022C17.4762 20.6054 17.0885 20.6349 16.6859 20.7087Z" fill="#9B9B9B"/></g><defs><clipPath id="clip0"><rect width="32" height="59" fill="white"/></clipPath></defs></svg>
          <p class="high-demand-text">${info}</p>
        </div>
        <a href="#" class="high-demand-link">${infoBtn}</a>
      </div>
`

document.body.insertAdjacentHTML('afterbegin', style);
document.querySelector('.vin_checked').insertAdjacentHTML('afterend', banner);


document.querySelector('.high-demand-wrap').addEventListener('click', function () {
  document.querySelectorAll(".phone.bold")[0].click();
  $('html').on('mouseleave', 'body', function () {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "PDP highly demand banner",
      eventAction: "leave page",
      eventLabel: "leave"
    })
    console.log('leave');})
  let mut = new MutationObserver((mutations) => {
    console.log(mutations)
    document.querySelector('.react_modal .react_modal__body').innerHTML = htmlBlock
    mut.disconnect()

    document.querySelector('.react_modal__backdrop').addEventListener("click", function() {
      $('html').off('mouseleave', 'body')
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'PDP highly demand banner',
        'eventAction': 'click out of Pop up',
        'eventLabel': 'close'
      });
    })

    document.querySelector('.react_modal__body .input_number').addEventListener("focus", function () {
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'PDP highly demand banner',
        'eventAction': 'click Pop up loan',
        'eventLabel': 'number input'
      });
    })

    document.querySelector('.react_modal:not(.thankyou) .react_modal__close').addEventListener('click', function () {
      $('html').off('mouseleave', 'body')
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'PDP highly demand banner',
        'eventAction': 'click Pop up loan',
        'eventLabel': 'close'
      });
    })

    // document.querySelector('.react_modal__body .input_number').addEventListener("change", function (e) {
    //   let phone = document.querySelector('.react_modal__body .input_number').value.length
    //   if(phone < 10 || phone > 10) {
    //     document.querySelector('.react_modal__body').classList.add('error');
    //   } else {
    //     document.querySelector('.react_modal__body').classList.remove('error');
    //   }
    // })

    document.querySelector('.react_modal__body .modal_btn').addEventListener('click', function (e) {
      e.preventDefault()
      console.log(e.type)
      let phone = document.querySelector('.react_modal__body .input_number').value
      if(phone.length === 10) {
        let formdata = new FormData()
        formdata.append('phone', phone)
        formdata.append('page', window.location.href)
        fetch('https://devxy.site/api/save', {
          method: 'POST',
          body: formdata,
          redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
        $.ajax({
          url: "https://dev.aim-it.com.ua/test-save-json/",
          type: "POST",
          data: {url: window.location.href, phone: phone},
          dataType: "json"
        }).done(function (e) {
          console.log(e.is_send)
        })
        $(".react_modal").addClass("thankyou")
        $(".react_modal__body .popup-content > div:first-child").remove()
        $(".popup-phone-block").empty()
        $(".popup-phone-block").append(`<div class="thx_holder"><div class="modal_title"><p>${thx1}</p></div><div class="info_text"><p>${thx2}</p></div></div>`)
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "PDP highly demand banner",
          eventAction: "click Pop up loan",
          eventLabel: "Позвонить мне"
        })
        document.querySelector('.react_modal.thankyou .react_modal__close').addEventListener('click', function () {
          $('html').off('mouseleave', 'body')
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'PDP highly demand banner',
            'eventAction': 'click Pop up TY',
            'eventLabel': 'close'
          });
        })
      } else {
        document.querySelector('.react_modal__body').classList.add('error');
      }
    })
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
    'eventCategory': 'PDP highly demand banner',
    'eventAction': 'Уточнить о наличии'
  })
})

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
  hj('trigger', 'pdp_highly_demand_banner');
}
catch(e) {}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'event-to-ga',
  'eventCategory': 'pdp highly demand banner',
  'eventAction': 'loaded'
});



