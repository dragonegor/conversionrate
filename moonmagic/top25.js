let style = `
<style>
  #gridprod-4508411330632,
  #gridprod-3481223495752,
  #gridprod-4091200274504 {
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