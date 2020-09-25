import React from 'react'
import './DropdownMenu.css';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function DropdownMenuUserControl() {
    return (
        <div className="dropdownMenu">
            <div>
                <div className="dropdownMenu-row">
                    <div className="dropdownMenu-item">
                        <div className="dropdownMenu-user-img">
                            <Avatar alt="Avatar" src="https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg" />
                        </div>
                        <div className="dropdownMenu-user-text">
                            <p className="dropdownMenu-text-primary">Tom Cruise</p>
                            <p className="dropdownMenu-text-secondary">Pogledajte svoj profil</p>
                        </div>
                    </div>
                </div>
                <div className="dropdownMenu-divider"></div>
                <div className="dropdownMenu-row">
                    <div className="dropdownMenu-item">
                        <div className="dropdownMenu-icon">
                            <ExitToAppIcon />
                        </div>
                        <div className="dropdownMenu-text">
                            <p className="dropdownMenu-text-primary">Odjava</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownMenuUserControl
