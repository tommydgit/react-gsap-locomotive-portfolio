import React from 'react'

export default function Contact () {
  return (
    <div className='section' id='contact_section'>
      <div className='container'>
        <h2 className='section-title reveal'>
          <div className='reveal-wrap'><span>Let's</span></div>
          <div className='reveal-wrap'><span>Collab</span></div>
        </h2>
        <div className='contact'>
          <a href='mailto:tad7752@gmail.com' className='text-swap' data-replace="tad7752@gmail.com">
            <span>Send me an email</span>
          </a>
        </div>
        <div className='footer'>
          <div className='social'>
            <ul>
              <li><a href='/docs/Tom_DiFrancesco_Resume.pdf' className='circle-link' rel='noreferrer' target='_blank'>Resume
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a></li>
              <li><a href='https://www.linkedin.com/in/tomdifrancesco' className='circle-link' rel='noreferrer' target='_blank'>LinkedIn
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a></li>
              <li><a href='https://github.com/tommydgit' className='circle-link' rel='noreferrer' target='_blank'>GitHub
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
