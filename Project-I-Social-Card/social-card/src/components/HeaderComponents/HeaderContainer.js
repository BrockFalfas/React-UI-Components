import React from 'react';
import './Header.css';
import HeaderContent from "./HeaderContent"
import ImageThumbnail from "./ImageThumbnail"
import HeaderTitle from "./HeaderTitle"

const HeaderContainer = props => {
    return (
        <div>
            <ImageThumbnail />
            <HeaderTitle />
            <HeaderContent />
        </div>
    )
};

export default HeaderContainer;
