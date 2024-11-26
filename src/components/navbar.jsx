import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../asset/navbar.css';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Project', 'About us', 'Contact'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const [anchorProject, setAnchorProject] = React.useState(null);
    const open = Boolean(anchorProject);
    const handleClickProject = (event) => {
        setAnchorProject(event.currentTarget);
    };
    const handleCloseProject = (link) => {
        
        if (link){
            handleNavigate(link);
        }
        setAnchorProject(null);
    };
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const handleNavigate = (link) => {
        
        let page = ""
        if (link === 'About us') {
            page = "/about"
        }
        if (link === 'Contact') {
            page = "/contact"
        }
        if(link==='alphalt-thunder'){
            page="/alphalt-thunder"
        }
        if (link==='Project'){
            page="/gallery"
        }
        navigate(page);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                S.GAMES
            </Typography>
            <Divider />

            <List >
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', textTransform: 'none' }} onClick={() => {
                            handleNavigate(item);
                        }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>


                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: 'black', height: "10vh" }} className="animate__fadeInDown animate__bounceIn">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} onClick={handleNavigate}
                    >
                        S.GAMES
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            (item === "Project") ? (<><Button
                                id={item}

                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClickProject}
                                sx={{ color: '#fff', textTransform: 'none', }}

                            >
                                {item}<ExpandMoreIcon />
                            </Button>
                                <Menu
                                    id={item}
                                    anchorEl={anchorProject}
                                    open={open}
                                    onClose={handleCloseProject}
                                    MenuListProps={{
                                        'aria-labelledby': { item },

                                    }}
                                    sx={{
                                        '& .MuiPaper-root': {
                                            backgroundColor: '#000',
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={()=>{
                                        handleCloseProject("alphalt-thunder")
                                    }}>Alphalt Thunder</MenuItem>

                                </Menu></>) : (<Button key={item} sx={{ color: '#fff', textTransform: 'none' }} onClick={() => {
                                    handleNavigate(item);
                                }}>
                                    {item}
                                </Button>)


                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </Box>
    );
}


export default DrawerAppBar;
