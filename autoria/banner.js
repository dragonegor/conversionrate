let title ='Узнать о наличии выбранного автомобиля можно по телефону:',
    or = 'или',
    p1 = 'оставьте свой номер телефона',
    p2 = 'мы перезвоним и дадим информацию по кредитам',
    callMe = 'Позвонить мне',
    wrongNumber = 'Мобильный телефон некорректен. Пример 0931234567',
    info = 'На этот автомобиль повышенный спрос!',
    infoBtn = 'Уточнить о наличии этой комплектации'

if(window.location.pathname.includes('/uk/')) {
    title = 'Уточнити про наявність вибраного автомобіля можна за телефоном:'
    or = 'або'
    p1 = 'залиште свій номер телефону'
    p2 = 'ми зателефонуємо і надамо інформацію про наявність'
    callMe = 'Зателефонувати мені'
    wrongNumber = 'Мобільний телефон некоректний. Приклад 0931234567'
    info = 'На це авто підвищений попит!'
    infoBtn = 'Дізнатися про наявність цієї комплектації'
}

function abjql(e) {
    var a = document.createElement("script");
    a.type = "text/javascript", a.readyState ? a.onreadystatechange = function () {
        "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, e())
    } : a.onload = function () {
        e()
    }, a.src = "//code.jquery.com/jquery-3.3.1.min.js", document.getElementsByTagName("head")[0].appendChild(a)
}

function abjqlr(o) {
    var e = window.language_abtest;
    console.log("%cTest come", "background:red;color:wite;");
    var a, t, d, n, l, r, i, s, _, p;
    window.customer_click = location.href, console.log("customer_click is " + window.customer_click);

    l = window, r = document.documentElement, i = "async-hide", s = "dataLayer", _ = {"GTM-P46SHG8": !0}, r.className += " " + i, _.start = +new Date, _.end = p = function () {
        r.className = r.className.replace(RegExp(" ?" + i), "")
    }, (l[s] = l[s] || []).hide = _, setTimeout(function () {
        p(), _.end = null
    }, 0), _.timeout = 0, window.dataLayer = window.dataLayer || [], dataLayer.push({
        event: "event-to-ga",
        eventCategory: "pdp highly demand banner",
        eventAction: "loaded"
    }), console.log("loaded"), o(document).on("click", ".high-demand-wrap", function () {
        try {
            a = window, t = document, a.hj = a.hj || function () {
                (a.hj.q = a.hj.q || []).push(arguments)
            }, a._hjSettings = {
                hjid: 1953436,
                hjsv: 6
            }, d = t.getElementsByTagName("head")[0], (n = t.createElement("script")).async = 1, n.src = "https://static.hotjar.com/c/hotjar-" + a._hjSettings.hjid + ".js?sv=" + a._hjSettings.hjsv, d.appendChild(n), window.hj = window.hj || function () {
                (hj.q = hj.q || []).push(arguments)
            }, hj("trigger", "pdp_highly_demand_banner")
        } catch (e) {
        }
        window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "Уточнить о наличии"
        }), console.log("Уточнить о наличии")
        document.querySelectorAll("#react_phones_bottom .phones_item:first-child .cro-button")[0].click(), o('html').on('mouseleave', 'body', function () {
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                event: "event-to-ga",
                eventCategory: "PDP highly demand banner",
                eventAction: "leave page",
                eventLabel: "leave"
            })
            console.log('leave');
            o('html').off('mouseleave', 'body');
        });
        var e = o(".image-gallery .image-gallery-slide:first-child .image-gallery-image picture").html();
        void 0 !== window.display_info && clearInterval(window.display_info), window.display_info = setInterval(function () {
            0 == o(".ab_test_modal").length && o("body").find(".react_modal").addClass("ab_test_modal"), o(".ab_test_modal").length && (0 == o(".ab_test_modal .modal_title").length && (o(".ab_test_modal .phones_modal__item").prepend(`<div class="modal_title"><p>${title}</p></div>`), 0 < o(".ab_test_modal .phones_modal__item").length && o(".ab_test_modal .react_modal__body").prepend('<div class="modal_photo-car">' + e + "</div>")),o(".phones_modal__item .mt-10").remove(), 0 == o(".ab_test_modal .modal_form").length && (o(".ab_test_modal .phones_modal__item").append(`<div class="text_devider"><p>${or}</p></div>`), o(".react_modal__item .mt-10").remove(),   o(".ab_test_modal .phones_modal__item").append(`<div class="sub_title"><p>${p1}</p></div>`), o(".ab_test_modal .phones_modal__item").append(`<div class="info_text"><p>${p2}</p></div>`), o(".ab_test_modal .phones_modal__item").append(`<form class="modal_form" id="example-form"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.26705 0.980004C2.43105 0.815985 2.62805 0.688713 2.84499 0.606631C3.06192 0.524549 3.29383 0.489534 3.52533 0.503908C3.75683 0.518282 3.98263 0.581717 4.18774 0.690004C4.39286 0.798292 4.5726 0.948957 4.71505 1.132L6.39605 3.294C6.70505 3.69 6.81405 4.207 6.69205 4.694L6.17905 6.747C6.15237 6.85353 6.15373 6.96515 6.183 7.071C6.21226 7.17685 6.26844 7.27331 6.34605 7.351L8.65005 9.654C8.72774 9.73162 8.82421 9.78779 8.93005 9.81706C9.0359 9.84632 9.14752 9.84768 9.25405 9.821L11.3061 9.308C11.5467 9.24789 11.7979 9.2433 12.0407 9.29458C12.2834 9.34587 12.5113 9.45167 12.7071 9.604L14.8691 11.285C15.6461 11.889 15.7181 13.038 15.0221 13.733L14.0521 14.703C13.3591 15.396 12.3221 15.701 11.3551 15.361C8.88146 14.4903 6.6356 13.074 4.78405 11.217C2.92669 9.36555 1.51 7.11969 0.639051 4.646C0.299051 3.679 0.604051 2.642 1.29705 1.948L2.26705 0.979004V0.980004Z" fill="#9B9B9B"/></svg> <input placeholder="(000) 000 00 00" class="input_number" maxlength="15"><button type="button" class="modal_btn button--green">${callMe}</button></form>`)), o(".ab_test_modal .offline_list").length ? o(".ab_test_modal").addClass("evening_modal") : o(".ab_test_modal").removeClass("evening_modal"))
        })
        o('body').on('click', '.load_phone__item.proven', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'PDP highly demand banner',
                'eventAction': 'click Pop up loan',
                'eventLabel': 'phone number'
            })
        })
    }), o("body").on("click", ".ab_test_modal .react_modal__close", function () {
        o('html').off('mouseleave', 'body');
        o("body").find(".ab_test_modal").hasClass("thankyou") ? (window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up TY",
            eventLabel: "close"
        }), console.log("click on close Thank You")) : (window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up loan",
            eventLabel: "close"
        }), console.log("click on close NOT Thank You"))
    }), o("body").on("click", ".react_modal__close, .react_modal__backdrop", function () {
        o('html').off('mouseleave', 'body');
        void 0 !== window.display_info && clearInterval(window.display_info), window.customer_click = !1, o("body").find(".react_modal").removeClass("ab_test_modal"), o("body").find(".react_modal").addClass("hide_modal"), o(".react_modal .modal_photo-car").remove(), o(".react_modal .modal_title").remove(), o(".react_modal .text_devider").remove(), o(".react_modal .sub_title").remove(), o(".react_modal .info_text").remove(), o(".react_modal .modal_form").remove(), window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click out of popup",
            eventLabel: "close"
        })
    }), o("body").on("click", ".ab_test_modal .react_modal__body .btn-border", function () {
        void 0 !== window.display_info && clearInterval(window.display_info), o("body").find(".ab_test_modal").hasClass("thankyou") ? (o(this).hasClass("btn-border--red") && (window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up TY",
            eventLabel: "Пожаловаться"
        }), console.log("click on button Пожаловаться thank you")), o(this).hasClass("btn-border--green") && (window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up TY",
            eventLabel: "Успешный звонок"
        }), console.log("click on button Успешный звонок thank you"))) : (o(this).hasClass("btn-border--red") && (window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up loan",
            eventLabel: "Пожаловаться"
        }), console.log("click on button Пожаловаться")), o(this).hasClass("btn-border--green") && (window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up loan",
            eventLabel: "Успешный звонок"
        }), console.log("click on button Успешный звонок"))), o("body").find(".react_modal").removeClass("ab_test_modal"), o(".react_modal__body .modal_photo-car").remove(), o(".phones_modal_wrap").removeClass("thx_wrap"), o(".react_modal__body .thx_holder").remove()
    }), o(document).on("keydown keyup input", ".input_number", function (e) {
        var a = e.charCode || e.keyCode || 0;
        return $phone = o(this), 8 !== a && 9 !== a && (0 === $phone.val().length && $phone.val($phone.val() + "("), 4 === $phone.val().length && $phone.val($phone.val() + ")"), 5 === $phone.val().length && $phone.val($phone.val() + " "), 9 === $phone.val().length && $phone.val($phone.val() + " "), 12 === $phone.val().length && $phone.val($phone.val() + " ")), 15 === $phone.val().length && (o(this).closest(".modal_form").removeClass("error"), o(this).closest(".modal_form").find(".error_msg").remove()), 8 != a && 9 != a || $phone.val(""), 8 == a || 9 == a || 46 == a || 48 <= a && a <= 57 || 96 <= a && a <= 105
    }), o(document).on("focus click", ".input_number", function (e) {
        var a;
        window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up loan",
            eventLabel: "number input"
        }), console.log("number input"), $phone = o(this), 0 === $phone.val().length ? $phone.val("(") : (a = $phone.val(), $phone.val("").val(a))
    }), o(document).on("blur", ".input_number", function (e) {
        $phone = o(this), "(" === $phone.val() && $phone.val(""), $phone.val().length < 15 ? (o(this).closest(".modal_form").addClass("error"), o(".error_msg").length < 1 && o(this).closest(".modal_form").append(`<p class="error_msg">${wrongNumber}</p>`)) : (o(this).closest(".modal_form").removeClass("error"), o(this).closest(".modal_form").find(".error_msg").remove())
    }), o(document).on("click", ".modal_btn", function () {
        o('html').off('mouseleave', 'body');
        var e, a;
        $phone = o(".input_number"), $phone.val().length < 15 ? (o(this).closest(".modal_form").addClass("error"), o(".error_msg").length < 1 && o(this).closest(".modal_form").append(`<p class="error_msg">${wrongNumber}</p>`)) : (o(this).closest(".modal_form").removeClass("error"), o(this).closest(".modal_form").find(".error_msg").remove(), console.log($phone.val()), window.customer_click && (
            e = window.customer_click, a = $phone.val(), console.log("send_user_call run"),
                console.log("send_user_call url " + e),
                console.log("send_user_call phone " + a),
                form = new FormData(),
                form.append("phone", a),
                form.append("page", e),
                console.log(form),
                requestOptions = {
                    method: 'POST',
                    body: form,
                    redirect: 'follow'
                },
                fetch('https://devxy.site/api/save', requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log(`error`, error)),
                o.ajax({
                    url: "https://dev.aim-it.com.ua/test-save-json/",
                    type: "POST",
                    data: {url: e, phone: a},
                    dataType: "json"
                }).done(function (e) {
                    console.log(e.is_send), console.log("success")
                })), o("body").find(".react_modal").addClass("thankyou"), o(".react_modal__body .modal_photo-car").remove(), o(".phones_modal__item").addClass("is-disabled"), o(this).closest(".ab_test_modal").find(".phones_modal_wrap").addClass("thx_wrap").prepend('<div class="thx_holder"><div class="modal_title"><p>Спасибо за вашу заявку!</p></div><div class="info_text"><p>Мы с вами свяжемся в ближайшее время</p></div></div>')), window.dataLayer = window.dataLayer || [], dataLayer.push({
            event: "event-to-ga",
            eventCategory: "PDP highly demand banner",
            eventAction: "click Pop up loan",
            eventLabel: "Позвонить мне"
        }), console.log("Позвонить мне")
    }), o("body").find(".vin_checked").after(`<div class="high-demand-wrap"><div class="title-holder"> <svg width="32" height="59" viewBox="0 0 32 59" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M20.2199 23.7326C20.5182 25.6354 20.8015 27.4791 21.0848 29.3229C21.2637 30.4439 21.4874 31.5501 21.6067 32.6711C21.6663 33.2316 21.9049 33.3496 22.4119 33.3349C23.7241 33.3054 25.0513 33.3201 26.3635 33.3201C28.7195 33.3349 30.0168 35.5031 28.9431 37.5534C28.8388 37.7599 28.8537 38.1139 28.9581 38.3204C29.4501 39.2791 29.4352 40.1936 28.973 41.1524C28.8686 41.3589 28.794 41.6834 28.8835 41.8751C29.5247 43.3059 29.5247 43.7631 28.8239 45.0316C29.0177 45.8281 29.3159 46.4771 29.3159 47.1261C29.3159 48.6306 28.0783 49.7664 26.5126 49.8106C25.8266 49.8254 25.1407 49.8106 24.3057 49.8106C24.6486 51.2414 24.7679 52.5836 23.6794 53.5719C23.1575 54.0439 22.4268 54.4126 21.7409 54.5454C21.1295 54.6634 20.384 54.5011 19.8173 54.2356C19.2805 53.9701 18.7735 53.4539 18.4753 52.9229C18.1622 52.3771 18.1025 51.6839 17.8639 51.0644C17.7595 51.6249 17.4017 52.1411 17.9534 52.7311C18.2069 52.9966 18.356 53.4096 18.4156 53.7931C18.5797 54.8109 18.699 55.8434 18.7884 56.8611C18.8928 58.1444 18.1174 58.9851 16.8052 58.9851C11.8546 58.9999 6.91891 58.9999 1.96831 58.9851C0.6561 58.9851 -0.119296 58.1444 -0.0149158 56.8611C0.074553 55.8139 0.178933 54.7519 0.357871 53.7194C0.417517 53.3506 0.596454 52.9229 0.86486 52.6869C1.34203 52.3034 1.44641 51.8166 1.53588 51.2856C1.92357 49.1321 2.34109 46.9786 2.72879 44.8399C2.80335 44.4564 2.80335 44.0581 2.84808 43.6746C2.92264 43.0699 3.19105 42.6569 3.87698 42.6421C4.47343 42.6421 4.87604 43.0256 4.80149 43.7189C4.66728 44.9874 4.45852 46.2411 4.24976 47.5096C3.99627 48.9994 3.69804 50.4891 3.41472 52.0379C7.51537 52.0379 11.5266 52.0379 15.6421 52.0379C15.7167 51.4626 15.7912 50.8874 15.836 50.3121C15.8956 49.6189 16.2684 49.2059 16.9394 49.1174C20.0559 48.6896 23.1873 48.2766 26.3038 47.8784C26.8257 47.8194 27.2581 47.7161 27.3178 47.1261C27.3774 46.5214 27.0047 46.2411 26.4231 46.1674C25.8565 46.0936 25.5135 45.7544 25.5284 45.1791C25.5284 44.6334 25.8565 44.3236 26.4082 44.2646C26.945 44.2056 27.3178 43.9549 27.3178 43.3944C27.3178 42.8339 26.945 42.6126 26.4082 42.5389C25.9012 42.4651 25.5284 42.1701 25.5284 41.6096C25.5135 41.0049 25.9012 40.6951 26.438 40.6214C26.9897 40.5476 27.3327 40.3116 27.3327 39.7511C27.3327 39.1611 26.9301 38.9841 26.4082 38.9104C25.8863 38.8366 25.5433 38.5121 25.5433 37.9664C25.5284 37.4206 25.8565 37.1109 26.3784 36.9929C26.9152 36.8749 27.4371 36.7421 27.3327 36.0194C27.2283 35.2966 26.6468 35.2819 26.0801 35.2819C22.6803 35.2819 19.2656 35.2819 15.8658 35.2819C14.822 35.2819 14.1808 34.8689 13.8826 34.0429C13.6291 33.3496 13.808 32.7301 14.3597 32.5236C15.0158 32.2876 15.4632 32.5384 15.7167 33.1726C15.7465 33.2316 15.8211 33.2611 16.0596 33.2906C15.9105 31.8156 15.7465 30.3259 15.5825 28.7181C14.5536 28.7919 13.5545 28.7624 12.6002 28.9541C11.4669 29.1754 10.3635 29.5736 9.2451 29.9424C8.9767 30.0309 8.73811 30.2521 8.54426 30.4734C6.904 32.2581 5.83038 34.3379 5.36812 36.7126C5.3383 36.8306 5.32339 36.9486 5.29356 37.0666C5.12954 37.8336 4.71202 38.1729 4.08574 38.0549C3.48928 37.9369 3.22087 37.4354 3.35507 36.6684C3.86206 33.8069 5.05498 31.2699 7.08294 29.1754C7.61975 28.6149 8.38024 28.1871 9.1109 27.8921C10.9152 27.1841 12.8089 26.7711 14.7773 26.7859C14.9413 26.7859 15.1053 26.7416 15.3439 26.6974C15.2544 25.9156 15.1799 25.1781 15.0755 24.3521C13.4501 24.5586 11.9143 24.7651 10.3635 24.9569C9.1109 25.1191 7.85834 25.2961 6.59086 25.4584C4.26467 25.7386 2.66915 24.5586 2.35601 22.2576C1.71481 17.6261 1.08853 13.0094 0.492074 8.37787C0.193845 6.12112 1.41658 4.54287 3.69804 4.21837C6.88909 3.76112 10.0951 3.36287 13.301 2.93512C13.465 2.90562 13.6291 2.87612 13.8527 2.81712C13.7931 2.22712 13.7334 1.68137 13.6738 1.12087C13.6142 0.516118 13.8826 0.117868 14.4939 -0.0148818C15.0457 -0.132882 15.5228 0.250618 15.6421 0.884868C15.7316 1.41587 15.7763 1.94687 15.8658 2.58112C17.1034 2.41887 18.3113 2.27137 19.5042 2.12387C21.6663 1.84362 23.8285 1.53387 26.0056 1.28312C28.1827 1.03237 29.7782 2.22712 30.0764 4.35112C30.7325 9.07112 31.3737 13.8059 31.9702 18.5259C32.2386 20.6646 30.9115 22.2576 28.7642 22.5379C26.11 22.8771 23.4408 23.2311 20.7866 23.5851C20.6225 23.6294 20.4883 23.6736 20.2199 23.7326ZM19.698 33.2906C19.6831 33.0841 19.6831 32.9661 19.6533 32.8334C19.1463 29.6474 18.6393 26.4761 18.1323 23.2901C17.9832 22.3461 18.2665 21.9479 19.2209 21.8299C22.2777 21.4316 25.3346 21.0334 28.3765 20.6351C29.6142 20.4729 30.1361 19.8386 29.9869 18.6291C29.3756 14.0271 28.7642 9.42512 28.123 4.82312C27.9441 3.53987 27.3178 3.08262 26.0205 3.25962C18.6841 4.21837 11.3476 5.19187 4.01118 6.15062C2.83317 6.29812 2.29636 6.97662 2.46039 8.12712C3.08667 12.7734 3.71295 17.4344 4.35414 22.0806C4.50326 23.1279 5.23392 23.6736 6.27772 23.5409C9.34948 23.1279 12.4362 22.7296 15.5079 22.3166C16.4921 22.1839 16.8947 22.4789 17.014 23.4524C17.178 24.9421 17.3271 26.4319 17.4911 27.9216C17.685 29.6916 17.8937 31.4764 18.1025 33.2759C18.6542 33.2906 19.1314 33.2906 19.698 33.2906ZM16.8201 57.0086C16.7307 56.1826 16.6263 55.4009 16.5666 54.6339C16.5368 54.1619 16.3579 54.0144 15.8658 54.0144C14.4492 54.0439 13.0326 54.0291 11.616 54.0291C8.73811 54.0291 5.8602 54.0291 2.98229 54.0439C2.7437 54.0439 2.32618 54.1619 2.31127 54.2799C2.14725 55.1796 2.07269 56.0941 1.96831 57.0086C6.99347 57.0086 11.8695 57.0086 16.8201 57.0086ZM22.3821 50.2384C21.9348 50.3121 21.562 50.3564 21.2041 50.4154C20.8164 50.4744 20.4436 50.5481 20.041 50.6219C20.0559 51.4036 19.9814 52.2001 20.8015 52.5099C21.1892 52.6574 21.8304 52.5689 22.1584 52.3329C22.904 51.8166 22.5312 51.0349 22.3821 50.2384Z" fill="#9B9B9B"/><path d="M19.1314 11.8887C19.1314 12.9212 19.1314 13.9537 19.1314 14.9862C19.1165 16.4022 18.2069 17.4937 16.8947 17.6854C15.4781 17.8919 14.2404 17.0954 13.8677 15.6794C13.3308 13.6587 12.8239 11.6379 12.3318 9.61715C11.9292 7.9209 12.8984 6.51965 14.6431 6.25415C15.1351 6.1804 15.6272 6.10665 16.1193 6.07715C17.685 5.9739 18.9226 7.05065 18.9972 8.5994C19.0419 9.70565 19.0121 10.8119 19.0121 11.9034C19.0419 11.8887 19.0867 11.8887 19.1314 11.8887ZM17.1631 11.9182C17.1184 11.9182 17.0885 11.9182 17.0438 11.9182C17.0438 11.1807 17.0587 10.4432 17.0438 9.70565C17.014 7.9209 16.9692 7.87665 15.165 8.14215C14.2703 8.2749 14.0913 8.52565 14.3001 9.3664C14.7623 11.2249 15.2246 13.0834 15.6869 14.9419C15.8062 15.3992 15.9702 15.8417 16.5517 15.7384C17.1184 15.6499 17.1631 15.1927 17.1631 14.7059C17.1482 13.7767 17.1631 12.8474 17.1631 11.9182Z" fill="#9B9B9B"/><path d="M16.6859 20.7087C16.0596 20.7234 15.657 20.4432 15.5825 19.8384C15.5079 19.2337 15.8658 18.8649 16.4623 18.7617C16.8201 18.6879 17.1929 18.6289 17.5657 18.6289C18.1025 18.6289 18.4753 18.9092 18.5499 19.4402C18.6244 19.9712 18.4007 20.3694 17.8639 20.5022C17.4762 20.6054 17.0885 20.6349 16.6859 20.7087Z" fill="#9B9B9B"/></g><defs><clipPath id="clip0"><rect width="32" height="59" fill="white"/></clipPath></defs></svg>\t<p class="high-demand-text">${info}</p></div><a href="#" class="high-demand-link">${infoBtn}</a></div>`), o("body").append(`<style>.high-demand-wrap{background:#db5c4c14;border-radius:3px;color:#414042;padding:20px 17px;margin:0 0 22px;display:flex;align-items:center}.high-demand-wrap .title-holder{display:flex}.high-demand-wrap .high-demand-text{font-size:22px;font-weight:700;margin:4px 0 7px 11px;max-width:250px;line-height:1.2}.high-demand-wrap .high-demand-link{color:#db5c4c;font-size:13px;font-weight:700;padding:8px 15px;border:1px solid #db5c4c;border-radius:5px;display:block;text-align:center}.ab_test_modal{background:rgba(65,64,66,.5)}.ab_test_modal .react_modal__container{border:0;margin:0 auto;top:25%;background:transparent;box-shadow:none;width:calc(100% - 28px)!important;max-width:880px!important}.ab_test_modal .react_modal__header{font-size:0;z-index:9}.ab_test_modal .react_modal__close{right:5px;left:auto;font-size:28px;padding:10px 0;color:#a0a0a0;text-shadow:none}.ab_test_modal .react_modal__close:before{display:none}.ab_test_modal .react_modal__body{background-color:#fff;padding:0 30px 30px;display:flex; flex-wrap:wrap;}.ab_test_modal .modal_photo-car{width:50%; min-width: 335px}.ab_test_modal .modal_photo-car img{width:100%}.ab_test_modal .phones_modal_wrap{padding:0 0 0 25px;width:50%; min-width: 335px}.ab_test_modal .phones_modal__item{text-align:center}.ab_test_modal .be_carefull{display:none}.ab_test_modal .modal_title{color:#414042;font-weight:700;padding:0 0 15px;line-height:1.2;font-size:20px;margin-left:-10px;margin-right:-10px}.ab_test_modal .modal_title p{margin:0}.ab_test_modal .text_devider{color:#414042;font-size:16px;position:relative;padding:15px 0}.ab_test_modal .text_devider:after,.ab_test_modal .text_devider:before{content:"";background-color:#9b9b9b;height:1px;width:40px;position:absolute;top:25px}.ab_test_modal .text_devider:before{left:calc(50% - 73px)}.ab_test_modal .text_devider:after{right:calc(50% - 73px)}.ab_test_modal .text_devider p{margin:0}.ab_test_modal .sub_title{color:#414042;font-size:18px;font-weight:700}.ab_test_modal .sub_title p{margin:0}.ab_test_modal .info_text{color:#9b9b9b;font-size:16px;padding:4px 0 10px;line-height:1.2;margin-left:-10px;margin-right:-10px}.ab_test_modal .info_text p{margin:0}.ab_test_modal .modal_form{border-bottom:1px solid #9b9b9b;position:relative;display:flex;flex-wrap:wrap;padding:0 0 20px;margin:0 0 15px}.ab_test_modal .modal_form.error .input_number{border:1px solid #db5c4c;border-right:0;color:#db5c4c}@media (max-width:359px){.ab_test_modal .modal_form.error .input_number{border-right:1px solid #db5c4c}}.ab_test_modal .modal_form.error .input_number::-webkit-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-moz-placeholder,.ab_test_modal .modal_form.error .input_number::-moz-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .input_number:-ms-input-placeholder{color:#db5c4c}.ab_test_modal .modal_form.error .modal_btn{pointer-events:none}.ab_test_modal .modal_form.error svg path{fill:#db5c4c}.ab_test_modal .modal_form svg{position:absolute;top:11px;left:12px}.ab_test_modal .modal_form .error_msg{color:#db5c4c;font-size:12px;text-align:left;margin:5px 0 0}.ab_test_modal .input_number{border-radius:5px 0 0 5px;border:1px solid #9b9b9b;border-right:0;color:#777;font-size:13px;width:calc(100% - 144px);padding:0 15px 0 38px;outline:none}.ab_test_modal .input_number::-webkit-input-placeholder{color:#777}.ab_test_modal .input_number:-moz-placeholder,.ab_test_modal .input_number::-moz-placeholder{color:#777}.ab_test_modal .input_number:-ms-input-placeholder{color:#777}@media (max-width:359px){.ab_test_modal .input_number{border-radius:5px;border-right:1px solid #9b9b9b;padding:10px 15px 10px 38px;width:100%}}.ab_test_modal .modal_btn{color:#fff;border-radius:0 5px 5px 0;border:0;padding:12px;font-size:13px;font-weight:700;width:144px;outline:none}@media (max-width:359px){.ab_test_modal .modal_btn{border-radius:5px;margin:10px 0 0;width:100%}}.ab_test_modal .show-phone .btn-border{margin:0;font-size:13px;padding:8px 10px;width:100%}.ab_test_modal .show-phone .btn-border+.btn-border{margin:10px 0 0}@media (min-width:360px){.ab_test_modal .show-phone .btn-border+.btn-border{margin:0 0 0 10px}}@media (min-width:360px){.ab_test_modal .show-phone .btn-border{width:calc(50% - 5px)}}.thx_wrap{padding:0 0 17px}.thx_holder{text-align:center}.thx_holder .modal_title{padding:0;font-size:20px}.thx_holder .info_text{padding:4px 0 28px}.is-disabled{display:none}.pdp_modal_backdrop{background:rgba(65,64,66,.5);position:fixed;top:0;bottom:0;left:0;right:0;overflow:auto}.async-hide{opacity:0!important}.thankyou .react_modal__container{max-width:418px!important}.thankyou .react_modal__body{padding:30px 30px 38px}.thankyou .phones_modal_wrap{padding:0;width:100%}.hide_modal,.thankyou .modal_photo-car{display:none}.ab_test_modal.evening_modal .react_modal__container{max-width:350px!important;margin:auto}.ab_test_modal.evening_modal .react_modal__header{font-size:18px;line-height:26px;padding:8px 35px 0 15px!important}.ab_test_modal.evening_modal .react_modal__body{padding:15px} .mt-20{display:flex; justify-content: space-between;}
.text_devider, .sub_title, .info_text, .modal_form {
display: none !important;
}

.phones_modal__item {
height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.phones_modal_wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.phones_modal_wrap .text-c .mb-10 {
    margin: 0 10px 0 0;
    display:flex;
    align-items: center;
}
@media (max-width: 769px) {
.react_modal.calls_modal .react_modal__container {
    -webkit-justify-content: center;
    justify-content: center;
    top:0;
}

.ab_test_modal .phones_modal_wrap {
    width: 100%;
}

.ab_test_modal .modal_photo-car {
    width: 100%;
}

}


</style>`)
}

window.language_abtest = {
    credit_text: "Уточнить о наличии этой комплектации",
    credit_class: ""
}, window.jQuery ? jQuery(function (e) {
    abjqlr(e)
}) : abjql(function () {
    jQuery(function (e) {
        abjqlr(e)
    })
});
