let style = `
<style>
    .on-variant-label[data-index="1"] .price-wrapper {
      margin-top: 0 !important;
    }
    .new-price-label {
      color: #F13F3F !important;
    }
    
    .on-variant-label {
      position:relative;
    }
    
    .friday_price {
      position:absolute;
      right: 0;
      top: 0;
    }
    
    @media (max-width: 769px) {
        .friday_price {
          position:absolute;
          right: 1px;
          top: 50%;
          transform: translateY(-50%);
          }
          
        .on-card-dwrapper .product_section .swatch label.on-variant-label {
          padding-right: 53px;
        }
        
        .on-card-dwrapper .swatch label.on-variant-label .on-mb-swatch-item .on-item-details {
              width: 100% !important;
        }
        
        .on-save-icon {
          background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCA2MiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMjY2NTkgMC44QzkuOTU4OTcgMC4yODA3MTEgMTAuODAxMSAwIDExLjY2NjYgMEg1Ny4zMzMzQzU5LjU0MjQgMCA2MS4zMzMzIDEuNzkwODYgNjEuMzMzMyA0VjExQzYxLjMzMzMgMTMuMjA5MSA1OS41NDI0IDE1IDU3LjMzMzMgMTVIMTEuNjY2NkMxMC44MDExIDE1IDkuOTU4OTcgMTQuNzE5MyA5LjI2NjU5IDE0LjJMNC41OTk5MiAxMC43QzIuNDY2NTkgOS4xIDIuNDY2NTkgNS45IDQuNTk5OTIgNC4zTDkuMjY2NTkgMC44WiIgZmlsbD0iIzQwOTBEMSIvPgo8Y2lyY2xlIGN4PSI5LjgzMzI1IiBjeT0iNy41IiByPSIxLjUiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
          color: white;
          font-size: 10px;
          padding-left: 15px;
          display:flex;
          align-items: center;
          justify-content:center;
        }
    }
    
    .friday_price span {
      display: block;
      margin: 5px;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
     
    }
    
    .friday_old_price {
      text-decoration:line-through;
      color: #1e415d;
    }
    
    .friday_new_price {
      color: #f2701e;
    }
    
</style>
`

let lite = `
<span class="save-label">Save 15%</span>
<span class="old-price-label">$19.97</span>
`
document.body.insertAdjacentHTML('afterbegin', style)
window.onload =  function () {

    document.querySelectorAll('.on-variant-label[data-index="1"] .on-price')[0].style.display = 'none'
    document.querySelectorAll('.on-variant-label[data-index="2"] .on-price')[0].style.display = 'none'
    document.querySelectorAll('.on-variant-label[data-index="3"] .on-price')[0].style.display = 'none'

    document.querySelectorAll('.on-variant-label[data-index="1"] .crossed-out')[1].insertAdjacentHTML('afterend', lite)
    document.querySelector('.on-variant-label[data-index="2"] .save-label').innerHTML = 'Save 15%'
    document.querySelector('.on-variant-label[data-index="3"] .save-label').innerHTML = 'Save 33%'
    document.querySelector('.on-variant-label[data-index="2"] .old-price-label').innerHTML = '$55.97'
    document.querySelector('.on-variant-label[data-index="3"] .old-price-label').innerHTML = '$49.97'
    document.querySelector('.on-variant-label[data-index="1"] .new-price-label').innerHTML = '$16.98'
    document.querySelector('.on-variant-label[data-index="2"] .new-price-label').innerHTML = '$47.58'
    document.querySelector('.on-variant-label[data-index="3"] .new-price-label').innerHTML = '$33.48'

    document.querySelectorAll('.on-variant-label[data-index="1"] .on-save')[0].innerHTML = 'Save 15%'
    document.querySelectorAll('.on-variant-label[data-index="2"] .on-save')[0].innerHTML = 'Save 15%'
    document.querySelectorAll('.on-variant-label[data-index="3"] .on-save')[0].innerHTML = 'Save 33%'


    document.querySelectorAll('.on-variant-label[data-index="1"] .on-item-details')[0].insertAdjacentHTML('afterbegin', `<span class="on-save-icon">Save 15%</span>`)
    document.querySelectorAll('.on-variant-label[data-index="2"] .on-save-icon')[0].innerHTML = 'Save 15%'
    document.querySelectorAll('.on-variant-label[data-index="3"] .on-save-icon')[0].innerHTML = 'Save 33%'

    document.querySelectorAll('.on-variant-label[data-index="1"]')[0].innerHTML += `
        <div class="friday_price">
          <span class="friday_old_price">$19.97</span>
          <span class="friday_new_price">$16.98</span>
        </div>
    `
    document.querySelectorAll('.on-variant-label[data-index="2"]')[0].innerHTML += `
        <div class="friday_price">
          <span class="friday_old_price">$55.97</span>
          <span class="friday_new_price">$47.58</span>
        </div>
    `
    document.querySelectorAll('.on-variant-label[data-index="3"]')[0].innerHTML += `
        <div class="friday_price">
          <span class="friday_old_price">$49.97</span>
          <span class="friday_new_price">$33.48</span>
        </div>
    `
    let p = +document.querySelector('.swatch_options input:checked+.swatch-element .new-price-label').innerText.slice(1)
    document.querySelectorAll('.shopify-product-form .on-pack-wrapper .money').forEach(function (e) {
        e.innerHTML = `$${p} USD`
    })
    let p2 = +document.querySelector('.swatch_options input:checked+.swatch-element .friday_new_price').innerText.slice(1)
    document.querySelectorAll('.shopify-product-form .on-pack-wrapper .money').forEach(function (e) {
        e.innerHTML = `$${p2} USD`
    })


    document.body.addEventListener('click', function (e) {
        let elem = document.querySelectorAll('.product__information')[1]
        let price = +document.querySelector('.swatch_options input:checked+.swatch-element .new-price-label').innerText.slice(1)
        let count = +document.querySelectorAll('.on-pack-wrapper.active span.on-count')[1].innerText
        let element = e.target
        while (element && !element.classList.contains("swatch")) {
            element = element.parentElement;
        }
        if (element) {
            count = 1
        }

        elem.querySelectorAll('.shopify-product-form .on-pack-wrapper .money').forEach(function (e) {
            e.innerHTML = `$${(price * count).toString().slice(0, 6)} USD`
        })
    })


    document.querySelector('.on-card-dwrapper').addEventListener('click', function (e) {
        let elem = this
        let mut = new MutationObserver(function (items) {
            let price = +document.querySelector('.swatch_options input:checked+.swatch-element .friday_new_price').innerText.slice(1)
            let count = +elem.querySelector('.on-pack-wrapper.active span.on-count').innerText
            let element = e.target
            while (element && !element.classList.contains("swatch-element")) {
                element = element.parentElement;
            }
            if (element) {
                count = 1
            }
            elem.querySelectorAll('.on-pack-wrapper .money').forEach(function (e) {
                e.innerHTML = `$${(price * count).toString().slice(0, 6)} USD`
            })
            mut.disconnect()
        })
        mut.observe(elem, {
            childList: true,
            characterData: true,
            subtree: true
        })
    })
}
