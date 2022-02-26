const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getData = () => {
    fetch('/db/db.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data))
        console.log(localStorage)
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      getData()
    })
  })
}

getGoods()