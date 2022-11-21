import React from 'react';
import { Row, Col } from 'reactstrap';
import { Avatar } from '@mui/material';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Button } from 'reactstrap';

import './Header.css';

const Header = () => {
    return (
        // className='justify-content-between align-items-center'
        <div className='header justify-content-between px-4 pt-2'>
            <div className=''>
                <MenuSharpIcon />
                <img
                    className='header__logo'
                    src='https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg' />
            </div>
            <div className='header__searchbar d-flex align-items-center'>
                <input type='text' />
                <SearchOutlinedIcon  className='header_searchButton'/>
            </div>
            <div className='d-flex align-items-center'>
               
                    <VideoCallOutlinedIcon style={{marginRight:'1rem'}}/>
                    
                    <NotificationsNoneOutlinedIcon  style={{marginRight:'1rem'}}/>
                    
                    <Avatar alt="Remy Sharp"
                        src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
                    />
                    
            </div>
        </div>
        
    )
}

export default Header;