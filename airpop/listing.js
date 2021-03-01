let styleListing = `
    <style>
    /**, *::before, *::after {*/
    /* 
    /*}*/
    
    .new_listing *, .custom_select, .custom_select * {
      font-family: "Cabin", sans-serif;
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }
    
    ul li {
      list-style: none;
    }
    
    .flx {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .new_listing h2 {
      font-size: 24px;
      text-align: center;
      margin-top: 40px;
      font-weight: 400;
    }
    
    .category_tabs {
      padding: 10px;
      position: sticky;
      top: 93px;
      background-color: #fff;
      z-index: 999;
      border-bottom: 1px solid #bababa;
    }
    
    .category_tabs .tab {
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
      padding: 15px;
      text-align: center;
    }
    .category_tabs .tab.active {
      background: #000;
      color: white;
      border-radius: 50px;
    }
    
    .category {
      display: none;
      text-align: center;
      font-size: 16px;
      padding: 0 15px;
    }
    .category.active {
      display: block;
    }
    .category > p {
      margin: 15px 0 25px;
    }
    .category > .flx {
      flex-wrap: wrap;
      align-items: stretch;
    }
    .category > .flx .item {
      width: 49%;
    }
    .category .item {
      margin-bottom: 60px;
    }
    .category .item .bg {
      border-radius: 16px;
      padding: 10px 8px;
      background-color: #f9f9f9;
    }
    .category .item .bg > a {
      color: black;
      text-decoration: none;
    }
    .category .item .bg > a > img {
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
    .category .product_reviews {
      margin: 25px 20px;
      border-top: 1px solid #EBEBEB;
      border-bottom: 1px solid #EBEBEB;
      padding: 24px 15px;
    }
    .category .product_reviews img {
      width: 100%;
      max-width: 100px;
    }
    .category .product_reviews p {
      font-size: 14px;
      color: #26CAD3;
    }
    .category .add_to_cart {
      font-family: "Cabin", sans-serif;
      font-size: 16px;
      width: 100%;
      margin: 24px 0;
      border: none;
      background-color: #000;
      color: white;
      padding: 20px 10px;
      border-radius: 50px;
    }
    .category .item > .to_pdp {
      font-weight: 500;
      text-align: center;
      display: block;
      color: black;
      text-decoration: none;
    }
    .category .item > .to_pdp img {
      transform: rotateZ(-90deg);
      height: 6px;
      margin-left: 15px;
    }
    .category h3 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 25px;
    }
    .category .specialization {
      font-size: 14px;
      text-align: center;
    }
    .category .specialization li {
      padding: 15px 0;
      min-height: 130px;
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
    }
    .category .specialization img {
      height: 40px;
      margin-bottom: 15px;
    }
    .category .specialization .title {
      font-weight: 700;
      margin-bottom: 10px;
    }
    .category .specialization .minus {
      margin: 90px auto;
      height: 1px;
      width: 24px;
      background-color: #000;
    }
    .category .new {
      position: relative;
    }
    .category .new::after {
      position: absolute;
      right: 15px;
      top: 15px;
      padding: 5px;
      content: "NEW";
      color: white;
      background-color: #26CAD3;
      border-radius: 20px;
      z-index: 5;
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
      content: "MOST POPULAR";
      color: white;
      font-size: 9px;
      padding: 3px 5px;
      border-radius: 20px;
      right: 40%;
      background-color: #26CAD3;
      font-weight: 400;
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
    </style>
`

let listing = `
    <div class="new_listing">
    <div class="category_tabs flx">
      <div class="tab active">One Layer Protection</div>
      <div class="tab">Multiple Layer Protection</div>
      <div class="tab">Smart Mask</div>
    </div>
    <div class="mask_listing">
      <div class="category active">
        <h2>ONE LAYER PROTECTION</h2>
        <p>3 items</p>
        <div class="flx">
          <div class="item" data-category="se" data-id="3175" data-color="white">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-light-se-4pcs-white" class="to_pdp">
                <img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/4/3/43575_1.png"
                  alt="mask">
                <div class="product_name">Airpop Light SE</div>
              </a>
              <div class="product_select">
                4 masks
              </div>
              <div class="product_price">$29.99 for 4 masks</div>
              <div class="product_color flx">
                <div class="white selected" data-color="white"></div>
                <div class="black" data-color="black"></div>
              </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
              <ul class="specialization">
                <li>
                  <img src="https://i.ibb.co/178f9Qc/microorganisms.png" alt="">
                  <p class="title">Filtration Efficacy</p>
                  <p>99.3% of particles and 99.9% of bacteria</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/HGf7bQD/water.png" alt="">
                  <p>Re-usable, washable, sustainable</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/48BKysr/time.png" alt="">
                  <p>40 Hours of Use</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/F0cW9b6/full-size.png" alt="">
                  <p>Adaptive mask size</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bg1vphj/eyeglasses.png" alt="">
                  <p class="title">Anti-fogging with eyewear</p>
                  <p>Soft touch silicone seal, contoured to fit the nose bridge</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/2SXWfwm/icons8-hearing-1.png" alt="">
                  <p>Less pressure on ears</p>
                </li>
                <li>
                  <div class="minus"></div>
                </li>
              </ul>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-light-se-4pcs-white" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
          <div class="item" data-category="pocket" data-id="3166" data-color="black">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-pocket-4pcs-black" class="to_pdp">
                <img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/4/3/43311_1.png"
                  alt="mask">
                <div class="product_name">Airpop Pocket</div>
              </a>
              <div class="product_select">
                4 masks
              </div>
              <div class="product_price">$29.99 for 4 masks</div>
              <div class="product_color flx">
                <div class="black selected" data-color="black"></div>
                <div class="white" data-color="white"></div>
              </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
              <ul class="specialization">
                <li>
                  <img src="https://i.ibb.co/178f9Qc/microorganisms.png" alt="">
                  <p class="title">Filtration Efficacy</p>
                  <p>99.3% of particles and 99.9% of bacteria</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/HGf7bQD/water.png" alt="">
                  <p>Re-usable, washable, sustainable</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/48BKysr/time.png" alt="">
                  <p>40 Hours of Use</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/F0cW9b6/full-size.png" alt="">
                  <p>Adaptive mask size</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bg1vphj/eyeglasses.png" alt="">
                  <p class="title">Anti-fogging with eyewear</p>
                  <p>Ergo-foam seal, cushions and conforms to the nose bridge</p>
                </li>
                <li>
                  <div class="minus"></div>
                </li>
                <li>
                  <img src="https://i.ibb.co/74jR5Yg/case.png" alt="">
                  <p>Compatible with Airpop hygienic storage case</p>
                </li>
              </ul>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-pocket-4pcs-black" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
          <div class="item" data-category="kids" data-id="3162" data-color="pink">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-kid-4pcs-pink" class="to_pdp">
                <img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/4/3/43316_2.png"
                  alt="mask">
                <div class="product_name">Airpop Kids</div>
              </a>
              <div class="product_select">
                4 masks
              </div>
              <div class="product_price">$29.99 for 4 masks</div>
              <div class="product_color flx">
                <div class="pink selected" data-color="pink"></div>
                <div class="blue" data-color="blue"></div>
                <div class="white" data-color="white"></div>
              </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
              <ul class="specialization">
                <li>
                  <img src="https://i.ibb.co/178f9Qc/microorganisms.png" alt="">
                  <p class="title">Filtration Efficacy</p>
                  <p>99.3% of particles and 99.9% of bacteria</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/HGf7bQD/water.png" alt="">
                  <p>Re-usable, washable, sustainable</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/48BKysr/time.png" alt="">
                  <p>40 Hours of Use</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/rb7RdF0/small-size.png" alt="">
                  <p class="title">Small mask size</p>
                  <p>88-121 mm<br>
                    3.4 - 4.8 inch</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bg1vphj/eyeglasses.png" alt="">
                  <p class="title">Anti-fogging with eyewear</p>
                  <p>Ergo-foam seal, cushions and conforms to the nose bridge</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/74jR5Yg/case.png" alt="">
                  <p>Compatible with Airpop hygienic storage case</p>
                </li>
              </ul>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-kid-4pcs-pink" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
        </div>
      </div>
      <div class="category">
        <h2>MULTIPLE LAYER PROTECTION</h2>
        <p>2 items</p>
        <div class="flx">
          <div class="item" data-category="active" data-color="yellow" data-id="3184">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-active-yellow-black" class="to_pdp"><img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/4/3/43581-6_1.png"
                  alt="mask">
                <div class="product_name">Airpop Active</div>
              </a>
              <div class="product_price">$69.99 for 1 mask</div>
              <div class="product_color flx">
                <div class="yellow selected" data-color="yellow"></div>
                <div class="black" data-color="black"></div>
                <div class="grey" data-color="grey"></div>
              </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
              <ul class="specialization">
                <li>
                  <img src="https://i.ibb.co/178f9Qc/microorganisms.png" alt="">
                  <p class="title">Filtration Efficacy</p>
                  <p>99.3% of particles and 99.9% of bacteria</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/HGf7bQD/water.png" alt="">
                  <p>Re-usable, washable, sustainable</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bN9r8CC/4masks.png" alt="">
                  <p class="title">4 replaceable filters included</p>
                  <p>40-hour use for each</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/F0cW9b6/full-size.png" alt="">
                  <p>Adaptive mask size</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/JdTvv4h/eyeglasses-1.png" alt="">
                  <p class="title">3D aerodome shape</p>
                  <p>Adaptively seals to face contours</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/YBFDrSy/wind.png" alt="">
                  <p class="title">Easy breathing</p>
                  <p>3D structure creates a canopy of air that keeps the mask slightly away from the face for effortless breathability</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bg1vphj/eyeglasses.png" alt="">
                  <p class="title">Anti-fogging with eyewear</p>
                  <p>Soft touch silicone seal, specifically contoured to fit the nose bridge</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/7bdgJJ3/drop.png" alt="">
                  <p>Moisture-wicking performance</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/CBwLw1z/fiber1.png" alt="">
                  <p class="title">Fabric</p>
                  <p>Airknit shell</p>
                </li>
              </ul>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-active-yellow-black" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
          <div class="item" data-category="original" data-color="brown" data-id="3183">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-original-beige" class="to_pdp">
                <img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/6/_/6.original-beige.filter.png"
                  alt="mask">
                <div class="product_name">Airpop Original</div>
              </a>
              <div class="product_price">$59.99 for 1 mask</div>
              <div class="product_color flx">
                <div class="brown selected" data-color="brown"></div>
                <div class="grey" data-color="grey"></div>
                <div class="black" data-color="black"></div>
              </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
              <ul class="specialization">
                <li>
                  <img src="https://i.ibb.co/178f9Qc/microorganisms.png" alt="">
                  <p class="title">Filtration Efficacy</p>
                  <p>99.3% of particles and 99.9% of bacteria</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/HGf7bQD/water.png" alt="">
                  <p>Re-usable, washable, sustainable</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bN9r8CC/4masks.png" alt="">
                  <p class="title">4 replaceable filters included</p>
                  <p>40-hour use for each</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/F0cW9b6/full-size.png" alt="">
                  <p>Adaptive mask size</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/JdTvv4h/eyeglasses-1.png" alt="">
                  <p class="title">3D aerodome shape</p>
                  <p>Adaptively seals to face contours</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/YBFDrSy/wind.png" alt="">
                  <p class="title">Easy breathing</p>
                  <p>3D structure creates a canopy of air that keeps the mask slightly away from the face for effortless breathability</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/bg1vphj/eyeglasses.png" alt="">
                  <p class="title">Anti-fogging with eyewear</p>
                  <p>Soft touch silicone seal, specifically contoured to fit the nose bridge</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/7bdgJJ3/drop.png" alt="">
                  <p>Moisture-wicking performance</p>
                </li>
                <li>
                  <img src="https://i.ibb.co/7YMbbHW/fiber2.png" alt="">
                  <p class="title">Fabric</p>
                  <p>Microfiber shell</p>
                </li>
              </ul>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-original-beige" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
        </div>
        <div class="filter">
          <h3>Never run out of filters</h3>
          <div class="item" data-id="3182">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-filter-refill-white" class="to_pdp">
                <img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/4/3/43308-1_1.png"
                  alt="mask">
                <div class="product_name">Airpop Filter refill white</div>
              </a>
              <div class="product_price">Set of 4 filters $24.99 </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-filter-refill-white" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
        </div>
      </div>
      <div class="category">
        <h2>SMART MASK</h2>
        <p>Monitors Local Air Quality</p>
        <div class="item" data-id="3168">
          <div class="bg new">
            <a href="https://www.airpophealth.com/eu/airpop-active-smart-black-yellow" class="to_pdp">
              <img
                src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/2/0/20171207_active_halo_black2.png"
                alt="mask">
              <div class="product_name">Airpop Active + Halo Smart Mask</div>
            </a>
            <div class="product_price">$149.99</div>
            <div class="product_reviews">
              <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
              <p>34 Reviews</p>
            </div>
            <ul class="specialization">
              <li>
                <img src="https://i.ibb.co/178f9Qc/microorganisms.png" alt="">
                <p class="title">Filtration Efficacy</p>
                <p>99.3% of particles and 99.9% of bacteria</p>
              </li>
              <li>
                <img src="https://i.ibb.co/HGf7bQD/water.png" alt="">
                <p>Re-usable, washable, sustainable</p>
              </li>
              <li>
                <img src="https://i.ibb.co/qj3F2rT/phone.png" alt="">
                <p class="title">Personal dashboard on real-time protection level</p>
                <p>Get meaningful feedback about your breathing and mask performance in the app</p>
              </li>
              <li>
                <img src="https://i.ibb.co/bN9r8CC/4masks.png" alt="">
                <p class="title">4 replaceable filters included</p>
                <p>40-hour use for each</p>
              </li>
              <li>
                <img src="https://i.ibb.co/F0cW9b6/full-size.png" alt="">
                <p>Adaptive mask size</p>
              </li>
              <li>
                <img src="https://i.ibb.co/JdTvv4h/eyeglasses-1.png" alt="">
                <p class="title">3D aerodome shape</p>
                <p>Adaptively seals to face contours</p>
              </li>
              <li>
                <img src="https://i.ibb.co/YBFDrSy/wind.png" alt="">
                <p class="title">Easy breathing</p>
                <p>3D structure creates a canopy of air that keeps the mask slightly away from the face for effortless breathability</p>
              </li>
              <li>
                <img src="https://i.ibb.co/bg1vphj/eyeglasses.png" alt="">
                <p class="title">Anti-fogging with eyewear</p>
                <p>Soft touch silicone seal, specifically contoured to fit the nose bridge</p>
              </li>
              <li>
                <img src="https://i.ibb.co/7bdgJJ3/drop.png" alt="">
                <p>Moisture-wicking performance</p>
              </li>
              <li>
                <img src="https://i.ibb.co/CBwLw1z/fiber1.png" alt="">
                <p class="title">Fabric</p>
                <p>Airknit shell</p>
              </li>
            </ul>
          </div>
          <button class="add_to_cart">Add to Cart</button>
          <a href="https://www.airpophealth.com/eu/airpop-active-smart-black-yellow" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
        </div>
        <div class="filter">
          <h3>Never run out of filters</h3>
          <div class="item" data-id="3182">
            <div class="bg">
              <a href="https://www.airpophealth.com/eu/airpop-filter-refill-white" class="to_pdp">
                <img
                  src="https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404/4/3/43308-1_1.png"
                  alt="mask">
                <div class="product_name">Airpop Filter refill white</div>
              </a>
              <div class="product_price">Set of 4 filters $24.99 </div>
              <div class="product_reviews">
                <img src="https://i.ibb.co/JKSYhY2/stars.png" alt="stars">
                <p>34 Reviews</p>
              </div>
            </div>
            <button class="add_to_cart">Add to Cart</button>
            <a href="https://www.airpophealth.com/eu/airpop-filter-refill-white" class="to_pdp">Learn more<img src="https://i.ibb.co/xsG543Z/arr-d.png" alt="arrow"></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="dark_bg"></div>
  <div class="custom_select">
    <ul>

    </ul>
    <button class="cancel">Cancel</button>
  </div>
  
  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`

let products = {
    se: {
        white: {
            '+3175': ['4', '29,99', '43575'],
            '+3462': ['8', '54.99', '44780'],
            '+3463': ['12', '69.99', '44781'],
            '+3177': ['20', '99.99', '43577']
        },
        black: {
            '+3174': ['1', '9.99', '43514'],
            '+3176': ['4', '29,99', '43576'],
            '+3460': ['8', '54.99', '44778'],
            '+3461': ['12', '69.99', '44779'],
            '+3178': ['20', '99.99', '43578']
        }
    },
    pocket: {
        black: {
            '+3159': ['2', '14.99', '43311'],
            '+3166': ['4', '24,99', '43346'],
            '+3456': ['8', '44.99', '44774'],
            '+3457': ['12', '59.99', '44775'],
            '+3318': ['20', '89.99', '43798']
        },
        white: {
            '+3160': ['2', '14.99', '43312'],
            '+3167': ['4', '24,99', '43347'],
            '+3458': ['8', '44.99', '44776'],
            '+3459': ['12', '59.99', '44777'],
            '+3319': ['20', '89.99', '43799']
        }
    },
    kids: {
        pink: {
            '+3162': ['4', '24.99', '43316'],
            '+3470': ['8', '44.99', '44788'],
            '+3471': ['12', '59.99', '44789'],
            '+3472': ['20', '89.99', '44790'],
        },
        blue: {
            '+3180': ['2', '14.99', '43580'],
            '+3163': ['4', '24.99', '43317'],
            '+3467': ['8', '44.99', '44785'],
            '+3468': ['12', '59.99', '44786'],
            '+3469': ['20', '89.99', '44787'],
        },
        white: {
            '+3179': ['2', '14.99', '43579'],
            '+3171': ['4', '24.99', '43352'],
            '+3464': ['8', '44.99', '44782'],
            '+3465': ['12', '59.99', '44783'],
            '+3466': ['20', '89.99', '44784']
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
    }

}


    setTimeout(function () {
        document.body.insertAdjacentHTML('afterbegin', styleListing)
        document.querySelector('#maincontent').innerHTML = listing
        let $ = jQuery;

        $('.category_tabs').on('click', '.tab', function () {
            let i = $(this).index()
            if (!$(this).hasClass('active')) {
                $(this).addClass('active').siblings('div').removeClass('active')
                $(this).closest('.new_listing').find('.mask_listing .category').eq(i).addClass('active').siblings('div').removeClass('active')
                $("html, body").animate({scrollTop: $(document).height(0)}, 1);
            }
        })

        $('.product_select').click(function () {
            let cat = $(this).closest('.item').data('category')
            let color = $(this).closest('.item').data('color')
            let id = $(this).closest('.item').data('id')
            $('.custom_select').data('category', cat)
            let list = products[cat][color]
            console.log(list)
            for (let item in list) {
                let classList = ''
                if (+item === id) {
                    classList += 'selected'
                }
                if (list[item][0] === '4') {
                    classList += ' popular'
                }
                let li = `<li class="${classList}" data-sku="${list[item][2]}" data-qty="${list[item][0]}" data-newid="${+item}">${list[item][0]} masks <span>$${list[item][1]}</span></li>`
                $('.custom_select ul').append(li)
            }

            $('.dark_bg').addClass('active')
            $('.custom_select').addClass('active')


            $('.custom_select li').click(function () {
                let sku = $(this).data('sku')
                let qty = $(this).data('qty')
                let newid = $(this).data('newid')
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
                        $(`.item[data-category='${cat}']`).find('.bg>a>img').attr('src', `https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404${response.media_gallery_entries[0].file}`)
                        $(`.item[data-category='${cat}']`).find('.product_price').html(`$${response.price} for ${qty} ${(+qty === 1) ? 'mask' : 'masks'}`)
                        $(`.item[data-category='${cat}']`).find('.to_pdp').attr('href', `https://www.airpophealth.com/eu/catalog/product/view/id/${newid}/s/${response.custom_attributes[4].value}`)
                        $(`.item[data-category='${cat}']`).find('.product_select').html(`${qty} ${(+qty === 1) ? 'mask' : 'masks'}`)
                        $(`.item[data-category='${cat}']`).data('id', newid)

                        $('.dark_bg').removeClass('active')
                        $('.lds-spinner').removeClass('active')
                    }
                });
            })
        })

        $('.product_color').on('click', 'div', function () {
            let aim = $(this)
            if (!aim.hasClass('selected')) {
                let cat = $(this).closest('.item').data('category')
                let color = aim.data('color')
                let sku = Object.values(products[cat][color])[0][2]
                let qty = Object.values(products[cat][color])[0][0]
                let newid = `${+Object.keys(products[cat][color])[0]}`
                console.log(color, sku, qty, newid)

                $('.lds-spinner').addClass('active')
                $('.dark_bg').addClass('active')

                jQuery.ajax({
                    type: "GET",
                    url: `https://www.airpophealth.com/rest/ap_eu/V1/products/${sku}?fields=sku,name,price,media_gallery_entries,custom_attributes`,
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
                        $(`.item[data-category='${cat}']`).find('.bg>a>img').attr('src', `https://www.airpophealth.com/media/catalog/product/cache/7f1b7b880056465fcb587a305b4a1404${response.media_gallery_entries[0].file}`)
                        $(`.item[data-category='${cat}']`).find('.product_price').html(`$${response.price} for ${qty} ${(+qty === 1) ? 'mask' : 'masks'}`)
                        $(`.item[data-category='${cat}']`).find('.to_pdp').attr('href', `https://www.airpophealth.com/eu/catalog/product/view/id/${newid}/s/${response.custom_attributes[4].value}`)
                        $(`.item[data-category='${cat}']`).find('.product_select').html(`${qty} ${(+qty === 1) ? 'mask' : 'masks'}`)
                        aim.closest('.item').attr('data-id', newid)
                        aim.closest('.item').attr('data-color', color)
                        aim.addClass('selected').siblings('div').removeClass('selected')
                        $('.dark_bg').removeClass('active')
                        $('.lds-spinner').removeClass('active')
                    }
                });
            }
        })

        $('.custom_select .cancel').click(function () {
            $('.custom_select ul').empty()
            $('.dark_bg').removeClass('active')
            $('.custom_select').removeClass('active')
        })

        $('.add_to_cart').click(function () {
            let id = $(this).closest('.item').data('id')
            $('.dark_bg').addClass('active')
            $('.lds-spinner').addClass('active')
            to_cart(id)
        })

    }, 1000)

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
            error: function (response) {
                $('.dark_bg').removeClass('active')
                $('.lds-spinner').removeClass('active')
                console.log(response)
            }
        }).done(function (response) {
            $('.dark_bg').removeClass('active')
            $('.lds-spinner').removeClass('active')
        })
    }
