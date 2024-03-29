import { useState } from 'react';

import { Menu, MenuItem, styled } from '@mui/material';

// icon
import MoreVertIcon from '@mui/icons-material/MoreVert';

// styled 
const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

const HeaderMenu = ({setOpenDrawer}) => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    return (
        <>
            <MoreVertIcon  onClick={handleClick}/>
            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1= {null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
            >
                <MenuOption onClick={ () => {handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </>
    )
}

export default HeaderMenu;
