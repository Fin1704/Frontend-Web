import clsx from 'clsx'
import React, { memo, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Slider = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleIncrease = () => {
		setActiveIndex((prev) => {
			if (prev + 1 === images.length) {
				return 0
			}

			return prev + 1
		})
	}

	const handleDecrease = () => {
		setActiveIndex((prev) => {
			if (prev - 1 < 0) {
				return images.length - 1
			}

			return prev - 1
		})
	}

	const indexOf = (id) => images.map((img) => img.id).indexOf(id)

	return (
		<div className='relative flex gap-5 overflow-scroll no-scrollbar'>
			{images.map((img) => (
				<div
					key={img.id}
					className={clsx(
						'shrink-0 w-1/5 bg-center bg-no-repeat bg-cover shadow-xl min-h-32 rounded-2xl transition-all',
						{
							'border-2': activeIndex === indexOf(img.id),
							hidden: activeIndex - indexOf(img.id) > 4,
						}
					)}
					style={{
						backgroundImage: `url("${img.url}")`,
					}}></div>
			))}

			<div className='absolute left-0 -translate-y-1/2 top-1/2'>
				<button
					onClick={handleDecrease}
					className='flex items-center justify-center w-8 h-16 text-white rounded-r-full primary-bg'>
					<FaAngleLeft size={24} />
				</button>
			</div>

			<div className='absolute right-0 -translate-y-1/2 top-1/2'>
				<button
					onClick={handleIncrease}
					className='flex items-center justify-center w-8 h-16 text-white rounded-l-full primary-bg'>
					<FaAngleRight size={24} />
				</button>
			</div>
		</div>
	)
}

export default memo(Slider)
