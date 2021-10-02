import React from 'react'
import { ScrollTrigger } from 'gsap/src/ScrollTrigger'
import { gsap } from 'gsap/all'
import Projects from '../data/Projects'

gsap.registerPlugin(ScrollTrigger)

export default function Work () {
  return (
    <div className='section' id='work_section'>
      <div className='container'>
        <h2 className='section-title stroke reveal'>
          <div className='reveal-wrap'>
            <span>Work</span>
          </div>
        </h2>
      </div>
      <div className="work">
        {Projects.map((item, index) => (
          <div className='work-item' key={index}>
            <a href={item.siteUrl} rel='noreferrer' target='_blank' className='site-link' key={item.name}>
              View Site
            </a>
            <div className='work-img'>
              <div className='img-wrap'>
                <div
                  className='img'
                  style={{ backgroundImage: `url(${item.mediaUrl})` }}
                  key={item.mediaUrl}
                >
                </div>
              </div>
            </div>
            <span className='title-wrap'>
              <a href={item.siteUrl} rel='noreferrer' target='_blank' className='title' key={item.name}>
                {item.name}
              </a>
            </span>
            <span className='category' key={item.category}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
