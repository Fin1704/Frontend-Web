import clsx from 'clsx'
import React, { memo } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'

const Intro = ({ title, description, onClick, btnContent }) => {
	return (
		<div className='h-[calc(100vh-64px)] flex justify-center items-center' >
			<div className='flex flex-col items-center justify-center max-w-xl gap-10 text-center animate__bounceIn'>
				<div className='headline'style={{ color: "#f8ffbc" }}>{title}</div>

				<div className='primary-bar'></div>

				<div className='font-medium'>{description}</div>

				<button
					onClick={onClick}
					className={clsx('btn btn-primary', {
						'animate-bounce': onClick,
					})}>
					{btnContent}
					{onClick && <FaAngleDoubleDown />}
				</button>
			</div>
		</div>
	)
}

export default memo(Intro)
