import React from 'react';
import { Box, keyframes } from '@mui/material';
import 'animate.css';  // Import Animate.css
import Bg from '../asset/bg.jpg';
import Galaxy from '../asset/vortex4.png';
import '../asset/stars-anim.css';  // Assuming you have additional styles for stars

const rotate3dAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Background = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  
          zIndex: 1, 
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '70%',
          transform: 'translate(-50%, -50%) perspective(750px) rotate3d(180,-45,0,-130deg)', // Apply 3D transform to div
          height: '60%', // Adjust size of the image
          width: '60%',
          display: 'flex',
        
          zIndex: 2, 
        }}
      >
        {/* Galaxy Image */}
        <Box
          component="img"
          src={Galaxy}
          alt="Rotating Galaxy"
          sx={{
           
           
            height: '200%',
            animation: `${rotate3dAnimation} 20s linear infinite`,
          }}
        />
      </Box>

      {/* Stars or other animations */}
      <Box className="stars1" />
      <Box className="stars2" />
      <Box className="stars3" />
      {/* Render children */}
      <Box sx={{ position: 'relative', zIndex: 3 ,paddingTop:"10vh"}}>
        {children}
      </Box>
    </Box>
  );
};

export default Background;
