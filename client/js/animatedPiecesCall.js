{
  imagesLoaded(document.body, { background: true }, () => document.body.classList.remove('loading'))

  const menuItems = Array.from(document.querySelectorAll('.menu > .menu__item'))

  const piecesObj = new Pieces(document.querySelector('.slideshow > .pieces'), {
    pieces: {rows: 14, columns: 12},
    delay: [0, 40],
    hasTilt: true,
    tilt: {
      maxRotationX: -1,
      maxRotationY: -1,
      maxTranslationX: -5,
      maxTranslationY: -2
    }
  })

  let isAnimating = false
  let current = 0

  const openImage = (ev, item, pos) => {
    ev.preventDefault()
    if (isAnimating || current === pos) {
      return false
    }
    isAnimating = true
    menuItems[current].classList.remove('menu__item--current')
    current = pos
    menuItems[current].classList.add('menu__item--current')
    const imgsrc = item.dataset.image

    piecesObj.animate({
      duration: 200,
      easing: 'easeOutQuad',
      delay: (t, i, l) => {
        return parseInt(t.dataset.row) * parseInt(t.dataset.delay)
      },
      translateX: (t, i) => {
        return anime.random(-50, 50) + 'px'
      },
      translateY: (t, i) => {
        return anime.random(-800, -200) + 'px'
      },
      rotateZ: (t, i) => {
        return anime.random(-45, 45) + 'deg'
      },
      opacity: 0,
      complete: () => {
        piecesObj.setImage(imgsrc)

        piecesObj.animate({
          duration: 500,
          easing: [0.3, 1, 0.3, 1],
          delay: (t, i, l) => {
            return parseInt(t.dataset.row) * parseInt(t.dataset.delay)
          },
          translateX: 0,
          translateY: () => {
            return [anime.random(200, 800) + 'px', '0px']
          },
          rotateZ: 0,
          opacity: {
            value: 1,
            duration: 500,
            easing: 'linear'
          },
          complete: () => {
            isAnimating = false
          }
        })
      }
    })
  }

  menuItems.forEach((item, pos) => item.addEventListener('click', (ev) => openImage(ev, item, pos)))
}
