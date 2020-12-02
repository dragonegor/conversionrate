let styleNew = `
    <style>
      .blog_btn {
          font-family: "Roboto", sans-serif;
          display: flex;
          align-items: center;
          text-align: center;
          padding: 14px 20px;
          border: none;
          background-color: #1E415F;
          border-radius: 60px;
          color: white;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 15px;
          position:relative;
          cursor: pointer;
        }
        .blog_btn.span {
           padding: 14px 50px 14px 20px;
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
        .banner_to_cart {
          align-items: center;
          display:flex;
          justify-content: space-between;
          padding: 27px 42px;
          background-color: #E2F4F7;
          width: 100%;
        }
        @media (max-width: 769px) {
          .banner_to_cart {
              justify-content: center;
              flex-wrap:wrap;
              padding: 20px 6px;
          }
          
          .banner_to_cart p {
              margin-bottom: 25px;
              text-align: center;
          } 
        }
        .banner_to_cart p {
          font-size: 20px;
          font-weight: 900;
        }   
        .block_to_cart p {
          margin-top: 30px;
          margin-bottom: 15px;
          font-weight: 900;
          font-size: 16px;
        }
    </style>
`

let block1 = `
    <div class="banner_to_cart">
      <p>Stop mouth breathing today.</p>
      <button class="blog_btn span">
        Try SOMNIFIX mouth strips 
        <span>
          <svg width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5704 4.81293L0.15469 1.83926C0.0555911 1.7261 0 1.57331 0 1.41407C0 1.25484 0.0555911 1.10204 0.15469 0.988889C0.203353 0.933024 0.261358 0.888659 0.32533 0.858377C0.389301 0.828095 0.457961 0.8125 0.527314 0.8125C0.596667 0.8125 0.665327 0.828095 0.729299 0.858377C0.79327 0.888659 0.851275 0.933024 0.899938 0.988889L3.84555 4.38688C3.94452 4.50029 4 4.65319 4 4.8125C4 4.97181 3.94452 5.12471 3.84555 5.23812L0.899938 8.63611C0.851275 8.69198 0.79327 8.73634 0.729299 8.76662C0.665327 8.79691 0.596667 8.8125 0.527314 8.8125C0.457961 8.8125 0.389301 8.79691 0.32533 8.76662C0.261358 8.73634 0.203353 8.69198 0.15469 8.63611C0.0555911 8.52296 0 8.37016 0 8.21093C0 8.05169 0.0555911 7.8989 0.15469 7.78574L2.5704 4.81293Z" fill="white"/>
          </svg>
        </span>
      </button>
    </div>
`

let block3 = `
    <div class="banner_to_cart">
      <p>Let’s start better breathing today with SomniFix mouth strips.</p>
      <button class="blog_btn">
        Get SOMNIFIX 
      </button>
    </div>
`

let block2 = `
  <div class="block_to_cart">
    <p>Ready to try all the advantages of nasal-only breathing?</p>
    <button class="blog_btn">
        Try SOMNIFIX mouth strips 
     </button>
  </div>
`

document.addEventListener("DOMContentLoaded", function () {

    document.body.insertAdjacentHTML('afterbegin', styleNew)
    if(window.innerWidth < 769) {
        document.querySelectorAll('.shg-box-content')[5].querySelector('.shg-row>div:first-child').insertAdjacentHTML('afterend', block1)
    } else {
        document.querySelectorAll('.shg-box-content')[5].insertAdjacentHTML('afterend', block1)
    }
    document.querySelectorAll('.shg-box-content')[20].insertAdjacentHTML('afterend', block2)
    document.querySelectorAll('.shg-box-content')[21].insertAdjacentHTML('afterend', block3)
    
    
    document.querySelectorAll('.blog_btn').forEach((item) => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.on-button-get-sominifix-open')[0].click()
        })
    })

})
