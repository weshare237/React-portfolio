import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [email, setEmail] = useState('')
  // const [subject, setSubject] = useState('')
  // const [message, setMessage] = useState('')
  // const [name, setName] = useState('')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xn5d54l',
        'template_jnojew1',
        refForm.current,
        'u8MgoH0pJtFtVVGWi'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>

          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required
                    // onChange={(e) => setEmail(e.target.value)}
                    // value={email}
                  />
                </li>
                <li>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    required
                    // onChange={(e) => setSubject(e.target.value)}
                    // value={subject}
                  />
                </li>
                <li>
                  <textarea
                    placeholder='Message'
                    name='message'
                    required
                    // onChange={(e) => setMessage(e.target.value)}
                    // value={message}
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact
