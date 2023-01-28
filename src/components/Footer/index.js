import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../assets/images/logo.jpg'
import './index.scss'

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer-logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="footer-nav">
				<ul>
					<li>
						<Link to="/about">About Me</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<a href="mailto:tauqeertaj@gmail.com">Email</a>
					</li>
					<li>
						<a href="tel:+923155285774">Phone</a>
					</li>
				</ul>
			</div>
			<div className="footer-follow">
				<ul>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-tauqeer-taj-27a547a7/">
							<FontAwesomeIcon icon={faLinkedin} />
							Linkedin
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.facebook.com/tauqeer.khan.750/">
							<FontAwesomeIcon icon={faFacebook} />
							Facebook
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.facebook.com/tauqeer.khan.750/">
							<FontAwesomeIcon icon={faSkype} />
							Skype
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
