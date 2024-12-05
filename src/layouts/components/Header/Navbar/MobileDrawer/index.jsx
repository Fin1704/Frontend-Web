import clsx from 'clsx'
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router-dom'

const MobileDrawer = ({ pages }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleIsOpen = () => setIsOpen((prev) => !prev)

	return (
		<>
			<button className='block p-2 md:hidden' onClick={toggleIsOpen}>
				{isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
			</button>

			<div
				className={clsx(
					'absolute top-full left-0 -translate-x-1/2 w-4/5 h-[calc(100vh-64px)] bg-black p-4 space-y-4 transition-all',
					{
						'opacity-100 !translate-x-0 visible': isOpen,
						'opacity-0 invisible': !isOpen,
					}
				)}>
				{pages.map((page) => (
					<Link
						to={page.href}
						key={page.href}
						className='flex items-center gap-3'>
						{page.text} {page.subMenu && <FaChevronDown />}
					</Link>
				))}
			</div>
		</>
	)
}

export default MobileDrawer
