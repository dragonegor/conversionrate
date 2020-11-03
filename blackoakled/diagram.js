let select =  document.querySelector('.variations select[data-option="option1"]');

switch (select.value) {
  case 'combo':
    select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram" src="https://i.ibb.co/ZgtbtW9/combo.png" alt="variant">');
    break;
  case 'flood':
    select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram"  src="https://i.ibb.co/F393cst/flood.png" alt="variant">');
    break;
  case 'spot':
    select.parentElement.insertAdjacentHTML('afterend', '<img class="light_diagram"  src="https://i.ibb.co/S3D9jnR/spot.png" alt="variant">');
    break;
  default: '';
}

function switchSvg() {
  switch (select.value) {
    case 'combo':
      document.querySelector('.light-diagram').setAttribute('src', 'https://i.ibb.co/ZgtbtW9/combo.png')
      break;
    case 'flood':
      document.querySelector('.light-diagram').setAttribute('src', 'https://i.ibb.co/F393cst/flood.png')
      break;
    case 'spot':
      document.querySelector('.light-diagram').setAttribute('src', 'https://i.ibb.co/S3D9jnR/spot.png')
      break;
    default: '';
  }
}
switchSvg();
select.addEventListener('change', switchSvg);

