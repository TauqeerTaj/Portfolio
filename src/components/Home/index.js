import React from 'react'
import './index.scss'
import Spain from '../../assets/images/spain.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Hire from '../common/Hire'

export default function Home() {
	return (
		<>
			<div className="home">
				<div className="intro">
					<div className="intro-text">
						<h1>
							Hi, <br />I am Tauqeer, <br />
							Web Developer
						</h1>
						<p>
							I have 4 years of professional experience in Front end Development,
							<br /> building front end for the websites & web applications
						</p>
					</div>
				</div>
				<div className="my-work">
					<h1>
						<span>My Work</span>
					</h1>
					<div className="projects">
						<ul>
							<li>
								<img src={Spain} alt="project" />
							</li>
							<li>
								<img src={Spain} alt="project" />
							</li>
							<li>
								<img src={Spain} alt="project" />
							</li>
						</ul>
					</div>
					<Link>
						<button>View Portfolio</button>
					</Link>
				</div>
				<Hire />
				<Footer />
			</div>
		</>
	)
}
