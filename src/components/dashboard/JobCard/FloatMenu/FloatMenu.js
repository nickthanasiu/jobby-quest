import React from 'react';
import { 
    MdDelete,
    MdDone,
    MdRateReview,
    MdPlayArrow 
} from "react-icons/md";

// Styles
import './FloatMenu.styles.scss';

const FloatMenu = ({
    isVisible,
    hideMenu
}) => {
    return (
        <div className={`float-menu ${!isVisible ? 'hidden': ''}`}>
            <span className="hide-menu" onClick={hideMenu}/>
            <div className="float-menu__item">
                <MdDone size={'24px'} />
                <span>Mark as applied</span>
            </div>
            <div className="float-menu__item delete">
                <MdDelete size={'24px'} />
                <span>Delete</span>
            </div>

            <div className="divider" />

            <div className="float-menu__item">
                <MdRateReview size={'24px'} />
                <span>Rate your chances</span>
                <MdPlayArrow size={'18px'} color='grey' style={{ marginLeft: '2rem' }} />
            </div>

            <div className="divider" />
        </div>
    );
};

export default FloatMenu;