import React, { useState } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './Dropdown.css';


function Dropdown({ DropdownIcon, DropdownMenu }) {
    const [open, setOpen] = useState(false);
    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="">
                <div className="dropdown-icon" onClick={() => setOpen(!open)}>
                    {DropdownIcon}
                </div>
                {
                    open ? DropdownMenu
                        : null
                }

            </div>
        </ClickAwayListener>
    )
}

export default Dropdown
