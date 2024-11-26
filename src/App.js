import { Stack } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Background from './components/Background'
import DrawerAppBar from './components/Navbar'
import AphaltThunder from './pages/AlphaltThunder'
import Contact from './pages/Contact'
import GameGallery from './pages/Gallery'
import Home from './pages/Home'

function App() {
	return (
		<Stack direction='column'>
			<Background>
				<BrowserRouter>
					<DrawerAppBar />
					<Routes>
						<Route path='/'>
							<Route index element={<Home />} />
							<Route path='contact' element={<Contact />} />
							<Route path='gallery' element={<GameGallery />} />
							<Route
								path='alphalt-thunder'
								element={<AphaltThunder />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</Background>
		</Stack>
	)
}

export default App
