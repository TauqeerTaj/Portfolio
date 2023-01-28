import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Hire from '../common/Hire'
import Footer from '../Footer'
import './index.scss'

export default function Contact() {
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault()

		emailjs.sendForm('service_dwbbsge', 'template_rfqbp4z', form.current, 'NTRVeCh_1vTj-SBTH').then(
			(result) => {
				console.log(result.text)
			},
			(error) => {
				console.log(error.text)
			}
		)
	}
	return (
		<div className="contact">
			<div className="top">
				<h1>Contact</h1>
				<p>tauqeertaj@gmail.com-0315 5285774</p>
			</div>
			<form ref={form} onSubmit={sendEmail}>
				<input type="text" placeholder="Full Name" name="user_name" />
				<input type="email" placeholder="Email" name="user_email" />
				<input type="text" placeholder="Contact" name="user_contact" />
				<textarea placeholder="Message" name="message" />
				<button type="submit" value="Send">
					Send
				</button>
			</form>
			<Hire />
			<Footer />
		</div>
	)
}
