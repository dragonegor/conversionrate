let style = `
<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "DM Sans", sans-serif;
}

.flx {
  display: flex;
  align-items: center;
}

.app_block {
  padding: 20px 23px;
  background-color: #f3f3f3;
  margin-bottom: 15px;
}

.app_included {
  padding: 20px 15px;
  background-color: #fff;
  box-shadow: 0 4px 23px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.app_included h2 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 20px;
}
.app_included p {
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 0;
}
.app_included ul {
  margin-bottom: 30px;
}
.app_included ul li {
  list-style: none;
  display: flex;
  padding: 4px 0;
}
.app_included ul li img {
  margin-right: 5px;
}
.app_included ul li .flx {
  justify-content: space-between;
  width: 100%;
}
.app_included ul li .price {
  font-size: 15px;
  font-weight: 400;
  text-decoration: line-through;
  color: #494950;
  padding-left: 20px;
  padding-bottom: 0;
}
.app_included .bonuses {
  justify-content: space-between;
}
.app_included .bonuses img {
  margin-right: 10px;
}
.app_included .bonuses span {
  font-weight: 500;
  color: #EF4E44;
}
.app_included img {
  height: 45px;
  width: 45px;
}

.total h2 {
  font-size: 22px;
}
.total .new {
  font-size: 22px;
  color: #EF4E44;
  font-weight: 700;
  padding-bottom: 0;
}
.total .new span {
  font-size: 14px;
}
.total .old {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 400;
  color: #8F8F8F;
  padding-bottom: 0;
}
.total .old span {
  font-weight: 700;
  position: relative;
  display: inline-block;
}
.total .old span::before {
  content: "";
  bottom: 50%;
  display: block;
  height: 1px;
  width: 100%;
  background-color: #EF4E44;
  position: absolute;
  transform: rotateZ(10deg);
}
.checkout-reserved {
margin-bottom: 0 !important;
}
</style>
`

let block = `
    <div class="app_block">
  <div class="app_included">
    <h2>WHAT’S INCLUDED in 1 app:</h2>
    <ul>
      <li>
        <img src="https://i.ibb.co/92rhcVX/1img.png" alt="icon">
        <div class="flx">
          <p>Tailor-Made Fasting Program</p>
          <p class="price">$12/mo</p>
        </div>
      </li>
      <li>
        <img src="https://i.ibb.co/1qznMqz/2img.png" alt="icon">
        <div class="flx">
          <p>Workout Programs</p>
          <p class="price">$9/mo</p>
        </div>
      </li>
      <li>
        <img src="https://i.ibb.co/6PwqmdK/3img.png" alt="icon">
        <div class="flx">
          <p>App With Fasting Timer </p>
          <p class="price">$9/mo</p>
        </div>
      </li>
      <li>
        <img src="https://i.ibb.co/Gp1fpbP/4img.png" alt="icon">
        <div class="flx">
          <p>Meal Tracking and Food Log </p>
          <p class="price">$9/mo</p>
        </div>
      </li>
      <li>
        <img src="https://i.ibb.co/F8MYW4N/5img.png" alt="icon">
        <div class="flx">
          <p>Daily and Weekly Grocery Lists</p>
          <p class="price">$3/mo</p>
        </div>
      </li>
      <li>
        <img src="https://i.ibb.co/Vtm1YPJ/6img.png" alt="icon">
        <div class="flx">
          <p>Personalized Water Tracking</p>
          <p class="price">$3/mo</p>
        </div>
      </li>
    </ul>
    <h2>PLUS 2 BONUSES:</h2>
    <div class="flx bonuses">
      <div class="flx">
        <img src="https://i.ibb.co/3W85BfT/7img.png" alt="icon">
        <p>28 Fasting Masterclass<br><span>FREE</span></p>
      </div>
      <div class="flx">
        <img src="https://i.ibb.co/CP0vSgJ/8img.png" alt="icon">
        <p>Fasting EBooks<br><span>FREE</span></p>
      </div>
    </div>
  </div>
  <div class="total">
    <p class="old">Total value:  <span>$45/mo</span></p>
    <h2>You pay a fair price:</h2>
    <p class="new">$4.6 per month<span> (that’s $1.15/week)</span></p>
  </div>
</div>
`

document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML('afterbegin', style);
    document.querySelector('.checkout-reserved').insertAdjacentHTML('afterend', block);
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Checkout page copy',
        'eventAction': 'loaded'
    });
})

try {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1962080,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
    hj('trigger', 'checkout_page_copy');
}
catch(e) {}

