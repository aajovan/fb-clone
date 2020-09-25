import React from 'react'
import './DropdownSearchContent.css';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';



function DropdownSearchContent({ click }) {
    return (
        <div className="dropdownSearchMenu">
            <div className="dropdownSearch-row">
                <div className="dropdownCloseIcon" onClick={click}>
                    <KeyboardBackspaceIcon />
                </div>

                <div className="dropdownSearchContainer">

                    <SearchIcon />


                    <input type="text" placeholder="Pretražite Facebook" ref={input => input && input.focus()} />
                </div>

            </div>
        </div>
    )
}

export default DropdownSearchContent;
