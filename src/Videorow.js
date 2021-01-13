import React from 'react';
import "./videorow.css";
import Avatar from '@material-ui/core/Avatar';

function Videorow({views,subs,description,time,channel,title,image}) {
    return (
        <div className="videorow">
        <img src={image} alt={channel}/>
        <div className="videorow__title">
        <h3>{title}</h3>
        <p className="videorow__head">
           {channel} • 
           <span className="videorow__all"><span className="videorow__sub">{subs}</span> Subscribers</span>{views} • {time} 
        </p>
        <p className="videorow__description">{description}</p>
        </div>
        </div>
    )
}

export default Videorow;
