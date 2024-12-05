import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
	return (
		<div className='sticky top-0 left-0 z-20 flex items-center justify-between w-full h-16 px-10 bg-black animate__fadeInDown animate__bounceIn'>
			<Link to='/' className='text-xl font-bold '>
				S.GAMES
			</Link>

			<Navbar />
		</div>
	)
}

export default Header
