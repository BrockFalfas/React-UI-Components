import React from 'react';
import './Header.css';

const HeaderTitle = props => {
    return (
        <div>
            <h1>Lambda School <span className="yourAT">@lambdaschool</span><span className="date">26jan</span></h1>
        </div>
    )
};

export default HeaderTitle;