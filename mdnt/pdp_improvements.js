let scriptJQ = document.createElement('script');
scriptJQ.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
scriptJQ.async = false;
document.head.appendChild(scriptJQ);

let style = `
    <style>
        .product-single__meta h1+a {
          display:flex;
          align-items: center;
          justify-content:space-between;
        }
        
        .product__policies {
          display: none;
        }
        
        h1.h2.product-single__title {
          display:flex;
          justify-content:space-between;
          align-items: center;
          text-align: left;
        }
        
        h1.h2.product-single__title img {
          margin-left: 10%;
          height: 37px;
        }
        
        .add-to-cart {
          background-color: #000000;
          color: white;
          font-weight: 700;
        }
        
        .blaster-select--Size {
          display:flex;
          align-items: center;
          justify-content:space-between;
        }
        
        .blaster-select--Size .variant-input-wrap, .blaster-select--Size .variant__label {
          margin-bottom: 0;
          margin-right: 10px;
        }
        
        .blaster-select--Size {
          margin-bottom: 10px;
        }
        
        .product__quantity, .swym-dummy {
          display: none;
        }
        
        .show_size_chart {
          margin-left: auto;
          text-decoration:underline;
        }
        
        .size_chart_popup {
          padding: 80px 10px;
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          overflow-y: scroll;
          z-index: 99;
        }
        
        .size_chart_popup>* {
            background-color: #fff;
        }
        
        .size_chart_popup.active {
          display: block;
        }
        
        .size_chart_popup .head {
          display:flex;
          align-items: center;
          justify-content:center;
          position:relative;
          padding: 10px 0;
          text-transform: uppercase; 
        }
        
        .size_chart_popup .head .close {
          height: 18px;
          position:absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .tags_block {
          display: flex;
          flex-wrap: wrap;
          padding: 0 15px;
        }
        
        .tags_block a {
          display: block;
          margin-right: 10px;
          border: 1px solid black;
          padding: 5px 10px;
          margin-bottom: 10px;
        }
        
        .picky-widget {
            background: rgba(0, 0, 0, 0.05) !important;
            padding-top: 15px !important;
        }
        
        .collapsible-trigger-btn--borders, .collapsible-trigger-btn--borders+.collapsible-content .collapsible-content__inner {
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .info_block {
          display:flex;
          align-items: center;
          justify-content: space-between;
          margin: 15px 0;
        }
        
        .info_block li {
          list-style: none;
          width: 30%;
          font-size: 12px;
          display:flex;
          flex-direction:column;
          align-items: center;
          justify-content:center;
        }
        
        .info_block li img {
          height: 40px;
        }
        
        .product__main-photos {
           margin-left: -60px;
        }
        
        .back-btn {
          display:flex;
          align-items: center;
          padding: 15px 0;
        }
        
        .back-btn img {
          height: 12px;
          margin-right: 10px;
        }
 
    </style>
`

let hr = window.location.href
let prodName = ''
if (document.querySelector('.btn--small.return-link')) {
    prodName = document.querySelector('.btn--small.return-link').innerText
}



let backBtn = `
    <div class="back-btn">
      <img src="https://i.ibb.co/Nrp8syw/Vector-4.png" alt="back">
      ${prodName}
    </div>
`

let size = `
    <div class="size_chart_popup">
      <div class="head">
        size chart
        <img class="close" src="https://i.ibb.co/x6HW08Q/Group-435.png" alt="close">
      </div>
    </div>
`

let tagBlock = `
  <div class="tags_block">
    <a href="https://mdnt45.com/collections/women">All women wear</a>
    <a href="https://mdnt45.com/collections/t-shirts-1">T-Shirts</a>
    <a href="https://mdnt45.com/collections/longsleeves">Longsleeves</a>
    <a href="https://mdnt45.com/collections/sweatshirts">Sweatshirts</a>
    <a href="https://mdnt45.com/collections/dresses">Dresses</a>
    <a href="https://mdnt45.com/collections/pants-womens">Pants</a>
    <a href="https://mdnt45.com/collections/skirts">Skirts</a>
    <a href="https://mdnt45.com/collections/jumpsuits">Jumpsuits</a>
    <a href="https://mdnt45.com/collections/cardigans">Cardigans</a>
    <a href="https://mdnt45.com/collections/jackets">Jackets</a>
    <a href="https://mdnt45.com/collections/raincoats">Coats</a>
    <a href="https://mdnt45.com/collections/new-line-homewear-for-her">Homewear</a>
  </div>
`

if((hr.includes('/men-') || hr.includes('/mens-') || hr.includes('bestsellers-1') || hr.includes('bestsellers-1') || hr.includes('for-him')) && !hr.includes('women')){
    tagBlock =`
        <div class="tags_block">
            <a href="https://mdnt45.com/collections/men-main-collection">All men wear</a>     
            <a href="https://mdnt45.com/collections/mens-t-shirts">T-Shirts</a>   
            <a href="https://mdnt45.com/collections/mens-coats">Coats</a>  
            <a href="https://mdnt45.com/collections/mens-cardigans">Cardigans</a>  
            <a href="https://mdnt45.com/collections/pants">Pants</a>  
            <a href="https://mdnt45.com/collections/mens-shorts">Shorts</a>  
            <a href="https://mdnt45.com/collections/mens-hoodies">Hoodies</a>  
            <a href="https://mdnt45.com/collections/mens-jumpsuits">Jumpsuits</a>  
            <a href="https://mdnt45.com/collections/uncasual-homewear-for-him">Homewear</a>  
            <a href="https://mdnt45.com/collections/mens-raincoats">Raincoats</a>  
            <a href="https://mdnt45.com/collections/mens-longsleeves">Longsleeves</a> 
          </div>
    `
}


let info = `
    <ul class="info_block">
      <li>
        <img src="https://i.ibb.co/dKpWj4d/30day.png" alt="30day">
        30-day money back guarantee
      </li>
      <li>
        <img src="https://i.ibb.co/8sXQfWz/delivery.png" alt="delivery">
        Free worldwide shipping on orders over $399
      </li>
      <li>
        <img src="https://i.ibb.co/LxgYWLf/handmade.png" alt="handmade">
        The Real Handmade
      </li>
    </ul>
`

document.body.insertAdjacentHTML('afterbegin', style)
document.body.insertAdjacentHTML('beforeend', size)
window.onload = function () {

    if (prodName !== '') {
        $('.product__photos').eq(0).closest('div').before(backBtn)
        $('.back-btn').click(function () {
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                event: "event-to-ga",
                eventCategory: "PDP improvement",
                eventAction: "Back to categories",
            })
            document.querySelector('.btn--small.return-link').click()
        })
    }

    let price = $('.product__price').eq(0)
    $('.loox-rating').before(price)

    $('h1.h2.product-single__title').append(`<img src="https://i.ibb.co/BPqs99F/image-18.png" alt="heart">`)
    $('h1.h2.product-single__title img').click(function () {
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP improvement",
            eventAction: "Add to wishlist",
        })
        $('.payment-buttons .swym-button').click()
    })

    $('.payment-buttons').before(info)

    document.querySelectorAll('.collapsible-trigger-btn')[0].childNodes[0].textContent = 'Product details'
    
    

    $('.blaster-select--Size').append(`<div class="show_size_chart">Size Guige</div>`)
    setTimeout(function () {
        let howSize = $('.collapsible-content__inner.rte').eq(0).find('.ks-chart-container')
        let sizeChart1 = $('.collapsible-content__inner.rte').eq(0).find('.container-size-chart').eq(0)
        let sizeChart2 = $('.collapsible-content__inner.rte').eq(0).find('.container-size-chart').eq(1)

        $('.size_chart_popup').append(howSize)
        $('.size_chart_popup').append(sizeChart1)
        $('.size_chart_popup').append(sizeChart2)
        
        $('.picky-widget').after($('#looxReviews'))
        $('#looxReviews').before(tagBlock)
        $('.picky-widget img').parents('div').eq(1).next().after($('.picky-widget img').parents('div').eq(1))
    }, 7000)



    $('.collapsibles-wrapper .collapsible-content .collapsible-content__inner.rte').prepend($('.product-single__description').eq(0))

    $('.show_size_chart').click(function () {
        $('.size_chart_popup').addClass('active')
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP improvement",
            eventAction: "Click on Size guide",
        })
    })

    $('.size_chart_popup .head .close').click(function () {
        $('.size_chart_popup').removeClass('active')
    })

    $('.tags_block a').click(function () {
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP improvement",
            eventAction: "Click on tags",
        })
    })



    $('.collapsible-trigger-btn--borders:not(.is-open)').click(function () {
        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP improvement",
            eventAction: "Click on tab",
            eventLabel: "Open tab"
        })

        $('.collapsible-trigger-btn--borders.is-open').click(function () {
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                event: "event-to-ga",
                eventCategory: "PDP improvement",
                eventAction: "Click on tab",
                eventLabel: "Collapse tab"
            })
        })
    })

};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1382816,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'pdp_improvement');

window.dataLayer = window.dataLayer || []
dataLayer.push({
    event: "event-to-ga",
    eventCategory: "PDP improvement",
    eventAction: "loaded",
})
