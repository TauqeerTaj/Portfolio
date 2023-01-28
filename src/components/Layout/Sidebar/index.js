import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../../assets/images/logo.jpg'

export default function Sidebar() {
	const [resp, setResp] = React.useState(window.innerWidth <= 768 ? true : false)
	const toggleNav = () => {
		setResp(!resp)
	}
	return (
		<div className={resp ? 'resp_navbar ' : 'nav-bar'}>
			<Link className="logo">
				<span>
					<img src={Logo} alt="logo" onClick={window.innerWidth <= 768 ? toggleNav : () => {}} />
				</span>
			</Link>
			<nav>
				<NavLink exact="true" activeclassname="active" to="/">
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" className="about-link" to="/about">
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-tauqeer-taj-27a547a7/">
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/muhammad-tauqeer-taj-27a547a7/">
						<FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
					</a>
				</li>
			</ul>
		</div>
	)
}
