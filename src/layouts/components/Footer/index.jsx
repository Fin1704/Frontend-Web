import {
	Box,
	Container,
	Grid,
	IconButton,
	Tooltip,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import {
	FaArrowUp,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTelegram,
	FaTwitter,
} from 'react-icons/fa'

const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: '#060824',
	color: '#ffffff',
	padding: theme.spacing(5, 0),
	boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
	borderTopLeftRadius: 16,
	borderTopRightRadius: 16,
	position: 'relative',
}))

const SocialIcon = styled(IconButton)(({ theme }) => ({
	color: '#ffffff',
	margin: theme.spacing(0, 1),
	transition: 'transform 0.3s ease-in-out',
	'&:hover': {
		transform: 'scale(1.2)',
		color: '#ffffff',
	},
}))

const BackToTop = styled(IconButton)(({ theme }) => ({
	position: 'absolute',
	right: theme.spacing(4),
	top: theme.spacing(-3),
	backgroundColor: '#000000',
	color: '#ffffff',
	boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
	'&:hover': {
		backgroundColor: '#333333',
	},
}))

const FooterLink = styled(Typography)(({ theme }) => ({
	cursor: 'pointer',
	transition: 'color 0.3s ease',
	'&:hover': {
		color: '#cccccc',
	},
	'&:focus': {
		outline: '2px solid #ffffff',
		outlineOffset: '2px',
	},
}))

const Footer = () => {
	const [showBackToTop, setShowBackToTop] = useState(false)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 300)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleBackToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const socialLinks = [
		{ icon: <FaFacebook />, label: 'Facebook', url: '#' },
		{ icon: <FaTelegram />, label: 'Telegram', url: '#' },
		// { icon: <FaInstagram />, label: 'Instagram', url: '#' },
		// { icon: <FaLinkedin />, label: 'LinkedIn', url: '#' },
	]

	return (
		<StyledFooter component='footer' role='contentinfo'>
			<Container maxWidth='lg'>
				<Grid item xs={12} sm={4} textAlign={'center'}>
					<Typography variant='h6' gutterBottom>
						Connect With Us
					</Typography>
					<Box>
						{socialLinks.map((social, index) => (
							<Tooltip key={index} title={social.label} arrow>
								<SocialIcon
									aria-label={social.label}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'>
									{social.icon}
								</SocialIcon>
							</Tooltip>
						))}
					</Box>
				</Grid>

				<Box mt={4} textAlign='center'>
					<Typography variant='body2' color='inherit'>
						© {new Date().getFullYear()} S.GameX. All rights
						reserved.
					</Typography>
				</Box>
			</Container>

			{showBackToTop && (
				<BackToTop
					onClick={handleBackToTop}
					aria-label='Back to top'
					size='small'>
					<FaArrowUp />
				</BackToTop>
			)}
		</StyledFooter>
	)
}

export default Footer
