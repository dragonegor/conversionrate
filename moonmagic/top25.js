let style = `
<style>
  #gridprod-3982651555912,
  #gridprod-3481223692360,
  #gridprod-3982601945160,
  #gridprod-3481349423176,
  #gridprod-4508390686792,
  #gridprod-3982926676040,
  #gridprod-3481362956360,
  #gridprod-4091207843912,
  #gridprod-3481221529672,
  #gridprod-3984110354504,
  #gridprod-4090238304328,
  #gridprod-4091200274504,
  #gridprod-3481223495752,
  #gridprod-4508411330632 {
    order: -1;
  }
</style>
`


if(window.location.href !== 'https://moonmagic.com/collections/jewelry?pg=12&sort_by=none&select_store=1') {
    window.location.href = 'https://moonmagic.com/collections/jewelry?pg=12&sort_by=none&select_store=1'
} else {
    document.body.insertAdjacentHTML('afterbegin', style)
    console.log('sorting products')
}
