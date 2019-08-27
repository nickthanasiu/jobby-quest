import React from 'react';
import {
    MdExpandMore,
    MdExpandLess,
    MdMoreHoriz,
    MdStar,
    MdStarBorder,
} from "react-icons/md";

// Components
import FloatMenu from './FloatMenu';

// Styles
import './JobCard.styles.scss';

class JobCard extends React.Component {
    constructor(props) {
        super(props);

        // Refs
        this.notesInput = React.createRef();

        this.state = {
            expanded: false,
            notesValue: '',
            floatMenuIsVisible: false
        };
    }

    toggleNotesSection = () =>
        this.setState({
            expanded: !this.state.expanded
        });
    
    toggleFloatMenu = () =>
        this.setState({
            floatMenuIsVisible: !this.state.floatMenuIsVisible
        });
    
    handleNotesValueChange = e =>
        this.setState({
            notesValue: e.target.value
        });
    
    fillStars = () => {
        const { user_interest_rating } = this.props;
        let stars = [];
        for (let i = 0; i < user_interest_rating; i++) {
            stars = [
                ...stars,
                <MdStar
                    key={i} 
                    id={`${i}`}
                    size={'20px'}
                    onClick={() => console.log('clicky: ', i + 1)}
                />
            ];
        }

        for (let i = 0; i < (3 - user_interest_rating); i++) {
            stars = [
                ...stars,
                <MdStarBorder
                    key={2 - i}
                    size={'20px'}
                    onClick={() => console.log('clicky: ', user_interest_rating + i + 1)} 
                />
            ];
        }

        return stars;
    };

    render() {
    const {
    url,
    company,
    job_title,
    user_interest_rating,
    user_prospect_rating,
    img_url
    } = this.props;

    const { expanded, notesValue, floatMenuIsVisible} = this.state;

    // Capitalize first letter of user_prospect_rating
    const capitalizedProspectRating =
        user_prospect_rating.charAt(0).toUpperCase() + user_prospect_rating.slice(1);
    
    const prospectFlagStyles = {
        'reach': {
            backgroundColor: 'rgba(255, 0, 0, .4)',
            color: 'red'
        },
        'ballpark': {
            backgroundColor: 'rgba(255, 229, 0, .4)',
            color: 'rgb(255, 200, 0)'
        },
        'safety': {
            backgroundColor: 'rgba(0, 255, 0, .4)',
            color: 'green'
        }
    };

    return (
        <div className={`job-card ${expanded ? 'expanded' : null}`}>
            <div className="float-menu-wrapper">
                <FloatMenu isVisible={floatMenuIsVisible} hideMenu={this.toggleFloatMenu} />
            </div>
            <div className="job-card__hover-overlay">
                <span className="job-card__floating-menu-btn">
                    <MdMoreHoriz size={'20px'} color='white' onClick={this.toggleFloatMenu} />
                </span>
            </div>
            <div className="job-card__left">
                <img
                    src={img_url}
                    alt={`${company} logo`}
                    className="job-card__img"
                />
            </div>
            <div className="job-card__right">
                <h1 className="job-card__company">
                    { company }
                </h1>
                <h3 className="job-card__job-title">
                    { job_title }
                </h3>

                {
                    expanded ? 
                    (
                    <div className="job-card__notes-input-wrapper">
                        <textarea 
                            className={`
                                job-card__notes-input
                                ${expanded ? 'expanded' : null}
                            `}
                            ref={notesInput => notesInput && notesInput.focus()}
                            value={notesValue}
                            placeholder="Write some notes..."
                            onChange={this.handleNotesValueChange}
                        />
                    </div>
                    ) : null
                }

                <div
                    className="job-card__notes-toggle"
                    onClick={this.toggleNotesSection}
                >
                    { expanded ? (
                        <>
                            <span>Hide notes</span>
                            <MdExpandLess />
                        </>
                    ) : (
                        <>
                            <span>Notes</span>
                            <MdExpandMore />
                        </>
                    )}
                </div>

                <div className="job-card__ratings">
                    <span className="job-card__user-interest-rating">
                        { this.fillStars().map(icon => {
                            return icon
                        }) }
                    </span>
                    <span 
                        className="job-card__user-prospect-rating"
                        style={prospectFlagStyles[user_prospect_rating]}
                    >
                        { capitalizedProspectRating }
                    </span>
                    
                </div>
            </div>
        </div>
    );
    }
}

export default JobCard;