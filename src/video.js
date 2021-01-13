import React from 'react';
import "./video.css"
import Avatar from '@material-ui/core/Avatar';

function video({title,channel,views,timestamp,image,proimage}) {
    return (
        <div className="videocard">
            <img  className="videocard__thumbnail" src={image} alt="thumbnail" />
            <div className="videocard__info">
            <Avatar className="videocard__avatar" alt={channel} src={proimage} />
            <div className="vodeocard__title">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} • {timestamp}</p>
            </div>
            </div>
         </div>
    )
}

export default video;
