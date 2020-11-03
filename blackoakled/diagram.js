let select =  document.querySelector('.variations select[data-option="option1"]');

switch (select.value) {
  case 'Combo':
    console.log(select.parentElement);
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

function switchSvg() {
  switch (select.value) {
    case 'Combo':
      document.querySelector('.light_diagram').setAttribute('src', 'https://i.ibb.co/ZgtbtW9/combo.png')
      break;
    case 'Flood':
      document.querySelector('.light_diagram').setAttribute('src', 'https://i.ibb.co/F393cst/flood.png')
      break;
    case 'Spot':
      document.querySelector('.light_diagram').setAttribute('src', 'https://i.ibb.co/S3D9jnR/spot.png')
      break;
    default: '';
  }
}
switchSvg();
select.addEventListener('change', switchSvg);

