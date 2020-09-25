import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import AirplayIcon from '@material-ui/icons/Airplay';
import StoreIcon from '@material-ui/icons/Store';
import PeopleIcon from '@material-ui/icons/People';
import GamesIcon from '@material-ui/icons/Games';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Dropdown from './Dropdown'
import './Navbar.css';
import DropdownMenuUserControl from './DropdownMenuUserControl';
import DropdownMenuBlank from './DropdownMenuBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DropdownSearch from './DropdownSearch'


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">

                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=256&h=256" alt="" />
                <div className="navbar-search">
                    <DropdownSearch />
                </div>
            </div>
            <div className="navbar-center">
                <div className="navbar-center-icon navbar-center-icon-active">
                    <HomeIcon />
                </div>
                <div className="navbar-center-icon">
                    <AirplayIcon />
                </div>
                <div className="navbar-center-icon">
                    <StoreIcon />
                </div>
                <div className="navbar-center-icon">
                    <PeopleIcon />
                </div>
                <div className="navbar-center-icon">
                    <GamesIcon />
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-right-user">
                    <Avatar alt="Avatar" src="https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg" />
                    <p className="navbar-text-primary">Tom</p>
                </div>
                <div className="navbar-right-icons">
                    <div className="navbar-right-icon">
                        <Dropdown DropdownIcon={<AddIcon />} DropdownMenu={<DropdownMenuBlank />} />
                    </div>
                    <div className="navbar-right-icon">
                        <Dropdown DropdownIcon={<MessageIcon />} DropdownMenu={<DropdownMenuBlank />} />
                    </div>
                    <div className="navbar-right-icon">
                        <Dropdown DropdownIcon={<NotificationsIcon />} DropdownMenu={<DropdownMenuBlank />} />
                    </div>
                    <div className="navbar-right-icon">
                        <Dropdown DropdownIcon={<ArrowDropDownIcon />} DropdownMenu={<DropdownMenuUserControl />} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar
