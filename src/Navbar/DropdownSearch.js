import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './DropdownSearch.css';
import DropdownSearchContent from "./DropdownSearchContent";


function DropdownSearch() {
    const [open, setOpen] = useState(false);
    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className="">
                <div className="dropdown-search" onClick={() => setOpen(!open)}>
                    <SearchIcon />
                    <h5>Pretražite Facebook</h5>
                </div>

                {
                    open ? <DropdownSearchContent click={handleClickAway} />
                        : null
                }

            </div>
        </ClickAwayListener>
    )
}

export default DropdownSearch
