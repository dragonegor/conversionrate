let link1 = document.createElement('link');
link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
link1.rel = 'stylesheet'
document.head.appendChild(link1);

let script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
script1.async = false;
document.head.appendChild(script1);

let style = `
<style>
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .review_first p, .review_second p, .banner_block p, .packs p, .review_cpap p, .doctor_block p {
    line-height: normal;
    margin-bottom: 0 !important;
  }

  .tns-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .tns-nav button {
    height: 10px;
    width: 10px;
    padding: 0;
    margin: 0 10px;
    background: none;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
  }

  .tns-nav button.tns-nav-active {
    background-color: #c4c4c4;
  }

  .blog_btn {
    position: fixed;
    bottom: 20px;
    width: 95%;
    left: 50%;
    transform: translateX(-250%);
    display: flex;
    align-items: center;
    text-align: center;
    padding: 8px 50px;
    background-color: #1E415F;
    border-radius: 60px;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 13px;
    z-index: 100;
    transition: all 0.5s;
  }
  .blog_btn.active {
    transform: translateX(-50%);
  }
  .blog_btn span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .slider_block {
    width: 100%;
    padding: 20px;
    background-color: #F0F0F0;
    border-radius: 6px;
  }
  .slider_block .slider_item .name {
    font-weight: 700;
    color: #1E415F;
    font-size: 15px;
  }
  .slider_block .slider_item .name span {
    font-weight: 400;
    color: #29C370;
  }
  .slider_block .slider_item img {
    height: 20px;
    width: 75px;
    margin-left: -3px;
  }
  .slider_block .slider_item .date {
    margin: 18px 0;
    font-size: 12px;
    padding-bottom: 18px;
  }
  .slider_block .slider_item .text {
    font-style: italic;
  }
  .slider_block .slider_item .text b {
    font-style: normal;
  }
  .slider_block .slider_item .text span {
    display: block;
    font-weight: 700;
    margin: 0 0 18px;
  }

  .review_cpap h3, .review_first h3, .review_second h3, .packs h3 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin: 30px 0;
    color: #1E415F;
    line-height: 120%;
    font-family: "Roboto", sans-serif;
  }
  .review_cpap h3 img, .review_first h3 img, .review_second h3 img, .packs h3 img {
    height: 19px;
    width: 19px;
  }

  .banner_block {
    width: 100%;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 6px;
    margin: 20px 0;
  }
  .banner_block > div {
    display: flex;
    justify-content: space-between;
  }
  .banner_block > div:first-child p {
    font-size: 15px;
    font-weight: 700;
    padding-bottom: 15px;
  }
  .banner_block .us_made {
    color: black;
    font-size: 12px;
    font-weight: 700;
    width: 35%;
  }
  .banner_block .us_made svg {
    height: 13px;
    width: 18px;
    margin: 5px 5px 0 0;
  }
  .banner_block .rating p:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
  }
  .banner_block .rating p:first-child img {
    height: 18px;
  }
  .banner_block .rating p:last-child {
    font-size: 10px;
    font-weight: 400;
  }
  .banner_block button.btn {
    font-family: "Roboto", sans-serif;
    background-color: #11415f;
    border: none;
    border-radius: 100px;
    display: block;
    font-size: 15px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 14px 20px;
  }

  .packs ul {
    margin-left: 10px;
  }
  .packs li {
    font-size: 17px;
    margin: 0 0 17px 15px;
  }
  .packs .stars {
    display: flex;
    align-items: center;
    color: #2EA5C7;
  }
  .packs > div:last-child {
    display: flex;
    align-items: flex-end;
    margin-top: 30px;
  }
  .packs .pack {
    width: 50%;
    text-align: center;
  }
  .packs .pack img {
    width: 100%;
  }
  .packs .pack .title {
    font-weight: 900;
    font-size: 16px;
    text-decoration: underline;
    padding: 0 5px;
  }
  .packs .pack .title + p {
    font-weight: 500;
    font-size: 13px;
    padding: 12px 0 25px;
  }
  .packs .pack .btn {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-size: 15px;
    text-transform: uppercase;
    background-color: #1E415F;
    border-radius: 50px;
    color: white;
    border: none;
    padding: 5px 20px;
  }
  .packs .pack .btn span {
    font-weight: 700;
    font-size: 14px;
    position: relative;
  }
  .packs .pack .btn span::after {
    position: absolute;
    right: -13px;
    top: 0;
    content: ".97";
    font-weight: 500;
    font-size: 9px;
  }

  .doctor_block {
    margin: 30px 0;
  }
  .doctor_block > img {
    height: 95px;
    float: right;
    margin-left: 15px;
    padding-bottom: 15px;
  }
  .doctor_block > p:nth-child(2) {
    font-size: 16px;
    font-weight: 700;
    padding-bottom: 12px;
  }
  .doctor_block > p:nth-child(3) {
    font-size: 16px;
    font-style: italic;
  }
  .doctor_block .name_doctor {
    color: #5A6770;
    font-size: 13px;
    font-style: italic;
    padding: 20px 0;
  }
  .doctor_block .name_doctor span {
    display: inline-block;
    padding-bottom: 5px;
    font-weight: 500;
  }
  .doctor_block > div {
    display: flex;
  }
  .doctor_block > div img {
    height: 48px;
  }
  .doctor_block > div a {
    font-weight: 700;
    font-size: 12px;
    color: #4090D1;
  }

  @media (min-width: 900px) {
    .blog_btn, .review_first, .review_second, .banner_block, .packs, .doctor_block, .review_cpap {
      display: none;
    }
  }
</style>
`

let blogBtn = `
    <a class="blog_btn">
    Try all the advantages of
    nasal breathing today
    <span>
      <svg width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5704 4.81293L0.15469 1.83926C0.0555911 1.7261 0 1.57331 0 1.41407C0 1.25484 0.0555911 1.10204 0.15469 0.988889C0.203353 0.933024 0.261358 0.888659 0.32533 0.858377C0.389301 0.828095 0.457961 0.8125 0.527314 0.8125C0.596667 0.8125 0.665327 0.828095 0.729299 0.858377C0.79327 0.888659 0.851275 0.933024 0.899938 0.988889L3.84555 4.38688C3.94452 4.50029 4 4.65319 4 4.8125C4 4.97181 3.94452 5.12471 3.84555 5.23812L0.899938 8.63611C0.851275 8.69198 0.79327 8.73634 0.729299 8.76662C0.665327 8.79691 0.596667 8.8125 0.527314 8.8125C0.457961 8.8125 0.389301 8.79691 0.32533 8.76662C0.261358 8.73634 0.203353 8.69198 0.15469 8.63611C0.0555911 8.52296 0 8.37016 0 8.21093C0 8.05169 0.0555911 7.8989 0.15469 7.78574L2.5704 4.81293Z" fill="white"/>
      </svg>
    </span>
  </a>
`

let review1 = `
    <div class="review_first">
    <h3> What people say about SomniFixmouth strips <img src="https://i.ibb.co/RhLx4jP/heart.png" alt="heart"></h3>
    <div class="slider_block">
      <div class="slider_snoring">
        <div class="slider_item">
          <p class="name">Sandy S. <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date">09/10/2020</p>
          <p class="text">
            <span>Sleep better</span>
            "I sleep so much better. <b>I'm not waking myself up anymore with my own snoring.</b>"
          </p>
        </div>
        <div class="slider_item">
          <p class="name">Geraldine K. <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date">09/09/2020</p>
          <p class="text">
            "Easy to use. I could still cough if I needed to. Easy to apply.Still able to intake air through the mouth if needed but otherwise kept my mouth shut to
            <b>deter dry mouth and snoring.</b>"
          </p>
        </div>
      </div>
    </div>
  </div>
`

let review2 = `
     <div class="review_second">
    <h3> What people say about SomniFix mouth strips <img src="https://i.ibb.co/RhLx4jP/heart.png" alt="heart"></h3>
    <div class="slider_block">
      <div class="slider_dry">
        <div class="slider_item">
          <p class="name">Sandy S. <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date"></p>
          <p class="text">
            "I have been useing for a couple of months now and they work great <b>no more dry mouth</b>"
          </p>
        </div>
        <div class="slider_item">
          <p class="name">Geraldine K. <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date">09/09/2020</p>
          <p class="text">
            "Easy to use. I could still cough if I needed to. Easy to apply.Still able to intake air through the mouth if needed but otherwise kept my mouth shut to
            <b>deter dry mouth and snoring.</b>"
          </p>
        </div>
      </div>
    </div>
  </div>
`

let banner = `
    <div class="banner_block">
    <div>
      <p>SomniFix hypoallergenic mouth strips</p>
      <div class="us_made">
        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="13">
            <path d="M16.7143 0H1.28571C0.575634 0 0 0.575634 0 1.28571V11.5714C0 12.2815 0.575634 12.8571 1.28571 12.8571H16.7143C17.4244 12.8571 18 12.2815 18 11.5714V1.28571C18 0.575634 17.4244 0 16.7143 0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M16.7143 0H1.28571C0.575634 0 0 0.575634 0 1.28571V11.5714C0 12.2815 0.575634 12.8571 1.28571 12.8571H16.7143C17.4244 12.8571 18 12.2815 18 11.5714V1.28571C18 0.575634 17.4244 0 16.7143 0Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12V12.8571H0V12H18ZM18 10.2857V11.1429H0V10.2857H18ZM18 8.57143V9.42857H0V8.57143H18ZM18 6.85714V7.71429H0V6.85714H18ZM18 5.14286V6H0V5.14286H18ZM18 3.42857V4.28571H0V3.42857H18ZM18 1.71429V2.57143H0V1.71429H18ZM18 0V0.857143H0V0H18Z" fill="#D02F44"/>
            <path d="M7.71429 0H0V6H7.71429V0Z" fill="#46467F"/>
            <g filter="url(#filter0_d)">
              <path d="M6.42885 4.28599C6.66554 4.28599 6.85742 4.47787 6.85742 4.71456C6.85742 4.95126 6.66554 5.14314 6.42885 5.14314C6.19216 5.14314 6.00028 4.95126 6.00028 4.71456C6.00028 4.47787 6.19216 4.28599 6.42885 4.28599ZM4.71457 4.28599C4.95126 4.28599 5.14314 4.47787 5.14314 4.71456C5.14314 4.95126 4.95126 5.14314 4.71457 5.14314C4.47787 5.14314 4.28599 4.95126 4.28599 4.71456C4.28599 4.47787 4.47787 4.28599 4.71457 4.28599ZM3.00028 4.28599C3.23697 4.28599 3.42885 4.47787 3.42885 4.71456C3.42885 4.95126 3.23697 5.14314 3.00028 5.14314C2.76359 5.14314 2.57171 4.95126 2.57171 4.71456C2.57171 4.47787 2.76359 4.28599 3.00028 4.28599ZM1.28599 4.28599C1.52269 4.28599 1.71456 4.47787 1.71456 4.71456C1.71456 4.95126 1.52269 5.14314 1.28599 5.14314C1.0493 5.14314 0.857422 4.95126 0.857422 4.71456C0.857422 4.47787 1.0493 4.28599 1.28599 4.28599ZM2.14314 3.42885C2.37983 3.42885 2.57171 3.62073 2.57171 3.85742C2.57171 4.09411 2.37983 4.28599 2.14314 4.28599C1.90644 4.28599 1.71456 4.09411 1.71456 3.85742C1.71456 3.62073 1.90644 3.42885 2.14314 3.42885ZM3.85742 3.42885C4.09412 3.42885 4.28599 3.62073 4.28599 3.85742C4.28599 4.09411 4.09412 4.28599 3.85742 4.28599C3.62073 4.28599 3.42885 4.09411 3.42885 3.85742C3.42885 3.62073 3.62073 3.42885 3.85742 3.42885ZM5.57171 3.42885C5.8084 3.42885 6.00028 3.62073 6.00028 3.85742C6.00028 4.09411 5.8084 4.28599 5.57171 4.28599C5.33501 4.28599 5.14314 4.09411 5.14314 3.85742C5.14314 3.62073 5.33501 3.42885 5.57171 3.42885ZM6.42885 2.57171C6.66554 2.57171 6.85742 2.76359 6.85742 3.00028C6.85742 3.23697 6.66554 3.42885 6.42885 3.42885C6.19216 3.42885 6.00028 3.23697 6.00028 3.00028C6.00028 2.76359 6.19216 2.57171 6.42885 2.57171ZM4.71457 2.57171C4.95126 2.57171 5.14314 2.76359 5.14314 3.00028C5.14314 3.23697 4.95126 3.42885 4.71457 3.42885C4.47787 3.42885 4.28599 3.23697 4.28599 3.00028C4.28599 2.76359 4.47787 2.57171 4.71457 2.57171ZM3.00028 2.57171C3.23697 2.57171 3.42885 2.76359 3.42885 3.00028C3.42885 3.23697 3.23697 3.42885 3.00028 3.42885C2.76359 3.42885 2.57171 3.23697 2.57171 3.00028C2.57171 2.76359 2.76359 2.57171 3.00028 2.57171ZM1.28599 2.57171C1.52269 2.57171 1.71456 2.76359 1.71456 3.00028C1.71456 3.23697 1.52269 3.42885 1.28599 3.42885C1.0493 3.42885 0.857422 3.23697 0.857422 3.00028C0.857422 2.76359 1.0493 2.57171 1.28599 2.57171ZM2.14314 1.71456C2.37983 1.71456 2.57171 1.90644 2.57171 2.14314C2.57171 2.37983 2.37983 2.57171 2.14314 2.57171C1.90644 2.57171 1.71456 2.37983 1.71456 2.14314C1.71456 1.90644 1.90644 1.71456 2.14314 1.71456ZM3.85742 1.71456C4.09412 1.71456 4.28599 1.90644 4.28599 2.14314C4.28599 2.37983 4.09412 2.57171 3.85742 2.57171C3.62073 2.57171 3.42885 2.37983 3.42885 2.14314C3.42885 1.90644 3.62073 1.71456 3.85742 1.71456ZM5.57171 1.71456C5.8084 1.71456 6.00028 1.90644 6.00028 2.14314C6.00028 2.37983 5.8084 2.57171 5.57171 2.57171C5.33501 2.57171 5.14314 2.37983 5.14314 2.14314C5.14314 1.90644 5.33501 1.71456 5.57171 1.71456ZM1.28599 0.857422C1.52269 0.857422 1.71456 1.0493 1.71456 1.28599C1.71456 1.52269 1.52269 1.71456 1.28599 1.71456C1.0493 1.71456 0.857422 1.52269 0.857422 1.28599C0.857422 1.0493 1.0493 0.857422 1.28599 0.857422ZM3.00028 0.857422C3.23697 0.857422 3.42885 1.0493 3.42885 1.28599C3.42885 1.52269 3.23697 1.71456 3.00028 1.71456C2.76359 1.71456 2.57171 1.52269 2.57171 1.28599C2.57171 1.0493 2.76359 0.857422 3.00028 0.857422ZM4.71457 0.857422C4.95126 0.857422 5.14314 1.0493 5.14314 1.28599C5.14314 1.52269 4.95126 1.71456 4.71457 1.71456C4.47787 1.71456 4.28599 1.52269 4.28599 1.28599C4.28599 1.0493 4.47787 0.857422 4.71457 0.857422ZM6.42885 0.857422C6.66554 0.857422 6.85742 1.0493 6.85742 1.28599C6.85742 1.52269 6.66554 1.71456 6.42885 1.71456C6.19216 1.71456 6.00028 1.52269 6.00028 1.28599C6.00028 1.0493 6.19216 0.857422 6.42885 0.857422Z" fill="black"/>
            </g>
            <path d="M6.42885 4.28599C6.66554 4.28599 6.85742 4.47787 6.85742 4.71456C6.85742 4.95126 6.66554 5.14314 6.42885 5.14314C6.19216 5.14314 6.00028 4.95126 6.00028 4.71456C6.00028 4.47787 6.19216 4.28599 6.42885 4.28599ZM4.71457 4.28599C4.95126 4.28599 5.14314 4.47787 5.14314 4.71456C5.14314 4.95126 4.95126 5.14314 4.71457 5.14314C4.47787 5.14314 4.28599 4.95126 4.28599 4.71456C4.28599 4.47787 4.47787 4.28599 4.71457 4.28599ZM3.00028 4.28599C3.23697 4.28599 3.42885 4.47787 3.42885 4.71456C3.42885 4.95126 3.23697 5.14314 3.00028 5.14314C2.76359 5.14314 2.57171 4.95126 2.57171 4.71456C2.57171 4.47787 2.76359 4.28599 3.00028 4.28599ZM1.28599 4.28599C1.52269 4.28599 1.71456 4.47787 1.71456 4.71456C1.71456 4.95126 1.52269 5.14314 1.28599 5.14314C1.0493 5.14314 0.857422 4.95126 0.857422 4.71456C0.857422 4.47787 1.0493 4.28599 1.28599 4.28599ZM2.14314 3.42885C2.37983 3.42885 2.57171 3.62073 2.57171 3.85742C2.57171 4.09411 2.37983 4.28599 2.14314 4.28599C1.90644 4.28599 1.71456 4.09411 1.71456 3.85742C1.71456 3.62073 1.90644 3.42885 2.14314 3.42885ZM3.85742 3.42885C4.09412 3.42885 4.28599 3.62073 4.28599 3.85742C4.28599 4.09411 4.09412 4.28599 3.85742 4.28599C3.62073 4.28599 3.42885 4.09411 3.42885 3.85742C3.42885 3.62073 3.62073 3.42885 3.85742 3.42885ZM5.57171 3.42885C5.8084 3.42885 6.00028 3.62073 6.00028 3.85742C6.00028 4.09411 5.8084 4.28599 5.57171 4.28599C5.33501 4.28599 5.14314 4.09411 5.14314 3.85742C5.14314 3.62073 5.33501 3.42885 5.57171 3.42885ZM6.42885 2.57171C6.66554 2.57171 6.85742 2.76359 6.85742 3.00028C6.85742 3.23697 6.66554 3.42885 6.42885 3.42885C6.19216 3.42885 6.00028 3.23697 6.00028 3.00028C6.00028 2.76359 6.19216 2.57171 6.42885 2.57171ZM4.71457 2.57171C4.95126 2.57171 5.14314 2.76359 5.14314 3.00028C5.14314 3.23697 4.95126 3.42885 4.71457 3.42885C4.47787 3.42885 4.28599 3.23697 4.28599 3.00028C4.28599 2.76359 4.47787 2.57171 4.71457 2.57171ZM3.00028 2.57171C3.23697 2.57171 3.42885 2.76359 3.42885 3.00028C3.42885 3.23697 3.23697 3.42885 3.00028 3.42885C2.76359 3.42885 2.57171 3.23697 2.57171 3.00028C2.57171 2.76359 2.76359 2.57171 3.00028 2.57171ZM1.28599 2.57171C1.52269 2.57171 1.71456 2.76359 1.71456 3.00028C1.71456 3.23697 1.52269 3.42885 1.28599 3.42885C1.0493 3.42885 0.857422 3.23697 0.857422 3.00028C0.857422 2.76359 1.0493 2.57171 1.28599 2.57171ZM2.14314 1.71456C2.37983 1.71456 2.57171 1.90644 2.57171 2.14314C2.57171 2.37983 2.37983 2.57171 2.14314 2.57171C1.90644 2.57171 1.71456 2.37983 1.71456 2.14314C1.71456 1.90644 1.90644 1.71456 2.14314 1.71456ZM3.85742 1.71456C4.09412 1.71456 4.28599 1.90644 4.28599 2.14314C4.28599 2.37983 4.09412 2.57171 3.85742 2.57171C3.62073 2.57171 3.42885 2.37983 3.42885 2.14314C3.42885 1.90644 3.62073 1.71456 3.85742 1.71456ZM5.57171 1.71456C5.8084 1.71456 6.00028 1.90644 6.00028 2.14314C6.00028 2.37983 5.8084 2.57171 5.57171 2.57171C5.33501 2.57171 5.14314 2.37983 5.14314 2.14314C5.14314 1.90644 5.33501 1.71456 5.57171 1.71456ZM1.28599 0.857422C1.52269 0.857422 1.71456 1.0493 1.71456 1.28599C1.71456 1.52269 1.52269 1.71456 1.28599 1.71456C1.0493 1.71456 0.857422 1.52269 0.857422 1.28599C0.857422 1.0493 1.0493 0.857422 1.28599 0.857422ZM3.00028 0.857422C3.23697 0.857422 3.42885 1.0493 3.42885 1.28599C3.42885 1.52269 3.23697 1.71456 3.00028 1.71456C2.76359 1.71456 2.57171 1.52269 2.57171 1.28599C2.57171 1.0493 2.76359 0.857422 3.00028 0.857422ZM4.71457 0.857422C4.95126 0.857422 5.14314 1.0493 5.14314 1.28599C5.14314 1.52269 4.95126 1.71456 4.71457 1.71456C4.47787 1.71456 4.28599 1.52269 4.28599 1.28599C4.28599 1.0493 4.47787 0.857422 4.71457 0.857422ZM6.42885 0.857422C6.66554 0.857422 6.85742 1.0493 6.85742 1.28599C6.85742 1.52269 6.66554 1.71456 6.42885 1.71456C6.19216 1.71456 6.00028 1.52269 6.00028 1.28599C6.00028 1.0493 6.19216 0.857422 6.42885 0.857422Z" fill="url(#paint0_linear)"/>
          </g>
          <defs>
            <filter id="filter0_d" x="-3.14258" y="-2.14258" width="14" height="12.2857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation="2"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="3.85742" y1="0.857422" x2="3.85742" y2="5.14314" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="#F0F0F0"/>
            </linearGradient>
          </defs>
        </svg>
        US Made
      </div>
    </div>
    <div>
      <div class="rating">
        <p>4.7 <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars"></p>
        <p>Based on 2536 Reviews</p>
      </div>
      <button class="btn">Get strips</button>
    </div>
  </div>
`

let packs = `
    <div class="packs">
    <h3>Sleep well, from today</h3>
    <ul>
      <li>4 out of 5 customers say they sleep better using SomniFix</li>
      <li>Does not block breathing</li>
      <li>Hypoallergenic</li>
    </ul>
    <a href="https://somnifix.com/products/mouth-strips-snoring-sleep-aid" class="stars" target="_blank"><svg width="89" height="23" viewBox="0 0 89 23" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g clip-path="url(#clip0)">
        <rect width="89" height="23" fill="white"/>
        <rect width="194" height="23" fill="url(#pattern0)"/>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0" transform="translate(0 -0.00478429) scale(0.0019305 0.0162834)"/>
        </pattern>
        <clipPath id="clip0">
          <rect width="89" height="23" fill="white"/>
        </clipPath>
        <image id="image0" width="518" height="62" xlink:href="data:image/png;base64,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"/>
      </defs>
    </svg> 2527 Reviews</a>
    <div>
      <div class="pack">
        <a href="https://somnifix.com/products/mouth-strips-snoring-sleep-aid" target="_blank"><img src="https://i.ibb.co/7NCZnf7/pack1.jpg" alt="pack1"></a>
        <a href="https://somnifix.com/products/mouth-strips-snoring-sleep-aid" class="title" target="_blank">SomniFix Mouth Strips</a>
        <p>1-month kit (28 strips)</p>
        <button class="btn pack1">add to cart<br><span>$19</span></button>
      </div>
      <div class="pack">
        <a href="https://somnifix.com/products/mouth-strips-snoring-sleep-aid" target="_blank"><img src="https://i.ibb.co/XXXftkP/pack2.png" alt="pack2"></a>
        <a href="https://somnifix.com/products/mouth-strips-snoring-sleep-aid" class="title" target="_blank">SomniFix Mouth Strips</a>
        <p>3-month kit (84 strips)</p>
        <button class="btn pack2">add to cart<br><span>$55</span></button>
      </div>
    </div>
  </div>
`

let doctor = `
    <div class="doctor_block">
    <img src="https://i.ibb.co/nkkcCNd/doctor.jpg" alt="avatar">
    <p><b>"If you’re breathing through your mouth while you sleep at night, it’s a big deal. </b></p>
    <p>Not only does it reduce the quality of your sleep, but it disrupts the balance of your oral microbiome
      and makes you more prone to tooth decay. When your body is trained to breathe through your nose,
      the results are astounding!"</p>
    <p class="name_doctor">
      <span>MARK BURHENNE, DDS</span><br>
      Family & Sleep Medicine Dentist, Creator of AskTheDentist.com
    </p>
    <div><a href="https://somnifix.com/products/mouth-strips-snoring-sleep-aids" target="_blank">Know more about SomniFix mouth strips ></a><img src="https://i.ibb.co/R6sT9K1/rate.jpg" alt="rate"></div>
  </div>
`

let reviewCpap = `
  <div class="review_cpap">
    <h3> What people say about SomniFixmouth strips <img src="https://i.ibb.co/RhLx4jP/heart.png" alt="heart"></h3>
    <div class="slider_block">
      <div class="slider_cpap">
        <div class="slider_item">
          <p class="name">Judy H. <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date">10/02/2020</p>
          <p class="text">
            "I have been using somnifix for about a year. <b>I can't imagine trying to sleep with it. I am a cpap user
            and open mouth breather.</b> Since I started using these strips I am having better sleep at night. I have also
            started breathing more through my nose during awake time. This is a good company with a great product. easy
            ordering and fast shipping. Thank you Somnifix."
          </p>
        </div>
        <div class="slider_item">
          <p class="name">Ann P. <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date">10/04/2020</p>
          <p class="text">
            <span>Somnifix Mouth Strips work great</span>
            "Somnifix Mouth Strips are great. I have been using them for a while now and <b>they do a great job keeping
            my mouth closed with my CPAP.</b> I plan to continue using them. No more dry.mouth."
          </p>
        </div>
        <div class="slider_item">
          <p class="name">Anonymous <span>Verified Buyer</span></p>
          <img src="https://i.ibb.co/7pj5pBt/stars.png" alt="stars">
          <p class="date">11/08/2020</p>
          <p class="text">
            <span>Good product</span>
            "They work! They work well, they <b>help me considerably with my cpap,</b> they allow me to use my nasal pillow
            mask properly. No skin irritation and repositioning is possible"
          </p>
        </div>
      </div>
    </div>
  </div>
`

document.addEventListener('DOMContentLoaded', function () {

    document.body.insertAdjacentHTML('afterbegin', style)
    document.body.insertAdjacentHTML('afterbegin', blogBtn)

    document.querySelector('a.blog_btn').addEventListener('click', function () {
        document.body.classList.add('on-open-card')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'More purchase-oriented blog',
            'eventAction': 'Click on sticky button'
        });
    })

    setTimeout(() => {
        document.querySelector('.blog_btn').classList.add('active')
    }, 60000)

    let blogName = window.location.pathname.split('snews/')[1]

    switch (blogName) {
        case 'mouth-taping':
            console.log('blog1')
            blog1()
            break
        case 'how-to-stop-sleeping-with-your-mouth-open':
            console.log('blog2')
            blog2()
            break
        case 'the-weird-benefit-of-mouth-taping-that-you-should-know-about':
            console.log('blog3')
            blog3()
            break
        case 'dry-mouth-at-night':
            console.log('blog4')
            blog4()
            break
        case 'stop-mouth-breathing-at-night':
            console.log('blog5')
            blog5()
            break
        case 'nose-breathing-benefits':
            console.log('blog6')
            blog6()
            break
        case 'prevent-dry-mouth-while-sleeping':
            console.log('blog7')
            blog7()
            break
        case 'cpap-machine-hack-overcoming-mouth-breathing':
            console.log('blog8')
            blog8()
            break
        case 'dry-mouth-with-cpap':
            console.log('blog9')
            blog9()
            break
        case 'mouth-breathing-at-night':
            console.log('blog10')
            blog10()
            break
        default:
            console.log('no correct path')
    }

})

function bannerClick() {
    document.querySelector('.banner_block button.btn').addEventListener('click', function () {
        document.body.classList.add('on-open-card')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'More purchase-oriented blog',
            'eventAction': 'Click on banner button'
        });
    })
}

function packsClick() {
    document.querySelector('.btn.pack2').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'More purchase-oriented blog',
            'eventAction': 'Buy 3-month pack'
        });
        document.querySelector('.on-variant-label[data-index="2"]').click()
        setTimeout(()=>{document.querySelector('.button--add-to-cart').click()}, 100)
    })

    document.querySelector('.btn.pack1').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'More purchase-oriented blog',
            'eventAction': 'Buy 1-month pack'
        });
        document.querySelector('.button--add-to-cart').click()
    })
}

function doctorClick() {
    document.querySelector('.doctor_block a').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'More purchase-oriented blog',
            'eventAction': 'Click on doctor link'
        });
    })
}

function blog1() {
    document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin', review1)
    document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin',banner)
    document.querySelectorAll('h2')[7].insertAdjacentHTML('beforebegin',packs)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_snoring',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth & snoring'
            });
        });
    }, 1000)
    bannerClick()
    packsClick()
}


function blog2() {
    document.querySelectorAll('h2')[3].insertAdjacentHTML('beforebegin', review2)
    document.querySelectorAll('h2')[3].insertAdjacentHTML('beforebegin', banner)
    document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin', packs)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_dry',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth'
            });
        });
    }, 1000)
    bannerClick()
    packsClick()
}

function blog3() {
    document.querySelectorAll('h2')[2].insertAdjacentHTML('beforebegin', review2)
    document.querySelectorAll('h2')[3].insertAdjacentHTML('beforebegin', banner)
    document.querySelectorAll('h3')[1].insertAdjacentHTML('beforebegin', packs)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_dry',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth'
            });
        });
    }, 1000)
    bannerClick()
    packsClick()
}

function blog4() {
    document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin', doctor)
    document.querySelectorAll('h2')[9].previousElementSibling.insertAdjacentElement('beforebegin', review2)
    document.querySelectorAll('h2')[9].previousElementSibling.insertAdjacentElement('beforebegin', banner)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_dry',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth'
            });
        });
    }, 1000)
    bannerClick()
    doctorClick()
}

function blog5() {
    document.querySelectorAll('h2')[11].insertAdjacentHTML('beforebegin', review1)
    document.querySelectorAll('h2')[11].insertAdjacentHTML('beforebegin', banner)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_snoring',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth & snoring'
            });
        });
    }, 1000)
    bannerClick()
}

function blog6() {
    document.querySelectorAll('h2')[7].insertAdjacentHTML('beforebegin', doctor)
    document.querySelectorAll('h2')[9].insertAdjacentHTML('beforebegin', review2)
    document.querySelectorAll('h2')[9].insertAdjacentHTML('beforebegin', banner)
    document.querySelectorAll('h2')[11].insertAdjacentHTML('beforebegin', packs)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_dry',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth'
            });
        });
    }, 1000)
    bannerClick()
    packsClick()
    doctorClick()
}

function blog7() {
    document.querySelectorAll('h2')[3].insertAdjacentHTML('beforebegin', doctor)
    document.querySelectorAll('h2')[4].insertAdjacentHTML('beforebegin', review2)
    document.querySelectorAll('h2')[4].insertAdjacentHTML('beforebegin', banner)
    document.querySelectorAll('h2')[9].insertAdjacentHTML('beforebegin', packs)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_dry',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth'
            });
        });
    }, 1000)
    bannerClick()
    packsClick()
    doctorClick()
}

function blog8() {
    document.querySelectorAll('p')[20].insertAdjacentHTML('beforebegin', reviewCpap)
    document.querySelectorAll('p')[20].insertAdjacentHTML('beforebegin', banner)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_cpap',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'CPAP'
            });
        });
    }, 1000)
    bannerClick()
}

function blog9() {
    document.querySelectorAll('h2')[8].insertAdjacentHTML('beforebegin', reviewCpap)
    document.querySelectorAll('h2')[8].insertAdjacentHTML('beforebegin', banner)
    setTimeout(function () {
        let slider = tns({
            container: '.slider_cpap',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'CPAP'
            });
        });
    }, 1000)
    bannerClick()
}

function blog10() {
    document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin', review2)
    document.querySelectorAll('h2')[5].insertAdjacentHTML('beforebegin', banner)
    document.querySelectorAll('h2')[8].insertAdjacentHTML('beforebegin', packs)
    document.querySelectorAll('h2')[10].insertAdjacentHTML('beforebegin', reviewCpap)
    setTimeout(function () {
        let slider2 = tns({
            container: '.slider_cpap',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider2.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'CPAP'
            });
        });
        let slider = tns({
            container: '.slider_dry',
            controls: false,
            navPosition: 'bottom',
            preventScrollOnTouch: 'auto',
            gutter: 10
        })
        slider.events.on('transitionEnd', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'More purchase-oriented blog',
                'eventAction': 'Swipe review',
                'eventLabel': 'Dry mouth'
            });
        });
    }, 1000)
    bannerClick()
    packsClick()
}

(function(h,o,t,j,a,r){
h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:1271698,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'optimize_pdp')

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'More purchase-oriented blog',
    'eventAction': 'loaded'
});
