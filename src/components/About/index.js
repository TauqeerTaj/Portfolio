import React from 'react'
import Hire from '../common/Hire'
import Footer from '../Footer'
import './index.scss'

export default function About() {
	return (
		<div className="about">
			<div className="top">
				<h1>About Me</h1>
			</div>
			<div className="content">
				<p>
					Thanks for visiting my website. I’m a professional web developer with good knowledge and experience in
					front-end development. I am self-organised, detail-oriented and strive for the highest quality in my work.
					Please contact me, I’ll be glad to talk with you about your project!
				</p>
			</div>
			<Hire />
			<Footer />
		</div>
	)
}
