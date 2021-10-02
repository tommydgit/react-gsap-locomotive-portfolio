import React, { useEffect } from 'react'
import gsap from 'gsap'
import useLocoScroll from './utils/locoScroll'
import Canvas from './components/Canvas'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Work from './components/Work'

function App ({ hideLoader }) {
  useEffect(hideLoader, [])
  useLocoScroll()

  const work_section = '#work_section'
  const contact_section = '#contact_section'
  const scroller = '#scroll'
  const scrollbar = '.c-scrollbar_thumb'
  const lava = '#lavalamp'
  const work_title = '#work_section .section-title'
  const contact_title = '#contact_section .section-title'
  const svg_logo_fill = ['.cls-1-1', '.cls-4']
  const svg_logo_stroke = '.cls-3'

  const color_light = '#eae7e6'
  const color_blue = '#0b283b'
  const color_dark = '#1d1d1d'
  const color_peach = '#daa064'
  const color_yellow = '#ffd000'
  const logo_opacity = 0.3

  useEffect(() => {
    gsap.defaults({
      duration: 1
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.line-logo',
        scroller: scroller,
        scrub: true,
        pin: true,
        pinSpacing: false,
        start: 'top 10%',
        end: '+=500%'
        // markers: true
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: scroller,
        scroller: scroller,
        scrub: true,
        start: 'top',
        end: 'bottom'
        // markers: true
      }
    }).to('#circle_logo_text', {
      rotation: 397,
      duration: 1
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: work_title,
        scroller: scroller,
        scrub: true,
        pin: true,
        pinSpacing: false,
        start: '-=15%',
        end: '+=75%'
        // markers: true
      }
    })

    gsap.utils.toArray('.reveal').forEach((revealItem) => {
      const el = gsap.utils.selector(revealItem)
      const span = el('span')
      gsap.from(span, {
        duration: 1.5,
        ease: 'Power3.easeOut',
        delay: 0.2,
        skewY: 20,
        y: '12vw',
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: revealItem,
          start: 'top bottom',
          end: 'top bottom',
          scroller: scroller,
          // markers: true,
          toggleActions: 'play none none reverse',
          playOnce: false
        }

      })
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: work_section,
        start: 'top 50%',
        scroller: scroller,
        // markers: true,
        onEnter: () => {
          gsap.to(lava, {
            filter: 'brightness(1) hue-rotate(0deg) sepia(0)'
          })
          gsap.to(work_title, {
            color: color_light,
            webkitTextStrokeColor: color_light
          })
          gsap.to(scrollbar, {
            backgroundColor: color_light
          })
          gsap.to(svg_logo_fill, {
            fill: color_light,
            opacity: logo_opacity
          })
          gsap.to(svg_logo_stroke, {
            stroke: color_light,
            opacity: logo_opacity
          })
        },
        onLeaveBack: () => {
          gsap.to(lava, {
            filter: 'brightness(4) hue-rotate(-45deg) sepia(0.5)'
          })
          gsap.to(work_title, {
            color: color_dark,
            webkitTextStrokeColor: color_dark
          })
          gsap.to(scrollbar, {
            backgroundColor: color_dark
          })
          gsap.to(svg_logo_fill, {
            fill: color_dark,
            opacity: 1
          })
          gsap.to(svg_logo_stroke, {
            stroke: color_dark,
            opacity: 1
          })
        }
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: contact_section,
        start: 'top 50%',
        scroller: scroller,
        // markers: true,
        onEnter: () => {
          gsap.to(lava, {
            filter: 'brightness(4) hue-rotate(170deg)'
          })
          gsap.to(contact_title, {
            color: color_dark
          })
          gsap.to(scrollbar, {
            backgroundColor: color_dark
          })
          gsap.to(svg_logo_fill, {
            fill: color_dark,
            opacity: 1
          })
          gsap.to(svg_logo_stroke, {
            stroke: color_dark,
            opacity: 1
          })
        },
        onLeaveBack: () => {
          gsap.to(lava, {
            opacity: 1,
            filter: 'brightness(1) hue-rotate(0deg)'
          })
          gsap.to(work_title, {
            color: color_light
          })
          gsap.to(scrollbar, {
            backgroundColor: color_light
          })
          gsap.to(svg_logo_fill, {
            fill: color_light,
            opacity: logo_opacity
          })
          gsap.to(svg_logo_stroke, {
            stroke: color_light,
            opacity: logo_opacity
          })
        }
      }
    })
  }, [])

  return (
    <>
      <Canvas />
      <div id="scroll" data-scroll-container>
        <Hero />
        <Work />
        <Contact />
      </div>
    </>
  )
}

export default App
