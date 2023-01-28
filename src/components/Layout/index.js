import React from 'react'
import Sidebar from './Sidebar'
import './index.scss'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div className="layout">
			<Sidebar />
			<Outlet />
		</div>
	)
}
