// insert style
let style = `
<style>
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
  }

  .fuel_info {
    display: flex;
  }
  .fuel_info svg {
    flex-shrink: 0;
    height: 20px;
    margin-right: 10px;
  }
  .fuel_info p {
    color: #256799;
    font-size: 16px;
  }
  .fuel_info .blue-underline {
    line-height: 20px;
    border-bottom: 2px dotted #256799;
  }

  .more-characteristics {
    padding: 20px;
    background-color: #F3FAFD;
    border-radius: 6px;
  }
  .more-characteristics p {
    font-size: 13px;
    color: #414042;
    margin-bottom: 12px;
  }
  .more-characteristics p b {
    font-size: 16px;
    font-weight: 700;
  }

  .more-characteristics button, .equipment button {
    background-color: #219BE7;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    padding: 10px 15px;
    border: none;
  }
  
  #auto-complectation-block {
   background-color: #F3FAFD;
   margin: 20px -15px 0;
   padding: 15px;
  }
  
  #auto-complectation-block h3 {
    font-size: 20px;
    font-weight: 700;
  }
  
  #auto-complectation-block ul li.active {
    display: none;
  }
  
  #auto-complectation-block .complectation {
  border-bottom: none;
  }
  
  #auto-complectation-block ul li {
    margin: 20px 0;
    border-top: none;
    background-color: white;
    padding: 10px;
  }

  .equipment > p {
    font-size: 13px;
    color: #414042;
    margin-bottom: 12px;
  }
</style>
`

let fuelInfo = `
<div class="fuel_info test-popup">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 8.98047C9 8.71525 9.10536 8.4609 9.29289 8.27336C9.48043 8.08583 9.73478 7.98047 10 7.98047C10.2652 7.98047 10.5196 8.08583 10.7071 8.27336C10.8946 8.4609 11 8.71525 11 8.98047V14.9805C11 15.2457 10.8946 15.5 10.7071 15.6876C10.5196 15.8751 10.2652 15.9805 10 15.9805C9.73478 15.9805 9.48043 15.8751 9.29289 15.6876C9.10536 15.5 9 15.2457 9 14.9805V8.98047Z" fill="#256799"/>
    <path d="M10 4.05078C9.73478 4.05078 9.48043 4.15614 9.29289 4.34367C9.10536 4.53121 9 4.78556 9 5.05078C9 5.316 9.10536 5.57035 9.29289 5.75789C9.48043 5.94542 9.73478 6.05078 10 6.05078C10.2652 6.05078 10.5196 5.94542 10.7071 5.75789C10.8946 5.57035 11 5.316 11 5.05078C11 4.78556 10.8946 4.53121 10.7071 4.34367C10.5196 4.15614 10.2652 4.05078 10 4.05078Z" fill="#256799"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10Z" fill="#256799"/>
  </svg>
  <p><span class="blue-underline">Дізнатися про фактичні витрати по українських дорогах (по місту / по трасі)</span></p>
</div>
`

let moreCharacteristics = `
<div class="more-characteristics">
  <p><b>Бракує характеристик авто на сайті?</b></p>
  <p>Запитайте безпосередньо у автосалону потрібну інформацію</p>
  <button class="test-popup char">Уточнити характеристики</button>
</div>
`


let carModel = document.querySelector('.view-auto_testimonials_full .rating+span strong').textContent;

let equipment = `
    <div class="equipment">
        <p>Ви можете дізнатись про найближчі поставки даного авто (у наступні 30 днів).</p>
        <button class="test-popup equip">Дізнатись про найближчі поставки</button>
    </div>
`



document.body.insertAdjacentHTML('afterbegin', style);
document.querySelector('.defines_list>*:nth-child(8)').insertAdjacentHTML('afterend', fuelInfo);
document.querySelector('.characteristics').insertAdjacentHTML('afterend', moreCharacteristics);
let complectationBlock = document.getElementById('auto-complectation-block');
let char = document.querySelector('.more-characteristics');
char.after(complectationBlock);

document.querySelector('#auto-complectation-block h3').innerHTML = `Інші варіанти комплектації ${carModel}:`;
document.querySelector('#auto-complectation-block ul').insertAdjacentHTML('afterend', equipment);

document.querySelectorAll('.test-popup').forEach((item)=> {
  item.addEventListener('click', function () {
    let event = new Event('click');

    console.log(this);
    document.querySelector("span[data-tm='phone-commercial']").dispatchEvent(event);
  })
})


