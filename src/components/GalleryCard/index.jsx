import { memo } from 'react'

const GalleryCard = (props) => {
	return (
		<div className='shadow-xl bg-[#090b2e] rounded-2xl p-10 flex gap-5 max-w-5xl animate__bounceIn animate__faceIn'>
			<div className='flex-1 space-y-5 text-white'>
				<div className='flex items-center gap-5'>
					<div
						className='w-32 h-32 bg-center bg-no-repeat bg-cover shrink-0 rounded-2xl'
						style={{
							backgroundImage: `url("${props.logoURL}")`,
						}}></div>

					<div className='space-y-5'>
						<div className='text-xl font-black'>{props.name}</div>

						<div className='w-40 h-1 rounded-full primary-bg'></div>

						<div className='text-sm font-medium text-primary'>
							{props.category}
						</div>
					</div>
				</div>

				<div className='text-semibold'>{props.description}</div>

				<button className='block px-5 py-3 font-semibold text-white transition rounded-full primary-bg hover:opacity-80'>
					Learn more
				</button>
			</div>

			<div
				className='flex-1 bg-center bg-no-repeat bg-cover rounded-2xl'
				style={{
					backgroundImage: `url("${props.thumbnailURL}")`,
				}}></div>
		</div>
	)
}

export default memo(GalleryCard)
