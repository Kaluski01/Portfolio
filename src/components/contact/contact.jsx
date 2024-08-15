import React, { useRef, useEffect, useState } from 'react';
import AnimatedLetters from '../Animated letters';
import './contact.scss';
import Sidebar from '../Sidebar/Navbar';
import { Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef(); // Initialize useRef properly

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
            // setLoader(false);
        }, 2000);

        return () => clearTimeout(timerId);
    }, []);
    useEffect(() => {
        emailjs.init('FtZOBoXSD5Y1m0xmk');  // Initialize EmailJS
    }, []);    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ekpx3ct',
            'template_q7g8iki', 
            refForm.current,
           "FtZOBoXSD5Y1m0xmk"
        )
        .then((result) => {
            alert('Message successfully sent');
            window.location.reload(false);
        })
        .catch((error) => {
            alert('Message unsuccessfullly sent, Please check your internet connection and try again later');
            console.error('Message unsuccessfullly sent, Please check your internet connection and try again later');
        });
    };

    return (
        <>
            <Sidebar/>
            <div className='container'>
                <div className="row w-100">
                    <div className="col-lg-6 col-12">
                        <div>
                            <h1>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={['C','o','n','t','a','c','t', ' ', 'M','e']}
                                />
                            </h1>
                            <p>I am interested in freelance projects. However, if you have other requests or questions, don't hesitate to contact me. Cheers</p>
                        </div>
                        <div className='contact-form'>
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className='half'>
                                        <input type="text" name='name' placeholder='Name:' required/>
                                    </li>
                                    <li className='half'>
                                        <input type="email" name='email' placeholder='Email:' required />
                                    </li>
                                    <li>
                                        <input type="text" placeholder='Subject:' required name='subject' />
                                    </li>
                                    <li>
                                        <textarea name="message" placeholder='Message:'></textarea>
                                    </li>
                                    <li>
                                        <Button className='button' type='submit'>Send</Button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
