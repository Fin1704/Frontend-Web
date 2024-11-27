import * as React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import '../assets/navbar.css'

const pages = [
	{
		href: '#',
		text: 'Services',
		subMenu: [
			{
				href: '#',
				text: 'TEST',
			},
			{
				href: '#',
				text: 'TEST',
			},
			{
				href: '#',
				text: 'TEST',
			},
		],
	},
	{
		href: '#',
		text: 'Portfolio',
		subMenu: [
			{
				href: '#',
				text: 'TEST',
			},
			{
				href: '#',
				text: 'TEST',
			},
			{
				href: '#',
				text: 'TEST',
			},
		],
	},
	{
		href: '#',
		text: 'Use cases',
		subMenu: [
			{
				href: '#',
				text: 'TEST',
			},
			{
				href: '#',
				text: 'TEST',
			},
			{
				href: '#',
				text: 'TEST',
			},
		],
	},
	{
		href: '#',
		text: 'About us',
	},
	{
		href: '#',
		text: 'Contact',
	},
]

const ActiveLink = styled(Link)`
	&:hover > div {
		width: 100%;
	}

	&:hover .sub-menu {
		visibility: visible;
		transform: translateY(8px) translateX(-50%);
		opacity: 1;
	}
`

function DrawerAppBar(props) {
	return (
		<div className='fixed inset-x-0 top-0 flex items-center justify-between h-16 px-10 bg-[rgba(0,0,0,.7)] animate__fadeInDown animate__bounceIn z-20'>
			<Link to='/' className='text-xl font-bold text-white'>
				S.GAMES
			</Link>

			<div className='flex h-full gap-10 font-semibold text-white'>
				{pages.map((page, i) => (
					<ActiveLink
						to={page.href}
						key={i}
						className='relative flex items-center gap-3'>
						{page.text}
						{page.subMenu && <FaChevronDown />}

						<div className='absolute bottom-0 left-0 w-0 h-1 transition-all bg-gradient-to-r from-purple-500 to-pink-500'></div>

						{page.subMenu && (
							<div className='absolute py-2 transition bg-[rgba(0,0,0,.7)] shadow-xl left-1/2 top-full rounded-2xl space-y-2 min-w-40 sub-menu invisible opacity-0'>
								{page.subMenu.map((subMenuItem, i) => (
									<ActiveLink
										to={subMenuItem.href}
										key={i}
										className='relative block p-2 text-center transition-all'>
										{subMenuItem.text}

										<div className='absolute bottom-0 left-0 w-0 h-1 transition-all bg-gradient-to-r from-purple-500 to-pink-500'></div>
									</ActiveLink>
								))}
							</div>
						)}
					</ActiveLink>
				))}
			</div>
		</div>
	)
}

export default DrawerAppBar
