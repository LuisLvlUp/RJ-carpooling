import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, DrawerHeader, Drawer } from './Navbar-styles'
import { Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Navbar = ({ token, setToken, admin, setAdmin }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const cerrarSesion = () => {
        localStorage.clear();
        setToken();
        setAdmin();
        Swal.fire({
            title: 'Sesión cerrada satisfactoriamente',
            icon: 'success',
            position: 'center',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ bgcolor: '#d7ecf1' }}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            color: '#00b2bb',
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{ color: '#00b2bb' }}>
                        Uber
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        {
                            (token && admin === true) ?
                                <>
                                    <Link to="/home" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }} >
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <HomeIcon sx={{ fontSize: 32 }} />
                                            </ListItemIcon>
                                            <ListItemText primary={'Home'} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Link>
                                    <Link to="/solicitudes" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }} >
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <NoteAltIcon sx={{ fontSize: 32 }} />
                                            </ListItemIcon>
                                            <ListItemText primary={'Solicitudes'} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Link>
                                    <Link to="/login" onClick={cerrarSesion} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }} >
                                        <ListItemButton
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 'auto',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Logout sx={{ fontSize: 32 }} />
                                            </ListItemIcon>
                                            <ListItemText primary={'Cerrar Sesión'} sx={{ opacity: open ? 1 : 0 }} />
                                        </ListItemButton>
                                    </Link>
                                </>
                                :
                                <Link to="/login&register" style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }} >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <LoginIcon sx={{ fontSize: 32 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={'Ingresar'} sx={{ opacity: open ? 1 : 0 }} />
                                    </ListItemButton>
                                </Link>

                        }
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}
