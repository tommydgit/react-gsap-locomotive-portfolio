import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect, useState } from 'react'

export default function useLocoScroll () {
  gsap.registerPlugin(ScrollTrigger)

  // const scrollRef = useRef(null)
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  //   dx: 0,
  //   dy: 0
  // })
  // let mousepos = { x: 0, y: 0 }

  useEffect(() => {
    const scrollEl = document.querySelector('#scroll')
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.06,
      multiplier: 1.4,
      reloadOnContextChange: true,
      touchMultiplier: 1,
      smoothMobile: 0,
      smartphone: {
        smooth: 0,
        breakpoint: 767
      },
      tablet: {
        smooth: !1,
        breakpoint: 1024
      }
    })
    locoScroll.on('scroll', ScrollTrigger.update)

    // let scrollY = 0
    // locoScroll.on('scroll', (event) => {
    //   scrollY = (locoScroll.scroll.instance.scroll.y)
    //   mousepos = { x: event.clientX, y: event.clientY }
    // })

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop (value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y
      },
      getBoundingClientRect () {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        }
      },
      pinType: scrollEl.style.transform ? 'transform' : 'fixed'
    })

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update()
      }
    }

    ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
    ScrollTrigger.addEventListener('refreshInit', () => locoScroll.update())
    ScrollTrigger.refresh()

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate)
        ScrollTrigger.removeEventListener('refreshInit', lsUpdate)
        locoScroll.destroy()
        console.log('Kill', locoScroll)
      }
    }
  })
}
