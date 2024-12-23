import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/Default'
import AboutUs from './pages/AboutUs'
import AphaltThunder from './pages/AlphaltThunder'
import Contact from './pages/Contacts'
import GameDetail from './pages/GameDetail'
import Games from './pages/Games'
import Home from './pages/Home'

function App() {
	return (
		<BrowserRouter>
			<DefaultLayout>
				<Routes>
					<Route index element={<Home />} />
					<Route path='contact' element={<Contact />} />
					<Route path='games' element={<Games />} />
					<Route path='games/:slug' element={<GameDetail />} />
					<Route path='alphalt-thunder' element={<AphaltThunder />} />
					<Route path='about-us' element={<AboutUs />} />
				</Routes>
			</DefaultLayout>
		</BrowserRouter>
	)
}

export default App
