let style = `
<style>
   .light_diagram {
      margin: 10px 0 15px;
   }
</style>
`
document.body.insertAdjacentHTML('afterbegin', style);

function switchSvg() {
  let img = document.querySelector('.light_diagram');
  switch (select.value) {
    case 'Combo':
      img.setAttribute('src', 'https://i.ibb.co/ZgtbtW9/combo.png');
      break;
    case 'Flood':
      img.setAttribute('src', 'https://i.ibb.co/F393cst/flood.png');
      break;
    case 'Spot':
      img.setAttribute('src', 'https://i.ibb.co/S3D9jnR/spot.png');
      break;
    default:
      img.remove();
  }
}


let select =  document.querySelector('.variations select[data-option="option1"]');
if (select.value) {
  switch (select.value) {
    case 'Combo':
      select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram" src="https://i.ibb.co/ZgtbtW9/combo.png" alt="variant">');
      break;
    case 'Flood':
      select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram"  src="https://i.ibb.co/F393cst/flood.png" alt="variant">');
      break;
    case 'Spot':
      select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram"  src="https://i.ibb.co/S3D9jnR/spot.png" alt="variant">');
      break;
    default: '';
  }

  switchSvg();
  select.addEventListener('change', switchSvg);
}


let specBlock = document.querySelector('.prod_desc #tabs-3').innerHTML;
console.log(specBlock);
