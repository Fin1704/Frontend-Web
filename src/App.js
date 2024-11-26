import logo from './logo.svg';
import './App.css';
import DrawerAppBar from './components/navbar';
import Background from './components/background';
import Home from './pages/Home';
import { Stack } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
// import AlphaltThunder from './pages/Demo';
import AphaltThunder from './pages/AlphaltThunder';
import GameGallery from './pages/Gallery';
// import GameDetailsPage from './pages/GameDetailsPage';
// import AlphaltThunder from './pages/GameDetailsPage';

// import AphaltThunder from './pages/AlphaltThunder';

function App() {
  return (
    <Stack direction="column">

      <Background>

        <BrowserRouter>
          <DrawerAppBar />
          <Routes>
            <Route path="/">

              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path='gallery' element={<GameGallery/>} />
              <Route path="alphalt-thunder" element={<AphaltThunder />} />
              {/* <Route path="about" element={< />} /> */}
          {/* <Route path="*" element={<NoPage />} />  */}
            </Route>
          </Routes>
        </BrowserRouter>


      </Background>
    </Stack>
  );
}

export default App;
