import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';
import { InputSwitch } from 'primereact/inputswitch';

function Header(props: any) {
    const { setTheme, theme } = props
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const { userData }: any = props;

    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (param: any) => {
        setAnchorEl(null);
        if (param == 'profile') {
            navigate('/menu/userProfile')
        }
        if (param == 'logout') {
            navigate('/')
        }
    };
    return (
        <header>

            <div className='d-flex justify-content-between me-5'>
                <h3 className='text-dark'>Good morning {userData?.firstName?.charAt(0).toUpperCase() + userData?.firstName?.slice(1)}...</h3>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>{userData?.firstName?.charAt(0).toUpperCase()}</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => handleClose('profile')}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={() => handleClose('logout')}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                    {/* <MenuItem>
                        <ListItemIcon className='d-flex justify-content-between'>
                            <label className='mx-2'>Light</label>
                            <InputSwitch checked={(theme === 'dark') ? true : false} onChange={(e) => {
                                console.log(e, "99values")
                                if (e.value) {
                                    setTheme('dark')
                                }
                                else {

                                    setTheme('light')
                                }
                            }
                            } />
                            <label className='mx-2'> Dark</label>
                        </ListItemIcon>
                    </MenuItem> */}
                </Menu>
            </div>
        </header>
    )
}

export default Header