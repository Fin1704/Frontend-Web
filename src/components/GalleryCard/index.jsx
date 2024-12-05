import { memo } from 'react'
import { Link } from 'react-router-dom'

const GalleryCard = (props) => {
	return (
		<div className='shadow-xl bg-[#090b2e] rounded-2xl p-4 md:p-10 flex gap-5 animate__bounceIn animate__faceIn transition hover:-translate-y-2 flex-wrap cursor-pointer'>
			<div className='flex-1 space-y-5'>
				<div className='flex items-center gap-5'>
					<div
						className='w-20 h-20 bg-center bg-no-repeat bg-cover md:w-32 md:h-32 shrink-0 rounded-2xl'
						style={{
							backgroundImage: `url("${props.logoURL}")`,
						}}></div>

					<div className='space-y-5'>
						<div className='text-2xl font-bold'>{props.name}</div>

						<div className='line'></div>

						<div className='text-sm font-medium text-primary'>
							{props.category}
						</div>
					</div>
				</div>

				<div className='text-semibold'>{props.description}</div>

				<Link to={`/games/${props.slug}`} className='btn btn-primary'>
					Learn more
				</Link>
			</div>

			<div
				className='flex-1 hidden bg-center bg-no-repeat bg-cover md:block rounded-2xl'
				style={{
					backgroundImage: `url("${props.thumbnailURL}")`,
				}}></div>
		</div>
	)
}

export default memo(GalleryCard)
