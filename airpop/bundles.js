let link1 = document.createElement('link');
link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
link1.rel = 'stylesheet'
document.head.appendChild(link1);

let script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
script1.async = false;
document.head.appendChild(script1);

jQuery.ajaxSetup({
    type: "GET",
    data: {},
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', "Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1");
    }
});

let tL = {
    1: 'Frequently bought together',
    2: 'Total price',
    3: 'Add Both to Cart',
    4: 'mask',
    5: 'masks',
    6: 'Cancel'
}

if (window.location.href.includes('/de/')) {
    tL = {
        1: 'Wird oft zusammen gekauft',
        2: 'Gesamtpreis',
        3: 'In den Warenkorb Beide',
        4: 'maske',
        5: 'masken',
        6: 'Stornieren'
    }
} else if(window.location.href.includes('/nl/')) {
    tL = {
        1: 'Vaak samen gekocht',
        2: 'Totale prijs',
        3: 'In winkelwagen Beide',
        4: 'masker',
        5: 'maskers',
        6: 'Annuleren'
    }
} else if(window.location.href.includes('/it/')) {
    tL = {
        1: 'Acquistati frequentemente insieme',
        2: 'Prezzo totale',
        3: 'Aggiungi al carrello entrambi',
        4: 'mask',
        5: 'masks',
        6: 'Annulla'
    }
}

let style = `
    <style>
        * {
          box-sizing: border-box;
        }
        .flx {
          display:flex;
          justify-content:space-between;
          align-items: center;
        }
        .category {
          display: flex;
          padding: 0 10px;
          align-items: stretch;
        }
        .category .item {
          width: 49%;
          border-radius: 16px;
          padding: 10px 8px;
          background-color: #f9f9f9;
          text-align: center;
        }
        .category .item > a {
          color: black;
          text-decoration: none;
        }
        .category .item > a > img {
          width: 100%;
        }
        .category .product_name {
          font-size: 18px;
          font-weight: 700;
        }
        .category .product_select {
          background-color: #fff;
          border: 1px solid black;
          border-radius: 50px;
          text-align: left;
          padding: 10px 15px;
          margin: 16px 0 10px;
          position: relative;
        }
        .category .product_select::after {
          position: absolute;
          content: "";
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          height: 7px;
          width: 14px;
          background: url("https://i.ibb.co/xsG543Z/arr-d.png") center center no-repeat;
          background-size: contain;
        }
        .category .product_color {
          justify-content: center;
          margin: 25px 0;
        }
        .category .product_color > div {
          background-color: #fff;
          border-radius: 50%;
          height: 24px;
          width: 24px;
          position: relative;
        }
        .category .product_color > div.white {
          border: 1px solid #cacaca;
        }
        .category .product_color > div.black {
          background: #000;
        }
        .category .product_color > div.pink {
          background: #EBB9D4;
        }
        .category .product_color > div.blue {
          background: #9BCBE4;
        }
        .category .product_color > div.yellow {
          background: #DAE561;
        }
        .category .product_color > div.grey {
          background: #5D5F61;
        }
        .category .product_color > div.brown {
          background: #B69C79;
        }
        .category .product_color > div.selected::after {
          position: absolute;
          content: "";
          height: 30px;
          width: 30px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid black;
        }
        .category .product_color > div:not(:last-child) {
          margin-right: 20px;
        }
        
        .total_price {
          margin: 15px auto;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
        }
        .add_bundle {
          display: block;
          width: 95%;
          color: white;
          font-size: 16px;
          background-color: #000;
          border-radius: 30px;
          height: 50px;
          margin: 0 auto;
        }
        .for_bundle {
          font-size: 24px;
          text-align: center;
        }
    .dark_bg {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: #0C0C0C;
      opacity: 0.4;
      z-index: 1002;
      display: none;
    }
    .dark_bg.active {
      display: block;
    }
    .custom_select {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px 15px;
      z-index: 1003;
    }
    .custom_select ul {
      border-radius: 10px;
      background-color: #fff;
      overflow: hidden;
      margin: 0;
      padding-left: 0;
    }
    .custom_select ul li {
      font-size: 18px;
      padding: 16px 24px;
      opacity: 0.7;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .custom_select ul li:not(:last-child) {
      border-bottom: 1px solid #EBEBEB;
    }
    .custom_select ul li.selected {
      font-weight: 700;
      opacity: 1;
    }
    .custom_select ul li.popular::after {
      position: absolute;
      content: "Most popular";
      color: white;
      font-size: 9px;
      padding: 3px 5px;
      border-radius: 20px;
      right: 40%;
      background-color: #26CAD3;
      font-weight: 400;
      text-transform: uppercase;
    }
    .custom_select button {
      border: none;
      border-radius: 10px;
      background-color: #fff;
      width: 100%;
      margin-top: 15px;
      font-size: 18px;
      height: 55px;
    }
    .custom_select.active {
      display: block;
    }
    
    .popup_slider {
      display: none;
      width: 95%;
      border-radius: 20px;
      background-color: #fff;
      border: 1px solid black;
      margin: 10px 2.5%;
      position:fixed;
      padding: 20px;
      z-index: 9999;
    }
    
    .popup_slider.active {
      display: block;
    }
    
    .popup_slider .close {
      position: absolute;
      content: "";
      top: 15px;
      right: 15px;
      height: 20px;
      width: 20px;
      background: url("https://dragonegor.github.io/conversionrate/airpop/img/close.svg") center center no-repeat;
      background-size: contain;
      cursor: pointer;
      z-index: 100;
    }
    
    .slider_wrap {
      height: 100%;
    }
    
    .lds-spinner {
      display: none;
      color: white;
      position: fixed;
      width: 80px;
      height: 80px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1005;
    }
    
    .lds-spinner.active {
      display: inline-block;
    }
    .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 1.2s linear infinite;
    }
    .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: #fff;
    }
    .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    .lds-spinner div:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    .lds-spinner div:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    .lds-spinner div:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    .lds-spinner div:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    .lds-spinner div:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    .lds-spinner div:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    .lds-spinner div:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    .lds-spinner div:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    .lds-spinner div:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    .lds-spinner div:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    .lds-spinner div:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    .tns-nav {
      text-align:center;
    }
    .tns-nav button {
      display:inline-block;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: #e5e5e5;
      margin: 0 5px 20px;
      padding: 0;
    }
    button.tns-nav-active {
      background-color: #000;
    }
    
    </style>
`

let products = {
    se: {
        white: {
            '+3175': ['4', '29,99', '43575'],
            '+3462': ['8', '54.99', '44780'],
            '+3463': ['12', '69.99', '44781'],
            // '+3177': ['20', '99.99', '43577']
        },
        black: {
            '+3174': ['1', '9.99', '43514'],
            '+3176': ['4', '29,99', '43576'],
            '+3460': ['8', '54.99', '44778'],
            '+3461': ['12', '69.99', '44779'],
            //   '+3178': ['20', '99.99', '43578']
        }
    },
    pocket: {
        black: {
            '+3159': ['2', '14.99', '43311'],
            '+3166': ['4', '24,99', '43346'],
            '+3456': ['8', '44.99', '44774'],
            '+3457': ['12', '59.99', '44775'],
            //   '+3318': ['20', '89.99', '43798']
        },
        white: {
            '+3160': ['2', '14.99', '43312'],
            '+3167': ['4', '24,99', '43347'],
            '+3458': ['8', '44.99', '44776'],
            '+3459': ['12', '59.99', '44777'],
            //  '+3319': ['20', '89.99', '43799']
        }
    },
    kids: {
        pink: {
            '+3162': ['4', '24.99', '43316'],
            '+3470': ['8', '44.99', '44788'],
            '+3471': ['12', '59.99', '44789'],
            //  '+3472': ['20', '89.99', '44790'],
        },
        blue: {
            '+3180': ['2', '14.99', '43580'],
            '+3163': ['4', '24.99', '43317'],
            '+3467': ['8', '44.99', '44785'],
            '+3468': ['12', '59.99', '44786'],
            //  '+3469': ['20', '89.99', '44787'],
        },
        white: {
            '+3179': ['2', '14.99', '43579'],
            '+3171': ['4', '24.99', '43352'],
            '+3464': ['8', '44.99', '44782'],
            '+3465': ['12', '59.99', '44783'],
            //   '+3466': ['20', '89.99', '44784']
        }
    },
    active: {
        black: {
            '+3184': ['1', '69.99', '43348']
        },
        yellow: {
            '+3181': ['1', '69.99', '43581']
        },
        grey: {
            '+3161': ['1', '69.99', '43315']
        }
    },
    original: {
        brown: {
            '+3183': ['1', '59.99', '43345']
        },
        grey: {
            '+3186': ['1', '59.99', '43599']
        },
        black: {
            '+3154': ['1', '59.99', '43305']
        }
    },
    cases: {
        black: {
            '+3185': ['1', '9.99', '43353']
        },
        white: {
            '+3172': ['1', '9.99', '43354']
        }
    },
    halo: {
        black: {
            '+3168': ['1', '149.99', '43349']
        }
    },
    filter: {
        white: {
            '+3182': ['4', '24.99', '43308']
        }
    }
}

let productsSort = {
  '3175': ['4', '29,99', '43575', 'white', 'se'],
  '3462': ['8', '54.99', '44780', 'white', 'se'],
  '3463': ['12', '69.99', '44781', 'white', 'se'],

  '3174': ['1', '9.99', '43514', 'black', 'se'],
  '3176': ['4', '29,99', '43576', 'black', 'se'],
  '3460': ['8', '54.99', '44778', 'black', 'se'],
  '3461': ['12', '69.99', '44779', 'black', 'se'],

  '3159': ['2', '14.99', '43311', 'black', 'pocket'],
  '3166': ['4', '24,99', '43346', 'black', 'pocket'],
  '3456': ['8', '44.99', '44774', 'black', 'pocket'],
  '3457': ['12', '59.99', '44775', 'black', 'pocket'],

  '3160': ['2', '14.99', '43312', 'white', 'pocket'],
  '3167': ['4', '24,99', '43347', 'white', 'pocket'],
  '3458': ['8', '44.99', '44776', 'white', 'pocket'],
  '3459': ['12', '59.99', '44777', 'white', 'pocket'],


  '3162': ['4', '24.99', '43316', 'pink', 'kids'],
  '3470': ['8', '44.99', '44788', 'pink', 'kids'],
  '3471': ['12', '59.99', '44789', 'pink', 'kids'],

  '3180': ['2', '14.99', '43580', 'blue', 'kids'],
  '3163': ['4', '24.99', '43317', 'blue', 'kids'],
  '3467': ['8', '44.99', '44785', 'blue', 'kids'],
  '3468': ['12', '59.99', '44786', 'blue', 'kids'],

  '3179': ['2', '14.99', '43579', 'white', 'kids'],
  '3171': ['4', '24.99', '43352', 'white', 'kids'],
  '3464': ['8', '44.99', '44782', 'white', 'kids'],
  '3465': ['12', '59.99', '44783', 'white', 'kids'],

  '3184': ['1', '69.99', '43348', 'black', 'active'],

  '3181': ['1', '69.99', '43581', 'yellow', 'active'],

  '3161': ['1', '69.99', '43315', 'grey', 'active'],

  '3183': ['1', '59.99', '43345', 'brown', 'original'],

  '3186': ['1', '59.99', '43599', 'grey', 'original'],

  '3154': ['1', '59.99', '43305', 'black', 'original'],

  '3185': ['1', '9.99', '43353', 'black', 'cases'],

  '3172': ['1', '9.99', '43354', 'white', 'cases'],

  '3168': ['1', '149.99', '43349', 'black', 'halo'],

  '3182': ['4', '24.99', '43308', 'white', 'filter']
}


let product1_block = `
    <div class="item prod1" data-category="" data-id="" data-color="">
               <a class="to_pdp">
                 <img
                   src=""
                   alt="mask">
                 <div class="product_name"></div>
               </a>
               <div class="product_price"></div>
               <div class="product_color flx">
                 
               </div>
               <div class="product_select">
                 
               </div>
            </div>
            <img src="https://dragonegor.github.io/conversionrate/airpop/img/plus.svg" alt="plus">
`

let product2_block = `
    <div class="item prod2" data-category="" data-id="" data-color="">
               <a class="to_pdp">
                 <img
                   src=""
                   alt="mask">
                 <div class="product_name"></div>
               </a>
               <div class="product_price"></div>
               <div class="product_color flx">
                 
               </div>
               <div class="product_select">
                 
               </div>
            </div>
`


let bundle_main = `
     <h2 class="for_bundle">${tL[1]}</h2>
     <div class="slider">
        <div class="slide"> 
            <div class="category" data-bundle="1">
                ${product1_block}
                ${product2_block}
            </div>
            
            <div class="total_price">${tL[2]}: $<span></span></div>
            <button class="add_bundle">${tL[3]}</button>
        </div>
     </div>
`

let bundle_main2 = `
     <h2 class="for_bundle">${tL[1]}</h2>
     <div class="slider">
        <div class="slide"> 
            <div class="category" data-bundle="1">
                ${product1_block}
                ${product2_block}
            </div>
            <div class="total_price">${tL[2]}: $<span></span></div>
            <button class="add_bundle">${tL[3]}</button>
        </div>
        <div class="slide"> 
            <div class="category" data-bundle="2">
                ${product1_block}
                ${product2_block}
            </div>
            <div class="total_price">${tL[2]}: $<span></span></div>
            <button class="add_bundle">${tL[3]}</button>
        </div>
     </div>
`

let bundle_main3 = `
     <h2 class="for_bundle">${tL[1]}</h2>
     <div class="slider">
        <div class="slide"> 
            <div class="category" data-bundle="1">
                ${product1_block}
                ${product2_block}
            </div>
            <div class="total_price">${tL[2]}: $<span></span></div>
            <button class="add_bundle">${tL[3]}</button>
        </div>
        <div class="slide"> 
            <div class="category" data-bundle="2">
                ${product1_block}
                ${product2_block}
            </div>
            <div class="total_price">${tL[2]}: $<span></span></div>
            <button class="add_bundle">${tL[3]}</button>
        </div>
        <div class="slide"> 
            <div class="category" data-bundle="3">
                ${product1_block}
                ${product2_block}
            </div>
            <div class="total_price">${tL[2]}: $<span></span></div>
            <button class="add_bundle">${tL[3]}</button>
        </div>
     </div>
`

let select = `
<div class="dark_bg"></div>
<div class="custom_select">
    <ul>

    </ul>
    <button class="cancel">Cancel</button>
</div>

<div class="popup_slider">
  
</div>
  
<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`

let $ = jQuery;

let start = setInterval(function () {
    if(document.querySelector('.attribute.description')) {
        clearInterval(start)
        console.log('start')
        let product1 = document.querySelector('.price-final_price[data-product-id]').getAttribute('data-product-id')
        let sku1 = productsSort[product1][2]
        let category1 = productsSort[product1][4]
        let set_color1 = productsSort[product1][3]
        let product2, product3, product4
        if (category1 === 'original' || category1 === 'active' || category1 === 'halo') {
            product2 = '3182'
        } else if (category1 === 'se') {
            product2 = '3163'
        } else if (category1 === 'cases') {
            product2 = (set_color1 === 'black') ? '3172' : '3185'
        } else if (category1 === 'kids') {
            product2 = '3166'
            product3 = '3172'
        } else if (category1 === 'pocket') {
            product2 = (set_color1 === 'black') ? '3185' : '3172'
            product3 = (set_color1 === 'black') ? '3167' : '3166'
            product4 = '3163'
        }

        let sku2 = productsSort[product2][2]
        let category2 = productsSort[product2][4]
        let set_color2 = productsSort[product2][3]
        console.log(sku1)
        console.log(sku2)
        let sku3, sku4, category3, category4, set_color3, set_color4

        jQuery.ajax({
            url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku1}?fields=id,sku,name,price,media_gallery_entries`,
            success: function (response) {
                console.log(response);
                setProductData(response)
            }
        });
        jQuery.ajax({
            url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku2}?fields=id,sku,name,price,media_gallery_entries`,
            success: function (response) {
                console.log(response);
                setProductData(response, 1, true)
                totalPrice(1)
            }
        });

        if (category1 === 'pocket') {
            bundle_main = bundle_main3
            sku3 = productsSort[product3][2]
            category3 = productsSort[product3][4]
            set_color3 = productsSort[product3][3]

            sku4 = productsSort[product4][2]
            category4 = productsSort[product4][4]
            set_color4 = productsSort[product4][3]
            jQuery.ajax({
                url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku3}?fields=id,sku,name,price,media_gallery_entries`,
                success: function (response) {
                    console.log(response);
                    setProductData(response, 2, true)
                    totalPrice(2)
                }
            });
            jQuery.ajax({
                url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku4}?fields=id,sku,name,price,media_gallery_entries`,
                success: function (response) {
                    console.log(response);
                    setProductData(response, 3, true)
                    totalPrice(3)
                }
            });
        }
        if (category1 === 'kids') {
            bundle_main = bundle_main2
            sku3 = productsSort[product3][2]
            category3 = productsSort[product3][4]
            set_color3 = productsSort[product3][3]

            jQuery.ajax({
                url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku3}?fields=id,sku,name,price,media_gallery_entries`,
                success: function (response) {
                    console.log(response);
                    setProductData(response, 2, true)
                    totalPrice(2)
                }
            });
        }


        createBundle()


        function createBundle() {

            document.querySelector('.attribute.description').insertAdjacentHTML('beforebegin', bundle_main)

            setTimeout(function () {
                let slider = tns({
                    container: '.slider',
                    controls: false,
                    navPosition: 'top',
                    preventScrollOnTouch: 'auto',
                    gutter: 10
                })
            }, 500)
            document.body.insertAdjacentHTML('afterbegin', style)
            document.body.insertAdjacentHTML('afterbegin', select)


            $('.product_select').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP bundles',
                    'eventAction': 'click on quantity',
                    'eventLabel': 'Section: Bundle'
                });
                let cat = $(this).closest('.item').data('category')
                let color = $(this).closest('.item').data('color')
                let id = $(this).closest('.item').data('id')
                let prod = ($(this).closest('.item').hasClass('prod1')) ? '.prod1' : '.prod2'
                let bundle = $(this).closest('.category').data('bundle')

                $('.custom_select').data('selector', `.category[data-bundle="${bundle}"] ${prod}`)
                console.log(cat, color, id)
                let list = products[cat][color]
                console.log(list)
                for (let item in list) {
                    let classList = ''
                    if (+item === +id) {
                        classList += 'selected'
                    }
                    if (list[item][0] === '4') {
                        classList += ' popular'
                    }
                    let li = `<li class="${classList}" data-sku="${list[item][2]}" data-qty="${list[item][0]}" data-newid="${+item}">${list[item][0]} ${(+list[item][0] === 1) ? "mask" : "masks"} <span>$${list[item][1]}</span></li>`
                    $('.custom_select ul').append(li)
                }

                $('.dark_bg').addClass('active')
                $('.custom_select').addClass('active')


                $('.custom_select li').click(function () {
                    let sku = $(this).data('sku')
                    let qty = $(this).data('qty')
                    let newid = $(this).data('newid')
                    let selector = $('.custom_select').data('selector')
                    let aim = $(selector)
                    $('.custom_select ul').empty()
                    $('.custom_select').removeClass('active')
                    $('.lds-spinner').addClass('active')


                    jQuery.ajax({
                        type: "GET",
                        url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku}?fields=sku,name,price,media_gallery_entries,custom_attributes`,
                        data: {},
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', "Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1");
                        },
                        success: function (response) {
                            console.log(response);
                            aim.find('a>img').attr('src', `https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404${response.media_gallery_entries[0].file}`)
                            aim.find('.product_price').html(`$${response.price} for ${qty} ${(+qty === 1) ? tL[4] : tL[5]}`)
                            aim.find('.product_select').html(`${qty} ${(+qty === 1) ? tL[4] : tL[5]}`)
                            aim.data('id', newid)
                            aim.find('.product_name').html(response.name)
                            aim.attr('data-price', response.price)

                            $('.dark_bg').removeClass('active')
                            $('.lds-spinner').removeClass('active')
                            totalPrice(bundle)
                        }
                    });
                })
            })

            $('.product_color').on('click', 'div', function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP bundles',
                    'eventAction': 'click on color',
                    'eventLabel': 'Section: Bundle'
                });
                let aim = $(this)
                if (!aim.hasClass('selected')) {
                    let cat = $(this).closest('.item').data('category')
                    let color = aim.data('color')
                    let sku = productsSort[+Object.keys(products[cat][color])[0]][2]
                    let qty = Object.values(products[cat][color])[0][0]
                    let newid = `${+Object.keys(products[cat][color])[0]}`
                    let bundle = aim.closest('.category').data('bundle')
                    console.log(color, sku, qty, newid)

                    $('.lds-spinner').addClass('active')
                    $('.dark_bg').addClass('active')


                    jQuery.ajax({
                        type: "GET",
                        url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku}?fields=sku,name,price,media_gallery_entries`,
                        data: {},
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', "Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1");
                        },
                        error: function (response) {
                            $('.dark_bg').removeClass('active')
                            $('.lds-spinner').removeClass('active')
                            console.log(response)
                        },
                        success: function (response) {
                            console.log(response);
                            aim.closest('.item').find('a>img').attr('src', `https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404${response.media_gallery_entries[0].file}`)
                            if (aim.closest('.item').attr('data-category') === 'cases') {
                                aim.closest('.item').find('.product_price').html(`$${response.price} for 1 case`)
                            } else {
                                aim.closest('.item').find('.product_price').html(`$${response.price} for ${qty} ${(+qty === 1) ? tL[4] : tL[5]}`)
                            }
                            aim.closest('.item').find('.product_select').html(`${qty} ${(+qty === 1) ? tL[4] : tL[5]}`)
                            aim.closest('.item').find('.product_name').html(response.name)
                            aim.closest('.item').attr('data-id', newid)
                            aim.closest('.item').attr('data-color', color)
                            aim.closest('.item').attr('data-price', response.price)
                            aim.addClass('selected').siblings('div').removeClass('selected')
                            $('.dark_bg').removeClass('active')
                            $('.lds-spinner').removeClass('active')
                            totalPrice(bundle)
                        }
                    });


                }
            })

            $('.custom_select .cancel').click(function () {
                $('.custom_select ul').empty()
                $('.dark_bg').removeClass('active')
                $('.custom_select').removeClass('active')
            })

            $('.add_bundle').click(function () {
                let id1 = $(this).closest('.slide').find('.prod1').data('id')
                let id2 = $(this).closest('.slide').find('.prod2').data('id')
                console.log(id1, id2)

                to_cart(id1)
                to_cart(id2)
                $('.dark_bg').addClass('active')
                $('.lds-spinner').addClass('active')
                setTimeout(function () {
                    document.querySelector('.action.showcart').click()
                }, 2000)
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP bundles',
                    'eventAction': 'click on button Add to Cart Both',
                    'eventLabel': 'Section: Bundle'
                });
            })
        }

        function setProductData(r, bundle, add) {
            let aim, cat, color, qty
            if (add) {
                aim = $(`.category[data-bundle="${bundle}"] .prod2`)
            } else {
                aim = $(`.prod1`)
            }
            switch (bundle) {
                case 1:
                    cat = category2
                    color = set_color2
                    break
                case 2:
                    cat = category3
                    color = set_color3
                    break
                case 3:
                    cat = category4
                    color = set_color4
                    break
                default:
                    cat = category1
                    color = set_color1
            }
            console.log(aim, cat, color)

            if (productsSort[r.id][4] === 'se' || productsSort[r.id][4] === 'pocket' || productsSort[r.id][4] === 'kids') {
                qty = productsSort[r.id][0]
                aim.find('.product_select').html(`${qty} ${(+qty === 1) ? tL[4] : tL[5]}`)
                aim.find('.product_price').html(`$${r.price} for ${qty} ${(+qty === 1) ? tL[4] : tL[5]}`)
            } else if (productsSort[r.id][4] === 'filter') {
                aim.find('.product_select').css('display', 'none')
                aim.find('.product_price').html(`$${r.price} for 4 filters`)
            } else if (productsSort[r.id][4] === 'cases') {
                aim.find('.product_select').css('display', 'none')
                aim.find('.product_price').html(`$${r.price} for 1 case`)
            } else {
                aim.find('.product_select').css('display', 'none')
                aim.find('.product_price').html(`$${r.price} for 1 mask`)
            }
            let color_block = ``
            if (cat === 'filter' || cat === 'halo' || cat === 'cases') {
                aim.find('.product_color').css('display', 'none')
            } else {
                for (let i in products[cat]) {
                    color_block += `<div class="${i} ${(i === color) ? 'selected' : ''}" data-color="${i}"></div>`
                }

                aim.find('.product_color').html(color_block)
            }


            aim.attr('data-category', cat)
            aim.attr('data-color', color)
            aim.attr('data-id', r.id)
            aim.attr('data-price', r.price)
            aim.find('.to_pdp img').attr('src', `https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/${r.media_gallery_entries[0].file}`)
            aim.find('.product_name').html(r.name)

        }

        function totalPrice(b) {
            let int = setInterval(function () {
                let price1 = $(`.category[data-bundle="${b}"] .prod1`).attr('data-price')
                let price2 = $(`.category[data-bundle="${b}"] .prod2`).attr('data-price')
                if (price1 && price2) {
                    $(`.category[data-bundle="${b}"]+.total_price span`).html(`${(+price1 + +price2).toFixed(2)}`)
                    console.log(price1, price2)
                    clearInterval(int)
                }
            }, 100)
        }

        function to_cart(id) {
            jQuery.ajax({
                url: window.BASE_URL + 'checkout/cart/add/uenc/aaaa/product/' + id + '/',
                type: 'POST',
                data: {
                    product: id,
                    selected_configurable_option: '',
                    related_product: '',
                    item: id,
                    form_key: jQuery.cookie('form_key'),
                    qty: 1
                },
                success: function (response) {
                    $('.dark_bg').removeClass('active')
                    $('.lds-spinner').removeClass('active')
                },
                error: function (response) {
                    $('.dark_bg').removeClass('active')
                    $('.lds-spinner').removeClass('active')
                    console.log(response)
                }
            })
        }

        $('a.to_pdp').click(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP bundles',
                'eventAction': 'click on product',
                'eventLabel': 'Section: Bundle'
            });
            $('.dark_bg').addClass('active')
            $('.lds-spinner').addClass('active')

            let sku = productsSort[$(this).closest('.item').data('id')][2]
            console.log(sku)
            $('body').css('overflow', 'hidden')
            $('.popup_slider').append(`<span class="close"></span><div class="slider_wrap"></div>`)
            jQuery.ajax({
                type: "GET",
                url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku}?fields=sku,name,price,media_gallery_entries`,
                data: {},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', "Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1");
                },
                error: function (response) {
                    $('.dark_bg').removeClass('active')
                    $('.lds-spinner').removeClass('active')
                    console.log(response)
                },
                success: function (response) {
                    console.log(response)

                    response.media_gallery_entries.forEach(item => {
                        $('.slider_wrap').append(`<img src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/${item.file}" >`)
                    })

                    let slider2 = tns({
                        container: '.slider_wrap',
                        controls: false,
                        navPosition: 'bottom',
                        preventScrollOnTouch: 'auto',
                        gutter: 10,
                        loop: false
                    })


                    $('.lds-spinner').removeClass('active')
                    $('.popup_slider').addClass('active')
                }
            });


        });

        $('.popup_slider').on('click', '.close', function () {
            $('.dark_bg').removeClass('active')
            $('.popup_slider').removeClass('active')
            $('.popup_slider').empty()
            $('body').css('overflow', 'scroll')
        });
    }
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'pdp_bundles');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PDP bundles',
    'eventAction': 'loaded'
});
