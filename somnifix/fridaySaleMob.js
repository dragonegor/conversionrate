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
      right: 1px;
      top: 50%;
      transform: translateY(-50%);
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

document.body.insertAdjacentHTML('afterbegin', style)
window.onload =  function () {

    document.querySelectorAll('.on-variant-label[data-index="1"] .on-price')[0].style.opacity = '0'
    document.querySelectorAll('.on-variant-label[data-index="2"] .on-price')[0].style.opacity = '0'
    document.querySelectorAll('.on-variant-label[data-index="3"] .on-price')[0].style.opacity = '0'

    document.querySelectorAll('.on-variant-label[data-index="1"] .on-save')[0].innerHTML = 'Save 15%'
    document.querySelectorAll('.on-variant-label[data-index="2"] .on-save')[0].innerHTML = 'Save 15%'
    document.querySelectorAll('.on-variant-label[data-index="3"] .on-save')[0].innerHTML = 'Save 33%'

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



    document.querySelector('.on-card-dwrapper').addEventListener('click', function (e) {
        let elem = this
        let mut = new MutationObserver(function (items) {
            console.log(items)
            let price = +document.querySelector('.swatch_options input:checked+.swatch-element .friday_new_price').innerText.slice(1)
            let count = +elem.querySelector('.on-pack-wrapper.active span.on-count').innerText
            console.log(price)
            let element = e.target
            while (element && !element.classList.contains("swatch-element")) {
                element = element.parentElement;
            }
            if (element) {
                count = 1
            }
            elem.querySelectorAll('.on-pack-wrapper .money').forEach(function (e) {
                e.innerHTML = `$${(price * count).toString().slice(0, 7)} USD`
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
