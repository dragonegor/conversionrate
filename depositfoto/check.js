document.head.insertAdjacentHTML('beforeend', `
  <style>
#root>.wrapper {
opacity: 0;
}
  </style>
`)
document.addEventListener('DOMContentLoaded', function () {
    Backbone.$('head').append(`<style>
@media screen and (min-width: 1041px) {
body .order-info_custom {margin-bottom: 20px;}
.order-info__price-table .order-info__price-row {display: none;}
.order-info__price-table .order-info__price-row:last-child {display: block; text-align: left; margin-top: 10px;}
body .order-info_custom .order-info__sep-box {display: none;}
body .order-info_custom .order-info__tax-label {display: none;}

body .order-info_custom .order-info__details {position: relative;}
.order-info_custom .order-info__details .order-info__items {width: 50%; margin-right: 10%;}
body .order-info_custom .order-info__price-row:last-child .order-info__price-cell {padding-top: 0;  font-size: 16px !important; line-height: 22px; }
body .order-info_custom .order-info__price-row:last-child .order-info__price-cell:last-child {padding-top: 0;  font-size: 16px !important; line-height: 22px; }
body .order-info_custom .order-info__price-full {font-size: 16px;}
.order-info__item_flexible:last-child {width: 70%;}
.order-info_custom .order-info__item_flexible .order-info__item-text {line-height: 18px; position: relative; top: -2px;}
body .order-info__item {margin-bottom: 12px;}
.order-info__item_re-bill .checkbox-box .icon-checkbox, .order-info__item_flexible .checkbox-box .icon-checkbox {width: 16px; height: 16px;}
.promocode_custom .promocode__form { width: 170px !important;}

body .order-info {position: static;}
.billing-page__cell:first-child {padding-bottom: 160px;}
.billing-page__wrap {position: relative;}
body .billing-process__label_desktop {display: block; width: 80%; margin-left: auto; margin-right: auto;}
.promocode_compact .promocode__link {color: #4792DE; font-weight: bold; font-size: 12px;}


.checkout-trust-blocks {padding-top: 5px;}
.checkout-trust-blocks > div, .checkout-trust-blocks > a {width: 400px; height: 110px; display: block; margin: 20px auto 25px;}
.checkout-trust-blocks .checkout-trust-blocks-1 {background: url(https://rakot.github.io/conversionrate.store/optimize.google.com/depositphotos.com/04.СheckoutTrustBlocks/img1.svg) center no-repeat;}
.checkout-trust-blocks .checkout-trust-blocks-2 {background: url(https://rakot.github.io/conversionrate.store/optimize.google.com/depositphotos.com/04.СheckoutTrustBlocks/img2.svg) center no-repeat;}
.checkout-trust-blocks .checkout-trust-blocks-3 {background: url(https://rakot.github.io/conversionrate.store/optimize.google.com/depositphotos.com/04.СheckoutTrustBlocks/img3.png) center no-repeat; margin-bottom: 0;}
}
@media screen and (max-width:1041px){.checkout-trust-blocks{display:none}}@media screen and (min-width:1041px){.billing-page{max-width:1200px!important}.order-info__price-cell:last-child{display:none!important}.order-info__sep-box{display:none!important}.order-info__items{display:table-cell!important}.billing-page__wrap{width:73%!important;float:left!important;padding:0!important}.checkout-trust-blocks .checkout-trust-blocks-3{background:url(https://i.ibb.co/kMqK8LS/depositphotos3.png) center no-repeat;background-size:cover;display:block}.checkout-trust-blocks .checkout-trust-blocks-2{background:url(https://i.ibb.co/L1Mqkb3/depositphotos2.png) center no-repeat;background-size:cover}.checkout-trust-blocks .checkout-trust-blocks-1{background:url(https://i.ibb.co/HDs2HFY/depositphotos1.png) center no-repeat;background-size:cover}.checkout-trust-blocks{width:25%!important;float:left!important;margin-left:20px!important;margin-top:20px!important;display:block}.billing-page__contact{width:100%!important;float:left!important;margin-top:80px!important;margin-bottom:-75px!important}.checkout-trust-blocks>a,.checkout-trust-blocks>div{width:278px;height:78px;margin:20px auto 36px}.billing-page__cell:first-child{width:60%!important;padding:50px 25px 40px 35px!important}.billing-page__cell:last-child{width:40%!important;border-left:1px solid #eaeff4!important;padding:40px 25px 40px 35px!important}.order-info_custom{padding:0!important;border-top:none!important;background:rgb(255 255 255)!important}.content_billing:before{height:0%!important}.order-info__title{font-size:24px!important}.order-info_custom .order-info__item_name{font-size:18px!important}.order-info__item{margin:20px 0!important}.order-info_custom .order-info__price-row:first-child:last-child .order-info__price-cell{padding-top:10px!important;font-size:18px!important}.order-info__item .order-info__item_re-bill{margin-top:30px!important}.icon-checkbox-s{width:16px!important;height:16px!important}.checkbox-box .checkbox-text{font-size:14px!important;margin-top:2px!important}.icon-help{margin-top:2px!important}}
</style>`);
    let mut = new MutationObserver((mutations) => {
        mut.disconnect()
        rebuild()
    })

    try {
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () {
                (h.hj.q = h.hj.q || []).push(arguments)
            };
            h._hjSettings = {hjid: 410340, hjsv: 6};
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script');
            r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        window.hj = window.hj || function () {
            (hj.q = hj.q || []).push(arguments)
        };
        hj('trigger', 'Experiment__Checkout_trust_blocks');
    } catch (e) {
    }
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Experiment - Checkout: trust blocks',
        'eventAction': 'loaded',
        'eventLabel': ' ',
        'eventValue': ' '
    });
    console.log('worked')

    function rebuild () {
        Backbone.$(function () {
            var $ = Backbone.$;
            var startHotjar = true;
            if ($('.icon-payment-googlepay').length) {
                $('.billing-page label.merchant-manager__field:not(.event-listener-already-here)').addClass('event-listener-already-here').click(function () {
                    let self = $(this);
                    if (self.data('id')) {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on text field',
                            'eventLabel': 'Name of field: ' + self.data('id'),
                            'eventValue': ' '
                        });
                    }
                });
                $('.pay-method__icon_applepay:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Experiment - Checkout: trust blocks',
                        'eventAction': 'click on payment service',
                        'eventLabel': 'Apple Pay',
                        'eventValue': ' '
                    });
                });
                $('.pay-method__icon_googlepay:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
                    console.log('gpay');
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Experiment - Checkout: trust blocks',
                        'eventAction': 'click on payment service',
                        'eventLabel': 'Google Pay',
                        'eventValue': ' '
                    });
                });
                $('.pay-method__icon_paypal:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Experiment - Checkout: trust blocks',
                        'eventAction': 'click on payment service',
                        'eventLabel': 'PayPal',
                        'eventValue': ' '
                    });
                });
                $('.pay-method__icon_segpay:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Experiment - Checkout: trust blocks',
                        'eventAction': 'click on payment service',
                        'eventLabel': 'SegPay',
                        'eventValue': ' '
                    });
                });
                $('.pay-method__icon_paymentwall:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Experiment - Checkout: trust blocks',
                        'eventAction': 'click on payment service',
                        'eventLabel': 'PaymentWall',
                        'eventValue': ' '
                    });
                });
                function returnBlock() {
                    var width = document.documentElement.clientWidth;
                    var totalText = $('.order-info__price-table .order-info__price-row:last-child .order-info__price-cell:first-child').text().split(':')[0] + ':'
                    if (width >= 1041) {
                        if ($('.billing-form__address').length == 0) {
                            $('.order-info__price-table .order-info__price-row:last-child .order-info__price-cell:first-child').text(totalText + ' ' + $('.order-info__price-full').text())
                        }

                        // $('.order-info__price-table .order-info__price-row:last-child .billing-page__cell:first-child').append($('._process'));
                        $('.order-info__price-table .order-info__price-row:last-child .billing-page__cell:first-child').append($('.billing-settings.billing-settings_custom'));
                    } else {
                        if ($('.billing-form__address').length == 0) {
                            $('.order-info__price-table .order-info__price-row:last-child .order-info__price-cell:first-child').text(totalText)
                        }

                        // $('.billing-page__container').append($('.billing-settings.billing-settings_custom'));
                        $('.order-info__price-table .order-info__price-row:last-child .order-info.order-info_custom').append($('._process'))
                    }
                }
                $('.billing-page__cell:first-child').append($('._process'));

                $('._process').css('margin-top', '25px');

                returnBlock()
                if ($('.checkout-trust-blocks').length === 0) {
                    $('._process').css('margin-top', '25px');

                    window.addEventListener("resize", returnBlock);
                    let trust_blocks = '<div class="checkout-trust-blocks">' +
                        '<div class="checkout-trust-blocks-1"></div>' +
                        '<div class="checkout-trust-blocks-2"></div>' +
                        '<a href="https://www.trustpilot.com/review/www.depositphotos.com" target="_blank" class="checkout-trust-blocks-3"></a>' +
                        '</div>';

                    if ($('.billing-form__address').length != 0) {
                        $('.billing-page__cell:last-child').append(trust_blocks);
                    } else {
                        $('.billing-page__wrap').after(trust_blocks)
                        $('.header__top-left').addClass('header__top-right').removeClass('header__top-left');
                        $('.header__line-middle').addClass('header__line-top').removeClass('header__line-middle').css('width', '20%');
                    }
                    $('.checkout-trust-blocks-3').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'gaEv',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on link Trustpilot',
                            'eventLabel': ' ',
                            'eventValue': ' '
                        });
                    });

                    $('.pay-methods-select__types .pay-type:first').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on payment method',
                            'eventLabel': 'Credit card',
                            'eventValue': ' '
                        });
                    });

                    $('.pay-methods-select__types .pay-type:first').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on payment method',
                            'eventLabel': 'Other Payment Methods',
                            'eventValue': ' '
                        });
                    });

                    $('._process .billing-process .billing-process__btn').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on button Process Order',
                            'eventLabel': ' ',
                            'eventValue': ' '
                        });
                    });

                    $('.promocode__link').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on link Apply Promo Code',
                            'eventLabel': ' ',
                            'eventValue': ' '
                        });
                    });

                    $('.footer__link.cmp-contact-us').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Experiment - Checkout: trust blocks',
                            'eventAction': 'click on link Contact Us',
                            'eventLabel': 'To pay by check or bank transfer, please Contact Us',
                            'eventValue': ' '
                        });
                    });
                }
            }
        });
        mut.observe(document.body, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            characterDataOldValue: true
        })
        setTimeout(function () {
            document.querySelector('#root>.wrapper').style.opacity = 1
        }, 400);
    }

    rebuild()
})






