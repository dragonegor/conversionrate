let returnStyle = `
  <style>
     .return60 {
        margin: 15px -15px;
        padding: 10px;
        display:flex;
        border-bottom: 1px solid #fcbec1;
        border-top: 1px solid #fcbec1;
        align-items: center;
     }
     .return60 svg {
        height: 54px;
        width: 54px;
        margin-right: 25px;
        flex-shrink: 0;
     }
     .return60 p {
        font-size: 14px;
        line-height: 20px;
     }
     
     .sizing__chart.sizing__chart--table-layout {
      margin-top: 20px;
     }
     
  </style>
`

let block = `
  <div class="return60">
     <svg xmlns="http://www.w3.org/2000/svg" width="54.573" height="55.65" viewBox="0 0 54.573 55.65">
    <defs>
        <style>
            .a{fill:none;stroke:#232323;stroke-miterlimit:10;stroke-width:1.5px;}.b{fill:#2f2f2f;font-size:20px;font-family:Montserrat-Bold,
            Montserrat;font-weight:700;}.c{font-size:10px;}
        </style>
    </defs>
    <g transform="translate(-48.25 -498.25)">
        <g transform="translate(49 499)">
            <path class="a" d="M1152.4,458.65a27.071,27.071,0,1,1,2.833-26.165"
                  transform="translate(-1103.208 -415.949)"/>
            <path class="a" d="M1146.3,428.973l5.719,3.424.694-6.5" transform="translate(-1099.631 -415.123)"/>
        </g>
        <text class="b" transform="translate(62 508)">
            <tspan x="0" y="19">60</tspan>
            <tspan class="c">
                <tspan x="0" y="31">days</tspan>
            </tspan>
        </text>
    </g>
</svg>
     <p><b>Unsure if the size will fit?</b><br>
     No worries. We offer hassle free returns on all orders.
     </p>
  </div>
`

if(!document.querySelector('.return60')) {
    document.body.insertAdjacentHTML('afterbegin', returnStyle)
    document.querySelector('.sizing__chart--description-layout').insertAdjacentHTML('afterend', block)
    document.querySelector('#sizingModalSubtitle1').insertAdjacentHTML('beforeend', block)
}
