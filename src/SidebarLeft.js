import React from 'react'
import './SidebarLeft.css';
import SidebarLeftItem from './SidebarLeftItem'
import GroupIcon from '@material-ui/icons/Group';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import StoreIcon from '@material-ui/icons/Store';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HistoryIcon from '@material-ui/icons/History';
import LabelIcon from '@material-ui/icons/Label';
import Avatar from '@material-ui/core/Avatar';

function SidebarLeft() {
    return (
        <div className="sidebarLeft">
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<Avatar alt="Avatar" src="https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg" />} text="Tom Cruise" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<LocalHospitalIcon />} text="Covid-19: centar za informacije" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<PeopleOutlineIcon />} text="Pronađite prijatelje" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<GroupIcon />} text="Grupe" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<StoreIcon />} text="Marketplace" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<PlayCircleFilledIcon />} text="Videozapisi" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<EventAvailableIcon />} text="Događaji" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<HistoryIcon />} text="Uspomene" />
            </div>
            <div className="sidebarLeft-item">
                <SidebarLeftItem icon={<LabelIcon />} text="Spremljeno" />
            </div>
        </div>
    )
}

export default SidebarLeft;
